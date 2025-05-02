import Article from "../../components/Article"; 

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
            title="Entrainement au JavaScript"
            imageType="image"
            images="/projets/DevWeb/vite+react.png"
            reverse={true}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://github.com/gabriel-mockers-nws/Portfolio-Gmockers-vite",
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

        </>
    );
}

export default DevWeb;