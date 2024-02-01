import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";

export const navigationRoutes = [
    {
        id:1,
        name:'Inicio',
        path:'/',
        element:<Home/>,
    },
    {
        id:2,
        name:'Nosotros',
        path:'/nosotros',
        element:<About/>,
    },
    {
        id:3,
        name:'Servicios',
        path:'/servicios',
        element:<></>,
    }, 
    {
        id:4,
        name:'Contacto',
        path:'/contacto',
        element:<Contact/>,
    }
]