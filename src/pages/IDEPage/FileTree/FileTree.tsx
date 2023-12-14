import { FileTreeConatiner } from './FileTree.styles';
import { Tree } from 'react-arborist';
import { Node } from './Node';
import CreateFile from './CreateFile';
import { Resizable } from 're-resizable';
import { useEffect } from 'react';
import { fetchFileTree } from '../../../api/filetree/fileTreeApi';
import { useFileTreeStore } from '../../../store/fileTreeStore';

const FileTree = () => {
  const { fileTree, setFileTree } = useFileTreeStore();

  useEffect(() => {
    const getFileTree = async () => {
      try {
        const data = await fetchFileTree();
        setFileTree(data);
      } catch (error) {
        console.error('Failed to load file tree:', error);
      }
    };
    getFileTree();
  }, [setFileTree]);

  return (
    <Resizable
      defaultSize={{
        width: '300px',
        height: '100%',
      }}
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: true,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      <FileTreeConatiner>
        <CreateFile />
        <Tree className="react-aborist" data={fileTree}>
          {nodeProps => <Node {...nodeProps} />}
        </Tree>
      </FileTreeConatiner>
    </Resizable>
  );
};

export default FileTree;
