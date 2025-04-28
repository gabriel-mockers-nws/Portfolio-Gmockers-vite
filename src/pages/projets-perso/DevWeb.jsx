import SwiperCarousel from "../../components/SwiperCarousel";

const LeBonpoil = [
    "/projets/DevWeb/Le-bon-poil/mainpage1.png",
    "/projets/DevWeb/Le-bon-poil/mainpage2.png",
    "/projets/DevWeb/Le-bon-poil/contact.png",
];

const Blog = [
    "/projets/DevWeb/Blog/home1.png",
    "/projets/DevWeb/Blog/home2.png",
    "/projets/DevWeb/Blog/article.png",
];

const Mini_project = [
    "/projets/DevWeb/Mini-projet/home.png",
    "/projets/DevWeb/Mini-projet/script.png",
];



export const DevWeb = () => {

    return (
        <>
        <div className="flex flex-row items-center gap-6 my-8">
            <SwiperCarousel images={LeBonpoil} />
            <div className="w-[60%]">
                <h4 className="text-2xl font-semibold mb-2">Formation HTML et débuts CSS</h4>
                <p className="text-base leading-relaxed">
                    Ce projet représente mes débuts dans mon apprentissage personnel de l&apos;HTMl et du CSS. Il s&apos;agit d&apos;un site pour un restaurant fictif. <br />
                    Mes principales difficultées étaient la découverte des deux langages qui, à ce moment, était totalement nouveau pour moi.  <br />
                    <br />
                    Ce projet à été fait en suivant un cours sur internet <em>&#40;Grafikart HTML&#41;</em>. Cela m&apos;a permis de comprendre les bases de ces deux langages et la construction d&apos;un site web.
                </p>
                <button className="flex-0.5 bg-orange-400 rounded-full hover:bg-orange-500 px-8 py-3 my-3 focus:bg-amber-600 text-center" >
                    <a href="https://github.com/gabriel-mockers-nws/Restaurant-Le-Bon-Poil" target="_blank">
                    Lien du projet&nbsp;
                    </a> 
                    <i className="fa-brands fa-github"/>
                </button>
            </div>
        </div>

        <div className="flex flex-row-reverse items-center gap-6 my-8">
            <SwiperCarousel images={Blog} />
            <div className="w-[60%]">
                <h4 className="text-2xl font-semibold mb-2">Confirmation HTML et CSS</h4>
                <p className="text-base leading-relaxed">
                    Ce second projet m&apos;a permis de me confimer dans le langage HTMl et d&apos;en apprendre bien plus sur le CSS. Ses classes, flex et grid, etc. Comment bien structurer une page web en s&apos;appyant sur une maquette Figma.<br />
                    Mes principales difficultées étaient la découverte du CSS et de ses spécificités. <br />
                    <br />
                    Ce projet à été fait en suivant un cours sur internet <em>&#40;Grafikart CSS&#41;</em>. Cela m&apos;a permis de comprendre les spécificité du langage CSS  et les possibilités de style d&apos;un site web.
                </p>
                <button className="flex-0.5 bg-orange-400 rounded-full hover:bg-orange-500 px-8 py-3 my-3 focus:bg-amber-600 text-center" >
                    <a href="https://github.com/gabriel-mockers-nws/Demoblog" target="_blank">
                    Lien du projet&nbsp;
                    </a> 
                    <i className="fa-brands fa-github"/>
                </button>
            </div>
        </div>

        <div className="flex flex-row items-center gap-6 my-8">
            <SwiperCarousel images={Mini_project} />
            <div className="w-[60%]">
                <h4 className="text-2xl font-semibold mb-2">Entrainement au JavaScript</h4>
                <p className="text-base leading-relaxed">
                    Avec ce projet réalisé à la suite du cours JavaScript <em>&#40;Grafikart JS&#41;</em> je désirait m&apos;entrainer avec ce nouveau langage. J&apos;ai donc demander à un ami de donner un projet à réaliser <br />
                    <br /> 
                    J&apos;ai donc eu à réaliser un formuaire d&apos;entrée de noms dans une liste, en utilisant les langages HTML et JavaScript. <br />
                    <br />
                    Mes principales difficultés ont été la découverte du langage JavaScript ainsi que la compréhension des fonctions, qui étaient particulièrement difficiles pour moi.
                </p>
                <button className="flex-0.5 bg-orange-400 rounded-full hover:bg-orange-500 px-8 py-3 my-3 focus:bg-amber-600 text-center" >
                    <a href="https://github.com/gabriel-mockers-nws/Mini-projets" target="_blank">
                    Lien du projet&nbsp;
                    </a> 
                    <i className="fa-brands fa-github"/>
                </button>
            </div>
        </div>

        <div className="flex flex-row-reverse items-center gap-6 my-8">
            <img src="/projets/DevWeb/vite+react.png" alt="Action Marketing" className="h-[27vh] w-[60vh] "/>
            <div className="w-[60%]">
                <h4 className="text-2xl font-semibold mb-2">Réalisation portfolio</h4>
                <p className="text-base leading-relaxed">
                    Ce projet est mon plus gros projet personnel qui est aussi pour ma formation. Il s&apos;agit du portage de mon ancien portfolio réalisé avec WordPress en langage de développement. Pour le réalisé, j&apos;ai choisit d&apos;utiliser React et de le styliser avec tailwindCSS 4.1. Il me sera utile pour ma soutenance de fin d&apos;année et mon passage en deuxième année option développement. <br />
                    <br /> 
                    Mes principales difficultés rencontrées ont été la découverte de React ainsi que de Tailwind, me donnant un véritable défit à la réalisation de ce projet. <br /> 
                    J&apos;ai choisit ces deux framework pour leurs simplification du code, et du chargement des pages, la possibilité de les lier entres-elles, comme l&apos;atteste cette page projet. 
                </p>
                <button className="flex-0.5 bg-orange-400 rounded-full hover:bg-orange-500 px-8 py-3 my-3 focus:bg-amber-600 text-center" >
                    <a href="https://github.com/gabriel-mockers-nws/Portfolio-Gmockers-vite" target="_blank">
                    Lien du projet
                    </a> 
                    <i className="fa-solid fa-diagram-project"/>
                </button>
            </div>
        </div>
        </>
    );
}

export default DevWeb;