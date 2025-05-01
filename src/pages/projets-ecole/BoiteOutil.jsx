
import Article from "../../components/Article";


const ImagesToolBox = [
    "/projets/BoiteOutil/projet-photo/face.JPG",
    "/projets/BoiteOutil/projet-photo/profil.JPG",
];

export const ToolBox = () => {

    return (
        <>
        <Article
            title="Projet blog musical"
            imageType="image"
            images="/projets/BoiteOutil/soundspire.png"
            reverse={false}
            >
                Nous avions eu, comme premier projet d&apos;intégration web, la création d&apos;un blog en groupe. Dans notre groupe nous avions choisit la conception d&apos;un blog musical, recensant les dernières sortie de musique et concerts.
                En tant que groupe, nous devions nous mettre d&apos;accord tous ensemble sur toutes modifications, ajout et apparance sur le site. Nous avions également travailler en collaboration sur un même répository GitHub. 
        </Article>
        
        <Article
            title="Contrôle HTML et CSS"
            imageType="image"
            images="/projets/BoiteOutil/controle-html-css.png"
            reverse={true}
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
            title="Refonte du Site Handisup"
            imageType="image"
            images="/projets/BoiteOutil/handisup.png"
            reverse={false}
            >
                Pour ce projet, nous devions refaire le site d&apos;handisup qui était vieillissant. N&apos;étant plus déctualité, il était donc convenue de le moderniser en gardant en idée l&apos;accessibilité et les informations principales demandées par le client. 
        </Article>

        <Article
            title="Projet Photo"
            imageType="carousel"
            images={ImagesToolBox}
            reverse={true}
            >
                Nous avions pour devoir de réaliser le site de vente du BDE de la Normandie Web school à partir de la maquette figma conçue auparavant &#40;voir projet UX/UI dans l&apos;onglet communication graphique&#41;. Le tout en respectant une charte graphique déjà existante.
        </Article>

        <Article
            title="Projet Vidéo"
            imageType="video" // Ici, on indique qu'il s'agit d'une vidéo YouTube
            images="NSnTVHA555c" // L'ID de la vidéo YouTube
            reverse={false}
            >
                Ici, nous devions choisir un sujet de vidéo, créer la note d&apos;intention et le storyboard de la vidéo. <br />
                Nous aions également dû la tournée, pour ce faire, choisir le lieu de tournage, la lumière, le son et tout ce qui doit être fait pour un petit court-métrage. <br />
                Ensuite, il nous restait à faire le montage, dérush ce que nous avions fait, et tout mettre en ordre. Pour cela, nous avons utiliser Adobe Première. <br /> 
                C&apos;était un projet personnel ou en groupe, dans ce cas nous étions deux et nous avons choisit de parodier une scène du film &quot;La Cité de la peur&quot; sortie en 1994.
        </Article>

        </>
    );
}

export default ToolBox;