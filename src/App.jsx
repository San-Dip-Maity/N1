import "./App.css";
import logo from "./assets/logo.png";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Herobar from "./components/Herobar";
import Navbar from "./components/Navbar";
import Hero4 from "./components/Hero4";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="flex justify-between items-center px-40 my-4 font-display">
        <img src={logo} className="h-8 w-100" alt="" />
        <Navbar />
      </header>
      <main className="mx-40  font-display">
        <Hero1 />
        <Herobar />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Contact />
      </main>
      <footer className="mx-40  font-display">
        <Footer />
      </footer>
    </>
  );
}

export default App;
