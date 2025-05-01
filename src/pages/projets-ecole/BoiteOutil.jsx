import SwiperCarousel from "../../components/SwiperCarousel";
import Button from "../../components/Button";


const ImagesToolBox = [
    "/projets/BoiteOutil/projet-photo/face.JPG",
    "/projets/BoiteOutil/projet-photo/profil.JPG",
];

export const ToolBox = () => {

    return (
        <>
        <div className="flex flex-row items-center gap-8 my-8" >
            <img src="/projets/BoiteOutil/soundspire.png" alt="Présentation-persona" className="h-[27vh] w-[60vh]  " />
            <div  className="w-[60%]">
                <h4 className="text-xl font-semibold mb-2">Projet blog musical</h4>
                <p className="text-base leading-relaxed">
                    Nous avions eu, comme premier projet d&apos;intégration web, la création d&apos;un blog en groupe. Dans notre groupe nous avions choisit la conception d&apos;un blog musical, recensant les dernières sortie de musique et concerts.
                    En tant que groupe, nous devions nous mettre d&apos;accord tous ensemble sur toutes modifications, ajout et apparance sur le site. Nous avions également travailler en collaboration sur un même répository GitHub. 
                </p>
            </div>
        </div>
        
        <div className="flex flex-row-reverse items-center gap-6 my-8">
            <img src="/projets/BoiteOutil/controle-html-css.png" alt="Action Marketing" className="h-[27vh] w-[60vh] "/>
            <div className="w-[60%]">
                <h4 className="text-xl font-semibold mb-2">Contrôle HTML et CSS</h4>
                <p className="text-base leading-relaxed">
                    Pour le contôle HTML et CSS, nous avion à faire l&apos;intégration d&apos;une page web à part d&apos;une maquette figma fournie. Elle devais être faite au pixel perfect. <br /><em>note obtenue : 21/20</em>
                </p>
                <Button href={"https://github.com/gabriel-mockers-nws/controle-html-css"} isExternal>Lien du projet &nbsp;<i className="fa-brands fa-github"/></Button>&nbsp;
                &nbsp;<Button href={"https://gabriel-mockers-nws.github.io/controle-html-css/"} isExternal>GitHub Pages &nbsp;<i className="fa-brands fa-github"/></Button>
            </div>
        </div>

        <div className="flex flex-row items-center gap-8 my-8" >
            <img src="/projets/BoiteOutil/handisup.png" alt="Présentation-persona" className="h-[27vh] w-[60vh]  " />
            <div  className="w-[60%]">
                <h4 className="text-xl font-semibold mb-2">Refonte du Site Handisup</h4>
                <p className="text-base leading-relaxed">
                    Pour ce projet, nous devions refaire le site d&apos;handisup qui était vieillissant. N&apos;étant plus déctualité, il était donc convenue de le moderniser en gardant en idée l&apos;accessibilité et les informations principales demandées par le client. 
                </p>
            </div>
        </div>

        <div className="flex flex-row-reverse items-center gap-6 my-8">
            <SwiperCarousel images={ImagesToolBox} />
            <div  className="w-[60%]">
                <h4 className="text-xl font-semibold mb-2">Projet Photo</h4>
                <p  className="text-base leading-relaxed">
                    Nous avions pour devoir de réaliser le site de vente du BDE de la Normandie Web school à partir de la maquette figma conçue auparavant &#40;voir projet UX/UI dans l&apos;onglet communication graphique&#41;. Le tout en respectant une charte graphique déjà existante. 
                </p>
            </div>
        </div>

        <div className="flex flex-row items-center gap-8 my-8" >
        <iframe
        src="https://www.youtube.com/embed/NSnTVHA555c?si=3QixNLyxJnH1SMwA"
        title="YouTube video player"
        className="h-[27vh] w-[60vh] rounded-md shadow-md"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        ></iframe>
            <div  className="w-[60%]">
                <h4 className="text-xl font-semibold mb-2">Projet Vidéo</h4>
                <p className="text-base leading-relaxed">
                    Ici, nous devions choisir un sujet de vidéo, créer la note d&apos;intention et le storyboard de la vidéo. <br />
                    Nous aions également dû la tournée, pour ce faire, choisir le lieu de tournage, la lumière, le son et tout ce qui doit être fait pour un petit court-métrage. <br />
                    Ensuite, il nous restait à faire le montage, dérush ce que nous avions fait, et tout mettre en ordre. Pour cela, nous avons utiliser Adobe Première. <br /> 
                    C&apos;était un projet personnel ou en groupe, dans ce cas nous étions deux et nous avons choisit de parodier une scène du film &quot;La Cité de la peur&quot; sortie en 1994. 
                </p>
            </div>
        </div>
        </>
    );
}

export default ToolBox;