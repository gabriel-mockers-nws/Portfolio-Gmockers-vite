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

const Stage = [
    "/img/Developpement/Stage/DB.png",
    "/img/Developpement/Stage/Questionnary2.png"
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
                En tant que groupe, nous devions nous mettre d&apos;accord tous ensemble sur toutes modifications, ajout et apparance sur le site. Nous avions donc dû apprendre à utiliser GitHub et à travailler en équipe. <br /> 
                Nous avions choisit l&apos;HTML pour la strure, le CSS pour la mise en page et du JavaScript pour la logique <br />
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

        <Article
            title="Contrôle HTML et CSS"
            imageType="image"
            images="/img/Developpement/exercice-stage.png"
            reverse={true}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://github.com/gabriel-mockers-nws/stage-manoir-argeuil",
                iconClass: "fa-brands fa-github",
                isExternal: true
                },
                {
                label: "GitHub Pages",
                href: "https://gabriel-mockers-nws.github.io/stage-manoir-argeuil/",
                iconClass: "fa-brands fa-github",
                isExternal: true
                }
            ]}
            >
                Ce projet à été demandé par l&apos;entreprise dans le but de choisir un stagiaire. Il a été demandé d&apos;effectuer un questionnaire de satisfaction simple avec quelques questions. Il m&apos;a permis d&apos;être sélectionné par l&apos;entreprise et d&apos;effectuer mon stage d&apos;année 1 avec eux. <br /> 
                J&apos;ai choisit d&apos;utiliser principalement l&apos;HTML pour la structure et le CSS pour la mise en page. J&apos;ai également utiliser du JavaScript pour la rénitialisation du formulaire à l&apos;envoi.  <br />
        </Article>

        <Article
            title="Questionnaire de satisfaction"
            imageType="carousel"
            images={Stage}
            reverse={false}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://github.com/gabriel-mockers-nws/Satisfaction-questionnary",
                iconClass: "fa-brands fa-github",
                isExternal: true
                }
            ]}
            >
                Pour mon stage, je dois réaliser un questionnaire de satisfaction pour l&apos;entreprise, le Manoir d&apos;Argeuil. Ce questionnaire doit être relié à une base de donnée que j&apos;ai également eu à créer et lié à mon formulaire.  <br />
                <br />
                J&apos;ai choisit d&apos;utiliser le langage PHP, aussi bien pour la création de la base de donnée que pour le formulaire. J&apos;ai également utilisé le langage SQL pour la création de la base de donnée et l&apos;insertion des données. <br />
                <br />
                Le langage JavaScript à également été utilisé pour des conditions d&apos;afichage de certaines question en fonction des réponses. <br />
                Toute la difficulté de ce projet réside dans la création de la base de donnée et la liaison entre le formulaire et la base de donnée, qui est une première pour moi.
        </Article>

        <Article
            title="Refonte du Site Handisup"
            imageType="image"
            images="/projets/BoiteOutil/handisup.png"
            reverse={true}
            >
                Pour ce projet réalisé en groupe, nous devions refaire le site d&apos;handisup qui était vieillissant. N&apos;étant plus déctualité, il était donc convenue de le moderniser en gardant en idée l&apos;accessibilité et les informations principales demandées par le client. Pour ce faire nous avons utiliser WordPress
        </Article>


        </>
    );
}

export default DevProjects;