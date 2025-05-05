import Article from "../components/Article";
import Button from "../components/Button";

const ImagesToolBox = [
    "/projets/BoiteOutil/projet-photo/face.JPG",
    "/projets/BoiteOutil/projet-photo/profil.JPG",
];

const ImagesUX_UI = [
    "/projets/ComGraph/BDEShop/maquette.png",
    "/projets/ComGraph/BDEShop/BDEShopD1.png",
    "/projets/ComGraph/BDEShop/BDEShopM1.png",
    "/projets/ComGraph/BDEShop/BDEShopM2.png",
];

export const OtherProjects = () => {
    return (
        <>
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
            images="/projets/Marketing/Persona.svg"
            reverse={true}
            >
                Ce projet représente la création d&apos;un persona, la compréhension des attentes d&apos;une cible, connaitre ses besoins, ses craintes, et comment bien la représenter pour adapter notre campagne de communication.
        </Article>
        
        <Article
            title="Action Marketing"
            imageType="image"
            images="/projets/Marketing/action-marketing.png"
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
            images="/projets/Marketing/BDEShopD3.png"
            reverse={true}
            >
                Nous avions pour devoir de réaliser le site de vente du BDE de la Normandie Web school à partir de la maquette figma conçue auparavant &#40;voir projet UX/UI dans l&apos;onglet communication graphique&#41;. Le tout en respectant une charte graphique déjà existante.
        </Article>

         <div className="flex justify-center my-10">
            <Button href={"/projet"}>Revenir à la page projets</Button>
        </div>
        </>
    );
}

export default OtherProjects;