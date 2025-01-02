import React from "react";
import Node from "../components/node";
import nodeConfig from "../utils/nodeConfig";

export const InputNode =({data})=>{
    const config = nodeConfig.inputNode;
    console.log("bhai inputNode mein hu",data)
    return (
        <Node
        title ={config.title}
        inputs = {config.inputs}
        outputs = {config.outputs}
        content = {config.content(data)}
        styles = {config.styles}
        />

    );
}