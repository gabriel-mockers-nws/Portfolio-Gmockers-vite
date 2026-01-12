import Article from "../components/Article";
import Button from "../components/Button";

const ImagesToolBox = [
    "/img/otherProjects/projet-photo/face.JPG",
    "/img/otherProjects/projet-photo/profil.JPG",
];

// const ImagesUX_UI = [
//     "/img/otherProjects/BDEShop/maquette.png",
//     "/img/otherProjects/BDEShop/BDEShopD1.png",
//     "/img/otherProjects/BDEShop/BDEShopM1.png",
//     "/img/otherProjects/BDEShop/BDEShopM2.png",
// ];

const LogoVectoriels = [
    "/img/otherProjects/logo-vectoriel/logo-vec-1.png",
    "/img/otherProjects/logo-vectoriel/logo-vec-2.png",
    "/img/otherProjects/logo-vectoriel/logo-vec-3.png",
    "/img/otherProjects/logo-vectoriel/logo-vec-4.png",
    "/img/otherProjects/logo-vectoriel/logo-vec-5.png",
    "/img/otherProjects/logo-vectoriel/logo-vec-6.png",
];

const prodContenus = [
    "/img/otherProjects/prod-contenus/production-contenu1.png",
    "/img/otherProjects/prod-contenus/production-contenu2.png",
    "/img/otherProjects/prod-contenus/production-contenu3.png",
    "/img/otherProjects/prod-contenus/production-contenu4.png"
]

const Haribo = [
    "img/otherProjects/Haribo/haribo.png",
    "img/otherProjects/Haribo/haribo2.png",
    "img/otherProjects/Haribo/haribo3.png"
]

export const OtherProjects = () => {
    return (
        <>
        <h3 className="text-center m-19 text-3xl font-Orbitron font-black">Projets marketing et communication digital</h3>

        <Article
            title="Post jeu-concours"
            imageType="image"
            images="/img/otherProjects/Jeu-concours.png"
            reverse={false}
            fullImage={true}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://www.canva.com/design/DAG6XUtdPr0/xBaSM8x2d6kU4CFrb14wdA/view?utm_content=DAG6XUtdPr0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he303670d96",
                iconClass: "fa-solid fa-diagram-project",
                isExternal: true
                }
            ]}>
                Ce post était destiné à un amis et pour son entreprise nouvelle de salon de tatouage appelée Sphynx Tattoo basée en Suisse. Il m&apos;avait demandé de réaliser un post pour un jeu concours sur instagram pour la campagne de Noël mise en ligne début décembre. 
        </Article>

        <Article
            title="Maquette emailing et newsletter"
            imageType="figma"
            images="https://embed.figma.com/design/UBttwsAGO8o2EtXGD2Atyz/Emailing-et-marketing?node-id=0-1&embed-host=share"
            reverse={true}>
                Dans la continuité de la création et présentation de notre nouveau produit Haribo, nous avons dû créer et concevoir les maquettes pour notre campagne emailing et Newsletter.
        </Article>

        <Article
            title="Présentation nouveau produit"
            imageType="carousel"
            images={Haribo}
            reverse={false}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://www.canva.com/design/DAG66TUznRE/vDRHjFWRBAW-gzdVfTrWFA/view?utm_content=DAG66TUznRE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9b10d9eaeb",
                iconClass: "fa-solid fa-diagram-project",
                isExternal: true
                }
            ]}>
                Nous devions imaginer un nouveau produit et en faire toute la présentation, etablir des objectif SMART, ainsi que des exemples de post sur les réseaux et aussi une campagne SMS/Whatsapp.
        </Article>

        <Article
            title="Plan Marketing"
            imageType="image"
            images="/img/otherProjects/fidal.png"
            reverse={true}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://www.canva.com/design/DAG3REs7aNs/KCaaQm5JP1c8qp6NRaDNpg/view?utm_content=DAG3REs7aNs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hebb4074c75",
                iconClass: "fa-solid fa-diagram-project",
                isExternal: true
                }
            ]}>
                Pour ce projet, nous avions à réaliser le plan marketing pour le cabinet d&apos;avocats Fidal, nous devions réaliser une analyse de marché et de la concurence, faire un SWOT, identifier la problématique marketing, définir un objectif SMART, élaborer le plan marketing avec les 4P.  
        </Article>

        <Article
            title="Tripply voyage"
            imageType="image"
            images="/img/otherProjects/tripply.png"
            reverse={false}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://www.canva.com/design/DAG4kPWt0jc/YCqnqK0tLyauIwS0fuorwg/view?utm_content=DAG4kPWt0jc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h84dc0c1f8f",
                iconClass: "fa-solid fa-diagram-project",
                isExternal: true
                },
                {
                label: "Voir le site",
                href: "https://tripply-website-desi-ssp3.bolt.host/",
                iconClass: "fa-solid fa-diagram-project",
                isExternal: true
                }
            ]}>
                Pour ce projet nous devions imaginer une entreprise et établir toute une stratégie en s&apos;aidant uniquement de l&apos;intéligence artificielle, de la stratégie commerciale à l&apos;élaboration du logo et du site web. 
        </Article>


        <Article
            title="Stratégie marketing"
            imageType="image"
            images="/img/otherProjects/mampizza.png"
            reverse={true}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://www.canva.com/design/DAG0je48-Zo/GCuzoi3xDVtNnUmlCSnIow/view?utm_content=DAG0je48-Zo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbd843dc504",
                iconClass: "fa-solid fa-diagram-project",
                isExternal: true
                }
            ]}>
                Ici, nous avions à réalsier la stratégie commerciale pour une pizzeria artisanale du nom de Mam&apos;pizza. <br />
                Dans cette stratégie nous devions : <br />
                - Faire un Audit. <br />
                - Définir les objectifs, cibles et réaliser des personnas <br />
                - Etablir le parcours client <br />
                - Connaitre le tunel d&apos;acquisition. <br />
                - Imaginer des exemple de post pour les différents réseaux sociaux.
        </Article>

        <Article
            title="Charte éditoriale"
            imageType="image"
            images="/img/otherProjects/atelier-aux-lunettes.png"
            reverse={false}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://www.canva.com/design/DAGzzasRsL4/gx0M9P5edhgMShMUkR3Ydw/view?utm_content=DAGzzasRsL4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h430244dfd1",
                iconClass: "fa-solid fa-diagram-project",
                isExternal: true
                }
            ]}>
                Ce projet est dédié à la création et l&apos;élaboration de la charte éditoriale. La comprhéension de la cible, la ligne éditoriale, le calendrider de publications, et quelques exempled e posts à faire pour les réseaux sociaux.
        </Article>

        <Article
            title="Production de contenus"
            imageType="carousel"
            images={prodContenus}
            reverse={true}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://www.canva.com/design/DAGzPfTKpJY/ZFgIdNc_U5Je_Ue8Zx83Qw/view?utm_content=DAGzPfTKpJY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha56705d4ed",
                iconClass: "fa-solid fa-diagram-project",
                isExternal: true
                }
            ]}>
                Ce projet consiste à la production de contenus. Nous avions eu comme consigne de produire du contenue pour La recyclerie, mais aussi de faire un post sur un réseau sicial choisit et de le faire réécrire avec l&apos;IA en indiquant les prompts utiliser. Nous avions aussi à réaliser des post pour trois réseau différents &#40;Linkedin, Instagram et Facebook&#41; en adaptant le message en fonction du réseau. 
        </Article>

        <Article
            title="Maquette questionnaire"
            imageType="figma"
            images="https://embed.figma.com/proto/S7nmbR1txVdpNZipwPrjC5/Odcvl-questionary?node-id=1-2&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&embed-host=share"
            reverse={false}
            >
                Durant mon stage à Odcvl, j&apos;ai d&apos;abord effectué une maquette Figma pour présenter l&apos;aparence que pourrait avoir le questionnaire, afin de savoir si cela leur conviendrait.
        </Article>

        <Article
            title="Projet chaine youtube"
            imageType="figma"
            images="https://embed.figma.com/proto/BDyE3eXuvE4uqFp2kevT6n/Untitled?node-id=1-2&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&embed-host=share"
            reverse={true}
            >
                Nous devions réaliser en projet une chaine youtube sur un sujet de notre choix. Pour ce faire, nous avons dû créer la charte graphique de la chaine, le logo, la bannière, les miniatures des vidéos, et le nom de la chaine. <br />
                Pour ce faire, nous avons utilisé Figma pour la création de la charte graphique,
        </Article>

        <Article
            title="BDE Shop"
            imageType="figma"
            images="https://embed.figma.com/design/VpUzwJL5Tz5EkgRhvKcq0Q/UX---UI?node-id=0-1&embed-host=share" 
            reverse={false}
            >
                Dans ce projet, nous devion faire le wireframe &#40;Image 1&#41; ainsi que le maquettage d&apos;un sitre de e-commerce de vente pour des goodies du BDE de la Normandie Web School. Pour ce faire, nous avons appris à utiliser Figma. <br /> &#40;Voir projet Marketing pour voir la réalisation de ce site&#41;
        </Article>

        <Article
            title="BDE Shop"
            imageType="image"
            images="/img/otherProjects/BDEShopD3.png"
            reverse={true}
            >
                Nous avions pour devoir de réaliser le site de vente du BDE de la Normandie Web school à partir de la maquette figma conçue auparavant &#40;voir projet UX/UI dans l&apos;onglet communication graphique&#41;. Le tout en respectant une charte graphique déjà existante.
        </Article>

        <Article
            title="Logos Vectoriels"
            imageType="carousel"
            images={LogoVectoriels}
            reverse={false}
            >
                Nous avons du apprendre à réaliser des logos en vectoriel, pour ce faire, nous avons utiliser Adobe Ilustrator. Nous devions réimaginer le logo de la Normandie Web School, Nous pouvions changer les couleurs et l&apos;identité graphique de l&apos;école. <br />
                J&apos;ai choisi de représenter sous différentes formes : <br />
                - Une première en m&apos;inspirant de l&apos;ancienne apparance de Google. <br />
                - Une deuxième épurée, assez simple. <br />
                - Une troisième avec une inspiration des formes et police dans les années 1970. <br />
                - Une quatrième pour en faire un produit de Luxe. <br />
                - Une cinquième qui en fait une apparence d&apos;une école plus enfantine, maternelle. <br />
                - Une sixième en m&apos;inspirant des blasons médiéval. 
        </Article>

        <Article
            title="Projet Photo"
            imageType="carousel"
            images={ImagesToolBox}
            reverse={true}
            >
                Dans ce projet, nous devions réaliser un projet photo, trouver un thème, une mise en scène, et apprendre à utiliser un appareil photo hybride. <br />
                Par la suite, nous avons également dû retoucher les photos avec un logiciel de retouche photo, pour cela nous avons utilisé Adobe Lightroom. <br />
        </Article>

        <Article
            title="Projet Vidéo"
            imageType="video"
            images="NSnTVHA555c" // L'ID de la vidéo YouTube
            reverse={false}
            >
                Ici, nous devions choisir un sujet de vidéo, créer la note d&apos;intention et le storyboard de la vidéo. <br />
                Nous aions également dû la tournée, pour ce faire, choisir le lieu de tournage, la lumière, le son et tout ce qui doit être fait pour un petit court-métrage. <br />
                Ensuite, il nous restait à faire le montage, dérush ce que nous avions fait, et tout mettre en ordre. Pour cela, nous avons utiliser Adobe Première. <br /> 
                C&apos;était un projet personnel ou en groupe, dans ce cas nous étions deux et nous avons choisit de parodier une scène du film &quot;La Cité de la peur&quot; sortie en 1994.
        </Article>

        <Article
            title="Persona"
            imageType="image"
            images="/img/otherProjects/Persona.svg"
            reverse={true}
            >
                Ce projet représente la création d&apos;un persona, la compréhension des attentes d&apos;une cible, connaitre ses besoins, ses craintes, et comment bien la représenter pour adapter notre campagne de communication.
        </Article>
        
        <Article
            title="Action Marketing"
            imageType="image"
            images="/img/otherProjects/action-marketing.png"
            reverse={false}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://www.canva.com/design/DAGba5z4tPo/IxB5CXkZe4S9jc1gqLr5vA/view?utm_content=DAGba5z4tPo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hefe0c8c6b1",
                iconClass: "fa-solid fa-diagram-project",
                isExternal: true
                }
            ]}
            >
                Réalisation d&apos;une études marketing pour la société GreenWey. Cette étude m&apos;a permis de comprendre comment une action marketing est étudiée avant de la mettre en place.
        </Article>

        <div className="flex justify-center my-10">
            <Button href={"/projet"}>Revenir à la page projets</Button>
        </div>
        </>
    );
}

export default OtherProjects;