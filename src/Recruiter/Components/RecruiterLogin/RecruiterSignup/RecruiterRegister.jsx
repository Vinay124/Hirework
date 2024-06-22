import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import RecruiterNavigation from '../../Navigation/RecruiterNavigation'
import { Link, useNavigate } from 'react-router-dom'
import { RiCloseLargeLine } from 'react-icons/ri'
import Config from '../../../../../config'
import Select from 'react-select';

const RecruiterRegister = () => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyType: '',
    fullName: '',
    location: '',
    phone: '',
    workEmail: '',
    organization: '',
    designation: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLocationChange = (selectedOption) => {
    setFormData({
      ...formData,
      location: selectedOption ? selectedOption.value : '',
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and final submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>

<section>
        <Row className='p-0 m-0'>
          <Col className='col-lg-5 p-0 m-0'>
            <div className='recruterLoginFirstColdiv'>
              <div className='recruterLoginHeadding'>
                <h2>HireWork</h2>
              </div>

              <div className='descriptionData'>
                <h1>Start your journey with Us.</h1>
                <p>Discover the word best community of freelancer and business owners.</p>
              </div>
            </div>
          </Col>
          <Col className='col-lg-7  p-0 m-0'>
          <div className='backtoHomeBtn'>
                <Link to="/">
                  <button className='Backto_mainUi'>
                    {/* <RiCloseLargeLine size={26}/> */}
                    </button>
                </Link>
              </div>
                <div className='loginWrapper'>
              <div className='recruiterinnerDiv'>
              {/* text */}
              <div className='loginWrapperHeadding'>
              <h2 className='text-center'> Welcome </h2>
                  <span>Recruiter Signup </span>
              </div>
                <div className='recruiterMainInputDiv text-left'>
                <Form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <Step1 formData={formData} handleChange={handleChange} />
                  )}
                  {step === 2 && (
                    <Step2
                      formData={formData}
                      handleChange={handleChange}
                      handleLocationChange={handleLocationChange}
                    />
                  )}
                  {step === 3 && (
                    <Step3 formData={formData} handleChange={handleChange} />
                  )}
                  <div className="recruiterButtonWrapper">
                    {step > 1 && <button className='btn_recruiter_Back' onClick={prevStep}>Back</button>}
                    {step < 3 && <button className='btn_recruiter_Next' onClick={nextStep}>Next</button>}
                    {step === 3 && <button className='btn_recruiter_Submit' type="submit">Submit</button>}
                  </div>
                </Form>
                  
                </div>
              </div>
            </div>
          </Col>
        </Row>
    </section>
    </>
  )
}

const Step1 = ({ formData, handleChange }) => (
  <> 
    <Form.Group>
      <Form.Label className='recruiterLabel'>Write your Full Name</Form.Label>
      <Form.Control
        type="text"
        className='recruiterfullName'
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group>
      <Form.Label className='recruiterCompanyTypeLabel'>Choose your company Name</Form.Label>
      <Form.Control
        type="text"
        className='recruiterCompanyType'
        name="companyType"
        value={formData.companyType}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group>
      <Form.Label className='recruiterCompanyTypeLabel'>Company Type</Form.Label>
      <Form.Control
        as="select"
        name="organization"
        className='recruiterCompanyType'
        value={formData.organization}
        onChange={handleChange}
      >
        <option value="">Select Company Type</option>
        <option value="Org1">Organization 1</option>
        <option value="Org2">Organization 2</option>
      </Form.Control>
    </Form.Group>

    <div className='suggestionsDiv'> 
        <div>
          <span>Already Registered? </span>
          <Link to="/RecruiterLogin">Login here</Link>
        </div> 
      </div>
    </>
)


const Step2 = ({ formData, handleChange, handleLocationChange }) => {
  const [locationOptions, setLocationOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchLocations('');
  }, []);

  const fetchLocations = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.example.com/locations?query=${query}`);
      const options = response.data.map((location) => ({
        value: location.name,
        label: location.name,
      }));
      setLocationOptions(options);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
    setIsLoading(false);
  };

  const handleInputChange = (inputValue) => {
    fetchLocations(inputValue);
  };

  return (
    <div>
      <Form.Group>
        <Form.Label className='recruiterCompanyTypeLabel'>Select Location</Form.Label>
        <Select 
          options={locationOptions} className='recruiterSelectType'
          onChange={handleLocationChange}
          onInputChange={handleInputChange}
          isLoading={isLoading}
          value={locationOptions.find(
            (option) => option.value === formData.location
          )}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className='recruiterCompanyTypeLabel'>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          className='recruiterCompanyType'
          value={formData.phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className='recruiterCompanyTypeLabel'>Work email id</Form.Label>
        <Form.Control
          type="email"
          name="workEmail"
          className='recruiterCompanyType'
          value={formData.workEmail}
          onChange={handleChange}
        />
      </Form.Group>
    </div>
  )
};


const Step3 = ({ formData, handleChange }) => (
  <div>

    <Form.Group>
      <Form.Label className='recruiterCompanyTypeLabel'>Designation</Form.Label>
      <Form.Control
        type="text"
        name="designation"
        className='recruiterCompanyType'
        value={formData.designation}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label className='recruiterCompanyTypeLabel'>Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        className='recruiterCompanyType'
        value={formData.password}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label className='recruiterCompanyTypeLabel'>Confirm Password</Form.Label>
      <Form.Control
        type="password"
        name="confirmPassword"
        className='recruiterCompanyType'
        value={formData.confirmPassword}
        onChange={handleChange}
      />
    </Form.Group>
  </div>
);




export default RecruiterRegister