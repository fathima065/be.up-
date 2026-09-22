import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Challenge } from "@/components/Challenge";
import { Approach } from "@/components/Approach";
import { Services } from "@/components/Services";
import { Programs } from "@/components/Programs";
import { Expect } from "@/components/Expect";
import { Process } from "@/components/Process";
import { WhoWeWorkWith } from "@/components/WhoWeWorkWith";
import { KPIs } from "@/components/KPIs";
import { WhyBeUp } from "@/components/WhyBeUp";
import { About, Philosophy } from "@/components/About";
import { Trust } from "@/components/Trust";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); window.__lenis = null; };
  }, []);

  return (
    <div className="App bg-[#FAFAFC]">
      <Toaster position="top-center" richColors />
      <Nav /><main><Hero /><Marquee /><Challenge /><Approach /><Services /><Programs /><Expect /><Process /><WhoWeWorkWith /><KPIs /><WhyBeUp /><About /><Philosophy /><Trust /><FAQ /><FinalCTA /><Contact /></main><Footer />
    </div>
  );
}
export default App;