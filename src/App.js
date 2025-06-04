import React, {useState, useRef, useEffect} from "react";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/portfolio/portfolio";
import Resume from "./Components/resume/Resume";
import Services from "./Components/Services/Service";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./Components/Theme/ThemeToggle";
import { FiMenu } from "react-icons/fi";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
   // Đóng sidebar khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);
  return (
    <ThemeProvider>
      <div className="App">
        <div className="hamburger" ref={hamburgerRef} onClick={toggleSidebar}>
          <FiMenu className="menu-icon"/>
        </div>
        <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} sidebarRef={sidebarRef}/>
        <ThemeToggle />
        <main className="content">
          <Home />
          <About />
          <Portfolio />
          <Resume />
          <Services />
        </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
