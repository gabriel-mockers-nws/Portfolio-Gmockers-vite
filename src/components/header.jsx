import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <>
            <div>
                <nav className="pt-4 mx-1.5 text-right justify-around font-Orbitron ">
                    <Link to="/" className="p-3">
                        Accueil
                    </Link>

                    <Link to="/projet" className="p-3">
                        Projet
                    </Link>
                </nav>
            </div>
            <div>
                <h1 className="text-orange-400 text-8xl font-bold mx-9 font-Orbitron" >
                    Développeur Web
                </h1>
            </div>
            <div className="bg-[url(./assets/img/Synthwave_Backgr.jpg)] bg-cover bg-center w-[90vw] h-[45vh] mt-1 mx-auto rounded-lg  flex flex-col items-center justify-center">
                <h2 className="text-white text-5xl font-bold p-5"> Gabriel MOCKERS</h2>
                <h4 className="text-white">Mon Portfolio</h4>
                <button className="text-white bg-orange-400 rounded-full hover:bg-orange-500 p-1.5 m-1 focus:bg-amber-600"><a href="https://github.com/gabriel-mockers-nws">Voir mon Github</a></button>
            </div>
            
        </>
    );

}
export default Header; 