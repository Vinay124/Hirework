// import React, { useState } from 'react'
// import './PostJob.moudle.css'
// import { Col, Container, Row } from 'react-bootstrap'
// import RecruiterHeader from '../RecruiterHeader/RecruiterHeader'
// import RecruiterNavigation from '../RecruiterNavigation/RecruiterNavigation'
// import { IoChevronBackOutline } from "react-icons/io5";

// const PostJob = () => {

//     const [formData, setFormData] = useState({
        // jobTitle: '',
        // jobDescription: '',
        // category: '',
        // type: 'Freelancer',
        // applicationDeadline: '',
        // jobApplyType: '',
        // externalUrl: '',
        // phoneNumber: '',
        // salaryType: '',
        // minSalary: '',
        // maxSalary: '',
        // gender: '',
        // tag: '',
        // industry: '',
        // qualification: '',
        // careerLevel: '',
        // experience: '',
        // introductionVideoUrl: '',
        // friendlyAddress: '',
        // location: '',
//       });
    
//     //   const [logoImage, setLogoImage] = useState(null);
    
//     //   const handleFileChange = (e) => {
//         //     setLogoImage(e.target.files[0]);
//         //   };
        
//         const handleChange = (e) => {
//           const { name, value } = e.target;
//           setFormData({ ...formData, [name]: value });
//         };
      
//       const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         const jobData = {
//           ...formData,
//         //   logoImage: logoImage ? URL.createObjectURL(logoImage) : null,
//         };
    
//         localStorage.setItem('jobData', JSON.stringify(jobData));
//         console.log(jobData)
//         console.log('Job posted successfully and saved to local storage');
    
//         try {
//           // const response = await axios.post('API_ENDPOINT', jobData);
//           console.log('Job data:', jobData);
//           // console.log('Response:', response);
//         } catch (error) {
//           console.log('Error posting Job', error);
//         }
//       };

//   return (
    


   
//   )
// }

// export default PostJob




import React, { useState } from 'react'
import './PostJob.moudle.css'
import { Col, Container, Row } from 'react-bootstrap'
import RecruiterHeader from '../RecruiterHeader/RecruiterHeader'
import RecruiterNavigation from '../RecruiterNavigation/RecruiterNavigation'
import { IoChevronBackOutline } from "react-icons/io5";

const PostJob = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: '',
        jobDescription: '',
        category: '',
        type: 'Freelancer',
        applicationDeadline: '',
        jobApplyType: '',
        externalUrl: '',
        phoneNumber: '',
        salaryType: '',
        minSalary: '',
        maxSalary: '',
        gender: '',
        tag: '',
        industry: '',
        qualification: '',
        careerLevel: '',
        experience: '',
        introductionVideoUrl: '',
        friendlyAddress: '',
        location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('jobData', JSON.stringify(formData));
    alert('Job posted successfully and saved to local storage');
    try {
      // const response = await axios.post('API_ENDPOINT', formData);
      console.log('Job data:', formData);
      // console.log('Response:', response);
    } catch (error) {
      console.log('Error posting Job', error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
           <Row>
                                <Col className='col-lg-12'>
                                    <div className='JobTitleInput'>
                                        <label>Job Title</label>
                                        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required/>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className='col-lg-12'>
                                    <div className='jobDescriptionInput'>
                                        <label>Job Description</label>
                                        <textarea rows="6" name="jobDescription" value={formData.jobDescription} onChange={handleChange} required/>
                                    </div>
                                </Col>
                            </Row>
          </>
        );
      case 2:
        return (
          <>
           <div className='informactionDatasDiv'>
                                <div>
                                    <h4>Information</h4>
                                </div>
                            </div>

                            <Row className='postJobmainRow'>
                                <Col className='col-lg-6'>
                                <div className='categoryInputBox'>
                                    <label>Category</label>
                                    <select name="category" value={formData.category} onChange={handleChange}>
                                        <option value=""> Select</option>
                                        <option value="Accounting"> Accounting</option>
                                        <option value="Customer Service"> Customer Service</option>
                                        <option value="Data Science"> Data Science</option>
                                        <option value="Delivery Driver"> Delivery Driver</option>
                                        <option value="Engineering"> Engineering</option>
                                        <option value="Human Resources"> Human Resources </option>
                                        <option value="IT & Networking"> IT & Networking</option>
                                        <option value="Project Manager"> Project Manager</option>
                                        <option value="Sales & Marketing"> Sales & Marketing</option>
                                        <option value="Digitel Marketing"> Digitel Marketing</option>
                                    </select>
                                </div>

                                </Col>
                                <Col>
                                    <div className='jobTitleInputBox'>
                                        <label> Job Type </label>
                                        <select name='type' value={formData.type} onChange={handleChange}>
                                            <option value=""> Select</option>
                                            <option value="Freelancer">Freelancer</option>
                                            <option value="Part-Time">Part-Time</option>
                                            <option value="Full-Time">Full-Time</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                <div className='jobappExp'>
                                    <label>Job Application Deadline Date</label>
                                    <input type="date" name='applicationDeadline' value={formData.applicationDeadline} onChange={handleChange}/>
                                </div>
                                </Col>
                                <Col>
                                    <div className='jobApplyTypeInput'>
                                        <label>Job apply Type</label>
                                        <input type='text' name='jobApplyType' value={formData.jobApplyType} onChange={handleChange}/>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className='phoneNumberInputBox'>
                                        <label>Phone Number</label>
                                        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='salaryTypeInputBox'>
                                        <label>Salary Type</label>
                                        <select name='salaryType' value={formData.salaryType} onChange={handleChange}>
                                            <option value=""> Select</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Hourly">Hourly</option>
                                            <option value="Daily">Daily</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='minSalaryInputBox'>
                                        <label>Min. Salary</label>
                                        <input type='number' name='minSalary' value={formData.minSalary} onChange={handleChange}/>
                                    </div> 
                                </Col>

                                <Col>
                                    <div className='maxSalaryInputBox'>
                                    <label>Max. Salary</label>
                                    <input type='number' name='maxSalary' value={formData.maxSalary} onChange={handleChange}/>
                                    </div>
                                </Col>
                            </Row>
          </>
        );
      case 3:
        return (
          <>
          
                            
                            <Row>
                                <Col>
                                    <div className='genderInputBox'>
                                    <label>Gender</label>
                                    {/* <input type='text' name='gender' value={formData.gender} onChange={handleChange}/> */}
                                    <select name='gender' value={formData.gender} onChange={handleChange}>
                                        <option value=""> Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                </Col>
                                <Col>
                                    <div className='tagInputBox'>
                                        <label>Tag</label>
                                        <input type='text' name='tag' value={formData.tag} onChange={handleChange}/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='industryInputBox'>
                                    <label>Industry</label>
                                    <select name='industry' value={formData.industry} onChange={handleChange}>
                                        <option value=""> Select</option>
                                        <option value='Development'>Development</option>
                                        <option value='Management'>Management</option>
                                        <option value='Banking'>Banking</option>
                                        <option value='Finance'>Finance</option>
                                        <option value='Frontend Development'>Frontend Development</option>
                                        <option value='UI Development'>UI Development</option>
                                        <option value='Digitel Marketing'>Digitel Marketing</option>
                                        <option value="Designer Graphics">Designer Graphics</option>
                                    </select>
                                </div>

                            </Col>
                                <Col>
                                    <div className='QualificationInputBox'>
                                        <label>Qualification</label>
                                        <select name="qualification" value={formData.qualification} onChange={handleChange}>
                                        <option value=""> Select</option>
                                        <option value="Certificate">Certificate</option>
                                        <option value="Associate Degree">Associate Degree</option>
                                        <option value="Bachelor Degree">Bachelor Degree</option>
                                        <option value="Master’s Degree">Master’s Degree</option>
                                        <option value="Doctorate Degree">Doctorate Degree</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='careerInputBox'>
                                    <label>Career Level</label>
                                    <select name="careerLevel" value={formData.careerLevel} onChange={handleChange}>
                                    <option value=""> Select</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Officer">Officer</option>
                                    <option value="Student">Student</option>
                                    <option value="Executive">Executive</option>
                                    <option value="Others">Others</option>
                                    </select>
                                </div>
                            </Col>
                                <Col>
                                    <div className='ExperienceInputBox'>
                                    <label>Experience</label>
                                    <input type="text" name="experience" value={formData.experience} onChange={handleChange} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='VideoIntroductionBox'>
                                        <label>Introduction Video URL</label>
                                        <input type="text" name="introductionVideoUrl" value={formData.introductionVideoUrl} onChange={handleChange} />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='friendlyAddressinputBox'>
                                        <label>Friendly Address</label>
                                        <input type="text" name="friendlyAddress" value={formData.friendlyAddress} onChange={handleChange} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='locationInputBox'>
                                        <label>Location</label>
                                        <input type="text" name="location" value={formData.location} onChange={handleChange} />
                                    </div>
                                </Col>

                                <Col></Col>
                            </Row>
           
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <RecruiterHeader/>
    <RecruiterNavigation/>

    <div className='recruiterContainer'>
        <section>
                <div className='HeaddingMainWrapper'>
                    <div className='applicationStatusHeadding'>
                        <h2>Post Job</h2>
                    </div>
                    <div className='backBtnDiv'>
                        <IoChevronBackOutline size={28}/>
                    </div>
                </div>

                <Row className='postJobRole mt-4'>
                    <Col>
                    <form onSubmit={handleSubmit}>
                        {renderStep()}
                        <div>
                            {currentStep > 1 && <button type="button" onClick={handlePrevious} className='btn-revious '>Previous</button>}
                            {currentStep < 3 && <button type="button" onClick={handleNext} className='btn-postjob'>Next</button>}
                            {currentStep === 3 && <button type="submit" className='btn-postjob'>Submit</button>}
                        </div>
                        </form>
                    </Col>
                </Row>
        </section>
    </div>



    
    </>
  );
};

export default PostJob;
