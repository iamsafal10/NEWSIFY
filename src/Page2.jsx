import React from "react";
import Sidebar from "./Sidebar";

export default function Page2() {
  // to view or hide sidebar
  const [showSidebar, setshowSidebar] = React.useState(false);
  const show = () => {
    setshowSidebar(!showSidebar);
  };

  // to toggle light and dark mode
  const [dark, setdark] = React.useState(true)
  const toggledark=()=>{
    setdark(!dark);
  }
  return (
    <div className="p2 flex">
      {showSidebar == true && <Sidebar show={show} dark={dark}/>}
      {showSidebar == false && (
        <div className="left_p2 h-full w-full  border-2  border-red-700">
          <button onClick={show}>
            <img className="sidebar_icons" src="/menu.png" />
          </button>
        </div>
      )}
      <div className="right_p2 w-full ">
        <div className="right_p2_navbar w-full border-2 border-red-700">
          <label className="search_bar left_navbar " for="search">
            <input
              type="text"
              className="italic"
              placeholder=" Search here"
            ></input>
            <button>
              <img className="search" src="/search_sidebar.svg" />
            </button>
            </label>
            <div className={`right_navbar`}>
            <button onClick={toggledark}>
              <img className="search sidebar_icons" src="/dark.png" />
            </button>
            <button>
              <img className="search sidebar_icons" src="/dots.png" />
            </button>
            <button>
              <img className="search sidebar_icons" src="/favourites.svg" />
            </button>
            </div>
            
          
        </div>
        <div className={`right_p2_body border-2 border-blue-600`}>
          <img className="default" src="default.jpg"></img>
        </div>
      </div>
    </div>
  );
}
