import { Link } from "react-router-dom";
import Button from "./Button";
import { Typewriter } from 'react-simple-typewriter';
export const Header = () => {
    return (
        <>
            <div>
                <nav className="pt-4 mx-1.5 flex items-center justify-between font-Orbitron">
                    <div className="ml-4">
                        <img src="./img/logo-GM.png" alt="Mon logo" className="max-h-15 mx-3 my-2"/>
                    </div>
                    
                    <div className="space-x-6">
                        <Link to="/" className="p-3  hover:text-orange-400 transition-colors duration-300 ease-in-out">
                            Accueil
                        </Link>

                        <Link to="/projet" className="p-3  hover:text-orange-400 transition-colors duration-300 ease-in-out">
                            Projets
                        </Link>
                    </div>
                </nav>
            </div>
            <div>
                <h1 className="text-orange-400 xl:text-8xl font-bold mx-9 font-Orbitron lg:text-5xl md:text-3xl">
                <Typewriter
                    words={['Développeur Web']}
                    cursor
                    cursorStyle="/>"
                    typeSpeed={150}
                    delaySpeed={1000}
                />
                </h1>

            </div>
            <div className="bg-[url(./assets/img/Synthwave_Backgr.jpg)] bg-cover bg-center w-[90vw] h-[45vh] mt-1 mx-auto rounded-lg  flex flex-col items-center justify-center">
                <h2 className="text-white text-5xl font-bold p-5"> 
                <Typewriter
                    words={['Gabriel Mockers', 'Mon portfolio']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={170}
                    deleteSpeed={70}
                    delaySpeed={2500}
                />
                </h2>
                <Button href={"https://github.com/gabriel-mockers-nws"} isExternal>Voir mon Github &nbsp;<i className="fa-brands fa-github"/></Button>
            </div>     
        </>
    );

}
export default Header; 