import ImageCarousel from "../../components/Carousel";

const ImagesUX_UI = [
    "/projets/ComGraph/BDEShop/maquette.png",
    "/projets/ComGraph/BDEShop/BDEShopD1.png",
    "/projets/ComGraph/BDEShop/BDEShopM1.png",
    "/projets/ComGraph/BDEShop/BDEShopM2.png",
];


export const ComGraph = () => {

    return (
        <>
        <div className="flex flex-row items-center gap-6 my-8">
            <ImageCarousel images={ImagesUX_UI} />
            <div  className="w-[60%]">
                <h4 className="text-xl font-semibold mb-2">BDE Shop</h4>
                <p  className="text-base leading-relaxed">
                    Dans ce projet, nous devion faire le wireframe &#40;Image 1&#41; ainsi que le maquettage d&apos;un sitre de e-commerce de vente pour des goodies du BDE de la Normandie Web School. Pour ce faire, nous avons appris à utiliser Figma. <br /> &#40;Voir projet Marketing pour voir la réalisation de ce site&#41;
                </p>
            </div>
        </div>
        </>
    );
}

export default ComGraph;