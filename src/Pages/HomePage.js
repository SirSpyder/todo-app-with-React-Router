import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ToDoList from '../components/ToDoList';
import TaskDetails from '../components/TaskDetails';
import TaskFilter from '../components/TaskFilter';

function HomePage({ tasks, handleAddTask, handleClearTasks, handleDeleteTask, onToggleComplete, handleEditTask }) {
    const [editingTask, setEditingTask] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null); // Tracks the selected task for TaskDetails
    const [filter, setFilter] = useState("all"); // Tracks the current filter

    // Filter tasks based on the selected filter
    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true; 
    });

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar onAddTask={handleAddTask} onClearTasks={handleClearTasks} />
            <div style={{ padding: '20px', flex: 1 }}>
                <h1>My To-Do List</h1>
                <TaskFilter onFilterChange={setFilter} /> {/* Add TaskFilter */}

                {/* Display Edit Form if a task is being edited */}
                {editingTask ? (
                    <div>
                        <h2>Edit Task</h2>
                        <input
                            type="text"
                            value={editingTask.title}
                            onChange={(e) =>
                                setEditingTask({ ...editingTask, title: e.target.value })
                            }
                        />
                        <button
                            onClick={() => {
                                if (editingTask.title.trim()) {
                                    handleEditTask(editingTask);
                                    setEditingTask(null); // Clear editing state
                                } else {
                                    alert("Task title cannot be empty");
                                }
                            }}
                            style={{ marginLeft: '10px' }}
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditingTask(null)}
                            style={{ marginLeft: '10px' }}
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <>
                        <ToDoList
                            items={filteredTasks} // Pass filteredTasks instead of all tasks
                            onDeleteTask={handleDeleteTask}
                            onToggleComplete={onToggleComplete}
                            onEditTask={setEditingTask}
                            onTaskClick={setSelectedTask} // Handle task selection for TaskDetails
                        />
                        <TaskDetails task={selectedTask} /> {/* Add TaskDetails */}
                    </>
                )}
            </div>
        </div>
    );
}

export default HomePage;
