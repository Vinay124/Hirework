import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Modal, Button, Form } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import Certifications from './Certifications';

const Accomplishments = () => {

    // Online Profile
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    socialProile: '',
    url: '',
    description: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('OnlineProfile');
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
    e.preventDefault();
    localStorage.setItem('OnlineProfile', JSON.stringify(formData));
    alert('Data saved!');
    setShow(false);
  };



    // Work sample
    const [workPopup, setWorkPopup] = useState(false);
    const [workPopupData, setWorkPopupData] = useState({
      workTitle: '',
      url: '',
      durationFromYear: '',
      durationFromMonth: '',
      durationToYear: '',
      durationToMonth: '',
      description: ''
    });
    const [charCount, setCharCount] = useState(500);
    const [validated, setValidated] = useState(false);
  
    const handleWorkDataChange = (e) => {
      const { name, value } = e.target;
      setWorkPopupData({
        ...workPopupData,
        [name]: value
      });
  
      if (name === 'description') {
        setCharCount(500 - value.length);
      }
    };
  
    const handleWorkDataSubmit = (e) => {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        localStorage.setItem('workSample', JSON.stringify(workPopupData));
        alert('Data saved!');
        setWorkPopup(false);
      }
      setValidated(true);
    };

    

    // Certifications
    const [model, setModel] = useState(false);


  return (
    <>
    <Row>
        <Col className='col-lg-12 col-md-3 col-sm-12'>
                <div className='resumeHeaddingWrapperDiv'>
                    <div className='AccomplishmentsDivHeadding'>
                <div>
                    <h6>Accomplishments</h6>
                </div>
            </div>
                {/* resume Content */}
                                <div className='AccomplishmentsDiv'>
                                    <span className='AccomplishmentsTxt'>Showcase your credentials by adding relevant certifications, work samples, online profiles, etc.</span>
                                    <div className='AccomplishmentsDivInnerDiv'>
                                        <div>
                                            <h6>Online Profile</h6>
                                            <span>Add link to online professional profiles (e.g. LinkedIn, etc.)</span>
                                        </div>
                                        <div>
                                            <Link onClick={() => setShow(true)}>Add</Link>
                                        </div>
                                    </div>


                                    <div className='AccomplishmentsDivInnerDiv'>
                                        <div>
                                            <h6>Work sample</h6>
                                            <span>Link relevant work samples (e.g. Github, Behance)</span>
                                        </div>
                                        <div>
                                            <Link onClick={() => setWorkPopup(true)}>Add</Link>
                                        </div>
                                    </div>

                                    <div className='AccomplishmentsDivInnerDiv'>
                                        <div>
                                            <h6>Certification</h6>
                                            <span>Add details of certifications you have completed</span>
                                        </div>
                                        <div>
                                            <Link onClick={() => setModel(true)}>Add</Link>
                                        </div>
                                    </div>

                                    {/* <div className='AccomplishmentsDivInnerDiv'>
                                        <div>
                                            <h6>Awards & Achievements</h6>
                                            <span>Enter details of any awards you may have received.</span>
                                        </div>
                                    <div>
                                    <Link>Add</Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </Col>
    </Row>

    <Certifications
    setModel={setModel}
    model={model}/>

    {/* Social online Profile */}
    <Modal show={show} centered onHide={() => setShow(false)}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Accomplishments</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
        <div className='accomplishments'>
            <div className='accomplishmentsHeadding'>
                <div>
                    <h5>Online Profile</h5>
                </div>
                <div className='popupCloseIcon' >
                    <IoClose size={26} color='#888888'/>
                </div>
            </div>

        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formOnlineProfile">
              <Form.Label>Social Profile:</Form.Label>
              <Form.Control
                type="text"
                name="socialProile"
                value={formData.socialProile}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWorkSample">
              <Form.Label>Url:</Form.Label>
              <Form.Control
                type="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCertification">
              <Form.Label>Description :</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </div>
        </div>
        </Modal.Body>
      </Modal>






{/* second Popup */}
    <Modal show={workPopup} onHide={() => setWorkPopup(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Work Sample</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleWorkDataSubmit}>
            <Form.Group className="mb-3" controlId="formWorkTitle">
              <Form.Label>Work Title</Form.Label>
              <Form.Control
                required
                type="text"
                name="workTitle"
                value={workPopupData.workTitle}
                onChange={handleWorkDataChange}
                placeholder="Enter work title"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a work title.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formURL">
              <Form.Label>URL</Form.Label>
              <Form.Control
                required
                type="url"
                name="url"
                value={workPopupData.url}
                onChange={handleWorkDataChange}
                placeholder="Enter URL here"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid URL.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDurationFrom">
              <Form.Label>Duration From</Form.Label>
              <div className="d-flex">
                <Form.Control
                  required
                  type="number"
                  name="durationFromYear"
                  value={workPopupData.durationFromYear}
                  onChange={handleWorkDataChange}
                  placeholder="Year"
                  min="1900"
                  max={new Date().getFullYear()}
                  className="me-2"
                />
                <Form.Control
                  required
                  as="select"
                  name="durationFromMonth"
                  value={workPopupData.durationFromMonth}
                  onChange={handleWorkDataChange}
                >
                  <option value="">Month</option>
                  {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                    <option key={index} value={index + 1}>{month}</option>
                  ))}
                </Form.Control>
              </div>
              <Form.Control.Feedback type="invalid">
                Please select a valid duration from year and month.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDurationTo">
              <Form.Label>Duration To</Form.Label>
              <div className="d-flex">
                <Form.Control
                  required
                  type="number"
                  name="durationToYear"
                  value={workPopupData.durationToYear}
                  onChange={handleWorkDataChange}
                  placeholder="Year"
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  className="me-2"
                />
                <Form.Control
                  required
                  as="select"
                  name="durationToMonth"
                  value={workPopupData.durationToMonth}
                  onChange={handleWorkDataChange}
                >
                  <option value="">Month</option>
                  {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                    <option key={index} value={index + 1}>{month}</option>
                  ))}
                </Form.Control>
              </div>
              <Form.Control.Feedback type="invalid">
                Please select a valid duration to year and month.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                name="description"
                value={workPopupData.description}
                onChange={handleWorkDataChange}
                placeholder="Type here..."
                maxLength="500"
              />
              <Form.Text>{charCount} Character(s) Left</Form.Text>
              <Form.Control.Feedback type="invalid">
                Please enter a description.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>



   
    </>
  )
}

export default Accomplishments