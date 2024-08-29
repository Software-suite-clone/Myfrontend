

import React, { useState } from 'react';
import UserService from '../service/UserService';
import { useNavigate, Link } from 'react-router-dom';
import "./RegistrationPage.css";

function RegistrationPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        city: ''
    });

    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        try {
            // Await the register method and log the resolved value
            const response = await UserService.register(formData);
            console.log(response); // This will now log the actual result, not a promise
            
            // Clear the form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                role: '',
                city: ''
            });
    
            // If no error is thrown, show success alert and navigate
            alert('User registered successfully');
            navigate('/login');
    
        } catch (error) {
            console.error('Error registering user:', error);
    
            // Check if the error is due to a duplicate email
            if (error.response && error.response.status === 403) {
                setError('Email is already registered. Please use a different email.');
            } else {
                console.log(error.response);
                console.log(error.response.status);
                setError('An error occurred while registering user');
            }
        }
    };
    
    

    return (
        <div className="auth-container">
            <h2>Registration</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    <input type="text" name="role" value={formData.role} onChange={handleInputChange} placeholder="Enter your role" required />
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="Enter your city" required />
                </div>
                <button type="submit">Register</button>
            </form>
            <div>        
                <p>Registered user login here <Link to="/">Login here</Link></p>
            </div>
        </div>
    );
}

export default RegistrationPage;
