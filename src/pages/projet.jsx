import Article from "../components/Article";

export const Projects = () => {;
  return (
    <>  

      <Article
      title="Projets marketing & communication digital"
      imageType="image"
      images="/img/otherProjects/action-marketing.png"
      reverse={false}
      buttons={[
          {
          label: "Voir le projet",
          href: "https://www.canva.com/design/DAGba5z4tPo/IxB5CXkZe4S9jc1gqLr5vA/view?utm_content=DAGba5z4tPo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hefe0c8c6b1",
          iconClass: "fa-solid fa-diagram-project",
          isExternal: true
          },
          {
            label: "Voir plus d'autres projets",
            href: "/OtherProjects",
          }
      ]}
      >
          Dans cette partie je vous présente tous mes projets marketing et communication digital. <br />
      </Article>

      <Article
          title="Projets déveleppement web"
          imageType="image"
          images="/img/Developpement/vite+react.png"
          reverse={true}
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

    </>
  );
};

export default Projects;