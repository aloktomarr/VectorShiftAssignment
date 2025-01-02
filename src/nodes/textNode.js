import React from "react";
import Node from "../components/node";
import nodeConfig from "../utils/nodeConfig.js";

export const TextNode =({data})=>{
    const config = nodeConfig.textNode;
    return (
        <Node
        title ={config.title}
        inputs = {config.inputs}
        outputs = {config.outputs}
        content = {config.content(data)}
        styles = {config.styles}
        />

    );
};