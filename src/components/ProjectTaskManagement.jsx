
import { motion } from 'framer-motion';

const ProjectTaskManagement = () => {

  return (
    <div className="p-6 bg-background text-foreground">
      <h1 className="text-2xl font-bold mb-4">Project & Task Management of disha branch</h1>
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
          <h2 className="font-semibold">Create Disha Project</h2>
          <form >
            
            <input
              type="text"
              name="description"
              placeholder="Description"
             
              className="border border-border rounded-lg p-2 mb-2 w-full"
            />  
            <button type="submit" className="bg-primary text-white hover:bg-secondary p-2 rounded">Disha Create Project</button>
          </form>
        </motion.div>

        <motion.div 
          className="bg-card p-4 rounded-lg shadow transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="font-semibold">Disha Assign Tasks</h2>
          <form>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              
              className="border border-border rounded-lg p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="assignedTo"
              placeholder="Assigned to"
            
              className="border border-border rounded-lg p-2 mb-2 w-full"
            />
            <input
              type="date"
              name="dueDate"
             
              className="border border-border rounded-lg p-2 mb-2 w-full"
            />
            <button type="submit" className="bg-primary text-white hover:bg-secondary p-2 rounded">Disha Assign Task</button>
          </form>
        </motion.div>

        <motion.div 
          className="bg-card p-4 rounded-lg shadow transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="font-semibold">Disha Overview</h2>
          <div className="mt-2">
            <p className="text-lg">Disha Tasks: <span className="text-primary"></span></p>
            <p className="text-lg">Disha Completed: <span className="text-green-500"></span></p>
            <p className="text-lg">Disha Pending: <span className="text-red-500"></span></p>
          </div>
        </motion.div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Disha Manage Tasks</h2>
        <div className="bg-card p-4 rounded-lg shadow mt-2">
          <h3 className="font-bold">Task List</h3>
         
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Disha Comments Section</h2>
        <div className="bg-card p-4 rounded-lg shadow mt-2">
          <form >
            <textarea 
              placeholder="Add a comment..." 
              className="border border-border rounded-lg p-2 w-full mb-2" 
              rows="3"
              
            
            />
            {/* <button type="submit" className="bg-primary text-white hover:bg-secondary p-2 rounded">Disha Add Comment</button> */}
          </form>
         
        </div>
      </div>
    </div>
  );
};
export default ProjectTaskManagement;

