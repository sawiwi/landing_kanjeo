import React,{ useState, Fragment } from "react"
// import { Transition, Dialog } from '@headlessui/react';
import NavMenuBar from "./NavMenu";

const MenuBar = ()=>{
    const [isMovilOpenMenu, setMovilOpenMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMovilOpenMenu(!isMovilOpenMenu);
      };

    const handleCloseMenu = () => {
        setMovilOpenMenu(isMovilOpenMenu);
      };

    return(
        <>
           
        <div className="text-xl font-bold" >
           <button onClick={toggleMobileMenu} className="h-10 w-10 text-secondary-default">☰</button>
        </div>

        <div className="fixed inset-0 z-50 overflow-y-auto h-[100vh] w-96 shadow-2xl bg-primary-default">
            <div className="absolute top-2 right-3" >
                <button onClick={handleCloseMenu}>X</button>
            </div>
            <NavMenuBar/>
        </div>
        </>

 
    )
}

export default MenuBar