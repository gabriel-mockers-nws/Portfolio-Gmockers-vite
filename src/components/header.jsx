import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <>
            <div>
                <nav className="p-4">
                    <Link to="/">
                        Accueil
                    </Link>

                    <Link to="/projet" className="p-2">
                        Projet
                    </Link>
                </nav>
            </div>
            <div>
                <h1>
                    Développeur Web
                </h1>
            </div>
            <div className="bg-[url(./assets/img/Synthwave_Backgr.jpg)]  ">
            <h2 className="text-white">MOCKERS Gabriel</h2>
            <h4>Mon Portfolio</h4>
            <button className="text-white"><a href="https://github.com/gabriel-mockers-nws">Voir mon Github</a></button>
            </div>
        </>
    );

}
export default Header; 