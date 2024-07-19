import React from "react";
import {theme} from "./context"


export default function Sidebar(props)
{
    const value=React.useContext(theme)
    return(
        <div className={` ${value.dark?'dark':''} sidebar border-2 border-red-500 p-2 `}>
            <button onClick={props.show}><img className={`${value.dark?'flip':''}  sidebar_icons`} src="/menu.png"/></button>
        
        <ul className="ul">
            <li className="sidebar-list flex gap-2"><img className={`${value.dark?'flip':''} sidebar_icons`}src="/home.svg"/>Home </li>
            <li className="sidebar-list flex gap-2"><img className={`${value.dark?'flip':''} sidebar_icons`}src="/search_sidebar.svg"/>Search</li>
            <li className="sidebar-list flex gap-2"><img className={`${value.dark?'flip':''} sidebar_icons`}src="/settings.svg"/>Settings</li>
            <li className="sidebar-list flex gap-2"><img className={`${value.dark?'flip':''} sidebar_icons`}src="/favourites.svg"/>Favourites</li>
        </ul>
        </div>
    )
}