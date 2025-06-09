import TextArticle from "../components/TextArticle";
export const CGU = () => {
    return (
        <>
        <h3 className="text-center m-19 text-3xl font-Orbitron font-black">Conditions générales d&apos;utilisisation</h3>
        
        <TextArticle
        title= "1. Présentation du site"
        >
            Le présent site internet <em>&#40;ci-après, nommé &#171; le site&#187;&#41;</em> a pour utilité de présenter le parcours, les compétences, et projets de <strong>Gabriel MOCKERS</strong>&#x2E;
        </TextArticle>

        <TextArticle
        title= "2. Informations générales"
        >
            <ul className="list-disc ml-6">
                <li><strong>Editeur du site :</strong> Gabriel Mockers</li>
                <li><strong>Email de contact:</strong> gmockers@normandiewebschool.fr</li>
            </ul>
        </TextArticle>

        <TextArticle
        title="3. Propriété intellectuelle"
        >
            Tous les contenus présents sur le site &#40;textes, images, photographies, vidéos, logos, graphismes, etc.&#41; sont la propriété exclusive de <strong>Gabriel MOCKERS</strong>, sauf mention contraire explicite.  
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, par quelque moyen ou procédé que ce soit, est interdite, sauf autorisation écrite préalable de <strong>Gabriel MOCKERS</strong>.  
            Toute exploitation non autorisée du site ou de l’un quelconque de ses éléments sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la propriété intellectuelle.
        </TextArticle>

        <TextArticle
        title="4. Données personnelles"
        >
            Le site ne collecte aucune donnée personnelle à des fins commerciales ou publicitaires.  
            Un formulaire de contact est mis à disposition de l&apos;utilisateur, uniquement dans le but de permettre un échange avec <strong>Gabriel MOCKERS</strong>.  
            Les données transmises via ce formulaire &#40;nom, adresse email, contenu du message&#41; ne sont ni stockées durablement, ni cédées à des tiers, ni utilisées à d&apos;autres fins.  
            Elles sont uniquement utilisées pour permettre à <strong>Gabriel MOCKERS</strong> de répondre à l&apos;utilisateur, puis supprimées.
        </TextArticle>

        <TextArticle
        title="5. Cookies"
        >
            Le site ne utilise aucun cookie ni aucun dispositif de suivi &#40;tracker, script analytique, etc.&#41;.  
            Aucune donnée de navigation n’est enregistrée, et aucune information n’est partagée avec des services tiers.
        </TextArticle>

        <TextArticle
        title="6. Responsabilité"
        >
            <strong>Gabriel MOCKERS</strong> s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour.  
            L’utilisateur du site s’engage à accéder au site avec un matériel récent, ne contenant pas de virus, et avec un navigateur mis à jour.&#160;  
            <strong>Gabriel MOCKERS</strong> ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site.
        </TextArticle>

        <TextArticle
        title="7. Lien hypertexte"
        >
            Le site contien des liens hypertextes qui redirigent vers des sites tiers. <strong>Gabriel MOCKERS</strong> n&apos;exerce aucun contrôle sur ces contenus externes et décline toute responsabilité quant à leur disponibilité, contenu ou utilisation.
        </TextArticle>

        <TextArticle
        title="8. Modification des conditions"
        >
            Les présentes conditions d’utilisation peuvent être modifiées ou complétées à tout moment, sans préavis, en fonction des évolutions du site ou de la législation.  
            Il est conseillé aux utilisateurs de consulter régulièrement cette page afin de prendre connaissance des éventuelles modifications.
        </TextArticle>
        </>
    );
};

export default CGU; 