import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { IoClose, IoWalletOutline } from 'react-icons/io5';
import { Col, Row } from 'react-bootstrap';
import { MdOutlineEdit, MdOutlineMail } from 'react-icons/md';
import { HiOutlineCake } from 'react-icons/hi';
import { PiBagSimpleBold } from 'react-icons/pi';
import CalculateAge from 'react-age-calculator'; 

const PersonalDetailsModelPopup = () => {
    
    const [details, setDetails] = useState({
        careerBreak: '',
        address: '',
        differentlyAbled: '',
        gender: '',
        maritalStatus: '',
        email: '',
        birthday: '',
        workType: '',
        salaryExpectations: ''
    });
    const [showUserDetailsModel, setShowUserDetailsModel] = useState(false);
    const [tempDetails, setTempDetails] = useState(details);
    const [error, setError] = useState('');

    useEffect(() => {
        const savedDetails = localStorage.getItem('personalDetails');
        if (savedDetails) {
            setDetails(JSON.parse(savedDetails));
            setTempDetails(JSON.parse(savedDetails));
        }
    }, []);

    const openPersonalDetailPopup = () => {
        setTempDetails(details);
        setShowUserDetailsModel(true);
        setError('');
    };

    const savedProfileDetails = () => {
        const areFieldsFilled = Object.values(tempDetails).every(field => field.trim() !== '');
        if (!areFieldsFilled) {
            setError('All fields are mandatory');
            return;
        }
        setDetails(tempDetails);
        localStorage.setItem('personalDetails', JSON.stringify(tempDetails));
        setShowUserDetailsModel(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleClose = () => {
        setShowUserDetailsModel(false);
        setTempDetails(details);
        setError('');
    }

     


  return (
    <>
            <Row className='personalDetailsInfo'>
                <Col className='col-lg-12'>
                    <div className='personalDetailsinnerDiv'>
                        <div className='personalDetailHeadding'>
                            <div>
                                <h5>Personal Details</h5>
                            </div>
                            <div onClick={openPersonalDetailPopup}>
                                <MdOutlineEdit className='mx-2' size={22} color='#888888' />
                                <span>Edit</span>
                            </div>
                        </div>
                        
                        <div className='personalDetailsinnerWrapper'>
                            <div className='careerBreakDiv'>
                                <h6>Career Break?</h6>
                                <span>{details.careerBreak}</span>
                            </div>

                            <div className='addressdiv'>
                                <h6>Address</h6>
                                <span>{details.address}</span>
                            </div>

                            <div className='Differently_abledDiv'>
                                <h6>Differently abled</h6>
                                <span>{details.differentlyAbled}</span>
                            </div>

                            <div className='personal__Info'>
                                <h6>Personal Info</h6>
                                <span>{details.gender}</span> \ 
                                <span> {details.maritalStatus}</span>
                            </div>
                        </div>
                        
                        <div className='PersonalDetailsSecondDiv'>
                            <div className='EmailDiv'>
                                <div className='iconBackground'>
                                    <MdOutlineMail size={25} color="#888888" />
                                </div>
                                <div>
                                    <h6>Email</h6>
                                    <span>{details.email}</span>
                                </div>
                            </div>

                            <div className='birthDayDiv'>
                                <div className='iconBackground'>
                                    <HiOutlineCake size={25} color="#888888" />
                                </div>
                                <div>
                                    <h6>Birthday</h6>
                                    <span>{details.birthday}</span>
                                </div>
                            </div>

                            <div className='WorkTypeDiv'>
                                <div className='iconBackground'>
                                    <PiBagSimpleBold size={25} color="#888888" />
                                </div>
                                <div>
                                    <h6>Work Type</h6>
                                    <span>{details.workType}</span>
                                </div>
                            </div>

                            <div className='SalaryExpDiv'>
                                <div className='iconBackground'>
                                    <IoWalletOutline size={25} color="#888888" />
                                </div>
                                <div>
                                    <h6>Salary Expectations</h6>
                                    <span>{details.salaryExpectations}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>             

            {/* Model */}
            <Modal show={showUserDetailsModel} onHide={handleClose} centered>
                <Modal.Body>
                    <div className='personalDetailsModelHeadding'>
                        <div>
                            <h5>Personal Details</h5>
                        </div>
                        <div className='popupCloseIcon' onClick={handleClose}>
                            <IoClose size={26} color='#888888' />
                        </div>
                    </div>

                    <div className='personalDetailsMainform'>
                        <Form>
                            <Form.Group controlId="formCareerBreak">
                                <Form.Label>Career Break</Form.Label>
                                <Form.Control as="select" className='CareerBreakDiv' name="careerBreak" value={tempDetails.careerBreak} onChange={handleChange}>
                                    <option value="">Select...</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={tempDetails.address}
                                    onChange={handleChange}
                                    placeholder="Enter address"
                                />
                            </Form.Group>

                            <Form.Group controlId="formDifferentlyAbled">
                                <Form.Label>Differently Abled</Form.Label>
                                <Form.Control as="select" name="differentlyAbled" value={tempDetails.differentlyAbled} onChange={handleChange}>
                                    <option value="">Select...</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formGender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control as="select" name="gender" value={tempDetails.gender} onChange={handleChange}>
                                    <option value="">Select...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="maritalStatus">
                                <Form.Label>Marital Status</Form.Label>
                                <Form.Control as="select" name="maritalStatus" value={tempDetails.maritalStatus} onChange={handleChange}>
                                    <option value="">Select...</option>
                                    <option value="Single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="unmarried">Unmarried</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={tempDetails.email}
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            <Form.Group controlId="formBirthday">
                                <Form.Label>Birthday</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="birthday"
                                    value={tempDetails.birthday}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formWorkType">
                                <Form.Label>Work Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="workType"
                                    value={tempDetails.workType}
                                    onChange={handleChange}
                                    placeholder="Enter work type"
                                />
                            </Form.Group>

                            <Form.Group controlId="formSalaryExpectations">
                                <Form.Label>Salary Expectations</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="salaryExpectations"
                                    value={tempDetails.salaryExpectations}
                                    onChange={handleChange}
                                    placeholder="Enter salary expectations"
                                />
                            </Form.Group>
                        </Form>
                    </div>

                    {error && <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>{error}</div>}

                    <div className='PopupButtonWrapper'>
                        <button className='popupSaveBtn' onClick={savedProfileDetails}>Save</button>
                    </div>
                </Modal.Body>
            </Modal>
   </>
  )
}

export default PersonalDetailsModelPopup