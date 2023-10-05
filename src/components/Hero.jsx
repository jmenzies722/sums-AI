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
        <img src={logo} alt="sumz logo" className="w-28 object-contain" />

        <>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      // ... rest of the JSX

        <button
          type="button"
          onClick={() => window.open("https://github.com")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Sumarize, an open-source article summarizer that 
        transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};



export default Hero;
