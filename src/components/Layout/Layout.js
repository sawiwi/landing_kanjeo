import Header from "../Header/Header";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const Layout = () =>{
    return(
        <div className="relative mt-16 xl:mt-24 overflow-hidden w-100 bg-slate-900 ">
            <Header/>
            <Home/>
            <About/>
            <Contact/>
        </div>
    )
}

export default Layout;