import Button from "../components/Button";

export const Home = () => {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-10 md:px-10 lg:px-16 xl:px-20 gap-10 mb-12">
                <div className="w-full lg:w-1/2">
                    <h3 className="text-3xl font-bold underline underline-offset-4 font-Orbitron">Qui suis-je ?</h3>
                    <p className="mt-6 mb-8">
                    Bienvenue sur ce Portfolio. Je m&apos;appelle Gabriel, un étudiant dynamique et social, 
                    &quot;Chef de projet Digital&quot; option développement web, en recherche d&apos;alternance.
                    Passionné par le web depuis longtemps, j&apos;ai réalisé plusieurs projets personnels et professionnels 
                    qui sont présentés sur ce magnifique site Portfolio développé en React.
                    Alors, n&apos;ayez plus d&apos;hésitation et consultez mon site pour découvrir mes projets, 
                    mais aussi mes passions et centres d&apos;intérêts. Je suis certain que nous en partageons quelques-uns !
                    </p>
                    <Button href="/pdf/CV-Mockers-Gabriel-développement-et-intégration-web .pdf" isExternal>
                    Télécharger mon CV &nbsp; <i className="fa-solid fa-file-arrow-down" />
                    </Button>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img 
                    src="img/photo-profil.jpg" 
                    alt="Gabriel" 
                    className="rounded-lg w-[250px] md:w-[300px] lg:w-[300px] xl:w-[350px] object-cover shadow-lg transition-all "
                    />
                </div>
            </div>

            <div className="w-full py-5 px-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg  light:bg-linear-to-r light:from-cyan-500 light:to-blue-500 ">
                <h3 className="text-3xl font-bold mb-6 underline underline-offset-15 font-Orbitron">Mes centres d&apos;intérêts</h3>

                <div className="xl:grid xl:grid-cols-2 gap-10 lg:grid md:grid xl:px-10 xl:pr-20">
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Voyages</h4>
                        <p className="text-sm">
                            Au cours de ma vie, j&apos;ai pu voyager dans plusieurs endroits comme le Maroc, 
                            le Vietnam, l&apos;Allemagne, la Suisse et différentes régions de France. 
                            Cela m&apos;a forgé un amour pour la découverte de nouvelles cultures et de paysages magnifiques.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-2">Musique</h4>
                        <p className="text-sm">
                            Depuis mon plus jeune âge, j&apos;ai un amour pour la musique, j&apos;en écoute très régulièrement pour accompagner mes journées ou mon travail.
                            J&apos;écoute plusieurs genre musicaux, comme la sythwave/retrowave qui font partie intégrante de mon univers, le Rock n&apos;Roll, le Blues, le Jazz,
                            la Variété et bien d&apos;autre. 
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-2">Culture</h4>
                        <p className="text-sm">
                            De nature très curieux, j&apos;aime beaucoup apprendre de nouvelles choses, enrichir mes connaissances. Mais également aller au Musée,
                            découvrir ou redécouvrir des oeuvres de Grands Maitres ou de nouveaux artiste contemporains. Autant que des musée relatant des faits Historiques.
                            J&apos;aime aussi le cinéma d&apos;auteur, le theâtre et l&apos;opéra.  
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-2">Streaming</h4>
                        <p className="text-sm">
                            Depuis maintenant trois ans, je prend énormément de plaisir à partager mes séances de jeux, ou tout simplement discuter sur la plateforme&nbsp;
                            <a href="https://www.twitch.tv/legiolf" className="font-bold underline hover:no-underline">Twitch</a>. Pour ce faire, j&apos;utilise un avatar
                            de mon personnage à la place da la caméra pour animer mes streams.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-xl font-semibold mb-2 ">Les jeux vidéos</h4>
                        <p className="text-sm">
                            Dans mes temps libres, j&apos;aprécie jouer à des jeux vidéos, surtout type coopératif ou compétitif en équipe. 
                            Mon plaisir réside surtout dans les temps passer avec des amis plus que le jeu en lui même. 
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-2">Le cosplay</h4>
                        <p className="text-sm">
                            Depuis neuf ans maintenant, je prend plaisir à me &quot;déguiser&quot;. Je porte un costume d&apos;un personnage que j&apos;ai pu créer
                            dans les évènements dédier ou type Japan Expo, etcétéra.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center my-12 xl:flex-row xl:justify-between xl:mx-12 xl:my-25">

                <Button href={"https://www.linkedin.com/in/gabriel-mockers/"} isExternal>Mon Linkedin &nbsp; <i className="fa-brands fa-linkedin-in"/></Button>

                <Button href={"https://github.com/gabriel-mockers-nws"} isExternal>GitHub &nbsp; <i className="fa-brands fa-github"/></Button>

                <Button href={"/Contact"}>Me contacter &nbsp; <i className="fa-solid fa-envelope"/></Button>

                <Button href={"/pdf/CV-Mockers-Gabriel-développement-et-intégration-web .pdf"} isExternal>Télécharger mon CV &nbsp; <i className="fa-solid fa-file-arrow-down"/></Button>

            </div>

            <div className="px-4 py-8 xl:px-10 xl:py-10">
                <div className="py-2 text-center">
                    <h3 className="text-3xl font-bold mb-4 underline underline-offset-4 font-Orbitron">
                    Aperçu de mes projets
                    </h3>
                    <p className="text-base">Voici un petit aperçu de mes projets école et personnels</p>
                </div>
                
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8 text-center">
                    <div>
                    <h4 className="text-xl font-semibold mb-2">Portage portfolio en React</h4>
                    <p className="text-sm mb-4">Mon portfolio en React et Vite</p>
                    <img
                        src="/img/Developpement/vite+react.png"
                        alt="projet-vite-react"
                        className="h-[27vh] w-[60vh] mx-auto rounded-lg shadow-lg "
                    />
                    </div>

                    <div>
                    <h4 className="text-xl font-semibold mb-2">Soundspire</h4>
                    <p className="text-sm mb-4">Soundspire est un projet d&apos;école réalisé en groupe.</p>
                    <img
                        src="/img/Developpement/soundspire.png"
                        alt="home-soundspire"
                        className="h-[27vh] w-[60vh] mx-auto rounded-lg shadow-lg "
                    />
                    </div>

                    <div>
                    <h4 className="text-xl font-semibold mb-2">Action Marketing</h4>
                    <p className="text-sm mb-4">
                        Compréhension & réalisation de projet publicitaire pour une marque.
                    </p>
                    <img
                        src="/img/otherProjects/action-marketing.png"
                        alt="presentation-support"
                        className="h-[27vh] w-[60vh] mx-auto rounded-lg shadow-lg "
                    />
                    </div>
                </div>
                <div className=" flex justify-center mt-10">
                    <Button href={"/projet"}>Mes projets &nbsp; <i className="fa-solid fa-diagram-project"/></Button>
                </div>
            </div>

        </>
    );
};

export default Home;
