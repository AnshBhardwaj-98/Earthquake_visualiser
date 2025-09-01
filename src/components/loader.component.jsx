import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-500 flex items-center justify-center bg-gray-600 rounded-full h-25 w-25">
      <div className="h-12 w-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin "></div>
    </div>
  );
};

export default Loader;
