import { useState, useEffect } from "react";
import { logo } from "../assets";

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
        {/* Conditionally render the logo based on the darkMode state */}
        {!darkMode && (
          <img src={logo} alt="sumz logo" className="w-28 object-contain" />
        )}
        {/* Spacer to maintain space even when logo is hidden */}
        {darkMode && <div className="w-28"></div>}

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="black_btn"
          >
            {darkMode ? "☀️" : "🌙"}
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
        Simplify your reading with Sumz. Dive deep into the world of concise content, 
        as we leverage the capabilities of OpenAI GPT-4 to transform lengthy articles 
        into crystal-clear summaries.
      </h2>
    </header>
  );
};

export default Hero;
