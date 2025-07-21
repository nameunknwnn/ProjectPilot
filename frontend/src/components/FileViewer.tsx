import React from 'react';
import { X } from 'lucide-react';
import { FileViewerProps } from '../types';

export function FileViewer({ file, onClose }: FileViewerProps) {
  if (!file) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-gray-900/95 rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden shadow-2xl border border-gray-800">
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <h3 className="text-lg font-bold text-gray-100 truncate">{file.path}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 transition-colors rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label="Close file viewer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-5 overflow-auto max-h-[calc(80vh-4rem)] bg-gray-950/80 rounded-b-2xl">
          <pre className="text-sm text-blue-100 font-mono whitespace-pre-wrap select-text">
            {file.content || 'No content available'}
          </pre>
        </div>
      </div>
    </div>
  );
}