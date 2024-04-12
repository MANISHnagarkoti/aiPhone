import React from "react";

const ChatBox = () => {
  return (
    <div className="pt-14 p-4 space-y-6">
      <div>
        <div className="max-w-[250px] text-[13px] p-3 bg-gradient-to-r rounded-2xl from-[#E5EEFF] from-30%  to-[#f3f3f37a] to-80%">
          Hi Sam! I am your personal shopping assistant , how can i help you
          today ?
        </div>

        <div className="text-[10px] mt-2 ps-4">4:45 PM</div>
      </div>

      <div className="flex justify-end">
        <div className="">
          <div className="max-w-[250px] rounded-2xl text-[13px] p-3 bg-[#DCF7C5]">
          I am looking for a hand bag, with long strap .
          </div>

          <div className="text-[10px] mt-2 pe-4 text-right">4:46 PM</div>
        </div>
      </div>


    </div>
  );
};

export default ChatBox;
