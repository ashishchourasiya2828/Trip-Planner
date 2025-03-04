import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" h-[88.5vh]  flex items-center border-r-2 flex-col gap-3 bg-zinc-800 ">
      <div className="w-full h-12 bg-blue-500 mt-3 ">
        <Link
          to={"/profile"}
          className="px-6 py-2 flex items-center font-semibold text-zinc-200 text-xl "
        >
          make trip{" "}
        </Link>
      </div>

      <div className="w-full h-12 bg-blue-500">
        <Link
          to={"/selected/place"}
          className="px-6 py-2 flex items-center font-semibold text-zinc-200 text-xl "
        >
          Your trips
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
