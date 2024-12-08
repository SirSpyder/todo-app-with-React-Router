import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'; // HomePage 
import AboutPage from './Pages/AboutPage'; // About Page
import ApiInfoPage from './Pages/ApiInfoPage'; // ApiInfoPage
import NavBar from './components/NavBar'; //NavBar
import Header from './components/Header'; //Header
import Footer from './components/Footer'; //footer
import './App.css';

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Buy groceries", completed: false },
        { id: 2, title: "Walk the dog", completed: true },
        { id: 3, title: "Read a book", completed: false },
    ]);

    // Add task
    const handleAddTask = (title) => {
        if (!title.trim()) return;
        const newTask = { id: Date.now(), title, completed: false };
        setTasks([...tasks, newTask]);
    };

    // Edit task
    const handleEditTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? { ...task, ...updatedTask } : task
            )
        );
    };

    const handleClearTasks = () => {
        setTasks([]);
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Checkbox to toggle task completion
    const onToggleComplete = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };
//routes
    return (
        <Router>
            <div>
                <Header />
                <NavBar />
                <h2>My React App</h2>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                tasks={tasks}
                                handleAddTask={handleAddTask}
                                handleClearTasks={handleClearTasks}
                                handleDeleteTask={handleDeleteTask}
                                onToggleComplete={onToggleComplete}
                                handleEditTask={handleEditTask}
                            />
                        }
                    />
                    <Route path="/about" element={<AboutPage />} />
                    {/* Add a route for ApiInfoPage if you plan to use it */}
                    <Route path="/api-info" element={<ApiInfoPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
