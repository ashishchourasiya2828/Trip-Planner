import React from 'react'
import { useSelector } from 'react-redux'

const SelectedPlace = () => {

    const {tripData} = useSelector(state  =>  state.trip)
    console.log(tripData);
    
  return (
    <div className='p-4 flex  text-white'>

        {
            tripData?.map((elem)=>{
                return <div className='h-40 w-40 bg-black flex items-center font-semibold justify-center rounded-md m-2' >{elem.placeName}</div>
            })
        }

    </div>
  )
}

export default SelectedPlace