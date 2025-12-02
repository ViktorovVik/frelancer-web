import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";


const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
      </main>
    </>
  );
};

export default Layout;