import Article from "../components/Article"; 

const LeBonpoil = [
    "/img/Developpement/Le-bon-poil/mainpage1.png",
    "/img/Developpement/Le-bon-poil/mainpage2.png",
    "/img/Developpement/Le-bon-poil/contact.png",
];

const Blog = [
    "/img/Developpement/Blog/home1.png",
    "/img/Developpement/Blog/home2.png",
    "/img/Developpement/Blog/article.png",
];

const Mini_project = [
    "/img/Developpement/Mini-projet/home.png",
    "/img/Developpement/Mini-projet/script.png",
];



export const DevProjects = () => {
    return (
        <>
        <h2 className="text-center m-10 text-3xl font-Orbitron font-black">Projets développement</h2>
        <Article
            title="Formation HTML et débuts CSS"
            imageType="carousel"
            images={LeBonpoil}
            reverse={false}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://github.com/gabriel-mockers-nws/Restaurant-Le-Bon-Poil",
                iconClass: "fa-brands fa-github",
                isExternal: true
                }
            ]}
            >
                Ce projet représente mes débuts dans mon apprentissage personnel de l&apos;HTMl et du CSS. Il s&apos;agit d&apos;un site pour un restaurant fictif. <br />
                Mes principales difficultées étaient la découverte des deux langages qui, à ce moment, était totalement nouveau pour moi.  <br />
                <br />
                Ce projet à été fait en suivant un cours sur internet <em>&#40;Grafikart HTML&#41;</em>. Cela m&apos;a permis de comprendre les bases de ces deux langages et la construction d&apos;un site web.
        </Article>


        <Article
            title="Confirmation HTML et CSS"
            imageType="carousel"
            images={Blog}
            reverse={true}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://github.com/gabriel-mockers-nws/Demoblog",
                iconClass: "fa-brands fa-github",
                isExternal: true
                }
            ]}
            >
                    Ce second projet m&apos;a permis de me confimer dans le langage HTMl et d&apos;en apprendre bien plus sur le CSS. Ses classes, flex et grid, etc. Comment bien structurer une page web en s&apos;appyant sur une maquette Figma.<br />
                Mes principales difficultées étaient la découverte du CSS et de ses spécificités. <br />
                <br />
                Ce projet à été fait en suivant un cours sur internet <em>&#40;Grafikart CSS&#41;</em>. Cela m&apos;a permis de comprendre les spécificité du langage CSS  et les possibilités de style d&apos;un site web.
        </Article>

        <Article
            title="Entrainement au JavaScript"
            imageType="carousel"
            images={Mini_project}
            reverse={false}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://github.com/gabriel-mockers-nws/Mini-projets",
                iconClass: "fa-brands fa-github",
                isExternal: true
                }
            ]}
            >
                Avec ce projet réalisé à la suite du cours JavaScript <em>&#40;Grafikart JS&#41;</em> je désirait m&apos;entrainer avec ce nouveau langage. J&apos;ai donc demander à un ami de donner un projet à réaliser <br />
                <br /> 
                J&apos;ai donc eu à réaliser un formuaire d&apos;entrée de noms dans une liste, en utilisant les langages HTML et JavaScript. <br />
                <br />
                Mes principales difficultés ont été la découverte du langage JavaScript ainsi que la compréhension des fonctions, qui étaient particulièrement difficiles pour moi.
        </Article>

        <Article
            title="Projet blog musical"
            imageType="image"
            images="/img/Developpement/soundspire.png"
            reverse={true}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://github.com/gabriel-mockers-nws/html-css-group-4",
                iconClass: "fa-brands fa-github",
                isExternal: true
                }
            ]}
            >
                Nous avions eu, comme premier projet d&apos;intégration web, la création d&apos;un blog en groupe. Dans notre groupe nous avions choisit la conception d&apos;un blog musical, recensant les dernières sortie de musique et concerts.
                En tant que groupe, nous devions nous mettre d&apos;accord tous ensemble sur toutes modifications, ajout et apparance sur le site. Nous avions également travailler en collaboration sur un même répository GitHub. 
        </Article>

        <Article
            title="Contrôle HTML et CSS"
            imageType="image"
            images="/img/Developpement/controle-html-css.png"
            reverse={false}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://github.com/gabriel-mockers-nws/controle-html-css",
                iconClass: "fa-brands fa-github",
                isExternal: true
                },
                {
                label: "GitHub Pages",
                href: "https://gabriel-mockers-nws.github.io/controle-html-css/",
                iconClass: "fa-brands fa-github",
                isExternal: true
                }
            ]}
            >
                Pour le contôle HTML et CSS, nous avion à faire l&apos;intégration d&apos;une page web à part d&apos;une maquette figma fournie. Elle devais être faite au pixel perfect. <br /><em>note obtenue : 21/20</em>
        </Article>
        </>
    );
}

export default DevProjects;