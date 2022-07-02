import React from "react";
import Header from "./Header";
import Chat from "./Chat";
import Feed from "./Feed";

import "./Main.css";

function main() {
  return (
    <div className='mai'>
      <div className='chat'>
        <Chat />
      </div>{" "}
      <Header />
      <div className='main_box'>
        <Feed />
      </div>
      <div className="phone">
        This content cannot be viewed in this resolution switch to desktop mode
      </div>
    </div>
  );
}

export default main;
