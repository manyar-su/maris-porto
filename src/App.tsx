import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        <a
          href="https://wa.me/6282298511930?text=Halo%20Maris%2C%20kami%20ingin%20hire%20kamu"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 z-50 rounded-full bg-[#16a34a] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#15803d]"
        >
          Chat WhatsApp
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
