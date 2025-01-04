import React from "react";
import Node from "../components/node";
import nodeConfig from "../utils/nodeConfig.js";
import { useState,useRef } from "react";
 
export const TextNode = ({ data }) => {

    const config = nodeConfig.textNode;
    const [text, setText] = useState('');
    const [inputs, setInputs] = useState([]);
    const [variableCount, setVariableCount] = useState(0);
    const textareaRef = useRef(null);

    const handleAddVariable = () => {
        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newText =
          text.substring(0, start) + '{{}}' + text.substring(end);
            setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 2;
        }, 0);
        setText(newText);
        addHandle(`variable-${variableCount}`);
      };

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
        detectVariables(newText);
    };

    const addHandle = (variable) => {
        setVariableCount((prevCount) => prevCount + 1);
        
        const newHandle = {
          id: `${variable}-${variableCount}`,
          position: 'left',
          style: {
            top: `${inputs.length * 40 + 55}px`, 
          },
        };
        
        setInputs((prev) => [...prev, newHandle]);
      };
    const detectVariables = (content) => {
        const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\}\}/g;
        const found = [...content.matchAll(regex)];
        const handleObjects = found.map((match, index) => ({
            id: `${match[1]}-${index}`,
            position: 'left',
            style: {
                top: `${index * 40 + 55}px`,
                '--variable-name': `"${match[1]}"`,            },
          }));
        setInputs(handleObjects);
    };
    return (
        <Node
            title={config.title}
            inputs={inputs}
            outputs={config.outputs}
            content={<div className="container">
                <div className="node-textheader">
                    <p className="node-textlabel">Text</p>
                    <button onClick={handleAddVariable} className="node-addvariable">&#123; &#125;</button>
                </div>
                <textarea
                    className="node-textinput"
                    type="text"
                    ref={textareaRef}
                    value={text}
                    onChange={handleTextChange}
                    placeholder="input"
                />
            </div>}
            styles={config.styles}
        />

    );
};