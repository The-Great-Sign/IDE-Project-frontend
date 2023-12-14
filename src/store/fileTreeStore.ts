import { create } from 'zustand';
import { FileNodeType } from '../types/IDE/FileTree/fileTypes';

interface FileTreeState {
  fileTree: FileNodeType[];
  setFileTree: (fileTree: FileNodeType[]) => void;
}

export const useFileTreeStore = create<FileTreeState>(set => ({
  fileTree: [],
  setFileTree: fileTree => set({ fileTree }),
}));
