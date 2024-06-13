// // import React, { useState, useEffect } from 'react';
// // import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const Test = () => {
    
// //   const [showModal, setShowModal] = useState(false);
// //   const [profilePhoto, setProfilePhoto] = useState(null);
// //   const [name, setName] = useState('');
// //   const [designation, setDesignation] = useState('');
// //   const [employment, setEmployment] = useState('');
// //   const [workStatus, setWorkStatus] = useState('');
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [experienceYears, setExperienceYears] = useState('');
// //   const [experienceMonths, setExperienceMonths] = useState('');
// //   const [noticePeriod, setNoticePeriod] = useState('');
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const savedProfilePhoto = localStorage.getItem('profilePhoto');
// //     const savedName = localStorage.getItem('name');
// //     const savedDesignation = localStorage.getItem('designation');
// //     const savedEmployment = localStorage.getItem('employment');
// //     const savedWorkStatus = localStorage.getItem('workStatus');
// //     const savedMobileNumber = localStorage.getItem('mobileNumber');
// //     const savedEmail = localStorage.getItem('email');
// //     const savedExperienceYears = localStorage.getItem('experienceYears');
// //     const savedExperienceMonths = localStorage.getItem('experienceMonths');
// //     const savedNoticePeriod = localStorage.getItem('noticePeriod');

// //     if (savedProfilePhoto) setProfilePhoto(savedProfilePhoto);
// //     if (savedName) setName(savedName);
// //     if (savedDesignation) setDesignation(savedDesignation);
// //     if (savedEmployment) setEmployment(savedEmployment);
// //     if (savedWorkStatus) setWorkStatus(savedWorkStatus);
// //     if (savedMobileNumber) setMobileNumber(savedMobileNumber);
// //     if (savedEmail) setEmail(savedEmail);
// //     if (savedExperienceYears) setExperienceYears(savedExperienceYears);
// //     if (savedExperienceMonths) setExperienceMonths(savedExperienceMonths);
// //     if (savedNoticePeriod) setNoticePeriod(savedNoticePeriod);
// //   }, []);

// //   const handleOpenModal = () => setShowModal(true);
// //   const handleCloseModal = () => setShowModal(false);

// //   const handleMobileChange = (e) => {
// //     const newMobileNumber = e.target.value;
// //     setMobileNumber(newMobileNumber);
// //     localStorage.setItem('mobileNumber', newMobileNumber);
// //   };

// //   const handleEmailChange = (e) => {
// //     const newEmail = e.target.value;
// //     setEmail(newEmail);
// //     localStorage.setItem('email', newEmail);
// //   };

// //   const handleExperienceYearsChange = (e) => {
// //     const newExperienceYears = e.target.value;
// //     setExperienceYears(newExperienceYears);
// //     localStorage.setItem('experienceYears', newExperienceYears);
// //   };

// //   const handleExperienceMonthsChange = (e) => {
// //     const newExperienceMonths = e.target.value;
// //     setExperienceMonths(newExperienceMonths);
// //     localStorage.setItem('experienceMonths', newExperienceMonths);
// //   };

// //   const handleNoticePeriodChange = (e) => {
// //     const newNoticePeriod = e.target.value;
// //     setNoticePeriod(newNoticePeriod);
// //     localStorage.setItem('noticePeriod', newNoticePeriod);
// //   };

// //   const handleProfilePhotoChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         const newProfilePhoto = reader.result;
// //         setProfilePhoto(newProfilePhoto);
// //         localStorage.setItem('profilePhoto', newProfilePhoto);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSave = () => {
// //     if (!name || !email || !mobileNumber || !experienceYears || !experienceMonths || !noticePeriod) {
// //       setError('All fields are required');
// //       return;
// //     }
// //     setError('');
// //     localStorage.setItem('name', name);
// //     localStorage.setItem('designation', designation);
// //     localStorage.setItem('employment', employment);
// //     localStorage.setItem('workStatus', workStatus);
// //     localStorage.setItem('email', email);
// //     localStorage.setItem('experienceYears', experienceYears);
// //     localStorage.setItem('experienceMonths', experienceMonths);
// //     localStorage.setItem('noticePeriod', noticePeriod);
// //     setShowModal(false);
// //   };

// //   return (
// //     <>
// //       <Button onClick={handleOpenModal}>Open Profile Details</Button>

// //       <Modal show={showModal} onHide={handleCloseModal} centered>
// //         <Modal.Header closeButton>
// //           <Modal.Title>Basic Details</Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //         <div className="text-center mb-3">
// //   <img
// //     src={profilePhoto || 'https://via.placeholder.com/150'}
// //     alt="Profile"
// //     className="img-thumbnail"
// //     style={{ width: '150px', height: '150px' }}
// //   />
// //   <input
// //     type="file"
// //     id="profilePhoto"
// //     className="form-control-file mt-2"
// //     accept="image/*"
// //     onChange={handleProfilePhotoChange}
// //   />
// // </div>

// // <div className="form-group">
// //   <label htmlFor="name">Name</label>
// //   <input
// //     type="text"
// //     className="form-control"
// //     id="name"
// //     value={name}
// //     onChange={(e) => setName(e.target.value)}
// //     placeholder="Enter your name"
// //   />
// // </div>

// // <div className="form-group">
// //   <label htmlFor="designation">Designation</label>
// //   <input
// //     type="text"
// //     className="form-control"
// //     id="designation"
// //     value={designation}
// //     onChange={(e) => setDesignation(e.target.value)}
// //     placeholder="Enter your designation"
// //   />
// // </div>

// // <div className="form-group">
// //   <label htmlFor="employment">Employment</label>
// //   <input
// //     type="text"
// //     className="form-control"
// //     id="employment"
// //     value={employment}
// //     onChange={(e) => setEmployment(e.target.value)}
// //     placeholder="Enter your employment details"
// //   />
// // </div>

// // <div className="form-group">
// //   <label htmlFor="workStatus">Work Status</label>
// //   <input
// //     type="text"
// //     className="form-control"
// //     id="workStatus"
// //     value={workStatus}
// //     onChange={(e) => setWorkStatus(e.target.value)}
// //     placeholder="Enter your work status"
// //   />
// // </div>

// // <div className="form-group">
// //   <label htmlFor="mobileNumber">Mobile Number</label>
// //   <input
// //     type="text"
// //     className="form-control"
// //     id="mobileNumber"
// //     value={mobileNumber}
// //     onChange={handleMobileChange}
// //     placeholder="Enter your mobile number"
// //   />
// // </div>

// // <div className="form-group">
// //   <label htmlFor="email">Email Address</label>
// //   <input
// //     type="email"
// //     className="form-control"
// //     id="email"
// //     value={email}
// //     onChange={handleEmailChange}
// //     placeholder="Enter your email address"
// //   />
// // </div>

// // <div className="form-group">
// //   <label htmlFor="experienceYears">Total Experience (Years)</label>
// //   <select
// //     className="form-control"
// //     id="experienceYears"
// //     value={experienceYears}
// //     onChange={handleExperienceYearsChange}
// //   >
// //     {[...Array(51).keys()].map(year => (
// //       <option key={year} value={year}>{year}</option>
// //     ))}
// //   </select>
// // </div>

// // <div className="form-group">
// //   <label htmlFor="experienceMonths">Total Experience (Months)</label>
// //   <select
// //     className="form-control"
// //     id="experienceMonths"
// //     value={experienceMonths}
// //     onChange={handleExperienceMonthsChange}
// //   >
// //     {[...Array(12).keys()].map(month => (
// //       <option key={month} value={month}>{month}</option>
// //     ))}
// //   </select>
// // </div>

// // <div className="form-group">
// //   <label htmlFor="noticePeriod">Notice Period</label>
// //   <select
// //     className="form-control"
// //     id="noticePeriod"
// //     value={noticePeriod}
// //     onChange={handleNoticePeriodChange}
// //   >
// //     <option value="15 Days or less">15 Days or less</option>
// //     <option value="1 Month">1 Month</option>
// //     <option value="2 Months">2 Months</option>
// //     <option value="3 Months">3 Months</option>
// //     <option value="More than 3 Months">More than 3 Months</option>
// //     <option value="Serving Notice Period">Serving Notice Period</option>
// //   </select>
// // </div>
// // {error && <p className="text-danger">{error}</p>}

// //         </Modal.Body>
// //         <Modal.Footer>
// //           <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
// //           <Button variant="primary" onClick={handleSave}>Save Changes</Button>
// //         </Modal.Footer>
// //       </Modal>
// //     </>
// //   );
// // };

// // export default Test;




// // import React, { useState } from 'react';

// // function Test() {
// //     const [amount, setAmount] = useState('');
// //     const [convertedAmount, setConvertedAmount] = useState('');
  
// //     const convertToRupees = () => {
// //       const amountInDollars = parseFloat(amount);
// //       if (!isNaN(amountInDollars)) {
// //         const rupees = amountInDollars ; // assuming 1 dollar = 75 rupees
// //         const formattedRupees = rupees.toLocaleString('en-IN');
// //         setConvertedAmount(formattedRupees);
// //       } else {
// //         setConvertedAmount('Invalid input');
// //       }
// //     };

// //   return (
// //     <div>
// //       <h2>Number to Rupee Converter</h2>
// //       <input
// //         type="text"
// //         value={amount}
// //         onChange={(e) => setAmount(e.target.value)}
// //         placeholder="Enter amount in dollars"
// //       />
// //       <button onClick={convertToRupees}>Convert</button>
// //       <div>
// //         {convertedAmount && (
// //           <p>{convertedAmount} Rupees</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Test;









// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Row, Col } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Test = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [name, setName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [employment, setEmployment] = useState('');
//   const [workStatus, setWorkStatus] = useState('');
//   const [experienceYears, setExperienceYears] = useState(1);
//   const [experienceMonths, setExperienceMonths] = useState(0);
//   const [noticePeriod, setNoticePeriod] = useState('1 Month');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [email, setEmail] = useState('');



//   const [education, setEducation] = useState('');
//   const [graduation, setGraduation] = useState('');
//   const [university, setUniversity] = useState('');
//   const [course, setCourse] = useState('');
//   const [specialization, setSpecialization] = useState('');
//   const [courseType, setCourseType] = useState('');
//   const [courseDurationFrom, setCourseDurationFrom] = useState('');
//   const [courseDurationTo, setCourseDurationTo] = useState('');
//   const [gradingSystem, setGradingSystem] = useState('');
//   const [marks, setMarks] = useState('');
//   const [employmentType, setEmploymentType] = useState('');
//   const [currentCompanyName, setCurrentCompanyName] = useState('');
//   const [currentJobTitle, setCurrentJobTitle] = useState('');
//   const [joiningDateYear, setJoiningDateYear] = useState('');
//   const [joiningDateMonth, setJoiningDateMonth] = useState('');
//   const [currentSalary, setCurrentSalary] = useState('');
//   const [skills, setSkills] = useState('');
//   const [jobProfile, setJobProfile] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const savedProfilePhoto = localStorage.getItem('profilePhoto');
//     const savedName = localStorage.getItem('name');
//     const savedDesignation = localStorage.getItem('designation');
//     const savedEmployment = localStorage.getItem('employment');
//     const savedWorkStatus = localStorage.getItem('workStatus');
//     const savedExperienceYears = localStorage.getItem('experienceYears');
//     const savedExperienceMonths = localStorage.getItem('experienceMonths');
//     const savedNoticePeriod = localStorage.getItem('noticePeriod');
//     const savedMobileNumber = localStorage.getItem('mobileNumber');
//     const savedEmail = localStorage.getItem('email');





//     const savedEducation = localStorage.getItem('education');
//     const savedGraduation = localStorage.getItem('graduation');
//     const savedUniversity = localStorage.getItem('university');
//     const savedCourse = localStorage.getItem('course');
//     const savedSpecialization = localStorage.getItem('specialization');
//     const savedCourseType = localStorage.getItem('courseType');
//     const savedCourseDurationFrom = localStorage.getItem('courseDurationFrom');
//     const savedCourseDurationTo = localStorage.getItem('courseDurationTo');
//     const savedGradingSystem = localStorage.getItem('gradingSystem');
//     const savedMarks = localStorage.getItem('marks');

//     const savedEmploymentType = localStorage.getItem('employmentType');
//     const savedCurrentCompanyName = localStorage.getItem('currentCompanyName');
    
//     const savedCurrentJobTitle = localStorage.getItem('currentJobTitle');
//     const savedJoiningDateYear = localStorage.getItem('joiningDateYear');
//     const savedJoiningDateMonth = localStorage.getItem('joiningDateMonth');
//     const savedCurrentSalary = localStorage.getItem('currentSalary');
//     const savedSkills = localStorage.getItem('skills');
//     const savedJobProfile = localStorage.getItem('jobProfile');

//     if (savedProfilePhoto) setProfilePhoto(savedProfilePhoto);
//     if (savedName) setName(savedName);
//     if (savedDesignation) setDesignation(savedDesignation);
//     if (savedEmployment) setEmployment(savedEmployment);
//     if (savedWorkStatus) setWorkStatus(savedWorkStatus);
//     if (savedExperienceYears) setExperienceYears(parseInt(savedExperienceYears));
//     if (savedExperienceMonths) setExperienceMonths(parseInt(savedExperienceMonths));
//     if (savedNoticePeriod) setNoticePeriod(savedNoticePeriod);
//     if (savedMobileNumber) setMobileNumber(savedMobileNumber);
//     if (savedEmail) setEmail(savedEmail);





//     if (savedEducation) setEducation(savedEducation);
//     if (savedGraduation) setGraduation(savedGraduation);
//     if (savedUniversity) setUniversity(savedUniversity);
//     if (savedCourse) setCourse(savedCourse);
//     if (savedSpecialization) setSpecialization(savedSpecialization);
//     if (savedCourseType) setCourseType(savedCourseType);
//     if (savedCourseDurationFrom) setCourseDurationFrom(savedCourseDurationFrom);
//     if (savedCourseDurationTo) setCourseDurationTo(savedCourseDurationTo);
//     if (savedGradingSystem) setGradingSystem(savedGradingSystem);
//     if (savedMarks) setMarks(savedMarks);
//     if (savedEmploymentType) setEmploymentType(savedEmploymentType);
//     if (savedCurrentCompanyName) setCurrentCompanyName(savedCurrentCompanyName);
//     if (savedCurrentJobTitle) setCurrentJobTitle(savedCurrentJobTitle);
//     if (savedJoiningDateYear) setJoiningDateYear(savedJoiningDateYear);
//     if (savedJoiningDateMonth) setJoiningDateMonth(savedJoiningDateMonth);
//     if (savedCurrentSalary) setCurrentSalary(savedCurrentSalary);
//     if (savedSkills) setSkills(savedSkills);
//     if (savedJobProfile) setJobProfile(savedJobProfile);
//   }, []);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleSaveChanges = () => {
//     if (!name || !designation || !employment || !workStatus || !mobileNumber || !email || !education || !graduation || !university || !course || !specialization || !courseType || !courseDurationFrom || !courseDurationTo || !gradingSystem || !marks || !employmentType || !currentCompanyName || !currentJobTitle || !joiningDateYear || !joiningDateMonth || !currentSalary || !skills || !jobProfile) {
//       setError('All fields are required');
//       return;
//     }

//     setError('');
//     localStorage.setItem('profilePhoto', profilePhoto);
//     localStorage.setItem('name', name);
//     localStorage.setItem('designation', designation);
//     localStorage.setItem('employment', employment);
//     localStorage.setItem('workStatus', workStatus);
//     localStorage.setItem('experienceYears', experienceYears);
//     localStorage.setItem('experienceMonths', experienceMonths);
//     localStorage.setItem('noticePeriod', noticePeriod);
//     localStorage.setItem('mobileNumber', mobileNumber);
//     localStorage.setItem('email', email);



//     localStorage.setItem('education', education);
//     localStorage.setItem('graduation', graduation);
//     localStorage.setItem('university', university);
//     localStorage.setItem('course', course);
//     localStorage.setItem('specialization', specialization);
//     localStorage.setItem('courseType', courseType);
//     localStorage.setItem('courseDurationFrom', courseDurationFrom);
//     localStorage.setItem('courseDurationTo', courseDurationTo);
//     localStorage.setItem('gradingSystem', gradingSystem);
//     localStorage.setItem('marks', marks);
//     localStorage.setItem('employmentType', employmentType);
//     localStorage.setItem('currentCompanyName', currentCompanyName);
//     localStorage.setItem('currentJobTitle', currentJobTitle);
//     localStorage.setItem('joiningDateYear', joiningDateYear);
//     localStorage.setItem('joiningDateMonth', joiningDateMonth);
//     localStorage.setItem('currentSalary', currentSalary);
//     localStorage.setItem('skills', skills);
//     localStorage.setItem('jobProfile', jobProfile);

//     handleCloseModal();
//   };

//   const handleProfilePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePhoto(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       <Button onClick={handleOpenModal}>Open Profile Details</Button>
//       <div>
//         <h3>Profile Details</h3>
//         <p>Name: {name}</p>
//         <p>Designation: {designation}</p>
//         <p>Employment: {employment}</p>
//         <p>Work Status: {workStatus}</p>
//         <p>Total Experience: {experienceYears} Years {experienceMonths} Months</p>
//         <p>Notice Period: {noticePeriod}</p>
//         <p>Mobile Number: {mobileNumber}</p>
//         <p>Email: {email}</p>
//         <p>Education: {education}</p>
//         <p>Graduation: {graduation}</p>
//         <p>University: {university}</p>
//         <p>Course: {course}</p>
//         <p>Specialization: {specialization}</p>
//         <p>Course Type: {courseType}</p>
//         <p>Course Duration: {courseDurationFrom} to {courseDurationTo}</p>
//         <p>Grading System: {gradingSystem}</p>
//         <p>Marks: {marks}</p>
//         <p>Employment Type: {employmentType}</p>
//         <p>Current Company Name: {currentCompanyName}</p>
//         <p>Current Job Title: {currentJobTitle}</p>
//         <p>Joining Date: {joiningDateYear}-{joiningDateMonth}</p>
//         <p>Current Salary: {currentSalary}</p>
//         <p>Skills Used: {skills}</p>
//         <p>Job Profile: {jobProfile}</p>
//       </div>

//       <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Basic Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="text-center mb-3">
//             <img
//               src={profilePhoto || 'https://via.placeholder.com/150'}
//               alt="Profile"
//               className="img-thumbnail"
//               style={{ width: '150px', height: '150px' }}
//             />
//             <Form.File
//               id="profilePhoto"
//               label="Change Profile Photo"
//               accept="image/*"
//               custom
//               onChange={handleProfilePhotoChange}
//             />
//           </div>

//           <Form.Group controlId="formName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//             />
//           </Form.Group>

//           <Form.Group controlId="formDesignation">
//             <label htmlFor="Designation">Designation</label>
//             <input
//               type="text"
//               id="Designation"
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//               placeholder="Enter your designation"
//             />
//           </Form.Group>

//           <Form.Group controlId="formEmployment">
//             <label htmlFor="formUniversity">Employment</label>
//             <input
//               type="text"
//               id='formUniversity'
//               value={employment}
//               onChange={(e) => setEmployment(e.target.value)}
//               placeholder="Enter your employment details"
//             />
//           </Form.Group>

//           <Form.Group controlId="formWorkStatus">
//             <Form.Label>Work Status</Form.Label>
//             <Form.Control
//               type="text"
//               value={workStatus}
//               onChange={(e) => setWorkStatus(e.target.value)}
//               placeholder="Enter your work status"
//             />
//           </Form.Group>

//           <Form.Group controlId="formMobileNumber">
//             <Form.Label>Mobile Number</Form.Label>
//             <Form.Control
//               type="text"
//               value={mobileNumber}
//               onChange={(e) => setMobileNumber(e.target.value)}
//               placeholder="Enter your mobile number"
//             />
//           </Form.Group>

//           <Form.Group controlId="formEmail">
//             <Form.Label>Email Address</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email address"
//             />
//           </Form.Group>

//           <Form.Group controlId="formExperienceYears">
//             <Form.Label>Total Experience (Years)</Form.Label>
//             <Form.Control
//               as="select"
//               value={experienceYears}
//               onChange={(e) => setExperienceYears(e.target.value)}
//             >
//               {[...Array(51).keys()].map(year => (
//                 <option key={year} value={year}>{year}</option>
//               ))}
//             </Form.Control>
//           </Form.Group>

//           <Form.Group controlId="formExperienceMonths">
//             <Form.Label>Total Experience (Months)</Form.Label>
//             <Form.Control
//               as="select"
//               value={experienceMonths}
//               onChange={(e) => setExperienceMonths(e.target.value)}
//             >
//               {[...Array(12).keys()].map(month => (
//                 <option key={month} value={month}>{month}</option>
//               ))}
//             </Form.Control>
//           </Form.Group>

//           <Form.Group controlId="formNoticePeriod">
//             <Form.Label>Notice Period</Form.Label>
//             <Form.Control
//               as="select"
//               value={noticePeriod}
//               onChange={(e) => setNoticePeriod(e.target.value)}
//             >
//               <option value="15 Days or less">15 Days or less</option>
//               <option value="1 Month">1 Month</option>
//               <optcourseTypeion value="2 Months">2 Months</optcourseTypeion>
//               <option value="3 Months">3 Months</option>
//               <option value="More than 3 Months">More than 3 Months</option>
//               <option value="Serving Notice Period">Serving Notice Period</option>
//             </Form.Control>
//           </Form.Group>

//           <h5>Education Details</h5>
//           <Form.Group controlId="formEducation">
//             <Form.Label>Education</Form.Label>
//             <Form.Control
//               type="text"
//               value={education}
//               onChange={(e) => setEducation(e.target.value)}
//               placeholder="Enter your education"
//             />
//           </Form.Group>

//           <Form.Group controlId="formGraduation">
//             <Form.Label>Graduation/Diploma</Form.Label>
//             <Form.Control
//               type="text"
//               value={graduation}
//               onChange={(e) => setGraduation(e.target.value)}
//               placeholder="Enter your graduation or diploma"
//             />
//           </Form.Group>

//           <Form.Group controlId="formUniversity">
//             <Form.Label>University/Institute</Form.Label>
//             <Form.Control
//               type="text"
//               value={university}
//               onChange={(e) => setUniversity(e.target.value)}
//               placeholder="Enter your university or institute"
//             />
//           </Form.Group>

//           <Form.Group controlId="formCourse">
//             <Form.Label>Course</Form.Label>
//             <Form.Control
//               type="text"
//               value={course}
//               onChange={(e) => setCourse(e.target.value)}
//               placeholder="Enter your course"
//             />
//           </Form.Group>

//           <Form.Group controlId="formSpecialization">
//             <Form.Label>Specialization</Form.Label>
//             <Form.Control
//               type="text"
//               value={specialization}
//               onChange={(e) => setSpecialization(e.target.value)}
//               placeholder="Enter your specialization"
//             />
//           </Form.Group>

//           <Form.Group controlId="formCourseType">
//             <Form.Label>Course Type</Form.Label>
//             <Form.Control
//               type="text"
//               value={courseType}
//               onChange={(e) => setCourseType(e.target.value)}
//               placeholder="Enter your course type"
//             />
//           </Form.Group>

//           <Form.Group controlId="formCourseDurationFrom">
//             <Form.Label>Course Duration From</Form.Label>
//             <Form.Control
//               type="text"
//               value={courseDurationFrom}
//               onChange={(e) => setCourseDurationFrom(e.target.value)}
//               placeholder="Enter start date of course"
//             />
//           </Form.Group>

//           <Form.Group controlId="formCourseDurationTo">
//             <Form.Label>Course Duration To</Form.Label>
//             <Form.Control
//               type="text"
//               value={courseDurationTo}
//               onChange={(e) => setCourseDurationTo(e.target.value)}
//               placeholder="Enter end date of course"
//             />
//           </Form.Group>

//           <Form.Group controlId="formGradingSystem">
//             <Form.Label>Grading System</Form.Label>
//             <Form.Control
//               type="text"
//               value={gradingSystem}
//               onChange={(e) => setGradingSystem(e.target.value)}
//               placeholder="Enter grading system"
//             />
//           </Form.Group>

//           <Form.Group controlId="formMarks">
//             <Form.Label>Marks</Form.Label>
//             <Form.Control
//               type="text"
//               value={marks}
//               onChange={(e) => setMarks(e.target.value)}
//               placeholder="Enter marks"
//             />
//           </Form.Group>

//           <h5>Employment Details</h5>
//           <Form.Group controlId="formEmploymentType">
//             <Form.Label>Employment Type</Form.Label>
//             <Form.Control
//               type="text"
//               value={employmentType}
//               onChange={(e) => setEmploymentType(e.target.value)}
//               placeholder="Enter employment type"
//             />
//           </Form.Group>

//           <Form.Group controlId="formCurrentCompanyName">
//             <Form.Label>Current Company Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={currentCompanyName}
//               onChange={(e) => setCurrentCompanyName(e.target.value)}
//               placeholder="Enter your current company name"
//             />
//           </Form.Group>

//           <Form.Group controlId="formCurrentJobTitle">
//             <Form.Label>Current Job Title</Form.Label>
//             <Form.Control
//               type="text"
//               value={currentJobTitle}
//               onChange={(e) => setCurrentJobTitle(e.target.value)}
//               placeholder="Enter your current job title"
//             />
//           </Form.Group>

//           <Form.Group controlId="formJoiningDateYear">
//             <Form.Label>Joining Date Year</Form.Label>
//             <Form.Control
//               type="text"
//               value={joiningDateYear}
//               onChange={(e) => setJoiningDateYear(e.target.value)}
//               placeholder="Enter your joining year"
//             />
//           </Form.Group>

//           <Form.Group controlId="formJoiningDateMonth">
//             <Form.Label>Joining Date Month</Form.Label>
//             <Form.Control
//               type="text"
//               value={joiningDateMonth}
//               onChange={(e) => setJoiningDateMonth(e.target.value)}
//               placeholder="Enter your joining month"
//             />
//           </Form.Group>

//           <Form.Group controlId="formCurrentSalary">
//             <Form.Label>Current Salary (₹)</Form.Label>
//             <Form.Control
//               type="text"
//               value={currentSalary}
//               onChange={(e) => setCurrentSalary(e.target.value)}
//               placeholder="Enter your current salary"
//             />
//           </Form.Group>

//           <Form.Group controlId="formSkills">
//             <Form.Label>Skills Used</Form.Label>
//             <Form.Control
//               type="text"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               placeholder="Enter your skills"
//             />
//           </Form.Group>

//           <Form.Group controlId="formJobProfile">
//             <Form.Label>Job Profile</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               value={jobProfile}
//               onChange={(e) => setJobProfile(e.target.value)}
//               placeholder="Describe your job profile"
//             />
//           </Form.Group>

//           {error && <p className="text-danger">{error}</p>}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
//           <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default Test;














// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Test = () => {
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [employmentDetails, setEmploymentDetails] = useState({
//     employmentType: '',
//     experienceYears: 1,
//     experienceMonths: 0,
//     currentCompanyName: '',
//     currentJobTitle: '',
//     joiningDateYear: '',
//     joiningDateMonth: '',
//     currentSalary: '',
//     skills: '',
//     jobProfile: '',
//     noticePeriod: '',
//   });

//   useEffect(() => {
//     const savedDetails = JSON.parse(localStorage.getItem('employmentDetails'));
//     if (savedDetails) {
//       setEmploymentDetails(savedDetails);
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmploymentDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     localStorage.setItem('employmentDetails', JSON.stringify(employmentDetails));
//     setShowAddModal(false);
//     setShowEditModal(false);
//   };

//   return (
//     <div className="container mt-5">
//       <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
//         Add Employment
//       </button>
//       <button className="btn btn-secondary ml-2" onClick={() => setShowEditModal(true)}>
//         Edit Employment
//       </button>

//       <div className={`modal ${showAddModal ? 'd-block' : 'd-none'}`} tabIndex="-1">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Add Employment Details</h5>
//               <button type="button" className="close" onClick={() => setShowAddModal(false)}>
//                 <span>&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="form-group">
//                 <label htmlFor="employmentType">Employment Type</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="employmentType"
//                   name="employmentType"
//                   value={employmentDetails.employmentType}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceYears">Total Experience (Years)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceYears"
//                   name="experienceYears"
//                   value={employmentDetails.experienceYears}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceMonths">Total Experience (Months)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceMonths"
//                   name="experienceMonths"
//                   value={employmentDetails.experienceMonths}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentCompanyName">Current Company Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentCompanyName"
//                   name="currentCompanyName"
//                   value={employmentDetails.currentCompanyName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentJobTitle">Current Job Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentJobTitle"
//                   name="currentJobTitle"
//                   value={employmentDetails.currentJobTitle}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="joiningDateYear">Joining Date (Year)</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="joiningDateYear"
//                   name="joiningDateYear"
//                   value={employmentDetails.joiningDateYear}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="joiningDateMonth">Joining Date (Month)</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="joiningDateMonth"
//                   name="joiningDateMonth"
//                   value={employmentDetails.joiningDateMonth}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentSalary">Current Salary</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentSalary"
//                   name="currentSalary"
//                   value={employmentDetails.currentSalary}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="skills">Skills Used</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="skills"
//                   name="skills"
//                   value={employmentDetails.skills}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="jobProfile">Job Profile</label>
//                 <textarea
//                   className="form-control"
//                   id="jobProfile"
//                   name="jobProfile"
//                   rows="3"
//                   value={employmentDetails.jobProfile}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="noticePeriod">Notice Period</label>
//                 <select
//                   className="form-control"
//                   id="noticePeriod"
//                   name="noticePeriod"
//                   value={employmentDetails.noticePeriod}
//                   onChange={handleChange}
//                 >
//                   <option value="15 Days or less">15 Days or less</option>
//                   <option value="1 Month">1 Month</option>
//                   <option value="2 Months">2 Months</option>
//                   <option value="3 Months">3 Months</option>
//                   <option value="More than 3 Months">More than 3 Months</option>
//                   <option value="Serving Notice Period">Serving Notice Period</option>
//                 </select>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary" onClick={handleSave}>
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={`modal ${showEditModal ? 'd-block' : 'd-none'}`} tabIndex="-1">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Edit Employment Details</h5>
//               <button type="button" className="close" onClick={() => setShowEditModal(false)}>
//                 <span>&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="form-group">
//                 <label htmlFor="employmentType">Employment Type</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="employmentType"
//                   name="employmentType"
//                   value={employmentDetails.employmentType}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceYears">Total Experience (Years)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceYears"
//                   name="experienceYears"
//                   value={employmentDetails.experienceYears}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceMonths">Total Experience (Months)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceMonths"
//                   name="experienceMonths"
//                   value={employmentDetails.experienceMonths}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentCompanyName">Current Company Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentCompanyName"
//                   name="currentCompanyName"
//                   value={employmentDetails.currentCompanyName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentJobTitle">Current Job Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentJobTitle"
//                   name="currentJobTitle"
//                   value={employmentDetails.currentJobTitle}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="joiningDateYear">Joining Date (Year)</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="joiningDateYear"
//                   name="joiningDateYear"
//                   value={employmentDetails.joiningDateYear}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="joiningDateMonth">Joining Date (Month)</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="joiningDateMonth"
//                   name="joiningDateMonth"
//                   value={employmentDetails.joiningDateMonth}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentSalary">Current Salary</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentSalary"
//                   name="currentSalary"
//                   value={employmentDetails.currentSalary}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="skills">Skills Used</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="skills"
//                   name="skills"
//                   value={employmentDetails.skills}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="jobProfile">Job Profile</label>
//                 <textarea
//                   className="form-control"
//                   id="jobProfile"
//                   name="jobProfile"
//                   rows="3"
//                   value={employmentDetails.jobProfile}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="noticePeriod">Notice Period</label>
//                 <select
//                   className="form-control"
//                   id="noticePeriod"
//                   name="noticePeriod"
//                   value={employmentDetails.noticePeriod}
//                   onChange={handleChange}
//                 >
//                   <option value="15 Days or less">15 Days or less</option>
//                   <option value="1 Month">1 Month</option>
//                   <option value="2 Months">2 Months</option>
//                   <option value="3 Months">3 Months</option>
//                   <option value="More than 3 Months">More than 3 Months</option>
//                   <option value="Serving Notice Period">Serving Notice Period</option>
//                 </select>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary" onClick={handleSave}>
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;
























// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Test = () => {
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [currentEmploymentIndex, setCurrentEmploymentIndex] = useState(null);
//   const [employmentList, setEmploymentList] = useState([]);
//   const [employmentDetails, setEmploymentDetails] = useState({
//     employmentType: '',
//     experienceYears: 1,
//     experienceMonths: 0,
//     currentCompanyName: '',
//     currentJobTitle: '',
//     joiningDateYear: '',
//     joiningDateMonth: '',
//     currentSalary: '',
//     skills: '',
//     jobProfile: '',
//     noticePeriod: '',
//   });

//   useEffect(() => {
//     const savedList = JSON.parse(localStorage.getItem('employmentList')) || [];
//     setEmploymentList(savedList);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmploymentDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     // Validation
//     for (const key in employmentDetails) {
//       if (employmentDetails[key] === '') {
//         alert('Please fill all fields.');
//         return;
//       }
//     }

//     const updatedList = [...employmentList];

//     if (currentEmploymentIndex !== null) {
//       updatedList[currentEmploymentIndex] = employmentDetails;
//     } else {
//       updatedList.push(employmentDetails);
//     }

//     setEmploymentList(updatedList);
//     localStorage.setItem('employmentList', JSON.stringify(updatedList));
//     setEmploymentDetails({
//       employmentType: '',
//       experienceYears: 1,
//       experienceMonths: 0,
//       currentCompanyName: '',
//       currentJobTitle: '',
//       joiningDateYear: '',
//       joiningDateMonth: '',
//       currentSalary: '',
//       skills: '',
//       jobProfile: '',
//       noticePeriod: '',
//     });
//     setShowAddModal(false);
//     setShowEditModal(false);
//     setCurrentEmploymentIndex(null);
//   };

//   const handleEdit = (index) => {
//     setCurrentEmploymentIndex(index);
//     setEmploymentDetails(employmentList[index]);
//     setShowEditModal(true);
//   };

//   return (
//     <div className="container mt-5">
//       <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
//         Add Employment
//       </button>

//       <div className="mt-3">
//         {employmentList.map((employment, index) => (
//           <div key={index} className="card mb-2">
//             <div className="card-body">
//               <h5 className="card-title">{employment.currentCompanyName}</h5>
//               <p className="card-text">
//                 {employment.currentJobTitle} ({employment.joiningDateMonth}/{employment.joiningDateYear})
//               </p>
//               <button className="btn btn-secondary" onClick={() => handleEdit(index)}>
//                 Edit
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={`modal ${showAddModal ? 'd-block' : 'd-none'}`} tabIndex="-1">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Add Employment Details</h5>
//               <button type="button" className="close" onClick={() => setShowAddModal(false)}>
//                 <span>&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="form-group">
//                 <label htmlFor="employmentType">Employment Type</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="employmentType"
//                   name="employmentType"
//                   value={employmentDetails.employmentType}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceYears">Total Experience (Years)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceYears"
//                   name="experienceYears"
//                   value={employmentDetails.experienceYears}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceMonths">Total Experience (Months)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceMonths"
//                   name="experienceMonths"
//                   value={employmentDetails.experienceMonths}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentCompanyName">Current Company Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentCompanyName"
//                   name="currentCompanyName"
//                   value={employmentDetails.currentCompanyName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentJobTitle">Current Job Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentJobTitle"
//                   name="currentJobTitle"
//                   value={employmentDetails.currentJobTitle}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="joiningDateYear">Joining Date (Year)</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="joiningDateYear"
//                   name="joiningDateYear"
//                   value={employmentDetails.joiningDateYear}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="joiningDateMonth">Joining Date (Month)</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="joiningDateMonth"
//                   name="joiningDateMonth"
//                   value={employmentDetails.joiningDateMonth}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentSalary">Current Salary</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentSalary"
//                   name="currentSalary"
//                   value={employmentDetails.currentSalary}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="skills">Skills Used</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="skills"
//                   name="skills"
//                   value={employmentDetails.skills}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="jobProfile">Job Profile</label>
//                 <textarea
//                   className="form-control"
//                   id="jobProfile"
//                   name="jobProfile"
//                   rows="3"
//                   value={employmentDetails.jobProfile}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="noticePeriod">Notice Period</label>
//                 <select
//                   className="form-control"
//                   id="noticePeriod"
//                   name="noticePeriod"
//                   value={employmentDetails.noticePeriod}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Notice Period</option>
//                   <option value="15 Days or less">15 Days or less</option>
//                   <option value="1 Month">1 Month</option>
//                   <option value="2 Months">2 Months</option>
//                   <option value="3 Months">3 Months</option>
//                   <option value="More than 3 Months">More than 3 Months</option>
//                   <option value="Serving Notice Period">Serving Notice Period</option>
//                 </select>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary" onClick={handleSave}>
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={`modal ${showEditModal ? 'd-block' : 'd-none'}`} tabIndex="-1">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Edit Employment Details</h5>
//               <button type="button" className="close" onClick={() => setShowEditModal(false)}>
//                 <span>&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="form-group">
//                 <label htmlFor="employmentType">Employment Type</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="employmentType"
//                   name="employmentType"
//                   value={employmentDetails.employmentType}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceYears">Total Experience (Years)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceYears"
//                   name="experienceYears"
//                   value={employmentDetails.experienceYears}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceMonths">Total Experience (Months)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceMonths"
//                   name="experienceMonths"
//                   value={employmentDetails.experienceMonths}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentCompanyName">Current Company Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentCompanyName"
//                   name="currentCompanyName"
//                   value={employmentDetails.currentCompanyName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentJobTitle">Current Job Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentJobTitle"
//                   name="currentJobTitle"
//                   value={employmentDetails.currentJobTitle}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="joiningDateYear">Joining Date (Year)</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="joiningDateYear"
//                   name="joiningDateYear"
//                   value={employmentDetails.joiningDateYear}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="joiningDateMonth">Joining Date (Month)</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="joiningDateMonth"
//                   name="joiningDateMonth"
//                   value={employmentDetails.joiningDateMonth}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentSalary">Current Salary</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentSalary"
//                   name="currentSalary"
//                   value={employmentDetails.currentSalary}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="skills">Skills Used</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="skills"
//                   name="skills"
//                   value={employmentDetails.skills}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="jobProfile">Job Profile</label>
//                 <textarea
//                   className="form-control"
//                   id="jobProfile"
//                   name="jobProfile"
//                   rows="3"
//                   value={employmentDetails.jobProfile}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="noticePeriod">Notice Period</label>
//                 <select
//                   className="form-control"
//                   id="noticePeriod"
//                   name="noticePeriod"
//                   value={employmentDetails.noticePeriod}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Notice Period</option>
//                   <option value="15 Days or less">15 Days or less</option>
//                   <option value="1 Month">1 Month</option>
//                   <option value="2 Months">2 Months</option>
//                   <option value="3 Months">3 Months</option>
//                   <option value="More than 3 Months">More than 3 Months</option>
//                   <option value="Serving Notice Period">Serving Notice Period</option>
//                 </select>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary" onClick={handleSave}>
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;


// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Test = () => {
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [currentEmploymentIndex, setCurrentEmploymentIndex] = useState(null);
//   const [employmentList, setEmploymentList] = useState([]);
//   const [employmentDetails, setEmploymentDetails] = useState({
//     employmentType: '',
//     experienceYears: 1,
//     experienceMonths: 0,
//     currentCompanyName: '',
//     currentJobTitle: '',
//     joiningDate: new Date(),
//     endDate: new Date(),
//     currentSalary: '',
//     skills: '',
//     jobProfile: '',
//     noticePeriod: '',
//     stillWorking: false,
//   });

//   useEffect(() => {
//     const savedList = JSON.parse(localStorage.getItem('employmentList')) || [];
//     setEmploymentList(savedList);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setEmploymentDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleDateChange = (date, fieldName) => {
//     setEmploymentDetails((prevDetails) => ({
//       ...prevDetails,
//       [fieldName]: date,
//     }));
//   };

//   const handleSave = () => {
//     // Validation
//     for (const key in employmentDetails) {
//       if (employmentDetails[key] === '' && key !== 'endDate') {
//         alert('Please fill all fields.');
//         return;
//       }
//     }

//     const updatedList = [...employmentList];

//     if (currentEmploymentIndex !== null) {
//       updatedList[currentEmploymentIndex] = employmentDetails;
//     } else {
//       updatedList.push(employmentDetails);
//     }

//     setEmploymentList(updatedList);
//     localStorage.setItem('employmentList', JSON.stringify(updatedList));
//     resetForm();
//     setShowAddModal(false);
//     setShowEditModal(false);
//     setCurrentEmploymentIndex(null);
//   };

//   const resetForm = () => {
//     setEmploymentDetails({
//       employmentType: '',
//       experienceYears: 1,
//       experienceMonths: 0,
//       currentCompanyName: '',
//       currentJobTitle: '',
//       joiningDate: new Date(),
//       endDate: new Date(),
//       currentSalary: '',
//       skills: '',
//       jobProfile: '',
//       noticePeriod: '',
//       stillWorking: false,
//     });
//   };

//   const handleEdit = (index) => {
//     setCurrentEmploymentIndex(index);
//     setEmploymentDetails(employmentList[index]);
//     setShowEditModal(true);
//   };

//   const handleDelete = (index) => {
//     const updatedList = employmentList.filter((_, i) => i !== index);
//     setEmploymentList(updatedList);
//     localStorage.setItem('employmentList', JSON.stringify(updatedList));
//   };

//   return (
//     <div className="container mt-5">
//       <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
//         Add Employment
//       </button>

//       <div className="mt-3">
//         {employmentList.map((employment, index) => (
//           <div key={index} className="card mb-2">
//             <div className="card-body">
//               <h5 className="card-title">{employment.currentCompanyName}</h5>
//               <p className="card-text">
//                 {employment.currentJobTitle} ({employment.joiningDate.toLocaleDateString()})
//               </p>
//               <button className="btn btn-secondary mr-2" onClick={() => handleEdit(index)}>
//                 Edit
//               </button>
//               <button className="btn btn-danger" onClick={() => handleDelete(index)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={`modal ${showAddModal ? 'd-block' : 'd-none'}`} tabIndex="-1">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Add Employment Details</h5>
//               <button type="button" className="close" onClick={() => setShowAddModal(false)}>
//                 <span>&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="form-group">
//                 <label htmlFor="employmentType">Employment Type</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="employmentType"
//                   name="employmentType"
//                   value={employmentDetails.employmentType}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceYears">Total Experience (Years)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceYears"
//                   name="experienceYears"
//                   value={employmentDetails.experienceYears}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceMonths">Total Experience (Months)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceMonths"
//                   name="experienceMonths"
//                   value={employmentDetails.experienceMonths}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentCompanyName">Current Company Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentCompanyName"
//                   name="currentCompanyName"
//                   value={employmentDetails.currentCompanyName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentJobTitle">Current Job Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentJobTitle"
//                   name="currentJobTitle"
//                   value={employmentDetails.currentJobTitle}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="joiningDate">Joining Date</label>
//                 <DatePicker
//                   selected={employmentDetails.joiningDate}
//                   onChange={(date) => handleDateChange(date, 'joiningDate')}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="stillWorking">
//                   <input
//                     type="checkbox"
//                     id="stillWorking"
//                     name="stillWorking"
//                     checked={employmentDetails.stillWorking}
//                     onChange={handleChange}
//                   />{' '}
//                   Still working here
//                 </label>
//               </div>
//               {!employmentDetails.stillWorking && (
//                 <div className="form-group">
//                   <label htmlFor="endDate">End Date</label>
//                   <DatePicker
//                     selected={employmentDetails.endDate}
//                     onChange={(date) => handleDateChange(date, 'endDate')}
//                     className="form-control"
//                   />
//                 </div>
//               )}
//               <div className="form-group">
//                 <label htmlFor="currentSalary">Current Salary</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentSalary"
//                   name="currentSalary"
//                   value={employmentDetails.currentSalary}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="skills">Skills Used</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="skills"
//                   name="skills"
//                   value={employmentDetails.skills}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="jobProfile">Job Profile</label>
//                 <textarea
//                   className="form-control"
//                   id="jobProfile"
//                   name="jobProfile"
//                   rows="3"
//                   value={employmentDetails.jobProfile}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="noticePeriod">Notice Period</label>
//                 <select
//                   className="form-control"
//                   id="noticePeriod"
//                   name="noticePeriod"
//                   value={employmentDetails.noticePeriod}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Notice Period</option>
//                   <option value="15 Days or less">15 Days or less</option>
//                   <option value="1 Month">1 Month</option>
//                   <option value="2 Months">2 Months</option>
//                   <option value="3 Months">3 Months</option>
//                   <option value="More than 3 Months">More than 3 Months</option>
//                   <option value="Serving Notice Period">Serving Notice Period</option>
//                 </select>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary" onClick={handleSave}>
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={`modal ${showEditModal ? 'd-block' : 'd-none'}`} tabIndex="-1">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Edit Employment Details</h5>
//               <button type="button" className="close" onClick={() => setShowEditModal(false)}>
//                 <span>&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="form-group">
//                 <label htmlFor="employmentType">Employment Type</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="employmentType"
//                   name="employmentType"
//                   value={employmentDetails.employmentType}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceYears">Total Experience (Years)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceYears"
//                   name="experienceYears"
//                   value={employmentDetails.experienceYears}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceMonths">Total Experience (Months)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceMonths"
//                   name="experienceMonths"
//                   value={employmentDetails.experienceMonths}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentCompanyName">Current Company Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentCompanyName"
//                   name="currentCompanyName"
//                   value={employmentDetails.currentCompanyName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentJobTitle">Current Job Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentJobTitle"
//                   name="currentJobTitle"
//                   value={employmentDetails.currentJobTitle}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="joiningDate">Joining Date</label>
//                 <DatePicker
//                   selected={employmentDetails.joiningDate}
//                   onChange={(date) => handleDateChange(date, 'joiningDate')}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="stillWorking">
//                   <input
//                     type="checkbox"
//                     id="stillWorking"
//                     name="stillWorking"
//                     checked={employmentDetails.stillWorking}
//                     onChange={handleChange}
//                   />{' '}
//                   Still working here
//                 </label>
//               </div>
//               {!employmentDetails.stillWorking && (
//                 <div className="form-group">
//                   <label htmlFor="endDate">End Date</label>
//                   <DatePicker
//                     selected={employmentDetails.endDate}
//                     onChange={(date) => handleDateChange(date, 'endDate')}
//                     className="form-control"
//                   />
//                 </div>
//               )}
//               <div className="form-group">
//                 <label htmlFor="currentSalary">Current Salary</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentSalary"
//                   name="currentSalary"
//                   value={employmentDetails.currentSalary}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="skills">Skills Used</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="skills"
//                   name="skills"
//                   value={employmentDetails.skills}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="jobProfile">Job Profile</label>
//                 <textarea
//                   className="form-control"
//                   id="jobProfile"
//                   name="jobProfile"
//                   rows="3"
//                   value={employmentDetails.jobProfile}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="noticePeriod">Notice Period</label>
//                 <select
//                   className="form-control"
//                   id="noticePeriod"
//                   name="noticePeriod"
//                   value={employmentDetails.noticePeriod}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Notice Period</option>
//                   <option value="15 Days or less">15 Days or less</option>
//                   <option value="1 Month">1 Month</option>
//                   <option value="2 Months">2 Months</option>
//                   <option value="3 Months">3 Months</option>
//                   <option value="More than 3 Months">More than 3 Months</option>
//                   <option value="Serving Notice Period">Serving Notice Period</option>
//                 </select>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary" onClick={handleSave}>
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;




// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Test = () => {
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [currentEmploymentIndex, setCurrentEmploymentIndex] = useState(null);
//   const [employmentList, setEmploymentList] = useState([]);
//   const [employmentDetails, setEmploymentDetails] = useState({
//     employmentType: '',
//     experienceYears: 1,
//     experienceMonths: 0,
//     currentCompanyName: '',
//     currentJobTitle: '',
//     joiningDate: new Date(),
//     endDate: new Date(),
//     currentSalary: '',
//     skills: '',
//     jobProfile: '',
//     noticePeriod: '',
//     stillWorking: false,
//   });

//   useEffect(() => {
//     const savedList = JSON.parse(localStorage.getItem('employmentList')) || [];
//     const parsedList = savedList.map((item) => ({
//       ...item,
//       joiningDate: new Date(item.joiningDate),
//       endDate: item.endDate ? new Date(item.endDate) : new Date(),
//     }));
//     setEmploymentList(parsedList);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setEmploymentDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleDateChange = (date, fieldName) => {
//     setEmploymentDetails((prevDetails) => ({
//       ...prevDetails,
//       [fieldName]: date,
//     }));
//   };

//   const handleSave = () => {
//     // Validation
//     for (const key in employmentDetails) {
//       if (employmentDetails[key] === '' && key !== 'endDate') {
//         alert('Please fill all fields.');
//         return;
//       }
//     }

//     const updatedList = [...employmentList];

//     if (currentEmploymentIndex !== null) {
//       updatedList[currentEmploymentIndex] = employmentDetails;
//     } else {
//       updatedList.push(employmentDetails);
//     }

//     setEmploymentList(updatedList);
//     localStorage.setItem('employmentList', JSON.stringify(updatedList));
//     resetForm();
//     setShowAddModal(false);
//     setShowEditModal(false);
//     setCurrentEmploymentIndex(null);
//   };

//   const resetForm = () => {
//     setEmploymentDetails({
//       employmentType: '',
//       experienceYears: 1,
//       experienceMonths: 0,
//       currentCompanyName: '',
//       currentJobTitle: '',
//       joiningDate: new Date(),
//       endDate:new Date(),
//       currentSalary: '',
//       skills: '',
//       jobProfile: '',
//       noticePeriod: '',
//       stillWorking: false,
//     });
//   };

//   const handleEdit = (index) => {
//     setEmploymentDetails(employmentList[index]);
//     setCurrentEmploymentIndex(index);
//     setShowEditModal(true);
//   };

//   const handleDelete = (index) => {
//     const updatedList = employmentList.filter((_, i) => i !== index);
//     setEmploymentList(updatedList);
//     localStorage.setItem('employmentList', JSON.stringify(updatedList));
//   };

//   return (
//     <div className="container">
//       <h1 className="my-4">Employment Details</h1>
//       <button className="btn btn-primary mb-3" onClick={() => setShowAddModal(true)}>
//         Add Employment
//       </button>

//       <ul className="list-group">
//         {employmentList.map((employment, index) => (
//           <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//             <div>
//               <strong>{employment.currentCompanyName}</strong><br />
//               {employment.currentJobTitle}<br />
//               {employment.joiningDate && employment.joiningDate.toLocaleDateString()} - 
//               {employment.stillWorking ? 'Present' : employment.endDate && employment.endDate.toLocaleDateString()}
//             </div>
//             <div>
//               <button className="btn btn-sm btn-info mr-2" onClick={() => handleEdit(index)}>Edit</button>
//               <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Add Employment Modal */}
//       <div className={`modal ${showAddModal ? 'd-block' : 'd-none'}`} tabIndex="-1">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Add Employment Details</h5>
//               <button type="button" className="close" onClick={() => setShowAddModal(false)}>
//                 <span>&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="form-group">
//                 <label htmlFor="employmentType">Employment Type</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="employmentType"
//                   name="employmentType"
//                   value={employmentDetails.employmentType}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceYears">Total Experience (Years)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceYears"
//                   name="experienceYears"
//                   value={employmentDetails.experienceYears}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceMonths">Total Experience (Months)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceMonths"
//                   name="experienceMonths"
//                   value={employmentDetails.experienceMonths}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentCompanyName">Current Company Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentCompanyName"
//                   name="currentCompanyName"
//                   value={employmentDetails.currentCompanyName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentJobTitle">Current Job Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentJobTitle"
//                   name="currentJobTitle"
//                   value={employmentDetails.currentJobTitle}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="joiningDate">Joining Date</label>
//                 <DatePicker
//                   selected={employmentDetails.joiningDate}
//                   onChange={(date) => handleDateChange(date, 'joiningDate')}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="stillWorking">
//                   <input
//                     type="checkbox"
//                     id="stillWorking"
//                     name="stillWorking"
//                     checked={employmentDetails.stillWorking}
//                     onChange={handleChange}
//                   />{' '}
//                   Still working here
//                 </label>
//               </div>
//               {!employmentDetails.stillWorking && (
//                 <div className="form-group">
//                   <label htmlFor="endDate">End Date</label>
//                   <DatePicker
//                     selected={employmentDetails.endDate}
//                     onChange={(date) => handleDateChange(date, 'endDate')}
//                     className="form-control"
//                   />
//                 </div>
//               )}
//               <div className="form-group">
//                 <label htmlFor="currentSalary">Current Salary</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentSalary"
//                   name="currentSalary"
//                   value={employmentDetails.currentSalary}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="skills">Skills Used</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="skills"
//                   name="skills"
//                   value={employmentDetails.skills}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="jobProfile">Job Profile</label>
//                 <textarea
//                   className="form-control"
//                   id="jobProfile"
//                   name="jobProfile"
//                   rows="3"
//                   value={employmentDetails.jobProfile}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="noticePeriod">Notice Period</label>
//                 <select
//                   className="form-control"
//                   id="noticePeriod"
//                   name="noticePeriod"
//                   value={employmentDetails.noticePeriod}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Notice Period</option>
//                   <option value="15 Days or less">15 Days or less</option>
//                   <option value="1 Month">1 Month</option>
//                   <option value="2 Months">2 Months</option>
//                   <option value="3 Months">3 Months</option>
//                   <option value="More than 3 Months">More than 3 Months</option>
//                   <option value="Serving Notice Period">Serving Notice Period</option>
//                 </select>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary" onClick={handleSave}>
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Edit Employment Modal */}
//       <div className={`modal ${showEditModal ? 'd-block' : 'd-none'}`} tabIndex="-1">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Edit Employment Details</h5>
//               <button type="button" className="close" onClick={() => setShowEditModal(false)}>
//                 <span>&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="form-group">
//                 <label htmlFor="employmentType">Employment Type</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="employmentType"
//                   name="employmentType"
//                   value={employmentDetails.employmentType}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceYears">Total Experience (Years)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceYears"
//                   name="experienceYears"
//                   value={employmentDetails.experienceYears}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experienceMonths">Total Experience (Months)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experienceMonths"
//                   name="experienceMonths"
//                   value={employmentDetails.experienceMonths}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentCompanyName">Current Company Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentCompanyName"
//                   name="currentCompanyName"
//                   value={employmentDetails.currentCompanyName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="currentJobTitle">Current Job Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentJobTitle"
//                   name="currentJobTitle"
//                   value={employmentDetails.currentJobTitle}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="joiningDate">Joining Date</label>
//                 <DatePicker
//                   selected={employmentDetails.joiningDate}
//                   onChange={(date) => handleDateChange(date, 'joiningDate')}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="stillWorking">
//                   <input
//                     type="checkbox"
//                     id="stillWorking"
//                     name="stillWorking"
//                     checked={employmentDetails.stillWorking}
//                     onChange={handleChange}
//                   />{' '}
//                   Still working here
//                 </label>
//               </div>
//               {!employmentDetails.stillWorking && (
//                 <div className="form-group">
//                   <label htmlFor="endDate">End Date</label>
//                   <DatePicker
//                     selected={employmentDetails.endDate}
//                     onChange={(date) => handleDateChange(date, 'endDate')}
//                     className="form-control"
//                   />
//                 </div>
//               )}
//               <div className="form-group">
//                 <label htmlFor="currentSalary">Current Salary</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="currentSalary"
//                   name="currentSalary"
//                   value={employmentDetails.currentSalary}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="skills">Skills Used</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="skills"
//                   name="skills"
//                   value={employmentDetails.skills}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="jobProfile">Job Profile</label>
//                 <textarea
//                   className="form-control"
//                   id="jobProfile"
//                   name="jobProfile"
//                   rows="3"
//                   value={employmentDetails.jobProfile}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="noticePeriod">Notice Period</label>
//                 <select
//                   className="form-control"
//                   id="noticePeriod"
//                   name="noticePeriod"
//                   value={employmentDetails.noticePeriod}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Notice Period</option>
//                   <option value="15 Days or less">15 Days or less</option>
//                   <option value="1 Month">1 Month</option>
//                   <option value="2 Months">2 Months</option>
//                   <option value="3 Months">3 Months</option>
//                   <option value="More than 3 Months">More than 3 Months</option>
//                   <option value="Serving Notice Period">Serving Notice Period</option>
//                 </select>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary" onClick={handleSave}>
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;











// import React, { useState, useEffect } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import Select from 'react-select';
// import axios from 'axios';

// const Test = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     companyType: '',
//     fullName: '',
//     location: '',
//     phone: '',
//     workEmail: '',
//     organization: '',
//     designation: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleLocationChange = (selectedOption) => {
//     setFormData({
//       ...formData,
//       location: selectedOption ? selectedOption.value : '',
//     });
//   };

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form validation and final submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <>
//     <Form onSubmit={handleSubmit}>
//       {step === 1 && (
//         <Step1 formData={formData} handleChange={handleChange} />
//       )}
//       {step === 2 && (
//         <Step2
//           formData={formData}
//           handleChange={handleChange}
//           handleLocationChange={handleLocationChange}
//         />
//       )}
//       {step === 3 && (
//         <Step3 formData={formData} handleChange={handleChange} />
//       )}
//       <div className="mt-3">
//         {step > 1 && <Button onClick={prevStep}>Back</Button>}
//         {step < 3 && <Button onClick={nextStep}>Next</Button>}
//         {step === 3 && <Button type="submit">Submit</Button>}
//       </div>
//     </Form>
//     </>
//   );
// };

// const Step1 = ({ formData, handleChange }) => (
//   <div>
//     <Form.Group>
//       <Form.Label>Choose your Company Type</Form.Label>
//       <Form.Control
//         type="text"
//         name="companyType"
//         value={formData.companyType}
//         onChange={handleChange}
//       />
//     </Form.Group>
//     <Form.Group>
//       <Form.Label>Write your full name</Form.Label>
//       <Form.Control
//         type="text"
//         name="fullName"
//         value={formData.fullName}
//         onChange={handleChange}
//       />
//     </Form.Group>
//   </div>
// );

// const Step2 = ({ formData, handleChange, handleLocationChange }) => {
//   const [locationOptions, setLocationOptions] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     fetchLocations('');
//   }, []);

//   const fetchLocations = async (query) => {
//     setIsLoading(true);
//     try {
//       const response = await axios.get(`https://api.example.com/locations?query=${query}`);
//       const options = response.data.map((location) => ({
//         value: location.name,
//         label: location.name,
//       }));
//       setLocationOptions(options);
//     } catch (error) {
//       console.error('Error fetching locations:', error);
//     }
//     setIsLoading(false);
//   };

//   const handleInputChange = (inputValue) => {
//     fetchLocations(inputValue);
//   };

//   return (
//     <div>
//       <Form.Group>
//         <Form.Label>Select Location</Form.Label>
//         <Select
//           options={locationOptions}
//           onChange={handleLocationChange}
//           onInputChange={handleInputChange}
//           isLoading={isLoading}
//           value={locationOptions.find(
//             (option) => option.value === formData.location
//           )}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Phone</Form.Label>
//         <Form.Control
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Work email id</Form.Label>
//         <Form.Control
//           type="email"
//           name="workEmail"
//           value={formData.workEmail}
//           onChange={handleChange}
//         />
//       </Form.Group>
//     </div>
//   );
// };

// const Step3 = ({ formData, handleChange }) => (
//   <div>
//     <Form.Group>
//       <Form.Label>Organization</Form.Label>
//       <Form.Control
//         as="select"
//         name="organization"
//         value={formData.organization}
//         onChange={handleChange}
//       >
//         <option value="">Select from dropdown</option>
//         <option value="Org1">Organization 1</option>
//         <option value="Org2">Organization 2</option>
//       </Form.Control>
//     </Form.Group>
//     <Form.Group>
//       <Form.Label>Designation</Form.Label>
//       <Form.Control
//         type="text"
//         name="designation"
//         value={formData.designation}
//         onChange={handleChange}
//       />
//     </Form.Group>
//     <Form.Group>
//       <Form.Label>Password</Form.Label>
//       <Form.Control
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//     </Form.Group>
//     <Form.Group>
//       <Form.Label>Confirm Password</Form.Label>
//       <Form.Control
//         type="password"
//         name="confirmPassword"
//         value={formData.confirmPassword}
//         onChange={handleChange}
//       />
//     </Form.Group>
//   </div>
// );

// export default Test;


































import React, { useState } from 'react';
import Select from 'react-select';

const dummyJobs = [
  {
    id: 1,
    company_logo: 'https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e1.png',
    job_title: 'Data Scientist',
    company_name: 'Wipro',
    experience: '1 - 2 years',
    salary: '10 - 12 LPA',
    job_location: 'Bangalore',
    roles_responsibility: [
      'Skills Required: Roles and Responsibilities. Java Developers',
      'Software Engineer. We are looking for a Java Developer with experience in building high-performing',
      'scalable, applicationsExperience: 2-4+ years',
    ],
    skills_required: ['Python', 'Ruby', 'Machine Learning', 'Statistics', 'AI', 'ML'],
    posted: 'Posted 60 days ago',
    job_category: 'Data Scientist',
    job_type: 'PREMIUM',
    people_applyed: 50,
  },
  // Add more dummy jobs as needed
];

const Test = () => {
  const [jobCategory, setJobCategory] = useState('');
  const [place, setPlace] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const jobCategories = [
    { value: 'Data Scientist', label: 'Data Scientist' },
    { value: 'Software Engineer', label: 'Software Engineer' },
    // Add more categories as needed
  ];

  const places = [
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Mumbai', label: 'Mumbai' },
    // Add more places as needed
  ];

  const handleCategoryChange = (selectedOption) => {
    setJobCategory(selectedOption ? selectedOption.value : '');
  };

  const handlePlaceChange = (selectedOption) => {
    setPlace(selectedOption ? selectedOption.value : '');
  };

  const handleSearch = () => {
    setLoading(true);
    const results = dummyJobs.filter((job) =>
      (jobCategory ? job.job_category === jobCategory : true) &&
      (place ? job.job_location === place : true)
    );
    setSearchResults(results);
    setLoading(false);
  };

  return (
    <div>
      <SearchBar
        jobCategory={jobCategory}
        place={place}
        handleCategoryChange={handleCategoryChange}
        handlePlaceChange={handlePlaceChange}
        jobCategories={jobCategories}
        places={places}
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>
      <SearchResults results={searchResults} />
    </div>
  );
};

const SearchBar = ({
  jobCategory,
  place,
  handleCategoryChange,
  handlePlaceChange,
  jobCategories,
  places,
}) => {
  return (
    <div>
      <Select
        placeholder="Job Category"
        onChange={handleCategoryChange}
        options={jobCategories}
        value={jobCategories.find((option) => option.value === jobCategory)}
      />
      <Select
        placeholder="Place"
        onChange={handlePlaceChange}
        options={places}
        value={places.find((option) => option.value === place)}
      />
    </div>
  );
};

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.length === 0 && <p>No results found</p>}
      {results.map((job) => (
        <div key={job.id} className="job-card">
          <img src={job.company_logo} alt={`${job.company_name} logo`} />
          <h3>{job.job_title}</h3>
          <p>{job.company_name}</p>
          <p>{job.experience}</p>
          <p>{job.salary}</p>
          <p>{job.job_location}</p>
          <p>{job.posted}</p>
          <p>{job.job_category}</p>
          <p>{job.job_type}</p>
          <p>People applied: {job.people_applyed}</p>
          <div>
            <h4>Roles and Responsibilities</h4>
            <ul>
              {job.roles_responsibility.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Skills Required</h4>
            <ul>
              {job.skills_required.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
