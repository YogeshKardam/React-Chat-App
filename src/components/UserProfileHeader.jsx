import React, { useState } from "react";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth"; // Adjust the import path as necessary


function UserProfileHeader() {
    const [user, setUser] = useState("Alice Johnson"); // Example user name
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const logouthandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout());
            navigate('/login');
        })
        .catch((error) => {
            console.error("Logout failed:", error);
        });

    }

  return (
    <div className="p-6 border-b border-gray-700">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-lg font-bold">A</span>
          <div>
            <h2 className="text-lg font-semibold">{user}</h2>
            <p className="text-sm text-gray-400">Online</p>
          </div>
        </div>
        <button onClick={logouthandler} className="bg-red-600 text-white border rounded-lg">Logout</button>
      </div>
    </div>
    
  );
}

export default UserProfileHeader;
