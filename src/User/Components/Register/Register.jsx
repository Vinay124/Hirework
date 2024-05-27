import React, { useState } from 'react'
import './Register.moudle.css'
import { createUser } from './api'
import BasicDetails from './BasicDetails'
import MobileAndEmail from './MobileAndEmail'
import PasswordSetup from './PasswordSetup'
import OtpVerification from '../OtpVerification/OtpVerification'

const Register = () => {

    // real Data
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email:'',
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