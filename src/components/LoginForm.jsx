// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth hook

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Access login function from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic (e.g., authenticate user via API)
    const userData = { email, name: 'John Doe' }; // Example user data
    login(userData); // Set user in context
    navigate('/'); // Redirect to home
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff5ee]">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <Typography variant="h4" component="h1" className="text-center mb-6 text-gray-800">
          Login
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50"
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            style={{
              backgroundColor: '#ff7d33',
              color: 'white',
              padding: '10px 0',
              fontSize: '1rem',
              textTransform: 'none'
            }}
            className="mt-2 hover:bg-[#e66a20] transition-colors duration-300"
          >
            Login
          </Button>
        </form>
        <div className="mt-4 text-center">
          <Link href="#" className="text-[#ff7d33] hover:underline">
            Forgot Password?
          </Link>
        </div>
        <Typography variant="body2" className="mt-4 text-center text-gray-600">
          Don't have an account? 
          <Link 
            component="button"
            onClick={() => navigate('/signup')}
            className="text-[#ff7d33] hover:underline ml-1"
          >
            Sign up
          </Link>
        </Typography>
      </div>
    </div>
  );
}
