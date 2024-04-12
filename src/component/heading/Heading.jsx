import React from "react";

const Heading = () => {
  return (
    <div className="text-sm bg-colorOne rounded-t-3xl py-4 px-5 flex justify-between items-end">
      <div className="flex gap-3">
        <div className="rounded-full w-[50px] h-[50px] relative">
          <img src="header img/chatbot.png" alt="chatbotImg" />
          <div className="rounded-full w-2 h-2 bg-green-400 absolute bottom-1 right-[4px]"></div>
        </div>

        <div className="text-blue-500">
          <div className="flex gap-2 items-center">
            <div className="font-semibold text-lg">Timpu</div>
            <img src="header img/Vector.png" className="w-4 h-4" alt="vectorImg" />
          </div>
          <div className="font-medium">Chat assistant</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="rounded-full w-2 h-2 bg-green-400"></div>
        <div className="text-blue-500 font-medium">Online</div>
      </div>
    </div>
  );
};

export default Heading;
