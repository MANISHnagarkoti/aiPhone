import React from "react";
import Heading from "./heading/Heading";
import ChatBox from "./chatbox/ChatBox";
import TagBox from "./tag/TagBox";
import Filter from "./filter/FilterBox";
import Message from "./messagebox/Message";

const Screen = () => {
  return (
    <div className="bg-white p-[6px] rounded-3xl w-[350px]  ">
      <Heading />
      <ChatBox />
      <TagBox />
      <Filter />
      <Message />
    </div>
  );
};

export default Screen;
