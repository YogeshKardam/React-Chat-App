import React, { useState } from "react";

function UserProfileHeader() {
    const [user, setUser] = useState("Alice Johnson"); // Example user name

  return (
    <div className="p-6 border-b border-gray-700">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-lg font-bold">A</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{user}</h2>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfileHeader;
