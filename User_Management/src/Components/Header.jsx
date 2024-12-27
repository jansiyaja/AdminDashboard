import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { useAuth } from "../Context/AuthContext";
import { HiMiniUserCircle } from "react-icons/hi2";

const Header = () => {
  const { user, logout } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);



  return (
    <div className="flex items-center justify-between border-b border-gray-300 px-5 py-3">
      <img src={logo} alt="Logo" className="h-10" />

      {user ? (
              <div className="relative">
                  
        
          <HiMiniUserCircle
            className="w-8 h-8 text-gray-600 cursor-pointer"
            onClick={() => setDropdownVisible((prev) => !prev)}
          />

          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
              <button
                onClick={logout} 
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Header;

