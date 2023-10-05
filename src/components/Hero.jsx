import { useState, useEffect } from "react";
import { logo } from "../assets";

/**
 * The Hero component acts as the digital front door to the "Sumarize" platform.
 * - Dynamic Theme Flexibility: At the touch of a button, users can effortlessly 
 *   toggle between a soothing dark mode and a vibrant light mode, ensuring an optimal 
 *   viewing experience tailored to individual preferences. This state is efficiently 
 *   managed using React's useState and useEffect hooks, with preferences stored in local storage.
 * - Brand Identity: The 'sumz' logo is displayed prominently, establishing identity and trust.
 * - Transparency and Collaboration: A direct link to the app's GitHub repository promotes its open-source nature.
 * - Clarity of Purpose: The headline and description succinctly convey the app's core functionality 
 *   of transforming extensive articles into crisp summaries using OpenAI's GPT-4.
 */
const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz logo" className="w-28 object-contain" />
        
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="black_btn"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <button
            type="button"
            onClick={() => window.open("https://github.com")}
            className="black_btn"
          >
            GitHub
          </button>
        </div>
      </nav>
      
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with Sumarize. Dive deep into the world of concise content, 
        as we leverage the capabilities of OpenAI's GPT-4 to transform lengthy articles 
        into crystal-clear summaries.
      </h2>
    </header>
  );
};

export default Hero;