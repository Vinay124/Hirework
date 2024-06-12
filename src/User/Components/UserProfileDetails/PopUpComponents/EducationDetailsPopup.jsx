import React, { useState, useEffect } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import { MdOutlineEdit } from 'react-icons/md';
import { FaPlus } from "react-icons/fa6";
import AddNewEducation from './AddNewEducation';


const EducationDetailsPopup = () => {
  const [showModal, setShowModal] = useState(false);
  const [education, setEducation] = useState('');
  const [university, setUniversity] = useState('');
  const [course, setCourse] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [courseType, setCourseType] = useState('');
  const [courseDurationFrom, setCourseDurationFrom] = useState('');
  const [courseDurationTo, setCourseDurationTo] = useState('');
  const [gradingSystem, setGradingSystem] = useState('');
  const [marks, setMarks] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const savedEducation = localStorage.getItem('education');
    const savedUniversity = localStorage.getItem('university');
    const savedCourse = localStorage.getItem('course');
    const savedSpecialization = localStorage.getItem('specialization');
    const savedCourseType = localStorage.getItem('courseType');
    const savedCourseDurationFrom = localStorage.getItem('courseDurationFrom');
    const savedCourseDurationTo = localStorage.getItem('courseDurationTo');
    const savedGradingSystem = localStorage.getItem('gradingSystem');
    const savedMarks = localStorage.getItem('marks');

    if (savedEducation) setEducation(savedEducation);
    if (savedUniversity) setUniversity(savedUniversity);
    if (savedCourse) setCourse(savedCourse);
    if (savedSpecialization) setSpecialization(savedSpecialization);
    if (savedCourseType) setCourseType(savedCourseType);
    if (savedCourseDurationFrom) setCourseDurationFrom(savedCourseDurationFrom);
    if (savedCourseDurationTo) setCourseDurationTo(savedCourseDurationTo);
    if (savedGradingSystem) setGradingSystem(savedGradingSystem);
    if (savedMarks) setMarks(savedMarks);
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    if (
      !education ||
      !university ||
      !course ||
      !specialization ||
      !courseType ||
      !courseDurationFrom ||
      !courseDurationTo ||
      !gradingSystem ||
      !marks
    ) {
      setError('All fields are required');
      return;
    }

    setError('');
    localStorage.setItem('education', education);
    // localStorage.setItem('graduation', graduation);
    localStorage.setItem('university', university);
    localStorage.setItem('course', course);
    localStorage.setItem('specialization', specialization);
    localStorage.setItem('courseType', courseType);
    localStorage.setItem('courseDurationFrom', courseDurationFrom);
    localStorage.setItem('courseDurationTo', courseDurationTo);
    localStorage.setItem('gradingSystem', gradingSystem);
    localStorage.setItem('marks', marks);
    handleCloseModal();
  };


  
  //   another popup

  const [showAddModal, setShowAddModal] = useState(false);

  const handleOpenNextModal = () => {
      setShowAddModal(true);
    };
  
    const handleCloseNextModal = () => {
      setShowAddModal(false);
    };



  return (
    <>
      <Row>
        <Col className='col-lg-12'>
          <div className='EducationDiv'>
            <div className='EducationinnerDiv'>
              <div>
                <h5>Education Details</h5>
              </div>
              <div className="educationEditButtonWrapper">
                <div onClick={handleOpenNextModal}>
                    <FaPlus className='mx-2' size={22} color='#888888' />
                    <span>Add Education</span>
                </div>
                <div onClick={handleOpenModal}>
                    <MdOutlineEdit className='mx-2' size={22} color='#888888' />
                    <span>Edit</span>
                </div>
              </div>
            </div>

            <div className='educationInnerInfo'>
              {/* {EducationInfo.data.map((items, index) => ( */}
                <div className='educationInnerWrapper'>
                  <div>
                    <h6>{education}</h6>
                    <span>{university}</span>
                  </div>
                  <span className='divider'></span>
                  <div className='edu_year'>
                    <span>{courseDurationFrom}</span>
                    <span className='mx-2'> To </span>
                    <span>{courseDurationTo}</span>
                  </div>
                  <div className='edu_year '>
                    <span className='mx-0'>Total Percentage: {gradingSystem}</span>
                  </div>
                  <div className='edu_year '>
                    <span className='mx-0'>Total Marks: {marks}</span>
                  </div>
                </div>
              {/* ))} */}
            </div>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <div >
               <div className='educationDetails'>
                <div>
                        <h5>Personal Details</h5>
                    </div>
                        <div className='popupCloseIcon' onClick={handleCloseModal}>
                            <IoClose size={26} color='#888888' />
                    </div>
               </div>

            <div>
              <Form.Group controlId="formEducation">
                <Form.Label className='labelNameField'>Education</Form.Label>
                <Form.Control
                className='educationInput'
                  type="text"
                  value={education}
                  name='education'
                  onChange={(e) => setEducation(e.target.value)}
                  placeholder="Enter your education"
                />
              </Form.Group>

              <Form.Group className='labelEditemailAddress' controlId="formUniversity">
                <Form.Label>University/Institute</Form.Label>
                <Form.Control
                  type="text"
                  className='UniversityInput'
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  placeholder="Enter your university or institute"
                />
              </Form.Group>

              <Form.Group controlId="formCourse">
                <Form.Label className='labelCurrentCompany'>Course</Form.Label>
                <Form.Control
                  type="text"
                  className='CourseInput'
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  placeholder="Enter your course"
                />
              </Form.Group>

              <Form.Group controlId="formSpecialization">
                <Form.Label className='labelExperienceYears'>Specialization</Form.Label>
                <Form.Control
                  type="text"
                  className='SpecializationInput'
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  placeholder="Enter your specialization"
                />
              </Form.Group>

              <Form.Group controlId="formCourseType">
                <Form.Label className='labelExperienceMonths'>Course Type</Form.Label>
                <Form.Control
                  as="select"
                  name="courseType"
                  className='courseTypeInput'
                  value={courseType}
                  onChange={(e) => setCourseType(e.target.value)}
                >
                  <option value="">Select Course Type</option>
                  <option value="fullTime">Full-Time</option>
                  <option value="partTime">Part-Time</option>
                  <option value="correspondence">
                    Correspondence/Distance Learning
                  </option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formCourseDurationFrom">
                <Form.Label className='labelNoticePeriod'>Course Duration From</Form.Label>
                <Form.Control
                  className='CourseDurationFromInput'
                  value={courseDurationFrom}
                  onChange={(e) => setCourseDurationFrom(e.target.value)}
                  placeholder="Select start date"
                  type="date"
                />
              </Form.Group>

              <Form.Group controlId="formCourseDurationTo">
                <Form.Label className='labelExperienceMonths'>Course Duration To</Form.Label>
                <Form.Control                
                    type="date"
                    className='CourseDurationToInput'
                    value={courseDurationTo}
                    onChange={(e) => setCourseDurationTo(e.target.value)}
                    placeholder="Select end date"
                />
              </Form.Group>

              <Form.Group controlId="formGradingSystem">
                <Form.Label className='labelEmail'>Grading System</Form.Label>
                <Form.Control
                  type="text"
                  className='GradingSystemInput'
                  value={gradingSystem}
                  onChange={(e) => setGradingSystem(e.target.value)}
                  placeholder="Enter grading system"
                />
              </Form.Group>

              <Form.Group controlId="formMarks">
                <Form.Label className='labelCurrentSalary'>Marks</Form.Label>
                <Form.Control
                  type="text"
                  className='MarksInput'
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                  placeholder="Enter marks"
                />
              </Form.Group>
            </div>

            <div className='EducationDivCloseDiv'>
                <div className='errorDiv'>
                    {error && <p className="text-danger">{error}</p>}
                </div>
                <div>
                    <button className='popupSaveBtn' onClick={handleSaveChanges}>Save Changes</button>
                </div>
            </div>
          </div>

          
        </Modal.Body>
      </Modal>


      {/* add education Model */}
      <AddNewEducation 
      handleOpenNextModal={handleOpenNextModal}
      handleCloseNextModal={handleCloseNextModal}
      showAddModal={showAddModal}/>
    </>
  );
};

export default EducationDetailsPopup;
