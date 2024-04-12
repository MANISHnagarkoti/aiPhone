import React from "react";

const Message = () => {
  return (
    <div className="p-4 py-2 bg-gradient-to-r rounded-b-2xl mt-1 from-[#e5eeff91] from-30%  to-[#f3f3f37a] to-80%">
      <div className="flex gap-1">
        <div className="flex gap-4 items-center border border-gray-300 rounded-lg p-2 px-4 text-xs bg-white w-[80%]">
          <input
            type="text"
            name=""
            placeholder="Type your message"
            className=" border-none flex-grow-1 w-full outline-none"
            id=""
          />
          <img src="message img/pin.png" alt="pinImg" className="w-4 h-4" />
        </div>

        <div className="bg-blue-500 flex justify-center items-center rounded-lg  w-[20%] cursor-pointer">
          <ion-icon
            name="chevron-forward-outline"
            style={{ color: "white", fontSize: "25px" }}
          ></ion-icon>
        </div>
      </div>

      <div className="flex justify-center text-xs gap-1 mt-4 items-center">
        <div className="text-gray-400">Powered by</div>
        <div className="font-semibold text-gray-500">Krunk.ai</div>
        <img src="message img/Logo.svg" alt="LogoImg" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default Message;
