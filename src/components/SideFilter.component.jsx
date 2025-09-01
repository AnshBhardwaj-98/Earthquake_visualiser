import { Cross, CrossIcon, MenuIcon, X } from "lucide-react";
import React, { useState } from "react";

const SideFilter = ({
  FilterObject,
  setFilterObject,
  timeperiod,
  settimeperiod,
}) => {
  const [ShowSideBar, setShowSideBar] = useState(true);
  function handlesidebar(e) {
    e.preventDefault();
    setShowSideBar(!ShowSideBar);
  }
  return (
    <>
      {ShowSideBar ? (
        <div className=" w-full md:w-[25%] md:h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {/* Sidebar Title */}
          <div className="w-full text-center p-4 font-bold border-b-2 border-b-gray-600 flex items-center justify-between">
            <h1 className="text-4xl text-gray-200">Filters</h1>
            <span className="text-white w-8 h-8" onClick={handlesidebar}>
              <X size={32} />
            </span>
          </div>
          {/* Sidebar Filters */}
          <div className="">
            <form className="flex flex-col gap-4 p-4  text-white ">
              {/* Min Magnitude */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Min Magnitude: <span>{FilterObject.minmag}</span>
                </label>
                <input
                  type="range"
                  min={0.0}
                  max={10.0}
                  step={0.5}
                  value={FilterObject.minmag}
                  onChange={(e) =>
                    setFilterObject({ ...FilterObject, minmag: e.target.value })
                  }
                  placeholder="e.g. 2.5"
                  className="w-full mt-1 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Max Magnitude */}
              <div>
                <label className="block text-sm font-medium ">
                  Max Magnitude: <span>{FilterObject.maxmag}</span>
                </label>
                <input
                  type="range"
                  min={0.0}
                  max={10.0}
                  step={0.5}
                  value={FilterObject.maxmag}
                  onChange={(e) =>
                    setFilterObject({ ...FilterObject, maxmag: e.target.value })
                  }
                  placeholder="e.g. 6.0"
                  className="w-full mt-1 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Time Period */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Time Period
                </label>
                <select
                  value={timeperiod}
                  onChange={(e) => settimeperiod(e.target.value)}
                  className="w-full mt-1 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all_hour">Past Hour</option>
                  <option value="all_day">Past Day</option>
                  <option value="all_week">Past Week</option>
                  <option value="all_month">Past Month</option>
                </select>
              </div>

              {/* Button */}
              {/* <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition"
          >
            Apply Filters
          </button> */}
            </form>
            <div className="">
              <div className="w-full text-center p-4  border-t-2 border-t-gray-600">
                {/* <div className="flex flex-col justify-start  text-gray-400 font-medium size-full">
              <div className="flex justify-between">
                <span>Latitude:</span>
                <span className="text-amber-400">11</span>
              </div>
              <div className="flex justify-between">
                <span>Longitude:</span>
                <span className="text-amber-400">11</span>
              </div>
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-amber-400">11</span>
              </div>
              <div className="flex justify-between">
                <span>Magnitude:</span>
                <span className="text-amber-400">11</span>
              </div>
              <div className="flex justify-between">
                <span>Time & Date:</span>
                <span className="text-amber-400">11</span>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="absolute right-0 top-0 md:left-0 m-8 z-2000 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center"
          onClick={handlesidebar}
        >
          <MenuIcon />
        </div>
      )}
    </>
  );
};

export default SideFilter;
