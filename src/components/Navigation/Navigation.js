import { NavigationData } from "../../data/navigation";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
    <nav >
        <ul className="flex justify-between z-10 gap-10">
            {NavigationData?.length > 0 && NavigationData.map((item) => (
            <li key={item.id} >
                <Link to={item.path} className="text-md font-semibold text-secondary-default hover:text-secondary-light uppercase">{item.name}</Link>
            </li>
        ))}
      </ul>
    </nav>
    )
}

export default Navigation;