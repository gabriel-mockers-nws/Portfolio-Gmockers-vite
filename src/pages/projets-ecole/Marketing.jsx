
import Article from "../../components/Article";

export const Marketing = () => {

    return (
        <>
        <Article
                title="Persona"
                imageType="image"
                images="/projets/Marketing/Persona.svg"
                reverse={false}
                >
                    Ce projet représente la création d&apos;un persona, la compréhension des attentes d&apos;une cible, connaitre ses besoins, ses craintes, et comment bien la représenter pour adapter notre campagne de communication.
        </Article>

        <Article
            title="Action Marketing"
            imageType="image"
            images="/projets/Marketing/action-marketing.png"
            reverse={true}
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
                reverse={false}
                >
                    Nous avions pour devoir de réaliser le site de vente du BDE de la Normandie Web school à partir de la maquette figma conçue auparavant &#40;voir projet UX/UI dans l&apos;onglet communication graphique&#41;. Le tout en respectant une charte graphique déjà existante.
        </Article>
        </>
    );
}

export default Marketing;