import { lazy } from "react";
import pathConstants from "./pathConstants.jsx";

const Main = lazy(() => import("../views/MainPage.jsx"));

const routes = [

    {path: pathConstants.MAIN, element: <Main/>},
]

export default routes;