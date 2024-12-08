import React from 'react';
//task filter
function TaskFilter({ onFilterChange }) {
    return (
        <div style={{ marginBottom: '20px' }}>
            <label>Filter Tasks: </label>
            <select onChange={(e) => onFilterChange(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>
        </div>
    );
}

export default TaskFilter;
