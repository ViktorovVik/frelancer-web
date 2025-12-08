import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";


const Layout = () => {
  return (
    <>
      <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
        </main>
      <Footer />
    </>
  );
};

export default Layout;