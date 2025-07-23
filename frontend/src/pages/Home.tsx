import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Wand2, Wand2Icon } from 'lucide-react';

export function Home() {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate('/builder', { state: { prompt } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-10 animate-fade-in">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center justify-center rounded-full bg-blue-900/40 p-4 shadow-lg animate-bounce-slow">
              <Wand2Icon className="w-14 h-14 text-blue-400 drop-shadow-lg" />
            </span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-100 mb-3 tracking-tight drop-shadow-lg">
            Heart<span className="text-blue-400">ly </span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-xl mx-auto">
            Making Websites Easy With AI
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-gray-800/80 rounded-2xl shadow-2xl p-8 backdrop-blur-md border border-gray-700">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={placeholder}
              className="w-full h-36 p-4 bg-gray-900/80 text-gray-100 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder-gray-500 transition-all duration-200 shadow-inner"
              maxLength={400}
            />
            <button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-500 text-gray-100 py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"
            >
              <span className="inline-flex items-center gap-2">
                <Wand2 className="w-5 h-5 animate-sparkle" />
                Generate Website 
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}