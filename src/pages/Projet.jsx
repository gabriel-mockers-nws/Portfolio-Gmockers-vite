
import { useState } from "react";
import ToolBox from "./projets-ecole/BoiteOutil";
import ComGraph from "./projets-ecole/ComGraph";
import ComWeb from "./projets-ecole/ComWeb";
import Marketing from "./projets-ecole/Marketing";
import DevWeb from "./projets-perso/DevWeb";
import Pics from "./projets-perso/Photo";

export const Projects = () => {
  const [activeBox, setActiveBox] = useState("ecole");
  const [activeProject, setActiveProject] = useState("BoiteOutil");

  const renderProjectComponent = () => {
    switch (activeProject) {
      case "BoiteOutil":
        return <ToolBox />;
      case "ComGraph":
        return <ComGraph />;
      case "ComWeb":
        return <ComWeb />;
      case "Marketing":
        return <Marketing />;
      case "DevWeb":
        return <DevWeb />;
      case "Photo":
        return <Pics />;
    }
  };

  return (
    <div className="p-4">
      {/* Choix de catégorie */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeBox === "ecole" ? "bg-orange-400 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveBox("ecole")}
        >
          Projets École
        </button>
        <button
          className={`px-4 py-2 rounded ${activeBox === "perso" ? "bg-green-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveBox("perso")}
        >
          Projets Personnels
        </button>
      </div>

      {/* Liste des projets */}
      {activeBox === "ecole" && (
        <div className="space-x-4 mb-4">
          <button onClick={() => setActiveProject("BoiteOutil")}>Boite à outil numérique</button>
          <button onClick={() => setActiveProject("ComGraph")}>Communication Graphique</button>
          <button onClick={() => setActiveProject("ComWeb")}>Communication Web</button>
          <button onClick={() => setActiveProject("Marketing")}>Marketing</button>
        </div>
      )}

      {activeBox === "perso" && (
        <div className="space-x-4 mb-4">
          <button onClick={() => setActiveProject("DevWeb")}>Développement Web</button>
          <button onClick={() => setActiveProject("Photo")}>Photographie</button>
        </div>
      )}

      {/* Contenu du projet sélectionné */}
      <div className="mt-6">{renderProjectComponent()}</div>
    </div>
  );
};

export default Projects;