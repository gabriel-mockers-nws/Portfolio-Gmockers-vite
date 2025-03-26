import { Link } from "react-router-dom";
export const Footer =  () => {
    return (
        <>
            <div className="py-5 px-10 flex relative items-center ">
                <div className="py-5 flex items-center absolute left-10">
                    <p className="flex items-center">
                        Projet réalisé avec Vite &nbsp;<img src="/vite.svg" alt="vite-logo" /> + React&nbsp; <img src="/react.svg" alt="react-logo" /> 
                    </p>
                </div>
                <div className="py-5 flex justify-center w-full">
                    <div className="">
                        <Link to="/" className="p-3 hover:underline underline-offset-1">
                            Accueil
                        </Link>

                        <Link to="/projet" className="p-3 hover:underline underline-offset-1">
                            Projet
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;