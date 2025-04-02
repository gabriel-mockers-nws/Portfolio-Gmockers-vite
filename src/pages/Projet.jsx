// import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import  ToolBox  from "./projets-ecole/BoiteOutil";
import  ComGraph  from "./projets-ecole/ComGraph";
import  ComWeb  from "./projets-ecole/ComWeb";
import  Marketing  from "./projets-ecole/Marketing";
import  DevWeb  from "./projets-perso/DevWeb";
import  Pics  from "./projets-perso/Photo";




export const Projects = () => {
    // const [activeBox, setActiveBox] = useState("ecole");
    return (

        <>
            <div> 
                <h3>Projets d&apos;école</h3>
                <nav>
                    <Link to="projets-ecole/BoiteOutil"> Boite à outil numérique </Link>
                    <Link to="projets-ecole/ComGraph"> Communication Graphique </Link>
                    <Link to="projets-ecole/ComWeb" > Communication Web </Link>
                    <Link to="projets-ecole/Marketing"> Marketing et communication digitale </Link>
                </nav>
            </div>
            <div>
                <h3>Projets personnels</h3>
                <nav>
                    <Link to="projets-perso/DevWeb" />
                    <Link to="projets-perso/Photo" />
                </nav>
            </div>

            <Routes>
                <Route path="projets-ecole/BoiteOutil" element={<ToolBox />} />
                <Route path="projets-ecole/ComGraph" element={<ComGraph />} />
                <Route path="projets-ecole/ComDev" element={<ComWeb />} />
                <Route path="projets-ecole/Marketing" element={<Marketing />} />
                <Route path="projets-perso/DevWeb" element={<DevWeb />} />
                <Route path="projets-perso/Photo" element={<Pics />} />
            </Routes>
        </>
    );
}

export default Projects;