import { useState } from "react";
import ProjectCard from "./shared/ProjectCard";                
import {default as ProjectRickyMorty} from '../img/projects/rickymorty.jpeg';
import {default as ProjectCalc} from '../img/projects/calc.jpeg';
import {default as ProjectNext} from '../img/projects/logohuawei.png';

function ProjectTab() {

    const [projectactive,setProjectActive] = useState("Personal");
    const projectItems = {  
        Personal:[
            {
                title:"Consume API Rick & Morty",
                techs:"HTML5 / CSS / REACT.JS",
                description:"A section where you can see the characters from the seasons of Rick and Morty.",
                img:<img className="project-img" src={ProjectRickyMorty} alt="Bookmark"/>,
                linkGitRepo:"https://github.com/SCREEDCORP/rick-morty-course",
                linkLiveSite:"https://imaginative-profiterole-897b88.netlify.app/"
            },
            {
                title:"Calc",
                techs:"HTML5 / CSS / REACT.JS",
                description:"Im just training use State and Hook in react.",
                img:<img className="project-img" src={ProjectCalc} alt="Bookmark"/>,
                linkGitRepo:"https://github.com/SCREEDCORP/calc-react",
                linkLiveSite:"https://cosmic-semifreddo-9c9301.netlify.app//"
                
            },


        ],
        Work: [
            {
                title: "Nex-T",
                techs: "HTML5 / CSS / React Native",
                description: "A Red Social for Gamers.",
                img:<img className="project-img" src={ProjectNext} alt="Bookmark"/>,
                linkLiveSite:"https://play.google.com/store/apps/details?id=com.next.next&hl=es"
           },
        ]
    };
    return ( 
        <div className="project">
            <div className="project-btns">
                {Object.keys(projectItems).map((projectType)=>(
                    <button key={projectType}
                        className={`project-btn ${projectactive === projectType && "project-btn-active"}`} 
                        projectactive={projectactive === projectType}  
                        onClick={() => setProjectActive(projectType)}>
                            {projectType}
                    </button>
                ))}
            </div>
            <div className="project-box">
                {projectItems[projectactive].map((projectCha,i)=>(
                    <ProjectCard
                        key={projectCha.title}
                        title={projectCha.title}
                        techs={projectCha.techs}
                        description={projectCha.description}
                        img={projectCha.img}
                        linkGitRepo={projectCha.linkGitRepo}
                        linkLiveSite={projectCha.linkLiveSite}
                        i={i}
                     />
            ))}
            </div>
        </div>
     );
}

export default ProjectTab; 