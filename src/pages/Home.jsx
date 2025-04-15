export const Home = () => {
    return (
        <>
            <div className="flex items-center justify-between xl:px-10 xl:py-5 lg:px-15 lg:py-5 md:py-5 md:px-10 sm:px-10 sm:py-5 ">
                <div className=" ">
                    <h3 className="text-3xl font-bold underline underline-offset-15 font-Orbitron">Qui suis-je ?</h3>
                    <p className="mt-6">
                        Bienvenue ici, je m&apos;appelle Gabriel, un étudiant dynamique et social, 
                        &quot;Chef de projet Digital&quot; option développement web, en recherche d&apos;alternance.
                        Passionné par le web depuis longtemps, j&apos;ai réalisé plusieurs projets personnels et professionnels 
                        qui sont présentés sur ce magnifique site Portfolio développé en React.
                        Alors, n&apos;ayez plus d&apos;hésitation et consultez mon site pour découvrir mes projets, 
                        mais aussi mes passions et centres d&apos;intérêts. Je suis certain que nous en partageons quelques-uns !
                    </p>
                </div>
                <div className="w-1/2 flex justify-end">
                <img src="/photo-profil.jpg" alt="Gabriel" className="rounded-lg  "/>
                </div>
            </div>

            <div className="w-full py-5 px-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 underline underline-offset-15 font-Orbitron">Mes centres d&apos;intérêts</h3>

                <div className="xl:grid xl:grid-cols-6 gap-8 lg:grid md:grid ">
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
                            de mon personnage à la place da la caméra pour animer mes streams. Le nom de ma chaine est mon pseudonyme, Legiolf.
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
            <div className="flex justify-between items-center w-full px-10 py-5 mt-10">
                <button className="flex-0.5 bg-orange-400 rounded-full hover:bg-orange-500 px-8 py-3 mx-2 focus:bg-amber-600 text-center" >
                    <a href="https://www.linkedin.com/in/gabriel-mockers/" target="_blank">Mon Linkedin</a> <i className="fa-brands fa-linkedin-in"/> 
                </button>

                <button className="flex-0.5 bg-orange-400 rounded-full hover:bg-orange-500 px-8 py-3 mx-2 focus:bg-amber-600 text-center" >
                    <a href="https://github.com/gabriel-mockers-nws" target="_blank">Github</a> <i className="fa-brands fa-github"/>
                </button>

                <button className="flex-0.5  bg-orange-400 rounded-full hover:bg-orange-500 px-8 py-3 mx-2 focus:bg-amber-600 text-center" >
                    <a href="mailto:gmockers@normandiewebschool.fr">Me contacter</a> <i className="fa-solid fa-envelope"/>
                </button>

                <button className="flex-0.5  bg-orange-400 rounded-full hover:bg-orange-500 px-8 py-3 mx-2 focus:bg-amber-600 text-center" >
                    <a href="/images/myw3schoolsimage.jpg" target="_blank"download>Télécharger mon cv</a> <i className="fa-solid fa-file-arrow-down"/>
                </button>
            </div>
            <div className="xl:px-10 xl:py-5">
                <div className="py-2">
                    <h3 className="text-3xl font-bold mb-6 underline underline-offset-15 font-Orbitron">Aperçu de mes projets</h3>
                    <p>Voici un petit aperçu de mes projets école et personnels</p>
                </div>
                <div className="xl:grid xl:grid-cols-3 gap-8 lg:flex text-center xl:px-10 xl:py-5">
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Portage portfolio en React</h4>
                        <p className="text-sm  xl:py-3">
                            Mon profolio en react et vite
                        </p>
                        <img src="/projets/vite+react.png" alt="projet-vite-react" className="h-[27vh] w-[60vh] " />
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-2">Soundspire</h4>
                        <p className="text-sm xl:py-3">
                            Soundspire est un projet d&apos;école réalisé en groupe.
                        </p>
                        <img src="/projets/soundspire.png" alt="home-soundspire" className="h-[27vh] w-[60vh] " />
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-2">Action Marketing</h4>
                        <p className="text-sm xl:py-3">
                            Compréhension & réalisation de projet publicitaire pour une marque.
                        </p>
                        <img src="/projets/action-marketing.png" alt="presentation-support" className="h-[27vh] w-[60vh] "/>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;
