import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    console.log("INPUT CLICKED - TOOLBAR.JS ME HAIN SABSE PEHLE")
    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='decisionNode' label='Decision' />
            </div>
        </div>
    );
};

