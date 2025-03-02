import React, { useEffect, useState } from 'react'
import Axios from '../Axios/Axios';

const FamousPlace = ({famousPlaceData}) => {



        
        return (
            <div className='w-full flex flex-wrap items-center justify-center gap-2   rounded-md' >
                {
                    famousPlaceData?.map(elem =>{
                        return <div className='p-2 bg-zinc-400 rounded-md ' >{elem.name}</div>
                    })
                }
            {/* // <div onClick={()=>{searchPlace()}} >FamousPlace</div> */}
            </div>
  )
}

export default FamousPlace