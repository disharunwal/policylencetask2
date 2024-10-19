import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectTaskManagement = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [comments, setComments] = useState([]);
  const [newProject, setNewProject] = useState({ name: '', description: '' });
  const [newTask, setNewTask] = useState({ title: '', assignedTo: '', dueDate: '' });
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const projectResponse = await fetch('/api/projects'); // replace with  API endpoint
        const taskResponse = await fetch('/api/tasks'); // replace with  API endpoint
        const commentResponse = await fetch('/api/comments'); // replace with  API endpoint
        
        const projectData = await projectResponse.json();
        const taskData = await taskResponse.json();
        const commentData = await commentResponse.json();
        
        setProjects(projectData);
        setTasks(taskData);
        setComments(commentData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
// Fetch projects, tasks, and comments from your API
  const handleNewProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const createProject = async (e) => {
    e.preventDefault();
    // Post new project to API
    await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject),
    });
    
    setNewProject({ name: '', description: '' });
    fetchData(); 
  };

  const assignTask = async (e) => {
    e.preventDefault();
    // Post new task to API
    await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    });
    
    setNewTask({ title: '', assignedTo: '', dueDate: '' });
    fetchData(); 
  };

  const addComment = async (e) => {
    e.preventDefault();
    // Post new comment to API
    await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newComment }), // adjust as needed
    });
    
    setNewComment('');
    fetchData(); 
  };

  const completeTask = async (taskId) => {
    // Call  API to mark the task as completed
    await fetch(`/api/tasks/${taskId}/complete`, { method: 'PATCH' });
    fetchData(); 
  };

  const deleteTask = async (taskId) => {
    // Call API to delete the task
    await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });
    fetchData(); 
  };

  return (
    <div className="p-6 bg-background text-foreground">
      <h1 className="text-2xl font-bold mb-4">Project & Task Management</h1>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search tasks..." 
          className="border border-border rounded-lg p-2 w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div 
          className="bg-card p-4 rounded-lg shadow transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="font-semibold">Create New Project</h2>
          <form onSubmit={createProject}>
            <input
              type="text"
              name="name"
              placeholder="Project Name"
              value={newProject.name}
              onChange={handleNewProjectChange}
              className="border border-border rounded-lg p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newProject.description}
              onChange={handleNewProjectChange}
              className="border border-border rounded-lg p-2 mb-2 w-full"
            />
            <button type="submit" className="bg-primary text-white hover:bg-secondary p-2 rounded">Create Project</button>
          </form>
        </motion.div>

        <motion.div 
          className="bg-card p-4 rounded-lg shadow transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="font-semibold">Assign Tasks</h2>
          <form onSubmit={assignTask}>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              value={newTask.title}
              onChange={handleNewTaskChange}
              className="border border-border rounded-lg p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="assignedTo"
              placeholder="Assigned to"
              value={newTask.assignedTo}
              onChange={handleNewTaskChange}
              className="border border-border rounded-lg p-2 mb-2 w-full"
            />
            <input
              type="date"
              name="dueDate"
              value={newTask.dueDate}
              onChange={handleNewTaskChange}
              className="border border-border rounded-lg p-2 mb-2 w-full"
            />
            <button type="submit" className="bg-primary text-white hover:bg-secondary p-2 rounded">Assign Task</button>
          </form>
        </motion.div>

        <motion.div 
          className="bg-card p-4 rounded-lg shadow transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="font-semibold">Task Overview</h2>
          <div className="mt-2">
            <p className="text-lg">Total Tasks: <span className="text-primary">{tasks.length}</span></p>
            <p className="text-lg">Completed: <span className="text-green-500">{tasks.filter(task => task.completed).length}</span></p>
            <p className="text-lg">Pending: <span className="text-red-500">{tasks.filter(task => !task.completed).length}</span></p>
          </div>
        </motion.div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Manage Tasks</h2>
        <div className="bg-card p-4 rounded-lg shadow mt-2">
          <h3 className="font-bold">Task List</h3>
          <ul className="mt-2">
            {tasks.map(task => (
              <li key={task.id} className="flex justify-between items-center p-2 border-b border-border">
                <div>
                  <p className="font-semibold">{task.title}</p>
                  <p className="text-muted-foreground">Assigned to: {task.assignedTo}</p>
                </div>
                <div className="flex items-center">
                  <button onClick={() => completeTask(task.id)} className="bg-primary text-white hover:bg-secondary p-1 rounded">Complete</button>
                  <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white hover:bg-red-600 p-1 rounded ml-2">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Comments Section</h2>
        <div className="bg-card p-4 rounded-lg shadow mt-2">
          <form onSubmit={addComment}>
            <textarea 
              placeholder="Add a comment..." 
              className="border border-border rounded-lg p-2 w-full mb-2" 
              rows="3"
              value={newComment}
              onChange={handleNewCommentChange}
            />
            <button type="submit" className="bg-primary text-white hover:bg-secondary p-2 rounded">Add Comment</button>
          </form>
          <div className="mt-4">
            {comments.map(comment => (
              <p key={comment.id} className="border-b border-border p-2">{comment.text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTaskManagement;
