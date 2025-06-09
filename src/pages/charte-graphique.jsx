import CharteArticle from "../components/CharteArticle"
import LogoVariant from "../components/LogoVariant";

export const CharteGraph = () => {
    return (
        <>
            <h3 className="text-center m-19 text-3xl font-Orbitron font-black">Ma charte Graphique</h3>

            <CharteArticle
                title='Présentation du logo'
                imageType="image"
                images="img/Logo-GM/logo.png"
                >
                    <ul className="list-style ml-6">
                        <li>
                            <strong>Couleurs:</strong>
                            <ul className="list-circle ml-6">
                                <li><em>Le bleu #36b8f8 :</em> Un bleu clair, se mélangeant un peu au rose, donnant une ambiance douce au logo.  </li>
                                <li><em>Le rose #f900e0 :</em> Le rose quant à lui, rappel des couleur présente sur le site.</li>
                                <li><em>L&apos;orange #fa7200 :</em> Rappel le soleil présent dans l&apos;image de mon header</li>
                            </ul>
                        </li> 
                        <li>
                            <strong>Formes:</strong>
                            <ul className="list-circle ml-6">
                                <li><em>Fond transparent :</em> Le fond transparent sert à ne pas masqué le background du site.</li>
                                <li><em>Forme arrondie : </em> Une forme ronde, rappelant les enseignes de magasin néons.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Graphisme général:</strong>
                            <ul className="list-circle ml-6">
                                <li><em>Les initiales :</em> Sert à m&apos;identifier, dans le but de savoir à qui appartien ce logo.</li>
                                <li><em>Ambiance : </em> L&apos;ambiance retranscrite est dans la continiuété de mon site, un ambiance synthwave, neonwave.</li>
                            </ul>
                        </li>
                    </ul>
            </CharteArticle>

            <CharteArticle
                title="Typographie"
            >
                <strong className="font-Orbitron font-black">Orbitron</strong> <br />
                <p className="font-Orbitron">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus voluptas voluptate officia qui ipsum fugiat corporis magni veritatis quos accusantium.</p><br />
                <br />
                <strong className="font-inter">Inter</strong>
                <p className="font-inter">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quo aliquam aperiam quae iure vero eligendi? Et ex sequi odit?</p>
            </CharteArticle>

            <CharteArticle
                title="Couleurs"
                colors={[
                    { hex: '#fb923c' },
                    { hex: '#f97316' },
                    { hex: '#a855f7,#ec4899', gradient: true }
                ]}
                >
                Ici sont présentées les couleurs majoritairements présentes sur le site. 
            </CharteArticle>

            <LogoVariant
                title="Variantes du logo"
                variants={[
                    { src: 'img/Logo-GM/logo.png', caption: 'Logo principal' },
                    { src: 'img/Logo-GM/logo-name.png', caption: 'Logo avec mon nom' },
                    { src: 'img/Logo-GM/logo-GM-sombre.png', caption: 'Version sombre' },
                ]}
            />

            <LogoVariant
                title="Interdits du logo"
                variants={[
                    { src: 'img/Logo-GM/colors-changed.png', caption: 'Interdit de changer la couleur' },
                    { src: 'img/Logo-GM/logo-white.png', caption: 'Interdit de mettre en blanc' },
                ]}
            />
        </>
    );
};

export default CharteGraph;