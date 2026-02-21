import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Pastikan install lucide-react atau ganti dengan icon lain

import logoAngkasa from './assets/logo-angkasa.png';
import gambarStudio from './assets/hero-section-photo-bg.png';
import asciiVideo from './assets/ascii-animation.mp4';
import projectBG from './assets/project-bg.png';
import allTheMemories from './assets/allTheMemories.png';
import angkasaStudio from './assets/angkasa-studio01.png';
import chaseIt from './assets/chaseIt.png';
import petrichor from './assets/petrichor.jpg.png';
import soerabadja from './assets/soerabadja.png';
import logo from './assets/logo-angkasa01(huruf).png';

// --- SUB-COMPONENTS ---

function GraphicDesignPage() {
  return (
    <div className="min-h-screen bg-[#F3E9E9] pt-16 font-consolas text-black flex flex-col md:flex-row overflow-x-hidden">
      {/* 1. KONTEN UTAMA: ASYMMETRICAL GRID */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 auto-rows-fr border-b-4 md:border-r-4 md:border-b-0 border-black h-auto md:h-screen">
        
        {/* Item 01: All The Memories */}
        <div className="col-span-2 row-span-1 border-b-4 md:border-r-4 border-black relative overflow-hidden bg-[#D9D9D9] aspect-video md:aspect-auto">
          <img src={allTheMemories} alt="All The Memories" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </div>

        {/* Item 02: Petrichor */}
        <div className="col-span-1 row-span-2 border-b-4 border-black relative overflow-hidden bg-[#D9D9D9]">
          <img src={chaseIt} alt="Petrichor" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </div>

        {/* Item 03: Soerabadja */}
        <div className="col-span-1 row-span-1 border-b-4 border-r-4 border-black relative overflow-hidden bg-[#D9D9D9] aspect-square md:aspect-auto">
          <img src={soerabadja} alt="Soerabadja" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </div>

        {/* Item 04: Angkasa Studio */}
        <div className="col-span-1 row-span-1 border-b-4 md:border-r-4 border-black relative overflow-hidden bg-[#D9D9D9] aspect-square md:aspect-auto">
          <img src={angkasaStudio} alt="Angkasa Studio" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </div>

        {/* Item 05: Chase It */}
        <div className="col-span-2 row-span-1 md:border-r-4 border-black relative overflow-hidden bg-[#D9D9D9] aspect-video md:aspect-auto">
          <img src={petrichor} alt="Chase It" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </div>

        {/* Item 06: Placeholder Mobile Info */}
        <div className="col-span-2 md:col-span-1 row-span-1 relative overflow-hidden bg-black flex items-center justify-center p-4">
          <a href="https://www.instagram.com/angkasastudio.official/" target="_blank" rel="noopener noreferrer"
             className="text-[#F3E9E9] text-[10px] md:text-[12px] uppercase tracking-[0.3em] hover:text-red-600 transition-colors text-center">
            More content on angkasa_studio
          </a>
        </div>
      </div>

      {/* 2. SISI KANAN/BAWAH: VERTICAL HEADER */}
      <div className="w-full md:w-[180px] h-32 md:h-screen flex items-center justify-center relative bg-black text-[#F3E9E9] overflow-hidden">
        <Link to="/" className="absolute top-4 md:top-10 text-red-600 font-bold hover:underline tracking-tighter text-sm md:text-base z-10">
          [ BACK_TO_BASE ]
        </Link>
        <h1 className="md:rotate-90 whitespace-nowrap text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
          PIXEL_BLEED
        </h1>
      </div>
    </div>
  );
}

function UiUxPage() {
  return (
    <div className="min-h-screen bg-black text-[#F3E9E9] font-consolas flex flex-col items-center justify-center p-6 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-[15vw] font-black rotate-12">UI</div>
        <div className="absolute bottom-10 right-10 text-[15vw] font-black -rotate-12">UX</div>
      </div>

      <div className="z-10 text-center space-y-4">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter animate-pulse">
          UNDER_CONSTRUCTION
        </h1>
        <div className="flex flex-col items-center gap-2">
          <div className="h-[2px] w-32 bg-red-600"></div>
          <p className="text-[12px] md:text-[14px] uppercase tracking-[0.5em] opacity-70">
            System Protocol: UI/UX Module is being calibrated
          </p>
        </div>
      </div>

      <Link to="/" className="mt-16 text-red-600 font-bold hover:underline tracking-tighter z-10">
        [ RETURN_TO_BASE ]
      </Link>

      <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.3em] opacity-40">
        © 2026 Angkasa Studio // Decoding Excellence
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="scroll-smooth">
      {/* HERO SECTION */}
      <main id="home" className="flex flex-col md:flex-row h-screen w-full relative">
        {/* Background Wrapper dengan Overlay Gelap */}
        <div className="w-full md:w-[38%] h-1/2 md:h-full relative overflow-hidden bg-black">
          <img src={gambarStudio} alt="Studio Background" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
        </div>
        
        <div className="w-full md:w-[62%] h-1/2 md:h-full flex flex-col items-center md:items-end justify-center px-6 md:pr-12 md:pl-24 bg-white relative">
          <div className="w-full max-w-xl text-center md:text-right">
            <img src={logoAngkasa} alt="Angkasa Studio" className="w-[300px] md:w-[500px] mx-auto md:ml-auto mb-8 md:mb-16" />
            <div className="mt-4 md:mt-16 text-[14px] md:text-[15px] leading-relaxed text-[#000000] text-justify">
              <p>
                The name originates from the Indonesian language and directly translates to "space" or "outer space." It carries a strong association with vastness, freedom, exploration, and the unknown. As a given name, <span className="text-[#D72323] font-bold">Angkasa</span> evokes a sense of wonder and aspiration, often symbolizing dreams of reaching beyond limitations.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="min-h-screen w-full bg-[#3E3636] text-[#F5EDED] p-8 md:p-20 font-consolas">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col justify-between min-h-[300px] md:h-[450px] max-w-2xl">
            <div className="space-y-1">
              <h2 className="text-2xl md:text-4xl tracking-tighter">LOG_ENTRY: 026</h2>
              <h2 className="text-2xl md:text-4xl tracking-tighter">COORDINATES: -7.2504 / 112.7688</h2>
            </div>
            <div className="text-[14px] md:text-[15px] leading-relaxed text-justify mt-8 md:mt-0 md:pr-12">
              <p>
                <span className="text-[#D72323] font-bold">Evolution</span> is measured by the transition
                from raw information to solid mass. The pursuit of Information Systems provides the skeletal logic—the binary foundation of 0 and 1—upon which layers of abstract ego are poured like wet concrete. A 26-cycle entity currently decoding the friction between systematic order and aesthetic chaos. The interface is cold. The data is heavy. The result is a non-linear distortion of the expected.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[300px] h-[400px] md:h-[450px] bg-[#1A1A1A] overflow-hidden border border-white/10 relative">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 grayscale contrast-125">
              <source src={asciiVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECT */}
      <section id="project" className="min-h-screen w-full bg-[#F3E9E9] font-consolas text-black flex flex-col md:flex-row overflow-hidden border-t-4 border-black relative">
        {/* Background Project dengan Overlay */}
        <div className="w-full md:w-[40%] h-64 md:h-screen border-b-4 md:border-b-0 md:border-r-4 border-black relative overflow-hidden bg-black">
          <img src={projectBG} alt="Project Visual" className="w-full h-full object-cover opacity-40" />
          <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.3em] z-20 text-white/80">
            © 2026 Angkasa Studio.
          </div>
        </div>

        <div className="w-full md:w-[60%] h-auto md:h-screen grid grid-cols-2 md:grid-cols-3 grid-rows-none md:grid-rows-3 relative z-10 bg-white md:bg-transparent">
          <div className="hidden md:block border-b-4 border-r-4 border-black"></div>
          <div className="hidden md:block border-b-4 border-r-4 border-black"></div>
          
          <div className="col-span-2 md:col-span-1 border-b-4 border-black flex flex-col justify-end p-6 md:p-8 bg-black/5">
            <Link to="/graphic-design" className="group">
              <h3 className="text-xl md:text-2xl font-bold underline decoration-2 mb-2 group-hover:text-red-600 transition-colors">
                Graphic Design*
              </h3>
            </Link>
            <p className="text-[11px] md:text-[12px] leading-tight opacity-90">Visuals are processed in the Adobe-depths.</p>
          </div>

          <div className="border-b-4 border-r-4 border-black relative h-48 md:h-auto overflow-hidden">
             <div className="absolute top-4 left-10 md:left-25 origin-top-left md:rotate-90 flex flex-col z-30">
               <span className="text-3xl md:text-[52px] font-light tracking-tighter leading-none">your</span>
               <span className="text-4xl md:text-[42px] font-light tracking-tighter leading-none">visualize</span>
             </div>
          </div>
          <div className="border-b-4 border-r-4 border-black"></div>
          
          <div className="col-span-2 md:col-span-1 border-b-4 md:border-b-0 border-black flex flex-col justify-end p-6 md:p-8 bg-black/5">
            <Link to="/UiUxPage" className="group">
              <h3 className="text-xl md:text-2xl font-bold underline decoration-2 mb-2 group-hover:text-red-600 transition-colors">
                UI/UX Design*
              </h3>
            </Link>
            <p className="text-[11px] md:text-[12px] leading-tight opacity-90">Interfaces are forged in the cloud-matrix.</p>
          </div>

          <div className="border-r-4 border-black relative h-32 md:h-auto flex items-center justify-center md:block">
            <div className="md:absolute md:left-0 md:top-10 text-6xl md:text-[85px] font-black text-red-600 tracking-tighter leading-none z-40">IDEA</div>
          </div>
          <div className="border-r-4 border-black hidden md:block"></div>
          <div className="bg-transparent hidden md:block"></div>
        </div>
      </section>
    </div>
  );
}

// --- MAIN APP COMPONENT ---

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-red-500 selection:text-white font-consolas overflow-x-hidden">
        
        {/* NAVBAR */}
        <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-6 md:px-10 py-3 bg-black/95 backdrop-blur-md text-white border-b border-white/10">
          <div className="flex items-center gap-4">
            {/* LOGO DI NAVBAR */}
            <Link to="/" onClick={() => setNavOpen(false)}>
              <img 
                src={logo} 
                alt="Angkasa Studio" 
                className="w-5 md:w-10 h-auto object-contain transition-all" 
              />
            </Link>
                    
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10 text-[16px] uppercase tracking-[0.2em]">
              <a href="/#home" className="hover:text-red-500 transition-colors">Home</a>
              <a href="/#about" className="hover:text-red-500 transition-colors">About</a>
              <a href="/#project" className="hover:text-red-500 transition-colors">Project</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block border border-white/40 px-4 md:px-5 py-1.5 rounded-full text-[12px] md:text-[15px] uppercase tracking-tighter hover:bg-white hover:text-black transition-all">
              <a 
                href="https://wa.me/62895396017225"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Make it Happen
              </a>
            </button>
            
            {/* Hamburger Button */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU OVERLAY */}
        <div className={`fixed inset-0 z-[90] bg-black transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${navOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
          <a href="/#home" onClick={() => setNavOpen(false)} className="text-3xl uppercase tracking-widest text-white hover:text-red-500">Home</a>
          <a href="/#about" onClick={() => setNavOpen(false)} className="text-3xl uppercase tracking-widest text-white hover:text-red-500">About</a>
          <a href="/#project" onClick={() => setNavOpen(false)} className="text-3xl uppercase tracking-widest text-white hover:text-red-500">Project</a>
          <button className="mt-8 border border-red-600 text-red-600 px-8 py-3 rounded-full uppercase tracking-tighter">
            Make it Happen
          </button>
        </div>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/graphic-design" element={<GraphicDesignPage />} />
          <Route path="/UiUxPage" element={<UiUxPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;