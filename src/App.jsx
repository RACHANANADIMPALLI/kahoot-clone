import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import DownloadSection from "./components/DownloadSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />

        <About />

        <Features />

        <DownloadSection />

        <FAQ />
      </main>

      <Footer />
    </>
  );
}

export default App;