import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiInfoPage() {
    const [tasks, setTasks] = useState([]); // State to hold tasks
    const [error, setError] = useState(""); // State for error messages

    useEffect(() => {
        // Fetch tasks from API
        axios
            .get("https://674f71a9bb559617b26f3004.mockapi.io/api/test/tasks") // Replace with your mokiapi url
            .then((response) => setTasks(response.data)) // Update tasks state
            .catch(() => setError("Failed to load tasks. Please try again.")); // Set error message
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>API Tasks</h1>
            {error ? (
                <p style={{ color: "red" }}>{error}</p> // Display error message
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.title} - {task.completed ? "Done" : "Pending"}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ApiInfoPage;

