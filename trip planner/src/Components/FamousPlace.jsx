import React, { useEffect, useState } from "react";
import Axios from "../Axios/Axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FamousPlace = () => {
  const { famousData } = useSelector((state) => state.place);
  console.log(famousData);
  

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2   rounded-md">
      {famousData?.map((elem,key) => {
        // console.log("2");
        
        return (
          <Link key={key} to={`/details/${elem.place_id}`}>
            <div className="p-2 bg-zinc-400 rounded-md ">{elem.name}</div>
          </Link>
        );
      })}
      {/* // <div onClick={()=>{searchPlace()}} >FamousPlace</div> */}
    </div>
  );
};

export default FamousPlace;
