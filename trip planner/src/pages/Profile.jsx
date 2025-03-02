import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import DestinationPage from '../Components/DestinationPage'
import FamousPlace from '../Components/FamousPlace'
import Axios from '../Axios/Axios'

const Profile = () => {

    const [placesData, setplacesData] = useState([])
    const [famousPlaceData, setfamousPlaceData] = useState([])


        const searchPlace = async(inputValue)=>{
            console.log(inputValue);
            const data = inputValue?.split(" ")
            
            try{
                const response = await Axios.get(`/api/place/textsearch/json?query=touristPlace+${data}&key=${import.meta.env.VITE_API_KEY}`)
    
                    setfamousPlaceData(response.data.results);
                    
                }catch(err){
                    console.log(err);
                    
                }
            }

  return (
    <div className='w-full h-screen  bg-zinc-800' >
        <NavBar/>
        <div className='flex ' >
        <div className='  flex-1 h-[88.5vh] flex flex-col gap-1 border-zinc-700 border-r-2 ' >
            <div className='w-full h-12 bg-blue-500' >
                <h1 className='px-6 py-2 font-semibold text-zinc-200 text-xl ' >Find Trips </h1>
            </div>
          
        </div>
        <div className='  flex-3 h-40 p-12' >
            <div className=' w-fit  ' >
               <DestinationPage setplacesData={setplacesData} searchPlace={searchPlace}  />

            </div>

            <div className='w-full h-fit bg-red-500 bg-zinc-300 rounded-md' >
               <FamousPlace  famousPlaceData={famousPlaceData} />

            </div>
        </div>

        </div>
    </div>
  )
}

export default Profile