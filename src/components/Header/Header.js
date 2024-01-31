import Navigation from "../Navigation/Navigation";
import MenuBar from "../MenuBar/MenuBar";

const Header = () => {
    return(
        <header className="px-4 z-50 xl:px-28  fixed top-0 left-0 right-0 bg-primary-default">
            <div className="relative py-5 px-0 flex justify-between items-center space-x-4 xl:space-x-8">
                <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
                    <h2 className="text-4xl font-bold text-secondary-default">LOGO</h2>
                </div>

                <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 space-x-1">
                    <div className="hidden items-center xl:flex space-x-2 ">
                        <Navigation />
                    </div>
                </div>

                <div className="flex items-center xl:hidden">
                    <MenuBar />
                </div>
            </div>
            
        </header>
    )
}

export default Header;