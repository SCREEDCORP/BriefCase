import Section from "./shared/Section";
import {ReactComponent as TechHTML} from '../img/html.svg';
import {ReactComponent as TechCSS} from '../img/css.svg';
import {ReactComponent as TechJS} from '../img/js.svg';
import {ReactComponent as TechREACT} from '../img/react.svg';
import {ReactComponent as TechGIT} from '../img/git.svg';
import {ReactComponent as TechJAVA} from '../img/java.svg';
import "../css/AboutMe.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

function AboutMe() {
    const ref=useRef(null);
    const isInView = useInView(ref, { once: false});
    const technologiesItems ={
        react:{
            img:<TechREACT className="tech-icon"/>,
            tech: "React.js"
        },
        css:{
            img:<TechCSS className="tech-icon"/>,
            tech: "CSS"
        },
        htm5:{
            img:<TechHTML className="tech-icon"/>,
            tech:"HTML5"
        },
        js:{
            img:<TechJS className="tech-icon"/>,
            tech: "JavaScript ES6+"
        },
        git:{
            img:<TechGIT className="tech-icon"/>,
            tech: "Git"
        },
        java:{
            img:<TechJAVA className="tech-icon"/>,
            tech: "Java"
        }
    };
    return ( 
        <Section id="about-me">
            <h2>About me .</h2>
            
            <p className="aboutme-description">
                I am a <strong>Frontend Development</strong> from the 
                Cibertec Institute. I am also a self-taught person and  founder of startups . 
                Developing programs related to <strong>frontend</strong> development and project manager is one of my greatest passions.
            </p>
            <p className="aboutme-description"> 
            I am very passionate about creating things related to technology. <br/>                                    
            I enjoy learning from platforms that help me improve my skills, such as FreeCodeCamp, Platzi, and Udemy.
            </p>

            <h3>My skills: </h3>
            
            <ul>
                {Object.keys(technologiesItems).map((tech,i)=>(
                    <li 
                        className="tech-list" 
                        key={technologiesItems[tech]["tech"]}
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateY(100px)",
                            opacity: isInView ? 1 : 0,
                            transition: `all .7s cubic-bezier(0.17, 0.55, 0.55, 1) ${i + 2}00ms`
                          }}
                    >
                        {technologiesItems[tech]["img"]}
                        {technologiesItems[tech]["tech"]}
                    </li>
                ))}
            </ul>
        </Section>
     );
}

export default AboutMe;