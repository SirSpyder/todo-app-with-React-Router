import React, { useState } from 'react';

function Sidebar({ onAddTask, onClearTasks }) {
    const [taskTitle, setTaskTitle] = useState("");

    // Handle adding a new task
    const handleAddTaskClick = () => {
        onAddTask(taskTitle); // Pass the entered task title to App.js
        setTaskTitle(""); // Clear the input field after adding the task
    };

    return (
        <div style= {{padding: '40px', backgroundColor: '#ADD8E6', width: '300px'}}>
            <h2>Task Manager</h2>
            <input
                type="text"
                placeholder="New task"
                value={taskTitle} // Controlled input
                onChange={(e) => setTaskTitle(e.target.value)} // Update state on input
            />
            <button onClick={handleAddTaskClick} style={{ marginTop: '10px' }}>
                Add Task
            </button>
            <button onClick={onClearTasks} style={{ marginTop: "10px" }}>
                Clear Tasks
            </button>
        </div>
    );
}

export default Sidebar;
