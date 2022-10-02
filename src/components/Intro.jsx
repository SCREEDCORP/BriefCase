import Typed from "typed.js";
import { useState, useEffect, useRef  } from "react";
import "../css/Intro.css";
import NavBar from "./NavBar";
import "../css/NavBar.css";
import User from "./User";


function Intro() {
    const el = useRef(null);
    const [open,setOpen]=useState(true);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["But! You Can Call Me ...", "SCREED."],         
          startDelay: 250,
          typeSpeed: 80,
          backSpeed: 70,
          backDelay: 400
        });
        return () => {
          typed.destroy();
        };
      }, []);

    return ( 
        
        <header className="header" id="intro">
            <div className="container-user"><User/></div>
            <p className="intro-greet">Hi! I'm  <strong> Jesús Hernández</strong> </p> 
            
            <div className="title">
                <h1 ref={el}></h1>
            </div>
            <p className="intro-description">
                I am a very passionate React Frontend Development. 
                Im focus my skills on frontend and Product Manager.
            </p>
            <button 
                className={`hamburguer ${open? "":"open"}`}
                onClick={() => open?setOpen(false):setOpen(true)}
            >
            </button>
            <NavBar
                classNav={`navBar ${open? "":"open"}`}
                isOpen={open}
                onLinkClick={() => open?setOpen(false):setOpen(true)}
            />
        </header>
     );
}

export default Intro;