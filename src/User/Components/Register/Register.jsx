import React, { useState } from 'react'
import './Register.moudle.css'
// import { createUser } from './api'
import BasicDetails from './BasicDetails'
import MobileAndEmail from './MobileAndEmail'
import PasswordSetup from './PasswordSetup'
import OtpVerification from '../OtpVerification/OtpVerification'
import Config from "../../../../config";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom'


const Register = () => {
    
    const { apiUrl } = Config; 

    const navigate = useNavigate();

    // api
    const createUser = async (userData) => {

        try {

            const response = await axios.post(`${apiUrl}user/signup`,userData);
    
            localStorage.setItem('user', JSON.stringify(response.data));
            sessionStorage.getItem('token', response.data.token)
            
            navigate('/UserDashboard');
    
            const data = await response.json();
            console.log(userData);
            return data;
    
        } catch (error) {
            console.log(userData);
            console.error('Error creating user', error);
            
            throw error;
        }
    };

    // real Data
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        company:0,
        email:'',
        first_name: '',
        last_name: '',
        mobile:'',
        password: '',
        // confirmPassword: '',
        // otpPassword:''
    });

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep (step - 1 );
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            // const userData = {...formData};
            // const response = await createUser(userData);
            const response = await createUser(formData)
            console.log('User Created:', response.data.messsage);
        } catch (error) {
            console.log('Error creating User:', error);
        }
    };

    switch (step) {
        case 1:
            return <BasicDetails formData={formData} setFormData={setFormData} nextStep={nextStep}/>;
        case 2:
            return <PasswordSetup formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>;
        case 3:
            return <MobileAndEmail formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} submitForm={submitForm}/>;
        // case 4:
        //     return <OtpVerification formData={formData} setFormData={setFormData} prevStep={prevStep} submitForm={submitForm}/> 
        default:
            return <BasicDetails formData={formData} setFormData={setFormData} nextStep={nextStep}/>;
    }
}

export default Register