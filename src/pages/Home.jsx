import {
  Header,
  About,
  Projects,
  Services,
  Skills,
  Hero,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div className="styled-scrollbar-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
