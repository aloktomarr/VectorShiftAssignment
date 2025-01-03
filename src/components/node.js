import React from "react";
import { Handle, Position } from 'reactflow';
import { useState } from "react";
import {ReactComponent as Icon} from '../utils/images/icon.svg';

const Node = ({title, inputs, outputs, content, style})=>{
    const[isVisible, setIsVisible] = useState(true);
    const handleClose =()=>{
        setIsVisible(false);
    }
    return(
        isVisible &&(
        <div className="node text-white">
            <div className="node-header p-2 border-top-12">
                <Icon width="30" height="20"/>
                <p className="m-0">{title}</p>
                <button onClick={handleClose} className="node-close">X</button>
            </div>
            <div className="node-body p-2">{content}</div>
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