import ImageCarousel from "../../components/Carousel";

const ImagesMarketing = [
    "/projets/Marketing/BDEShop/BDEShopD1.png",
    "/projets/Marketing/BDEShop/BDEShopD3.png",
    "/projets/Marketing/BDEShop/BDEShopM1.png",
    "/projets/Marketing/BDEShop/BDEShopM2.png",
];

export const Marketing = () => {

    return (
        <>
        <div className="flex flex-row items-center gap-8 my-8" >
            <img src="/projets/Marketing/Persona.svg" alt="Présentation-persona" className="h-[27vh] w-[60vh]  " />
            <div  className="w-[60%]">
                <h4 className="text-xl font-semibold mb-2">Persona</h4>
                <p className="text-base leading-relaxed">
                    Ce projet représente la création d&apos;un persona, la compréhension des attentes d&apos;une cible, connaitre ses besoins, ses craintes, et comment bien la représenter pour adapter notre campagne de communication.
                </p>
            </div>
        </div>
        
        <div className="flex flex-row-reverse items-center gap-6 my-8">
            <img src="/projets/Marketing/action-marketing.png" alt="Action Marketing" className="h-[27vh] w-[60vh] "/>
            <div className="w-[60%]">
                <h4 className="text-xl font-semibold mb-2">Action Marketing</h4>
                <p className="text-base leading-relaxed">
                    Réalisation d&apos;une études marketing pour la société GreenWey. Cette étude m&apos;a permis de comprendre comment une action marketing est étudiée avant de la mettre en place.
                </p>
                <button className="flex-0.5 bg-orange-400 rounded-full hover:bg-orange-500 px-8 py-3 mx-2 focus:bg-amber-600 text-center" >
                    <a href="https://www.canva.com/design/DAGba5z4tPo/X7pvPWmWuby2yWPIWkIPqg/edit" target="_blank">
                    Lien du projet
                    </a> 
                    <i className="fa-solid fa-diagram-project"/>
                </button>
            </div>
        </div>

        <div className="flex flex-row items-center gap-6 my-8">
            <ImageCarousel images={ImagesMarketing} />
            <div  className="w-[60%]">
                <h4 className="text-xl font-semibold mb-2">BDE Shop</h4>
                <p  className="text-base leading-relaxed">
                    Nous avions pour devoir de réaliser le site de vente du BDE de la Normandie Web school à partir de la maquette figma conçue auparavant &#40;voir projet UX/UI dans l&apos;onglet communication graphique&#41;. Le tout en respectant une charte graphique déjà existante. 
                </p>
            </div>
        </div>
        </>
    );
}

export default Marketing;