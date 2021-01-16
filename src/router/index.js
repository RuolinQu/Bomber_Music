import BBDiscover from "@/pages/discover";
import BBMine from "@/pages/mine";
import BBFriend from "@/pages/friend";

const routes = [
    {
        path: "/",
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