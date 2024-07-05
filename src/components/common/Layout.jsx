import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {

    return(
        <>
        <div className="max-w-full">
            
            <Header/>
            <main >
            
                <Suspense fallback= {<div>Loading...</div>}>

                    <Outlet/>
                
                </Suspense>

            </main>
            
            <div className="bg-navbarBg border-4 border-gray-300 p-4">
                <Footer/>

            </div>
        </div>
        </>
    )
}

export default Layout;
