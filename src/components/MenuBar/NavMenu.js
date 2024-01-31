import { NavigationData } from "../../data/navigation";
import { Link } from "react-router-dom";

const NavMenuBar = () =>{
    return(
    <nav >
        <ul className="mt-10 py-2 block z-10 gap-y-[20px] p-3">
            {NavigationData?.length > 0 && NavigationData.map((item) => (
            <li key={item.id} className="mb-6" >
                <Link to={item.path} className="text-md font-semibold text-secondary-default hover:text-secondary-light uppercase">{item.name}</Link>
            </li>
        ))}
      </ul>
    </nav>
    )
}

export default NavMenuBar;