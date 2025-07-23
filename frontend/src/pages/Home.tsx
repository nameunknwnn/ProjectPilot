import  { useState, useEffect } from 'react';
import { Wand2 } from 'lucide-react';

export function Home() {
  const [prompt, setPrompt] = useState('');
  // Typewriter effect for textarea placeholder
  const placeholderFull = "Describe the website you want to build...";
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    setPlaceholder('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < placeholderFull.length) {
        setPlaceholder(placeholderFull.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (prompt.trim()) {
      // Navigate to builder - you'd implement this with your router
      console.log('Navigating with prompt:', prompt);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern Only, all orbs/lights/particles removed */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.07) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 60s linear infinite'
            }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl w-full relative z-10">
        <div className="text-center mb-10 opacity-0 animate-fadeIn">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center justify-center rounded-full bg-blue-900/40 p-4 shadow-lg backdrop-blur-sm border border-blue-400/20 animate-bounce">
              <Wand2 className="w-14 h-14 text-blue-400 drop-shadow-lg animate-spin" style={{ animationDuration: '3s' }} />
            </span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-100 mb-3 tracking-tight drop-shadow-lg">
            Heart<span className="text-blue-400 animate-pulse">ly </span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-xl mx-auto">
            Making Websites Easy With AI
          </p>
        </div>

        <div className="space-y-4 opacity-0 animate-fadeInUp">
          <div className="bg-gray-800/60 rounded-2xl shadow-2xl p-8 backdrop-blur-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-blue-500/10 hover:shadow-2xl">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={placeholder}
              className="w-full h-36 p-4 bg-gray-900/60 text-gray-100 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder-gray-500 transition-all duration-200 shadow-inner backdrop-blur-sm focus:bg-gray-900/80"
              maxLength={400}
            />
            <button
              onClick={handleSubmit}
              className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-500 text-gray-100 py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200 hover:shadow-blue-500/25 hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <span className="inline-flex items-center gap-2">
                <Wand2 className="w-5 h-5 animate-pulse" />
                Generate Website 
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Removed all gentleFloat, slowFloat, gentlePulse keyframes */
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-fadeIn { 
          animation: fadeIn 1s ease-out 0.3s forwards; 
        }
        
        .animate-fadeInUp { 
          animation: fadeInUp 1s ease-out 0.6s forwards; 
        }
        
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
}