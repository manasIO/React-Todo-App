import React from "react";
import * as FaIcons from 'react-icons/fa'

export const SideBardData = [
    {
        title: "Today's task",
        path: '/',
        icon: <FaIcons.FaHome/>
    },
    {
        title: "Important",
        path: '/important',
        icon: <FaIcons.FaHome/>
    },
    {
        title: "Assigned",
        path: '/assigned',
        icon: <FaIcons.FaHome/>
    },
    {
        title: "Planned",
        path: '/planned',
        icon: <FaIcons.FaHome/>
    },
    {
        title: "Friend's Schedule",
        path: '/friends',
        icon: <FaIcons.FaHome/>
    }

]

function FixedSideBar(){
   
}

export default FixedSideBar;