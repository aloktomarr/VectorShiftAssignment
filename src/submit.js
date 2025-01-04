export const SubmitButton = () => {
    
    const handleSubmit = async () => {
        const pipeline = {
          nodes: graph.getNodes(),
          edges: graph.getEdges(),
        };
        try {
            const response = await fetch('http://localhost:3000/pipelines/parse', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(pipeline),
            });
            const data = await response.json();
            setAlertMessage(
              `Number of nodes: ${data.num_nodes}, Number of edges: ${data.num_edges}, Is DAG: ${data.is_dag}`
            );
            setShowAlert(true);
          } catch (error) {
            console.error(error);
          }
        };
        const [showAlert, setShowAlert] = useState(false);
const [alertMessage, setAlertMessage] = useState('');
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button className="border-12 p-2" style={{backgroundColor:'#4F5D75'}} onClick={handleSubmit}type="submit">Submit</button>
            {showAlert && (
    <Alert variant="success" onClose={() => setShowAlert(false)}>
      <Alert.Heading>Pipeline Analysis</Alert.Heading>
      <p>{alertMessage}</p>
    </Alert>)}
        </div>
    );
}
