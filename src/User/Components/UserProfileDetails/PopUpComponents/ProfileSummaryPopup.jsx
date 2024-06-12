import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import { MdOutlineEdit } from 'react-icons/md'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { IoClose } from 'react-icons/io5';


const ProfileSummaryPopup = () => {

    
    const [headline, setHeadline] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [newHeadline, setNewHeadline] = useState('');
    const [error, setError] = useState('');
    
    useEffect(() => {
        const savedHeadline = localStorage.getItem('Profilesummery');
        if (savedHeadline) {
            setHeadline(savedHeadline);
        }
    }, []);

    const openModal = () => {
        setNewHeadline(headline); 
        setShowModal(true);
    };

    const saveHeadline = (newHeadline) => {
        setHeadline(newHeadline);
        localStorage.setItem('Profilesummery', newHeadline);
        setShowModal(false);
    };

    const handleSave = () => {
        if (newHeadline.trim().length < 100) {
            setError('Headline must be at least 150 characters long');
        } else {
            setError('');
            saveHeadline(newHeadline.trim());
        }
    };


  return (
    <>
        <Row>
            <Col className='col-lg-12 col-md-3 col-sm-12'>
                <div className='resumeHeaddingWrapperDiv'>
                    <div className='resumeHeadlineDiv'>
                        <div>
                            <h6>Profile summary</h6>
                        </div>
                    <div onClick={openModal}>
                        <MdOutlineEdit className='mx-2' size={22} color='#888888'/>
                        <span>Edit</span>
                    </div>
                </div>
            {/* resume Content */}
                    <div className='profileSummeryDiv'>
                        <span>{headline} </span>
                    </div>
                </div>
            </Col>
        </Row>    


        <Modal show={showModal}  centered>
            <Modal.Body>
                <div className='ResumeHeadlineMain'>
                    <div className='resumeuploadinnerWrapper'>
                        <div className='resumeUploaderHeadding'>
                            <h5>Edit Profile Summery</h5>
                        </div>
                        <div onClick={() => setShowModal(false)}>
                            <IoClose size={22}/>
                        </div>
                    </div>

                    <div className='resumeFormMainDiv'>
                        <Form>
                            <Form.Group controlId="formHeadline">
                                <Form.Control
                                    as="textarea"
                                    className='formResumeInput'
                                    type="text"
                                    rows={3}
                                    value={newHeadline}
                                    onChange={(e) => setNewHeadline(e.target.value)}
                                    placeholder="Profile Summery"
                                    isInvalid={!!error}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {error}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </div>
                </div>

                <div className='resumeButtons'>
                        <button className='resumeContentUpdatebtn' onClick={handleSave}>Update</button>
                </div>
            </Modal.Body>
        </Modal>  
    </>
  )
}

export default ProfileSummaryPopup