import React, { useState, useEffect } from "react";

function TaskForm({ isEditing, taskToEdit, onAddTask, onUpdateTask }) {
    const [title, setTitle] = useState("");
    // state to manage wheather the task is completed 
    const [completed, setCompleted] = useState(false);


    useEffect(() => {
        if (isEditing && taskToEdit) {
            setTitle(taskToEdit.title);
            setCompleted(taskToEdit.completed);
        } else {
            // reset form fields if not editing
            setTitle("");
            setCompleted(false);
        }
    }, [isEditing, taskToEdit]);

    // Form submission for adding or updating a task
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page reload
        if (isEditing) {
            onUpdateTask({ id: taskToEdit.id, title, completed });
        } else {
            onAddTask({ title, completed });
        }
        // clear the form fields after submission
        setTitle("");
        setCompleted(false);
    };
//render the task form with fields for title and completion status
    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <h2>{isEditing ? "Update Task" : "Create Task"}</h2>
            <div>
                <label>Task Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                    Completed
                </label>
            </div>
            <button type="submit" style={{ marginTop: "10px" }}>
                {isEditing ? "Update Task" : "Add Task"}
            </button>
        </form>
    );
}

export default TaskForm;
