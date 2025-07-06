import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './Component/Section/LoadingScreen';
import { NavBar } from './Component/NavBar';
import { MobileMenu } from './Component/MobileMenu';
import { Home } from './Component/Home';
import { About} from './Component/About';
import { Projects } from './Component/Projects';
import { Contact } from './Component/Contact';
import './index.css';


function App() {
  const [isLoading, setIsLoading] = useState(true); // ✅ Start as loading
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {isLoading && <LoadingScreen oncomplete={() => setIsLoading(false)} />} 
      <div className={`min-h-screen transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"} bg-black text-gray-100`}>

        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
