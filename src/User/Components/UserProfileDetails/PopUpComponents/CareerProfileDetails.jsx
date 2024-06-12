import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import { MdOutlineEdit } from 'react-icons/md'

const CareerProfileDetails = () => {

    const CareerProfileDetails = {
        "info":[
            {
                "id":1,
                "industry_headding":"Current industry",
                "industry_type":"IT Services & Consulting",
      
                "department_headding":"Department",
                "department_type":"Engineering - Software & QA",
      
                "jobrole_headding":"Job Role",
                "roleType":"permanent",
      
                "employeetype_headding":"Employment Type",
                "employee_type":"Full Time",
      
                "shift_headding":"Preferred Shift",
                "shift_Type":"Flexible",
      
                "location_headding":"Preferred WorkLocation",
                "location_type":["Bangalore   ", "Hyderabad"],
                
                "salary_":"Expected Salary",
                "salary_fixed":"₹7,00,000"
      
            }
      ]};


    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        currentIndustry: '',
        department: '',
        jobRole: '',
        employmentType: '',
        preferredShift: '',
        preferredWorkLocation: '',
        expectedSalary: ''
  });

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('careerProfile');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      localStorage.setItem('careerProfile', JSON.stringify(formData));
    //   alert('Data saved!');
      setShow(false);
    }
    setValidated(true);
  };


  const outputData = Object.entries(formData).map(([key, value]) => (
    <>
    <div>
        <h6>{key}</h6>
        <span>{value}</span>
    </div>
    </>
  ));

  return (
   <>
            <Row>
                        <Col className='col-lg-12'>
                            <div className='CareerProfileDetails'>
                                <div className='resumeHeadlineDiv'>
                                    <div>
                                        <h6>Career Profile Details</h6>
                                    </div>
                                    <div onClick={() => setShow(true)}>
                                        <MdOutlineEdit className='mx-2' size={22} color='#888888'/>
                                        <span>Edit</span>
                                    </div>
                                </div>

                                {/* CareerProfileDetails  */}
                                <div className='CareerProfileDetailsContent'>
                                {outputData}
                                    {/* {CareerProfileDetails.info.map((items) => {
                                        return(
                                            <>
                                            <div>
                                                <h6>Current industry</h6>
                                                <span>{items.industry_type}</span>
                                            </div>

                                            <div>
                                                <h6>Department</h6>
                                                <span>{items.department_type}</span>
                                            </div>

                                            <div>
                                                <h6>Job Role</h6>
                                                <span>{items.roleType}</span>
                                            </div>

                                            <div>
                                                <h6>Employment Type</h6>
                                                <span>{items.employee_type}</span>
                                            </div>

                                            <div>
                                                <h6>Preferred Shift</h6>
                                                <span>{items.shift_Type}</span>
                                            </div>

                                            <div>
                                                <h6>Preferred WorkLocation</h6>
                                                <span>{items.location_type}</span>
                                            </div>

                                        <div>
                                                <h6>Expected Salary</h6>
                                            <span>{items.salary_fixed}</span>
                                        </div>
                                </>
                                )
                            })} */}
                        </div>
                    </div>
            </Col>
    </Row>


    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Body>
            <div>
                <div className='CareerProfilePopupDetails'>
                    <div className='resumeUploaderHeadding'>
                        <h5>Add Career Profile</h5>
                    </div>
                    <div className='popupCloseIcon' onClick={() => setShow(false)} >
                        <IoClose size={26} color='#888888'/>
                    </div>
                </div>

                <div className='EmployementDetailPopup'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formCurrentIndustry">
                            <Form.Label className='employmentTypeLabel'>Current Industry</Form.Label>
                            <Form.Control
                                required
                                as="select"
                                id="employmentType"
                                name="currentIndustry"
                                value={formData.currentIndustry}
                                onChange={handleChange}
                            >
                            <option value="">Select Industry</option>
                            <option value="IT">IT</option>
                            <option value="Finance">Finance</option>
                            <option value="Healthcare">Healthcare</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please select a current industry.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDepartment">
                        <Form.Label className='experienceYearsLabel'>Department</Form.Label>
                        <Form.Control
                            required
                            as="select"
                            name="department"
                            id="experienceYears"
                            value={formData.department}
                            onChange={handleChange}
                        >
                            <option value="">Select Department</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please select a department.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formJobRole">
                        <Form.Label className='currentCompanyNameLabel'>Job Role</Form.Label>
                        <Form.Control
                            required
                            as="select"
                            name="jobRole"
                            id="experienceMonths"
                            value={formData.jobRole}
                            onChange={handleChange}
                        >
                            <option value="">Select Job Role</option>
                            <option value="Developer">Developer</option>
                            <option value="Manager">Manager</option>
                            <option value="Analyst">Analyst</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please select a job role.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmploymentType">
                        <Form.Label className='currentJobTitleLabel'>Employment Type</Form.Label>
                        <Form.Control
                            required
                            as="select"
                            name="employmentType"
                            id="currentCompanyName"
                            value={formData.employmentType}
                            onChange={handleChange}
                        >
                            <option value="">Select Employment Type</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Contract">Contract</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please select an employment type.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPreferredShift">
                        <Form.Label className='joiningDateLabel'>Preferred Shift</Form.Label>
                        <Form.Control
                            required
                            as="select"
                            name="preferredShift"
                            id='currentJobTitle'
                            value={formData.preferredShift}
                            onChange={handleChange}
                        >
                            <option value="">Select Preferred Shift</option>
                            <option value="Day">Day</option>
                            <option value="Night">Night</option>
                            <option value="Flexible">Flexible</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please select a preferred shift.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPreferredWorkLocation">
                        <Form.Label className='endDateLabel'>Preferred Work Location</Form.Label>
                        <Form.Control
                            required
                            as="select"
                            name="preferredWorkLocation"
                            id="endDateInput"
                            value={formData.preferredWorkLocation}
                            onChange={handleChange}
                        >
                            <option value="">Select Preferred Work Location</option>
                            <option value="Remote">Remote</option>
                            <option value="On-site">On-site</option>
                            <option value="Hybrid">Hybrid</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please select a preferred work location.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formExpectedSalary">
                        <Form.Label className='jobProfileLabel'>Expected Salary</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            id="currentSalary"
                            name="expectedSalary"
                            value={formData.expectedSalary}
                            onChange={handleChange}
                            placeholder="Enter expected salary"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your expected salary.
                        </Form.Control.Feedback>
                        </Form.Group>
                    <div className='actionButtons'>
                        <button className='btn-SaveChanges' type="submit">Save</button>
                    </div>
                </Form> 
                </div>
            </div>
           
        </Modal.Body>
      </Modal>
   </>
  )
}

export default CareerProfileDetails