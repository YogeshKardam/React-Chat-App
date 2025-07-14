import React from "react";

function Container({children}) {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default Container;
