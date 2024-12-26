import React from 'react'

const Cards = ({ dateRange, currentMonthUsers, lastMonthUsers, growthRate ,name,spanText,last_text}) => {
  return (
    <div className= "h-[200px] bg-white p-4 rounded-lg shadow-md border border-gray-200 ">
 
          <h3 className="text-gray-600 font-medium text-sm mb-2">{ name || " "}</h3>
      
     
      <p className="text-gray-400 text-xs mb-4">{dateRange || "2024/2/1 - 2024/2/5"}</p>
     
      <div className="flex items-baseline space-x-2 mb-2">
        <span className="text-4xl font-bold text-gray-700">{currentMonthUsers || " "}</span>
              <span className="text-gray-500 text-lg">人  { spanText}</span>
      </div>
      
     
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          {lastMonthUsers || "-"}人 ({last_text})
        </p>
<p
  className={`text-sm font-medium  bg-gray-200 rounded-lg p-1 ${
    growthRate > 0
      ? "text-green-500"
      : growthRate < 0
      ? "text-red-500"
      : "text-gray-500"
  }`}
>
  {growthRate > 0
    ? `↑${growthRate}%`
    : growthRate < 0
    ? `↓${Math.abs(growthRate)}%`
    : `${growthRate || 0}%`}
</p>

      </div>
    </div>
  );
}

export default Cards
