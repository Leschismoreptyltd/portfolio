import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import bgImage from "../../assets/Background/bg-earth-stone.jpg"

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
            <Footer/>
        </div>
        </>
    )
}

export default Layout;

    /*  {/*Background I changed this
     <div className="w-full absolute -z-1">
     {/*Background Image 
         <img 
         src={bgImage}
         className="opacity-15 -z-1"  
         alt="" />
     </div> */