import { Fragment } from "react";
import Section from "../Section/Section";
import HeroSection from "../PagesSection/Home/Hero";


const Home = () =>{
    return(
        // <Section>
        //     <div className="mt-20">
        //         <h2 className="text-secondary-default">Inicio</h2>
        //     </div>
        // </Section> 
        <Fragment>
            <HeroSection/>
        </Fragment> 
    )
}

export default Home;