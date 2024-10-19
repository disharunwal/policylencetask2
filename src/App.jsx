import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectTaskManagement from './components/ProjectTaskManagement'; 
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <header className="p-6 bg-primary text-white">
          <h1 className="text-3xl font-bold">Project Management App</h1>
        </header>
        
        <main className="p-6">
          <Routes>
            <Route path="/" element={<ProjectTaskManagement />} />
            
          </Routes>
        </main>

        <footer className="p-6 bg-gray-800 text-white text-center">
          <p>&copy; {new Date().getFullYear()} PolicyLence. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
