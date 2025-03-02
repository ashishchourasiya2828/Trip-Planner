import { useEffect, useState } from "react";
import Axios from "../Axios/Axios";

const DestinationPage = ({ setplacesData,searchPlace }) => {
  const [inputValue, setInputValue] = useState("");
  const [Suggestions, setSuggestions] = useState([])
  const [suggestionClick, setsuggestionClick] = useState(false)
  const [first, setfirst] = useState("")

    
  useEffect(() => {
    getDestination();
  }, [inputValue]);

  const getDestination = async () => {
    try {
      const response = await Axios.get(
        `api/place/autocomplete/json?input=${encodeURIComponent(
          inputValue
        )}&key=${import.meta.env.VITE_API_KEY}`
      );
      setSuggestions(response.data.predictions);
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="  items-center w-full">
        <div>
        <input
        type="text"
        className="w-full md:w-96 text-white px-4 py-2 outline-0 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Enter your destination..."
        value={inputValue}
        onChange={(e) => {
          setsuggestionClick(false)
          setInputValue(e.target.value);
        }}
      />
      {
        suggestionClick ? <button onClick={()=>{
          searchPlace(inputValue)
        }} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md ml-10" >Find Famous Tourist Place </button>  : ""
      }
        </div>
      <div className="  rounded-lg mt-6 overflow-y-auto border-zinc-200 w-full   " >
       {
        Suggestions?.map((elem,idx)=>{
            return <div key={idx} onClick={()=>{setInputValue(elem.description) 
            setsuggestionClick(true)}} className={`w-full overflow-x-auto flex items-center justify-start gap-2 p-2 ${suggestionClick ? "hidden" : ""} border-2 rounded-lg mb-2 text-white border-b-[1px]`} >
                <div className="h-12 w-12 flex items-center justify-center rounded-full " >
                <i className='ri-map-pin-fill  '></i>
                </div>
                <p className="text-md "  >{elem.description}</p>
                
            </div>
        })
       }
      </div>
    </div>
  );
};

export default DestinationPage;
