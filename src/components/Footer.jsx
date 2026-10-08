import { Link } from "react-router-dom";
export const Footer =  () => {
    return (
        <>
            <div className="px-4 py-5 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-4 bg-gradient-to-r from-purple-500 to-pink-500 light:bg-linear-to-r light:from-cyan-500 light:to-blue-500">
                <div className="flex items-center">
                    <p className="flex flex-wrap items-center justify-center gap-2 text-center">
                        <span>Projet réalisé avec Vite</span>
                        <img
                            src="/img/vite.svg"
                            alt="vite-logo"
                            className="w-6 h-6"
                        />
                        <span>+ React</span>
                        <img
                            src="/img/react.svg"
                            alt="react-logo"
                            className="w-6 h-6"
                        />
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <Link to="/" className="p-3 hover:underline underline-offset-1">
                            Accueil
                        </Link>

                        <Link to="/projet" className="p-3 hover:underline underline-offset-1">
                            Projets
                        </Link>

                        <Link to="/cgu" className="p-3 hover:underline underline-offset-1">
                            CGU
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;