import React from 'react'
import { Redirect } from "react-router-dom";

import BBDiscover from "@/pages/discover";
import BBMine from "@/pages/mine";
import BBFriend from "@/pages/friend";

import BBRecommend from "../pages/discover/c-pages/recommend";
import BBRanking from "../pages/discover/c-pages/ranking";
import BBDjRadio from "../pages/discover/c-pages/djradio";
import BBSongs from "../pages/discover/c-pages/songs";
import BBArtist from "../pages/discover/c-pages/artist";
import BBAlbum from "../pages/discover/c-pages/album";




const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/discover" />
            // <Redirect to={"/discover"}></Redirect>
        )
    },
    {
        path: "/discover",
        component: BBDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to={"/discover/recommend"} />
                    // <Redirect to={"/discover/recommend"} />
                )
            },
            {
                path: "/discover/recommend",
                component: BBRecommend,
            },
            {
                path: "/discover/ranking",
                component: BBRanking
            },
            {
                path: "/discover/songs",
                component: BBSongs
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: BBDjRadio
            },
            {
                path: "/discover/artist",
                component: BBArtist
            },
            {
                path: "/discover/album",
                component: BBAlbum
            }
        ]
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