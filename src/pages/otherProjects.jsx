import Article from "../components/Article";
import Button from "../components/Button";

const ImagesToolBox = [
    "/img/OtherProjects/projet-photo/face.JPG",
    "/img/OtherProjects/projet-photo/profil.JPG",
];

const ImagesUX_UI = [
    "/img/OtherProjects/BDEShop/maquette.png",
    "/img/OtherProjects/BDEShop/BDEShopD1.png",
    "/img/OtherProjects/BDEShop/BDEShopM1.png",
    "/img/OtherProjects/BDEShop/BDEShopM2.png",
];

const LogoVectoriels = [
    "/img/OtherProjects/logo-vectoriel/logo-vec-1.png",
    "/img/OtherProjects/logo-vectoriel/logo-vec-2.png",
    "/img/OtherProjects/logo-vectoriel/logo-vec-3.png",
    "/img/OtherProjects/logo-vectoriel/logo-vec-4.png",
    "/img/OtherProjects/logo-vectoriel/logo-vec-5.png",
    "/img/OtherProjects/logo-vectoriel/logo-vec-6.png",
];

export const OtherProjects = () => {
    return (
        <>
        <h2 className="text-center m-19 text-3xl font-Orbitron font-black">Autres projets</h2>
        <Article
            title="Projet Photo"
            imageType="carousel"
            images={ImagesToolBox}
            reverse={false}
            >
                Nous avions pour devoir de réaliser le site de vente du BDE de la Normandie Web school à partir de la maquette figma conçue auparavant &#40;voir projet UX/UI dans l&apos;onglet communication graphique&#41;. Le tout en respectant une charte graphique déjà existante.
        </Article>

        <Article
            title="Projet Vidéo"
            imageType="video" // Ici, on indique qu'il s'agit d'une vidéo YouTube
            images="NSnTVHA555c" // L'ID de la vidéo YouTube
            reverse={true}
            >
                Ici, nous devions choisir un sujet de vidéo, créer la note d&apos;intention et le storyboard de la vidéo. <br />
                Nous aions également dû la tournée, pour ce faire, choisir le lieu de tournage, la lumière, le son et tout ce qui doit être fait pour un petit court-métrage. <br />
                Ensuite, il nous restait à faire le montage, dérush ce que nous avions fait, et tout mettre en ordre. Pour cela, nous avons utiliser Adobe Première. <br /> 
                C&apos;était un projet personnel ou en groupe, dans ce cas nous étions deux et nous avons choisit de parodier une scène du film &quot;La Cité de la peur&quot; sortie en 1994.
        </Article>

        <Article
            title="BDE Shop"
            imageType="carousel"
            images={ImagesUX_UI}
            reverse={false}
            >
                Dans ce projet, nous devion faire le wireframe &#40;Image 1&#41; ainsi que le maquettage d&apos;un sitre de e-commerce de vente pour des goodies du BDE de la Normandie Web School. Pour ce faire, nous avons appris à utiliser Figma. <br /> &#40;Voir projet Marketing pour voir la réalisation de ce site&#41;
        </Article>

        <Article
            title="Persona"
            imageType="image"
            images="/img/OtherProjects/Persona.svg"
            reverse={true}
            >
                Ce projet représente la création d&apos;un persona, la compréhension des attentes d&apos;une cible, connaitre ses besoins, ses craintes, et comment bien la représenter pour adapter notre campagne de communication.
        </Article>
        
        <Article
            title="Action Marketing"
            imageType="image"
            images="/img/OtherProjects/action-marketing.png"
            reverse={false}
            buttons={[
                {
                label: "Voir le projet",
                href: "https://www.canva.com/design/DAGba5z4tPo/X7pvPWmWuby2yWPIWkIPqg/edit",
                iconClass: "fa-solid fa-diagram-project",
                isExternal: true
                }
            ]}
            >
                Réalisation d&apos;une études marketing pour la société GreenWey. Cette étude m&apos;a permis de comprendre comment une action marketing est étudiée avant de la mettre en place.
        </Article>

        <Article
            title="BDE Shop"
            imageType="image"
            images="/img/OtherProjects/BDEShopD3.png"
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

        <div className="flex justify-center my-10">
            <Button href={"/projet"}>Revenir à la page projets</Button>
        </div>
        </>
    );
}

export default OtherProjects;