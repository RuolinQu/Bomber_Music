import React from 'react'

import BBDiscover from "@/pages/discover";
import BBMine from "@/pages/mine";
import BBFriend from "@/pages/friend";
import { Redirect } from "react-router-dom";


const routes = [
    {
        path: "/",
        exact: true,
        render: () => {
            <Redirect to="/discover" />
        }
    }
    ,
    {
        path: "/discover",
        exact: true,
        component: BBDiscover
    },
    {
        path: "/mine",
        exact: true,
        component: BBMine
    },
    {
        path: "/friend",
        exact: true,
        component: BBFriend
    }
];

export default routes;