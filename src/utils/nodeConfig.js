const nodeConfig = {
    inputNode: {
        title: 'Input',
        inputs: [],
        outputs: [{ id: 'value', position: 'right', style: {} }],
        content: (data) =>
            <div className="container">
                <label className="node-textlabel">Field Name</label>
                <input className="node-textinput mb-4" type="text" value={data?.inputName} placeholder="Type" />

                <label className="node-textlabel">Type</label>
                <select className="node-textinput" value={data?.inputType}>
                    <option value="Text">Text</option>
                    <option value="File">File</option>
                    <option value="Audio">Audio</option>
                </select>

            </div>
        ,
        styles: { backgroundColor: '#e8f5e9' },
    },
    outputNode: {
        title: 'Output',
        inputs: [],
        outputs: [{ id: 'value', position: 'left', style: {} }],
        content: (data) =>
            <div className="container">
                <label className="node-textlabel">Field Name</label>
                <input className="node-textinput mb-4" type="text" value={data.outputName} placeholder="Type" />
                <label className="node-textlabel">Type</label>
                <select className="node-textinput" value={data?.outputType}>
                    <option value="Text">Text</option>
                    <option value="Text Image">Text Image</option>
                    <option value="Formatted Text">Formatted Text</option>
                    <option value="Audio">Audio</option>
                    <option value="JSON">JSON</option>
                    <option value="File">File</option>
                </select>
            </div>
        ,
        styles: { backgroundColor: '#e8f5e9' },
    },
    llmNode: {
        title: 'LLM',
        inputs: [
            { id: 'system', position: 'left', style: { top: '33%' } },
            { id: 'prompt', position: 'left', style: { top: '66%' } }
        ],
        outputs: [{ id: 'response', position: 'right', style: {} }],
        content: (data) => //draggable se jo data aa raha hai i.e., id:llm-1 and inputType=llm
            <div className="container">
                <div className="node-textheader">
                    <p className="node-textlabel">System</p>
                    <button className="node-addvariable">&#123; &#125;</button>
                </div>
                <textarea className="node-textinput mb-4" type="text" value={data?.text} placeholder="System" />

                <div className="node-textheader">
                    <p className="node-textlabel">Prompt</p>
                    <button className="node-addvariable">&#123; &#125;</button>
                </div>
                <textarea className="node-textinput mb-4" type="text" value={data?.text} placeholder="Prompt" />
                
                <label className="node-textlabel">Model Name</label>
                <select className="node-textinput mb-4" value={data?.outputType}>
                    <option value="gpt-4.0">gpt-4.0</option>
                    <option value="gpt-4.3-turbo">gpt-4.3-turbo</option>
                    <option value="gpt3.5">gpt3.5</option>
                </select>

                <input type="checkbox" className="node-textlabel"/>Use Personal API Key
            </div>,
        styles: { backgroundColor: 'black' }
    },
    textNode: {
        title: 'Text',
        inputs: [],
        outputs: [{ id: 'output', position: 'right', style: {} }],
        content: (data) => <div className="container">
            <div className="node-textheader">
                <p className="node-textlabel">Text</p>
                <button className="node-addvariable">&#123; &#125;</button>
            </div>
            <textarea className="node-textinput" type="text" value={data?.text} placeholder="input" />
        </div>,
        styles: { backgroundColor: '#e0f7fa' }
    },

    decisionNode: {
        title: 'Decision',
        inputs: [{id: 'condition', position:'left', style: {top:'50'}}],
        outputs: [
            { id: 'true', position: 'right', style: {top:'25%'} },
            { id: 'false', position: 'right', style: {top:'75%'} }
        ],
        content: (data) => <div className="container">
        <div className="node-textheader">
            <p className="node-textlabel">Condition</p>
        </div>
        <select className="node-textinput mb-4" value={data?.outputType}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
    </div>,
        styles: { backgroundColor: '#FFE4C4' }
    }

};

export default nodeConfig;