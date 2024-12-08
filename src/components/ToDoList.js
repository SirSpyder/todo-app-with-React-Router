import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ items, onDeleteTask, onToggleComplete, onEditTask, onSelectTask }) {
    return (
        <ul>
            {items.map((item) => (
                <ToDoItem
                    key={item.id}
                    item={item}
                    onDelete={() => onDeleteTask(item.id)} // Pass the delete function
                    onToggle={() => onToggleComplete(item.id)} // Pass the toggle function
                    onEdit={() => onEditTask(item)} // Pass the task to edit
                    onSelect={() => onSelectTask(item)}
                />
            ))}
        </ul>
    );
}

export default ToDoList;
