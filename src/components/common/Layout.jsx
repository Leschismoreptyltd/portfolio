import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {

    return(
        <>
        <div className="max-w-full bg-transparent">
            <Header/>
            <main>
                <Suspense fallback= {<div>Loading...</div>}>
                <Outlet/>
                </Suspense>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default Layout;