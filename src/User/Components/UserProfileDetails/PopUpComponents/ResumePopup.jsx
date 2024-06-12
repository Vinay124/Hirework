import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoClose } from "react-icons/io5";
import { MdOutlineEdit } from 'react-icons/md';
import Form from 'react-bootstrap/Form';

const ResumePopup = () => {

    const [headline, setHeadline] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [newHeadline, setNewHeadline] = useState('');
    const [error, setError] = useState('');
    
    // Load headline from local storage on component mount
    useEffect(() => {
        const savedHeadline = localStorage.getItem('resumeHeadline');
        if (savedHeadline) {
            setHeadline(savedHeadline);
        }
    }, []);

    const openModal = () => {
        setNewHeadline(headline); // Ensure the new headline is initialized with the current headline
        setShowModal(true);
    };

    const saveHeadline = (newHeadline) => {
        setHeadline(newHeadline);
        localStorage.setItem('resumeHeadline', newHeadline);
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
                            <h6>Resume headline</h6>
                        </div>
                        <div onClick={openModal}>
                            <MdOutlineEdit className='mx-2' size={22} color='#888888'/>
                            <span>Edit</span>
                        </div>
                            </div>
                            {/* resume Content */}
                        <div className='resumeHeadline'>
                            <span>{headline}</span>
                        </div>
                    </div>
            </Col>
        </Row>


        <Modal show={showModal}  centered>
            <Modal.Body>
                <div className='ResumeHeadlineMain'>
                    <div className='resumeuploadinnerWrapper'>
                        <div className='resumeUploaderHeadding'>
                            <h5>Edit Resume headline</h5>
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
                                    placeholder="Resume Headline"
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

export default ResumePopup