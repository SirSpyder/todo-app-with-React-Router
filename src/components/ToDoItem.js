import React from 'react';

// Task item with a checkbox and delete button
function ToDoItem({ item, onDelete, onToggle, onEdit, onSelect }) {
    return (
        <li 
            onClick={onSelect} // Add the onClick handler to make the entire list item clickable
            style={{
                fontSize: '20px',
                marginBottom: '8px',
                cursor: 'pointer', // Makes it clear that the item is clickable
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {/* Checkbox to toggle completion */}
            <input 
                type="checkbox" 
                checked={item.completed} 
                onChange={(e) => {
                    e.stopPropagation(); // Prevent onClick from triggering when the checkbox is clicked
                    onToggle(); 
                }}
                style={{ marginRight: '10px' }}
            />
            <span style={{ flexGrow: 1, textDecoration: item.completed ? 'line-through' : 'none' }}>
                {item.title}
            </span>
            <button 
                onClick={(e) => {
                    e.stopPropagation(); // Prevent onClick from triggering when the button is clicked
                    onEdit();
                }} 
                style={{ marginLeft: "10px" }}
            >
                Edit
            </button>
            <button 
                onClick={(e) => {
                    e.stopPropagation(); // Prevent onClick from triggering when the button is clicked
                    onDelete();
                }} 
                style={{ marginLeft: "10px" }}
            >
                Delete
            </button>
        </li>
    );
}

export default ToDoItem;
