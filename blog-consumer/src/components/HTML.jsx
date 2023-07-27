import HtmlToReactParser from "html-to-react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const htmlParser = new HtmlToReactParser.Parser();
const processNodeDefinitions = new HtmlToReactParser.ProcessNodeDefinitions();
const isValid = () => true;
const processingInstructions = [
  {
    shouldProcessNode: function (node) {
      return node.parent && node.parent.name && node.parent.name === "pre";
    },
    processNode: function (node, children) {
      return (
        <SyntaxHighlighter language="javascript" style={dracula}>
          {node.data}
        </SyntaxHighlighter>
      );
    },
  },
  {
    shouldProcessNode: function (node) {
      return true;
    },
    processNode: processNodeDefinitions.processDefaultNode,
  },
];

const HTML = ({ children }) => {
  return htmlParser.parseWithInstructions(
    children,
    isValid,
    processingInstructions
  );
};

export default HTML;
