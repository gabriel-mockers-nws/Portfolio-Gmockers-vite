import Article from "../../components/Article";

const ImagesUX_UI = [
    "/projets/ComGraph/BDEShop/maquette.png",
    "/projets/ComGraph/BDEShop/BDEShopD1.png",
    "/projets/ComGraph/BDEShop/BDEShopM1.png",
    "/projets/ComGraph/BDEShop/BDEShopM2.png",
];


export const ComGraph = () => {

    return (
        <>
        <Article
            title="BDE Shop"
            imageType="carousel"
            images={ImagesUX_UI}
            reverse={false}
            >
                Dans ce projet, nous devion faire le wireframe &#40;Image 1&#41; ainsi que le maquettage d&apos;un sitre de e-commerce de vente pour des goodies du BDE de la Normandie Web School. Pour ce faire, nous avons appris à utiliser Figma. <br /> &#40;Voir projet Marketing pour voir la réalisation de ce site&#41;
        </Article>
        </>
    );
}

export default ComGraph;