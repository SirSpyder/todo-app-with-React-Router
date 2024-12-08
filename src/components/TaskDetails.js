import React from 'react';
//task details
function TaskDetails({ task }) {
    if (!task) return <p>Select a task to see details</p>;

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
            <h3>Task Details</h3>
            <p><strong>Title:</strong> {task.title}</p>
            <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}</p>
        </div>
    );
}

export default TaskDetails;
