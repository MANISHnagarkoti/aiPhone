import React, { useState } from "react";

const Filter = () => {
  const tabs = ["Strap - Long", "Colour", "Size", "Brand", "Material"];

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="px-4 text-xs bg-gradient-to-t from-[#f4f4f44e] from-0%  py-2 pb-8">
      <div className="flex  justify-between">
        <div className="text-gray-400"> Select filters</div>
        <div className="text-gray-400 flex gap-2">
          <img
            src="filter img/filterIcon.png"
            className="w-4 h-4"
            alt="filterImg"
          />
          <div>Filter</div>
        </div>
      </div>

      <div className="flex  gap-x-2 gap-y-1 flex-wrap text-xs">
        {tabs.map((e, i) => {
          return (
            <div
              className={
                currentTab === i
                  ? "text-center border border-blue-500 rounded-md bg-blue-400/10  px-2 text-blue-500 flex gap-1 items-center mt-2 cursor-pointer"
                  : "text-center rounded-md border border-transparent  bg-gray-500/10  px-2 text-gray-500 flex gap-1 items-center mt-2 cursor-pointer"
              }

              onClick={()=> setCurrentTab(i)}
            >
              <div> {e}</div>
              <ion-icon
                name="close-outline"
                style={{ fontSize: "20px" }}
              ></ion-icon>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
