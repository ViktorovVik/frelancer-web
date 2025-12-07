import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";


const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </>
  );
};

export default Layout;