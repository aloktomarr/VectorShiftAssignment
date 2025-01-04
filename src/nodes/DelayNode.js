import React from "react";
import Node from "../components/node";
import nodeConfig from "../utils/nodeConfig";

export const DelayNode =({data})=>{
    const config = nodeConfig.delayNode;
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