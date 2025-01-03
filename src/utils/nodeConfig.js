const nodeConfig = {
    inputNode: {
        title: 'Input',
        inputs: [],
        outputs: [{ id: 'value', position: 'right', style: {} }],
        content: (data) =>
            <div className="container">
                <div className="node-field">
                    <div className="body-header">
                        <label className="body-label">Field Name</label>
                    </div>
                    <input className="body-textinput border-12" type="text" value={data?.inputName} placeholder="Type" />
                </div>
                <div className="node-field mt-2">
                    <div className="body-header">
                        <label className="body-label">Type</label>
                    </div>
                    <select className="body-textinput border-12" value={data?.inputType}>
                        <option value="Text">Text</option>
                        <option value="File">File</option>
                        <option value="Audio">Audio</option>
                    </select>
                </div>

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
                <div className="node-field">
                    <div className="body-header">
                        <label className="body-label">Field Name</label>
                    </div>
                    <input className="body-textinput border-12" type="text" value={data.outputName} placeholder="Type" />
                </div>

                <div className="node-field mt-2">
                    <div className="body-header">
                        <label className="body-label">Type</label>
                    </div>
                    <select className="body-textinput border-12" value={data?.outputType}>
                        <option value="Text">Text</option>
                        <option value="Text Image">Text Image</option>
                        <option value="Formatted Text">Formatted Text</option>
                        <option value="Audio">Audio</option>
                        <option value="JSON">JSON</option>
                        <option value="File">File</option>
                    </select>
                </div>
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
                <div className="node-field">
                    <div className="body-header d-flex">
                        <p className="body-label">System</p>
                        <button className="body-addvariable">&#123; &#125;</button>
                    </div>
                    <textarea className="body-textinput border-12" type="text" value={data?.text} placeholder="System" />
                </div>

                <div className="node-field">
                    <div className="body-header d-flex">
                        <p className="body-label">Prompt</p>
                        <button className="body-addvariable">&#123; &#125;</button>
                    </div>
                    <textarea className="body-textinput border-12" type="text" value={data?.text} placeholder="Prompt" />
                </div>

                <div className="node-field">
                    <div className="body-header">
                        <label className="body-label">Model Name</label>
                    </div>
                    <select className="body-textinput border-12" value={data?.outputType}>
                        <option value="gpt-4.0">gpt-4.0</option>
                        <option value="gpt-4.3-turbo">gpt-4.3-turbo</option>
                        <option value="gpt3.5">gpt3.5</option>
                    </select>
                </div>

                <div className="node-field">
                    <input type="checkbox" className="body-textinput mt-2" />Use Personal API Key
                </div>
            </div>,
        styles: { backgroundColor: 'black' }
    },
    textNode: {
        title: 'Text',
        inputs: [],
        outputs: [{ id: 'output', position: 'right', style: {} }],
        content: (data) => <div className="container">
            <div className="node-field">
                <div className="body-header d-flex">
                    <p className="body-label">Text</p>
                    <button onClick={() => {
                    }} className="body-addvariable">&#123; &#125;</button>
                </div>
                <textarea className="body-textinput border-12" type="text" value={data?.text} placeholder="Input" />
            </div>
        </div>,
        styles: { backgroundColor: '#e0f7fa' }
    },

    decisionNode: {
        title: 'Decision',
        inputs: [{ id: 'condition', position: 'left', style: { top: '50' } }],
        outputs: [
            { id: 'true', position: 'right', style: { top: '25%' } },
            { id: 'false', position: 'right', style: { top: '75%' } }
        ],
        content: (data) => <div className="container">
            <div className="node-field">
                <div className="body-header d-flex">
                    <p className="body-label">Condition</p>
                </div>
                <select className="body-textinput border-12" value={data?.outputType}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        </div>,
        styles: { backgroundColor: '#FFE4C4' }
    },

    delayNode: {
        title: 'Delay',
        inputs: [{ id: 'startDelay', position: 'left', style: { top: '50' } }],
        outputs: [{ id: 'delayedOutput', position: 'right', style: { top: '50' } }],
        content: (data) => <div className="container">
            <div className="node-field">
                <div className="body-header d-flex">
                    <p className="body-label">Delay (ms)</p>
                </div>
                <input className="body-textinput border-12" type="text" value={data?.delay} placeholder="Enter delay..." />
            </div>
        </div>,
        styles: { backgroundColor: '#FFE4C4' }
    },

    apiCallNode: {
        title: 'API',
        inputs: [{ id: 'apiTrigger', position: 'left', style: { top: '50' } }],
        outputs: [{ id: 'apiResponse', position: 'right', style: { top: '50' } }],
        content: (data) => <div className="container">
            <div className="node-field">
                <div className="body-header d-flex">
                    <p className="body-label">API URL</p>
                </div>
                <input className="body-textinput border-12" type="text" value={data?.apiUrl} placeholder="Enter URL" />
                <button className="button btn-go border-12 mt-2">Request</button>
            </div>
        </div>,
        styles: { backgroundColor: '#FFE4C4' }
    },

    validationNode : {
        title: 'Validation',
        inputs: [{ id: 'dataIn', position: 'left', style: { top: '50' } }],
        outputs: [
            { id: 'valid', position: 'right', style: {top: '25%'} },
            { id: 'invalid', position: 'right', style: {top:'75%'}}
        ],
        content: (data) => <div className="container">
            <div className="node-field">
                <div className="body-header d-flex">
                    <p className="body-label">Validation Rule</p>
                </div>
                <input className="body-textinput border-12" type="text" value={data?.rule} placeholder="Regex or condition" />
            </div>
        </div>,
        styles: { backgroundColor: '#FFE4C4' }
    },

    mergeNode : {
        title: 'Merge',
        inputs: [
            { id: 'input1', position: 'left', style: { top: '25%' } },
            { id: 'input2', position: 'left', style: { top: '75%' } }
        ],
        outputs: [
            { id: 'output', position: 'right'}
        ],
        content: (data) => <div className="container">
            <div className="node-field">
                <div className="body-header d-flex">
                    <p className="body-label">Merge Inputs</p>
                </div>
            </div>
        </div>,
        styles: { backgroundColor: '#FFE4C4' }
    }
};

export default nodeConfig;