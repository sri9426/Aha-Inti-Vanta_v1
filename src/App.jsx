import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import Contact from "./components/Contact";
import About from "./components/About";
import { Watsapp } from "./components/Watsapp";
import { InstagramButton } from "./components/InstagramButton";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <Menu />
        <Specials />
        <About />
        <Contact />
      </main>
      <Footer />
      <InstagramButton />
       <Watsapp/>
    </div>
   
  );
}
export default App;