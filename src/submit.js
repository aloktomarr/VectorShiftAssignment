import { useStore } from "./store";

export const SubmitButton = () => {
    const { nodes, edges } = useStore();

    async function handleSubmit(event) {
        event.preventDefault();

        if (nodes.length === 0 || edges.length === 0) {
            alert("Please add nodes and edges before submitting.");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:8000/pipelines/parse",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ nodes, edges }),
                },
            );
            console.log(response);
            if (!response.ok) {
                throw new Error(
                    "Failed to parse pipeline but inside try block",
                );
            }

            const data = await response.json();
            alert(
                `Number of nodes: ${data.num_nodes}\nNumber of edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`,
            );
        } catch (error) {
            console.error("Error:", error);
            alert("Error: Failed to parse pipeline. but inside catch block");
        }
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <button
                className="border-12 p-2"
                style={{ backgroundColor: "#5f43b2", color: "white" }}
                type="submit"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};
