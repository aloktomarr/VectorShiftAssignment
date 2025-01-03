import React from "react";
import { Handle, Position } from 'reactflow';
import file from '../utils/images/file.png';
import { useState } from "react";
const Node = ({title, inputs, outputs, content, style})=>{
    const[isVisible, setIsVisible] = useState(true);
    const handleClose =()=>{
        setIsVisible(false);
    }
    return(
        isVisible &&(
        <div className="node-components">
            {/* style={{width: 200, height: 80, border: '1px solid black'}}> */}
            <div className="node-header">
                <img src={file}/>
                <p>{title}</p>
                <button onClick={handleClose} className="node-close">X</button>
            </div>
            <div className="node-body">{content}</div>
            {inputs.map((input,index)=>(
                <Handle
                key = {index}
                type = "target"
                position={input.position}
                id = {input.id}
                style = {input.style}
                />

            ))}
            {outputs.map((output,index)=>(
                <Handle
                key = {index}
                type = "source"
                position={output.position}
                id = {output.id}
                style = {output.style}
                />

            ))}


        </div>
    )
);
}
export default Node;