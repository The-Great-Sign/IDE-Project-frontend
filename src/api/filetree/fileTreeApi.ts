import { FileNodeType } from '../../types/IDE/FileTree/fileTypes';
import axiosInstance from '../axiosInstance';

export const fetchFileTree = async (): Promise<FileNodeType[]> => {
  try {
    const response = await axiosInstance.get<FileNodeType[]>('/files');
    return response.data;
  } catch (error) {
    console.error('Error fetching file tree:', error);
    throw error;
  }
};
