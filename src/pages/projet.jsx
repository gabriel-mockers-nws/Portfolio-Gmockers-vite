import Article from "../components/Article";

export const Projects = () => {;
  return (
    <>
    <Article
        title="Projets déveleppement web"
        imageType="image"
        images="/img/Developpement/vite+react.png"
        reverse={false}
        buttons={[
            {
            label: "Voir le projet",
            href: "https://github.com/gabriel-mockers-nws/Portfolio-Gmockers-vite",
            iconClass: "fa-brands fa-github",
            isExternal: true
            },
            {
              label: "Voir plus de projets developpement",
              href: "/DevProjects",
              }
        ]}
        >
          Dans cette partie je vous présente tous mes projet de développement web. <br /> 
    </Article>

    <Article
        title="Mes autres projets"
        imageType="image"
        images="/img/OtherProjects/action-marketing.png"
        reverse={true}
        buttons={[
            {
            label: "Voir le projet",
            href: "https://www.canva.com/design/DAGba5z4tPo/X7pvPWmWuby2yWPIWkIPqg/edit",
            iconClass: "fa-solid fa-diagram-project",
            isExternal: true
            },
            {
              label: "Voir plus d'autres projets",
              href: "/OtherProjects",
            }
        ]}
        >
            Dans cette partie je vous présente tous mes autres projets qui sont principalement des projet d&apos;école. <br />
    </Article>

    </>
  );
};

export default Projects;