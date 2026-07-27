import { useEffect, useState } from "react";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaFileAlt,
} from "react-icons/fa";

import { socials } from "../../data/socials";
import { useTheme } from "../../context/ThemeContext";


function Header() {
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);



  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>

      <div className="header-left">

        <h1 className="logo">
          <a href="/">
            Emir Emirov
          </a>
        </h1>


        <nav className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#projects">
            Projects
          </a>

        </nav>

      </div>



      <div className="right">


        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {
            theme === "dark"
              ? <FaSun size={18}/>
              : <FaMoon size={18}/>
          }
        </button>



        <a
          href={socials.email}
          aria-label="Email"
        >
          <FaEnvelope size={20}/>
        </a>



        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={20}/>
        </a>



        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20}/>
        </a>



        <a
          href={socials.resume}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <FaFileAlt size={20}/>
        </a>


      </div>

    </header>
  );
}


export default Header;