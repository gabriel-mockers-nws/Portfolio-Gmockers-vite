export const ToolBox = () => {

    return (
        <>
        <div>
            <div>
                <h4>Persona</h4>
                <p>Ce projet représente la création d&apos;un persona, la compréhension des attentes d&apos;une cible, connaitre ses besoins, ses craintes, et comment bien la représenter pour adapter notre campagne de communication.</p>
            </div>
            <div>
                <img src="/projets/persona.svg" alt="Présentation-persona" />
            </div>
        </div>
        <div>
            <div>
                <img src="/projets/action-marketing.png" alt="Action Marketing" />
            </div>
            <div>
                <h4>Action Marketing</h4>
                <p>Réalisation d&apos;une études marketing pour la société GreenWey. Cette étude m&apos;a permis de comprendre comment une action marketing est étudiée avant de la mettre en place.</p>
                <button className="flex-0.5 bg-orange-400 rounded-full hover:bg-orange-500 px-8 py-3 mx-2 focus:bg-amber-600 text-center" >
                    <a href="https://www.canva.com/design/DAGba5z4tPo/X7pvPWmWuby2yWPIWkIPqg/edit">Lien du projet</a> <i className="fa-solid fa-diagram-project"/>
                </button>
            </div>
        </div>
        </>
    );
}

export default ToolBox;