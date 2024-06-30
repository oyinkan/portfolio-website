import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <About />
          <Projects />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
