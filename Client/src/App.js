import Layout from "./components/Layout.js/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/WorkExp/WorkExp";
import { BiCopyright } from "react-icons/bi";
import MobileNav from "./components/MobileNav/MobileNav";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";

function App() {
  const [theme] = useTheme()
  return (
    < >
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">

          <About />
          <Education />
          <TechStack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-5 ">
          <h4 className="text-center ">
            Made With ❤️  Naveen Mishra <BiCopyright /> 2023</h4>

        </div></div>
      <ScrollToTop smooth color="#f29f67" style={{ backgroundColor: 'black', borderRadius: "80px" }} alt="scrollup" />
    </>
  );
}

export default App;
