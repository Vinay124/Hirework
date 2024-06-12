import React, { useState, useEffect } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import { MdOutlineEdit } from 'react-icons/md';
import { FaPlus } from "react-icons/fa6";

const AddNewEducation = ({ handleOpenNextModal, handleCloseNextModal, showAddModal }) => {
    
    const [showModal, setShowModal] = useState(false);
    const [newEducation, setNeweducation] = useState('');
    const [newUniversity, setNewUniversity] = useState('');
    const [newCourse, setNewCourse] = useState('');
    const [newSpecialization, setNewSpecialization] = useState('');
    const [newCourseType, setNewCourseType] = useState('');
    const [newCourseDurationFrom, setNewCourseDurationFrom] = useState('');
    const [newCourseDurationTo, setNewCourseDurationTo] = useState('');
    const [newGradingSystem, setNewGradingSystem] = useState('');
    const [newMarks, setNewMarks] = useState('');
    const [newerror, setNewerror] = useState('');
    const [savedData, setSavedData] = useState([]);

    useEffect(() => {
        const savedNewEducation = localStorage.getItem('education');
        const savedNewUniversity = localStorage.getItem('university');
        const savedNewCourse = localStorage.getItem('course');
        const savedNewSpecialization = localStorage.getItem('specialization');
        const savedNewCourseType = localStorage.getItem('courseType');
        const savedNewCourseDurationFrom = localStorage.getItem('courseDurationFrom');
        const savedNewCourseDurationTo = localStorage.getItem('courseDurationTo');
        const savedNewGradingSystem = localStorage.getItem('gradingSystem');
        const savedNewMarks = localStorage.getItem('marks');
        if (savedNewEducation) setNeweducation(savedNewEducation);
        if (savedNewUniversity) setNewUniversity(savedNewUniversity);
        if (savedNewCourse) setNewCourse(savedNewCourse);
        if (savedNewSpecialization) setNewSpecialization(savedNewSpecialization);
        if (savedNewCourseType) setNewCourseType(savedNewCourseType);
        if (savedNewCourseDurationFrom) setNewCourseDurationFrom(savedNewCourseDurationFrom);
        if (savedNewCourseDurationTo) setNewCourseDurationTo(savedNewCourseDurationTo);
        if (savedNewGradingSystem) setNewGradingSystem(savedNewGradingSystem);
        if (savedNewMarks) setNewMarks(savedNewMarks);
      }, []);
      
    
    //   const handleSaveNewChanges = () => {
    //     if (
    //       !newEducationducation ||
    //       !newUniversity ||
    //       !newCourse ||
    //       !newSpecialization ||
    //       !newCourseType ||
    //       !newCourseDurationFrom ||
    //       !newCourseDurationTo ||
    //       !newGradingSystem ||
    //       !newMarks
    //     ) {
    //         setNewerror('All fields are required');
    //       return;
    //     }
    
    //     setNewerror('');
    //     localStorage.setItem('Neweducation', newEducation);
    //     // localStorage.setItem('graduation', graduation);
    //     localStorage.setItem('NewUniversity', newUniversity);
    //     localStorage.setItem('NewCourse', newCourse);
    //     localStorage.setItem('NewSpecialization', newSpecialization);
    //     localStorage.setItem('NewCourseType', newCourseType);
    //     localStorage.setItem('NewCourseDurationFrom', newCourseDurationFrom);
    //     localStorage.setItem('NewCourseDurationTo', newCourseDurationTo);
    //     localStorage.setItem('NewGradingSystem', newGradingSystem);
    //     localStorage.setItem('NewMarks', newMarks);
    //     handleCloseNextModal();
    //   };

    // Save array data to localStorage
    const handleSaveNewChanges = () => {
    if (
      !newEducation ||
      !newUniversity ||
      !newCourse ||
      !newSpecialization ||
      !newCourseType ||
      !newCourseDurationFrom ||
      !newCourseDurationTo ||
      !newGradingSystem ||
      !newMarks
    ) {
      setNewerror('All fields are required');
      return;
    }
  
    setNewerror('');
    const newData = {
      education: newEducation,
      university: newUniversity,
      course: newCourse,
      specialization: newSpecialization,
      courseType: newCourseType,
      courseDurationFrom: newCourseDurationFrom,
      courseDurationTo: newCourseDurationTo,
      gradingSystem: newGradingSystem,
      marks: newMarks
    };
  
    // Get existing data from localStorage or initialize an empty array
    const existingDataString = localStorage.getItem('educationData');
    const existingData = existingDataString ? JSON.parse(existingDataString) : [];
  
    // Add new data to the existing array
    const updatedData = [...existingData, newData];
  
    // Store the updated array in localStorage
    localStorage.setItem('NeweducationData', JSON.stringify(updatedData));
  
    handleCloseNextModal();
  };
  
  // Retrieve array data from localStorage
    useEffect(() => {
        const savedDataString = localStorage.getItem('educationData');
        if (savedDataString) {
        setSavedData(JSON.parse(savedDataString));
        }
    }, []);
  

   

  return (
    <>
    <Modal show={showAddModal} onHide={handleOpenNextModal} centered>
        <Modal.Body>
          <div >
               <div className='educationDetails'>
                <div>
                        <h5>Education</h5>
                    </div>
                        <div className='popupCloseIcon' onClick={handleCloseNextModal}>
                            <IoClose size={26} color='#888888' />
                    </div>
               </div>

            <div>
              <Form.Group controlId="NewformEducation">
                <Form.Label className='labelNameField'>Education</Form.Label>
                <Form.Control
                className='educationInput'
                  type="text"
                  value={newEducation}
                  onChange={(e) => setNewEducation(e.target.value)}
                  placeholder="Enter your education"
                />
              </Form.Group>

              <Form.Group className='labelEditemailAddress' controlId="NewformUniversity">
                <Form.Label>University/Institute</Form.Label>
                <Form.Control
                  type="text"
                  className='UniversityInput'
                  value={newUniversity}
                  onChange={(e) => setNewUniversity(e.target.value)}
                  placeholder="Enter your university or institute"
                />
              </Form.Group>

              <Form.Group controlId="NewformCourse">
                <Form.Label className='labelCurrentCompany'>Course</Form.Label>
                <Form.Control
                  type="text"
                  className='CourseInput'
                  value={newCourse}
                  onChange={(e) => setNewCourse(e.target.value)}
                  placeholder="Enter your course"
                />
              </Form.Group>

              <Form.Group controlId="NewformSpecialization">
                <Form.Label className='labelExperienceYears'>Specialization</Form.Label>
                <Form.Control
                  type="text"
                  className='SpecializationInput'
                  value={newSpecialization}
                  onChange={(e) => setNewSpecialization(e.target.value)}
                  placeholder="Enter your specialization"
                />
              </Form.Group>

              <Form.Group controlId="NewformCourseType">
                <Form.Label className='labelExperienceMonths'>Course Type</Form.Label>
                <Form.Control
                  as="select"
                  name="courseType"
                  className='courseTypeInput'
                  value={newCourseType}
                  onChange={(e) => setNewCourseType(e.target.value)}
                >
                  <option value="">Select Course Type</option>
                  <option value="fullTime">Full-Time</option>
                  <option value="partTime">Part-Time</option>
                  <option value="correspondence">
                    Correspondence/Distance Learning
                  </option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="NewformCourseDurationFrom">
                <Form.Label className='labelNoticePeriod'>Course Duration From</Form.Label>
                <Form.Control
                  className='CourseDurationFromInput'
                  value={newCourseDurationFrom}
                  onChange={(e) => setNewCourseDurationFrom(e.target.value)}
                  placeholder="Select start date"
                  type="date"
                />
              </Form.Group>

              <Form.Group controlId="NewformCourseDurationTo">
                <Form.Label className='labelExperienceMonths'>Course Duration To</Form.Label>
                <Form.Control                
                    type="date"
                    className='CourseDurationToInput'
                    value={newCourseDurationTo}
                    onChange={(e) => setNewCourseDurationTo(e.target.value)}
                    placeholder="Select end date"
                />
              </Form.Group>

              <Form.Group controlId="NewformGradingSystem">
                <Form.Label className='labelEmail'>Grading System</Form.Label>
                <Form.Control
                  type="text"
                  className='GradingSystemInput'
                  value={newGradingSystem}
                  onChange={(e) => setNewGradingSystem(e.target.value)}
                  placeholder="Enter grading system"
                />
              </Form.Group>

              <Form.Group controlId="NewformMarks">
                <Form.Label className='labelCurrentSalary'>Marks</Form.Label>
                <Form.Control
                  type="text"
                  className='MarksInput'
                  value={newMarks}
                  onChange={(e) => setNewMarks(e.target.value)}
                  placeholder="Enter marks"
                />
              </Form.Group>
            </div>

            <div className='EducationDivCloseDiv'>
                <div className='errorDiv'>
                    {newerror && <p className="text-danger">{newerror}</p>}
                </div>
                <div>
                    <button className='popupSaveBtn' onClick={handleSaveNewChanges}>Save Changes</button>
                </div>
            </div>
          </div>

          
        </Modal.Body>
      </Modal>
      
      </>
  )
}

export default AddNewEducation