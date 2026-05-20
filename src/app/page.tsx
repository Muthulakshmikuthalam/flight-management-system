"use client";

import { useRouter } from "next/navigation";
import { Plane } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    // Outer solid blue frame matching the template background
    <div className="min-h-screen w-full bg-[#4E86FF] flex flex-col justify-center items-center p-4 sm:p-6 md:p-12 font-sans overflow-x-hidden">
      
      {/* Main Rounded White Container Canvas */}
      <div className="w-full max-w-7xl bg-white rounded-[40px] shadow-2xl flex flex-col min-h-[85vh] relative overflow-hidden">
        
        {/* --- HEADER NAVBAR --- */}
        <header className="w-full px-8 md:px-12 py-6 flex justify-between items-center z-10">
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="bg-[#0B46CD] p-2 rounded-xl text-white">
              <Plane className="h-5 w-5 rotate-45" />
            </div>
            <div className="flex flex-col">
              {/* <span className="font-bold text-lg text-slate-900 tracking-tight leading-none">Skywing</span>
              <span className="text-[9px] text-slate-400 font-bold tracking-wider mt-0.5">AVIATION</span> */}
            </div>
          </div>

          {/* Center Navigation Links (Hidden on mobile) */}
          {/* <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="text-[#0B46CD] font-semibold border-b-2 border-[#0B46CD] pb-1">Home</a>
            <a href="#" className="hover:text-slate-600 transition">About Us</a>
            <a href="#" className="hover:text-slate-600 transition">Our Team</a>
          </nav> */}

          {/* Top Right Action Corner */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.push("/auth")}
              className="text-slate-600 hover:text-[#0B46CD] text-sm font-semibold px-4 py-2 transition"
            >
              Sign In
            </button>
            <button 
              onClick={() => router.push("/auth")}
              className="bg-[#0B46CD] hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition shadow-md shadow-blue-200"
            >
              Sign Up
            </button>
          </div>
        </header>

        {/* --- HERO BODY CONTENT --- */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-8 md:px-12 pb-12 items-center">
          
          {/* LEFT COLUMN: Stadium Shape Masked Visual Graphics */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center items-center py-6">
            <div className="relative w-full max-w-lg h-[340px] sm:h-[420px] flex gap-4 justify-center items-center">
              
              {/* Vertical Column Bar 1 */}
              <div className="w-[22%] h-[80%] rounded-full overflow-hidden bg-slate-100 shadow-lg relative translate-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop" 
                  alt="Sky view" 
                  className="absolute w-[450%] h-full max-w-none object-cover left-[0%]"
                />
              </div>

              {/* Vertical Column Bar 2 (Main Airplane focal point) */}
              <div className="w-[24%] h-[100%] rounded-full overflow-hidden bg-slate-100 shadow-xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop" 
                  alt="Airplane jet" 
                  className="absolute w-[400%] h-full max-w-none object-cover left-[-100%]"
                />
                {/* Micro floating rating badge */}
                <div className="absolute top-[20%] right-2 bg-white/90 backdrop-blur-sm py-1 px-1.5 rounded-full shadow-md flex items-center gap-0.5 scale-75 origin-right">
                  <span className="text-[9px] font-bold text-slate-800">★ 4.9</span>
                </div>
              </div>

              {/* Vertical Column Bar 3 */}
              <div className="w-[22%] h-[90%] rounded-full overflow-hidden bg-slate-100 shadow-lg relative -translate-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop" 
                  alt="Wing perspective" 
                  className="absolute w-[450%] h-full max-w-none object-cover left-[-210%]"
                />
                {/* Location Tag */}
                <div className="absolute bottom-[15%] left-2 bg-white px-2 py-1 rounded-full shadow-md flex items-center gap-1 scale-75 origin-left">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[9px] font-bold text-slate-500 whitespace-nowrap">New York</span>
                </div>
              </div>

              {/* Vertical Column Bar 4 */}
              <div className="w-[20%] h-[75%] rounded-full overflow-hidden bg-slate-100 shadow-md relative translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop" 
                  alt="Clouds detail" 
                  className="absolute w-[500%] h-full max-w-none object-cover left-[-350%]"
                />
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Typography Headings and Call-to-Action */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-center lg:text-left pt-6 lg:pt-0 max-w-xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B46CD] tracking-tight leading-[1.1]">
              Flight Management System <br className="hidden sm:inline" />
              {/* <span className="text-slate-800">and Navigation</span> */}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed max-w-lg lg:max-w-none mx-auto">
              Experience next-gen control where every journey is optimized for safety, speed, and smooth connectivity across global skies.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* <button 
                onClick={() => router.push("/auth")}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-3.5 rounded-full transition shadow-lg shadow-amber-100 text-sm tracking-wide"
              >
                Learn more
              </button> */}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}