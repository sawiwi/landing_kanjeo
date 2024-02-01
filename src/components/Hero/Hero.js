import { Fragment } from "react";


const Hero = ({data}) =>{
    return(
        <Fragment>
            <div className="relative">
                {data ? data.map((item) =>{
                    return(
                        <div key={item.id}>
                            <img className="object-cover bg-center bg-no-repeat bg-cover brightness-75 w-screen h-[400px] xl:h-[600px] xxl:h-[700px] bg-secondary-default" src={item.imgH} alt="imgHero"/>   
                            <div className="absolute top-72 left-10 w-full items-center xl:w-[700px] h-[300px]  xl:p-2 xl:pl-4 ">
                                <h2 className="text-primary-default text-start font-semibold text-3xl">{item.title}</h2>
                                <p className="text-primary-default mt-4 text-start font-normal text-md">{item.desc}</p>  
                            {item.button ? 
                            <div className="flex justify-center">
                                <button className="bg-secondary-default m-5 mt-8 p-3 text-primary-default rounded-sm">
                                    Registrate
                                </button>
                            </div> : ''}
                            </div>
                        </div>
                    )
                }):
                'No hay data'}
            </div>
        </Fragment>
    )

}

export default Hero;