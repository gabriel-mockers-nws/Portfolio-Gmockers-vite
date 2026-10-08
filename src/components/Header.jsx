import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { Typewriter } from "react-simple-typewriter";
import PropTypes from "prop-types";

export const Header = ({ lightMode, setLightMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClassName =
        "p-3 hover:text-orange-400 light:hover:text-purple-700 transition-colors duration-300 ease-in-out font-bold focus:text-orange-500";

    return (
        <>
            <div>
                <nav
                    className="pt-4 mx-1.5 flex flex-wrap items-center justify-between font-Orbitron"
                    onKeyDown={(event) => {
                        if (event.key === "Escape") {
                            setMenuOpen(false);
                        }
                    }}
                >
                    <div className="ml-4">
                        <img
                            src="/img/logo-GM.png"
                            alt="Mon logo"
                            className="max-h-15 mx-3 my-2"
                        />
                    </div>

                    <div className="flex items-center gap-3 mr-4 lg:order-3">
                        <button
                            type="button"
                            onClick={() => setLightMode((prev) => !prev)}
                            aria-label={
                                lightMode
                                    ? "Activer le mode sombre"
                                    : "Activer le mode clair"
                            }
                            className="bg-orange-400 hover:bg-orange-500 light:bg-purple-500 light:hover:bg-purple-800 rounded-sm h-9 w-9 text-2xl"
                        >
                            {lightMode ? "🌙" : "☀️"}
                        </button>

                        <button
                            type="button"
                            onClick={() => setMenuOpen((prev) => !prev)}
                            aria-expanded={menuOpen}
                            aria-controls="header-menu"
                            aria-label={
                                menuOpen
                                    ? "Fermer le menu"
                                    : "Ouvrir le menu"
                            }
                            className="lg:hidden flex items-center justify-center h-10 w-10 text-3xl hover:text-orange-400 light:hover:text-purple-700"
                        >
                            <span aria-hidden="true">
                                {menuOpen ? "✕" : "☰"}
                            </span>
                        </button>
                    </div>

                    <div
                        id="header-menu"
                        className={`${
                            menuOpen ? "flex" : "hidden"
                        } w-full flex-col items-center gap-2 py-4 lg:flex lg:w-auto lg:flex-row lg:gap-3 lg:py-0 lg:ml-auto lg:mr-6 lg:order-2`}
                    >
                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className={linkClassName}
                        >
                            Accueil
                        </Link>

                        <Link
                            to="/projet"
                            onClick={() => setMenuOpen(false)}
                            className={linkClassName}
                        >
                            Projets
                        </Link>

                        <Link
                            to="/charte-graphique"
                            onClick={() => setMenuOpen(false)}
                            className={linkClassName}
                        >
                            Charte graphique
                        </Link>

                        <Link
                            to="/Contact"
                            onClick={() => setMenuOpen(false)}
                            className={linkClassName}
                        >
                            Me contacter
                        </Link>
                    </div>
                </nav>
            </div>

            <div>
                <h1 className="text-orange-400 light:text-orange-500 text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold mx-4 sm:mx-9 font-Orbitron">
                    <Typewriter
                        words={["Marketing & communication digitale"]}
                        cursor
                        cursorStyle="|"
                        typeSpeed={150}
                        delaySpeed={1000}
                    />
                </h1>
            </div>

            <div className="bg-[url(./assets/img/Synthwave_Backgr.jpg)] bg-cover bg-center w-[90vw] h-[45vh] mt-1 mx-auto rounded-lg shadow-lg flex flex-col items-center justify-center">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl text-center font-bold p-5">
                    <Typewriter
                        words={["Gabriel Mockers", "Mon portfolio"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={170}
                        deleteSpeed={70}
                        delaySpeed={2500}
                    />
                </h2>

                <Button
                    href="https://github.com/gabriel-mockers-nws"
                    isExternal
                >
                    Voir mon Github &nbsp;
                    <i className="fa-brands fa-github" />
                </Button>
            </div>
        </>
    );
};

Header.propTypes = {
    lightMode: PropTypes.bool.isRequired,
    setLightMode: PropTypes.func.isRequired,
};

export default Header;