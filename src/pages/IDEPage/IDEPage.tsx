import CodeMirrorEditor from './CodeMirrorEditor/CodeMirrorEditor';
import Chatting from './Chatting/Chatting';
import FileTree from './FileTree/FileTree';
import IDEHeader from './Header/IDEHeader';
import {
  IDEContentCode,
  ContentContainer,
  IDEContainer,
  Section,
} from './IDEPage.style';
import CodeEditorTest from './CodeEditor/CodeEditorTest';
import TerminalTest from './Terminal/TerminalTest';
import Toolbar from './Toolbar/Toolbar';
// import Terminal from './Terminal/Terminal';

const IDEPage = () => {
  return (
    <IDEContainer>
      <IDEHeader />
      <IDEContentCode>
        <ContentContainer>
          <Toolbar />
          <FileTree />
        </ContentContainer>

        <Section>
          <CodeMirrorEditor />
          <CodeEditorTest />
          <TerminalTest />
          {/* <Terminal /> */}
        </Section>

        <Chatting />
      </IDEContentCode>
    </IDEContainer>
  );
};

export default IDEPage;
