import React, { useState } from 'react';
import './StudentForm.css';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        grade: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="student-form">
                
                    Full Name:
                    <input 
                        type="text" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleChange} 
                        className="form-input"
                    />
                
                 
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="form-input"
                    />
                 
                 
                    Password:
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        className="form-input"
                    />
                 
                 
                    Grade:
                    <select 
                        name="grade" 
                        value={formData.grade} 
                        onChange={handleChange} 
                        className="form-input"
                    >
                        <option value="">Select Grade</option>
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                    </select>
                 
                <div className="gender-selection">
                    Gender:
                     
                        <input 
                            type="radio" 
                            name="gender" 
                            value="Male" 
                            checked={formData.gender === 'Male'} 
                            onChange={handleChange} 
                        />
                        Male
                     
                     
                        <input 
                            type="radio" 
                            name="gender" 
                            value="Female" 
                            checked={formData.gender === 'Female'} 
                            onChange={handleChange} 
                        />
                        Female
                     
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default StudentForm;
