import React from 'react'
import { TextField, Button, Typography, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function SignupForm() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff5ee]">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <Typography variant="h4" component="h1" className="text-center mb-6 text-gray-800">
          Sign Up
        </Typography>
        <form className="space-y-4">
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            className="bg-gray-50"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            className="bg-gray-50"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            className="bg-gray-50"
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            className="bg-gray-50"
          />
          <Button
            fullWidth
            variant="contained"
            style={{ 
              backgroundColor: '#ff7d33',
              color: 'white',
              padding: '10px 0',
              fontSize: '1rem',
              textTransform: 'none'
            }}
            className="mt-2 hover:bg-[#e66a20] transition-colors duration-300"
          >
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" className="mt-4 text-center text-gray-600">
          Already have an account? 
          <Link 
            component="button"
            onClick={() => navigate('/login')}
            className="text-[#ff7d33] hover:underline ml-1"
          >
            Login
          </Link>
        </Typography>
      </div>
    </div>
  )
}