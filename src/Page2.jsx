import React from "react";
import Sidebar from "./Sidebar";
import {theme} from "./context"

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

  //store all news 
  const [data,setdata]=React.useState(null)

  //fetching news from api
  React.useEffect(() => {
    async function getData() {
      const url =
        "https://newsapi.org/v2/top-headlines?q=tesla&from=2024-06-19&sortBy=publishedAt&apiKey=447851325f954941a22152038138ccd4";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json)
        
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);


  return (
    <>
    <theme.Provider value={{dark,setdark}}>
    <div className="p2 flex">
      {showSidebar == true && <Sidebar show={show} />}
      {showSidebar == false && (
        <div className={`${dark?'dark':''} left_p2 h-full w-full  border-2  border-red-700`}>
          <button onClick={show}>
            <img alt="credits:freepik.com" className={`${dark?'flip':''} sidebar_icons`} src="/menu.png" />
          </button>
        </div>
      )}
      <div className="right_p2  w-full ">
        <div className={` ${dark?'dark':''} right_p2_navbar w-full border-2 border-red-700`}>
          <label className="search_bar left_navbar " for="search">
            <input
              type="text"
              className={`${dark?'search_flip':''} italic`}
              placeholder=" Search here"
            ></input>
            <button>
              <img alt="credits:freepik.com" className={`${dark?'flip':''} search sidebar_icons`} src="/search_sidebar.svg" />
            </button>
            </label>
            <div className={`${dark?'dark':''} right_navbar`}>
            <button onClick={toggledark}>
              <img alt="credits:freepik.com" className={`${dark?'flip':''} search sidebar_icons`} src="/dark.png" />
            </button>
            <button>
              <img alt="credits:freepik.com" className={`${dark?'flip':''} dots sidebar_icons`} src="/dots.png" />
            </button>
            <button>
              <img alt="credits:freepik.com" className={`${dark?'flip':''} favourites sidebar_icons`} src="/favourites.svg" />
            </button>
            </div>
            
          
        </div>
        <div className={`${dark?'dark':''} right_p2_body border-2 border-blue-600`}>
          <img alt="credits:freepik.com" className={`${dark?'flip':''} default`} src="default.jpg"/>
        </div>
      </div>
    </div>
    </theme.Provider>
    </>
  );
}
