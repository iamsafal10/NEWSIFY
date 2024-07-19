import React from "react";

export default function Sidebar(props)
{
    return(
        <div className={`sidebar border-2 border-red-500 p-2 `}>
            <button onClick={props.show}><img className="sidebar_icons" src="/menu.png"/></button>
        
        <ul className="ul">
            <li className="sidebar-list flex gap-2"><img className="sidebar_icons"src="/home.svg"/>Home </li>
            <li className="sidebar-list flex gap-2"><img className="sidebar_icons"src="/search_sidebar.svg"/>Search</li>
            <li className="sidebar-list flex gap-2"><img className="sidebar_icons"src="/settings.svg"/>Settings</li>
            <li className="sidebar-list flex gap-2"><img className="sidebar_icons"src="/favourites.svg"/>Favourites</li>
        </ul>
        </div>
    )
}