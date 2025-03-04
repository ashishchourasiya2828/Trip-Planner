import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import DestinationPage from '../Components/DestinationPage'
import FamousPlace from '../Components/FamousPlace'
import Axios from '../Axios/Axios'
import {useDispatch} from 'react-redux'
import { setFamousData } from '../Store/Reducers/PlaceSlice'

const Profile = () => {

    const [placesData, setplacesData] = useState([])
    const [famousPlaceData, setfamousPlaceData] = useState([])
    const [location, setlocation] = useState({})
    // const [, setfamousPlacePanel] = useState(false)

   const  getShortestPath = async()=>{

const API_KEY =   `${import.meta.env.VITE_API_KEY}`; // Replace with your API Key

//  navigator.geolocation.getCurrentPosition(position =>{
//   setlocation({latitue:position.coords.latitude,longitude:position.coords.longitude})  
// })

console.log(location);


const destination = location; // Returning to start

const url = `/api/directions/json?origin=lakeview+Bhopal&destination=railwaystation+bhopal&waypoints=optimize:true|birlamandir+bhopal|peoplesMall+bhopal&op&key=${API_KEY}`;
// curl --location 'https://maps.gomaps.pro/maps/api/directions/json?arrival_time=%3Cnumber%3E&departure_time=%3Cnumber%3E&alternatives=%3Cboolean%3E&avoid=highways&destination=Victoria%2C%20BC&origin=Vancouver%2C%20BC&units=metric&waypoints=MA%7CLexington%2CMA&language=en&mode=%3Cstring%3E&region=en&traffic_model=pessimistic&transit_mode=train%7Ctram%7Csubway&transit_routing_preference=less_walking&key=%3CAPI%20Key%3E'

const response = await Axios.get(url)

console.log(response.data.routes[0].legs,"jibcy");
   }

   getShortestPath();
    const dispatch = useDispatch();
      

        const searchPlace = async(inputValue)=>{
            console.log(inputValue);
            const data = inputValue?.split(" ")[0]
            
            try{
                const response = await Axios.get(`/api/place/textsearch/json?query=touristPlace+${data}&key=${import.meta.env.VITE_API_KEY}`)
    
                    dispatch(setFamousData(response.data.results));
                    
                }catch(err){
                    console.log(err);
                    
                }
            }

  return (
    <div className='w-full   bg-zinc-800' >
        <div className='flex ' >
        {/* <div className='  flex-1 h-[88.5vh] flex flex-col gap-3 border-zinc-700 border-r-2 ' >
            <div className='w-full h-12 bg-blue-500 rounded-md ' >
                <h1 className='px-6 py-2 font-semibold text-zinc-200 text-xl ' >make trip </h1>
            </div>

            <div className='w-full h-12 bg-blue-500  rounded-md' >
                <h1 className='px-6 py-2 font-semibold text-zinc-200 text-xl ' >Selected Places</h1>
            </div>
          
        </div> */}
        <div className='  flex-3 h-40 p-12' >
            <h2 className='text-2xl font-semibold text-zinc-200 mb-3' >अपनी पसंदीदा ज़िला लिखिए🙏🏻</h2>
            <div className=' w-fit  ' >
               <DestinationPage setplacesData={setplacesData}  searchPlace={searchPlace}  />

            </div>

            <div className={`w-full h-fit  bg-red-500 bg-zinc-300 p-4 rounded-md`} >
               <FamousPlace  />

            </div>
        </div>

        </div>
    </div>
  )
}

export default Profile