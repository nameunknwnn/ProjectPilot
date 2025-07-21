import React, { useState } from 'react';
import { FolderTree, File, ChevronRight, ChevronDown } from 'lucide-react';
import { FileItem } from '../types';

interface FileExplorerProps {
  files: FileItem[];
  onFileSelect: (file: FileItem) => void;
}

interface FileNodeProps {
  item: FileItem;
  depth: number;
  onFileClick: (file: FileItem) => void;
}

function FileNode({ item, depth, onFileClick }: FileNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (item.type === 'folder') {
      setIsExpanded(!isExpanded);
    } else {
      onFileClick(item);
    }
  };

  return (
    <div className="select-none">
      <div
        className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-200 group border border-transparent ${item.type === 'folder' ? 'font-semibold' : ''}`}
        style={{ paddingLeft: `${depth * 1.5}rem` }}
        onClick={handleClick}
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter') handleClick(); }}
      >
        {item.type === 'folder' && (
          <span className="text-gray-400">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </span>
        )}
        {item.type === 'folder' ? (
          <FolderTree className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        ) : (
          <File className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
        )}
        <span className="text-gray-200 group-hover:text-blue-300 transition-colors">{item.name}</span>
      </div>
      {item.type === 'folder' && isExpanded && item.children && (
        <div className="ml-2 border-l border-gray-800 pl-2 transition-all duration-200">
          {item.children.map((child, index) => (
            <FileNode
              key={`${child.path}-${index}`}
              item={child}
              depth={depth + 1}
              onFileClick={onFileClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileExplorer({ files, onFileSelect }: FileExplorerProps) {
  return (
    <div className="bg-gray-900/90 rounded-2xl shadow-xl p-5 h-full overflow-auto border border-gray-800 animate-fade-in">
      <h2 className="text-lg font-bold mb-5 flex items-center gap-2 text-gray-100 tracking-tight">
        <FolderTree className="w-5 h-5 text-blue-400" />
        File Explorer
      </h2>
      <div className="space-y-1">
        {files.map((file, index) => (
          <FileNode
            key={`${file.path}-${index}`}
            item={file}
            depth={0}
            onFileClick={onFileSelect}
          />
        ))}
      </div>
    </div>
  );
}