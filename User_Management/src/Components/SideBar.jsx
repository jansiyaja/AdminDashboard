import React, { useState } from "react";
import { CiGrid42 } from "react-icons/ci";
import { HiOutlineGift } from "react-icons/hi2";
import { LuUsersRound } from "react-icons/lu";
import Dashboard from "../Pages/Dashboard";
import UserList from "../Pages/UserList";
import Gifts from "../Pages/Gifts";

const SideBar = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  return (
    <div className="flex h-screen flex-col md:flex-row lg:h-screen">
     
      <div className="hidden md:flex lg:h-screen bg-white w-52 flex-col items-start shadow-lg">
        <nav className="w-full space-y-2">
          <div
            className={`flex items-center w-full px-4 py-2 hover:bg-orange-100 ${
              activeComponent === "dashboard" ? "text-orange-500 border-orange-500" : "text-gray-700"
            } border-e-4 border-transparent`}
            onClick={() => setActiveComponent("dashboard")}
          >
            <CiGrid42 className="text-xl mr-3" />
            <span className="font-medium">ダッシュボード</span>
          </div>
          <div
            className={`flex items-center w-full px-4 py-2 hover:bg-orange-100 ${
              activeComponent === "users" ? "text-orange-500 border-orange-500" : "text-gray-700"
            } border-e-4 border-transparent`}
            onClick={() => setActiveComponent("users")}
          >
            <LuUsersRound className="text-xl mr-3" />
            <span className="font-medium">登録ユーザー</span>
          </div>
          <div
            className={`flex items-center w-full px-4 py-2 hover:bg-orange-100 ${
              activeComponent === "gifts" ? "text-orange-500 border-orange-500" : "text-gray-700"
            } border-e-4 border-transparent`}
            onClick={() => setActiveComponent("gifts")}
          >
            <HiOutlineGift className="text-xl mr-3" />
            <span className="font-medium">当選者</span>
          </div>
        </nav>
      </div>

   
      <div className="flex-1 bg-white p-4">
        {activeComponent === "dashboard" && <Dashboard />}
        {activeComponent === "users" && <UserList />}
        {activeComponent === "gifts" && <Gifts />}
      </div>

      
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 shadow-lg flex justify-around py-2 md:hidden">
        <button
          onClick={() => setActiveComponent("dashboard")}
          className={`flex flex-col items-center ${
            activeComponent === "dashboard" ? "text-orange-500" : "text-gray-600"
          }`}
        >
          <CiGrid42 className="text-2xl" />
          
        </button>
        <button
          onClick={() => setActiveComponent("users")}
          className={`flex flex-col items-center ${
            activeComponent === "users" ? "text-orange-500" : "text-gray-600"
          }`}
        >
          <LuUsersRound className="text-2xl" />
          
        </button>
        <button
          onClick={() => setActiveComponent("gifts")}
          className={`flex flex-col items-center ${
            activeComponent === "gifts" ? "text-orange-500" : "text-gray-600"
          }`}
        >
          <HiOutlineGift className="text-2xl" />
        
        </button>
      </div>
    </div>
  );
};

export default SideBar;
