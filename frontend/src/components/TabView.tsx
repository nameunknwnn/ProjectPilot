import React from 'react';
import { Code2, Eye } from 'lucide-react';

interface TabViewProps {
  activeTab: 'code' | 'preview';
  onTabChange: (tab: 'code' | 'preview') => void;
}

export function TabView({ activeTab, onTabChange }: TabViewProps) {
  return (
    <div className="flex space-x-2 mb-4 relative">
      <button
        onClick={() => onTabChange('code')}
        className={`flex items-center gap-2 px-5 py-2 rounded-xl font-semibold transition-all duration-200 relative z-10
          ${activeTab === 'code'
            ? 'bg-gray-800 text-blue-400 shadow-md scale-105'
            : 'text-gray-400 hover:text-blue-300 hover:bg-gray-800'}
        `}
      >
        <Code2 className="w-5 h-5" />
        Code
      </button>
      <button
        onClick={() => onTabChange('preview')}
        className={`flex items-center gap-2 px-5 py-2 rounded-xl font-semibold transition-all duration-200 relative z-10
          ${activeTab === 'preview'
            ? 'bg-gray-800 text-blue-400 shadow-md scale-105'
            : 'text-gray-400 hover:text-blue-300 hover:bg-gray-800'}
        `}
      >
        <Eye className="w-5 h-5" />
        Preview
      </button>
      <span
        className={`absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-300 z-0
          ${activeTab === 'preview' ? 'translate-x-full' : ''}`}
        style={{ width: '50%' }}
      />
    </div>
  );
}