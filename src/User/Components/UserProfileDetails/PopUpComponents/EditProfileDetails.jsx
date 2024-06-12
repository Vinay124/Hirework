import React, { useEffect, useState } from 'react'
import { GrLocation } from "react-icons/gr";
import { BsFillBriefcaseFill, BsTelephone } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineEdit } from "react-icons/md";
import { IoCalendarOutline, IoClose } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import moment from 'moment';

const EditProfileDetails = () => {

    const [showModal, setShowModal] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [currentCompany, setCurrentCompany] = useState('');
    const [currentSalary, setCurrentSalary] = useState('');
    const [employment, setEmployment] = useState('');
    const [workStatus, setWorkStatus] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [experienceYears, setExperienceYears] = useState('');
    const [experienceMonths, setExperienceMonths] = useState('');
    const [noticePeriod, setNoticePeriod] = useState('');
    const [error, setError] = useState('');
    // Profile Save Date
    const [profileUpdateDate, setProfileUpdateDate] = useState('');
  
    useEffect(() => {
      const savedProfilePhoto = localStorage.getItem('profilePhoto');
      const savedName = localStorage.getItem('name');
      const currentSalary = localStorage.getItem('currentSalary');
      const jobRole = localStorage.getItem('jobRole');
      const currentCompany = localStorage.getItem('currentCompany');
      const savedEmployment = localStorage.getItem('employment');
      const savedWorkStatus = localStorage.getItem('workStatus');
      const savedMobileNumber = localStorage.getItem('mobileNumber');
      const savedEmail = localStorage.getItem('email');
      const savedExperienceYears = localStorage.getItem('experienceYears');
      const savedExperienceMonths = localStorage.getItem('experienceMonths');
      const savedNoticePeriod = localStorage.getItem('noticePeriod');
  
      if (savedProfilePhoto) setProfilePhoto(savedProfilePhoto);
      if (savedName) setName(savedName);
      if (designation) setDesignation(designation);
      if (jobRole) setJobRole(jobRole);
      if (currentSalary) setCurrentSalary(currentSalary);
      if (currentCompany) setCurrentCompany(currentCompany);
      if (savedEmployment) setEmployment(savedEmployment);
      if (savedWorkStatus) setWorkStatus(savedWorkStatus);
      if (savedMobileNumber) setMobileNumber(savedMobileNumber);
      if (savedEmail) setEmail(savedEmail);
      if (savedExperienceYears) setExperienceYears(savedExperienceYears);
      if (savedExperienceMonths) setExperienceMonths(savedExperienceMonths);
      if (savedNoticePeriod) setNoticePeriod(savedNoticePeriod);
    }, []);
  
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
  
    const handleMobileChange = (e) => {
      const newMobileNumber = e.target.value;
      setMobileNumber(newMobileNumber);
      localStorage.setItem('mobileNumber', newMobileNumber);
    };
  
    const handleEmailChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      localStorage.setItem('email', newEmail);
    };
  
    const handleExperienceYearsChange = (e) => {
      const newExperienceYears = e.target.value;
      setExperienceYears(newExperienceYears);
      localStorage.setItem('experienceYears', newExperienceYears);
    };
  
    const handleExperienceMonthsChange = (e) => {
      const newExperienceMonths = e.target.value;
      setExperienceMonths(newExperienceMonths);
      localStorage.setItem('experienceMonths', newExperienceMonths);
    };
  
    const handleNoticePeriodChange = (e) => {
      const newNoticePeriod = e.target.value;
      setNoticePeriod(newNoticePeriod);
      localStorage.setItem('noticePeriod', newNoticePeriod);
    };
  
    const handleProfilePhotoChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newProfilePhoto = reader.result;
          setProfilePhoto(newProfilePhoto);
          localStorage.setItem('profilePhoto', newProfilePhoto);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleSave = () => {
      if (!name || !email || !mobileNumber  || !jobRole || !experienceYears || !experienceMonths || !noticePeriod) {
        setError('All fields are required');
        return;
      }
      setError('');
      localStorage.setItem('name', name);
      localStorage.setItem('designation', designation);
      localStorage.setItem('currentSalary', currentSalary);
      localStorage.setItem('jobRole', jobRole);
      localStorage.setItem('currentCompany', currentCompany);
      localStorage.setItem('employment', employment);
      localStorage.setItem('workStatus', workStatus);
      localStorage.setItem('email', email);
      localStorage.setItem('experienceYears', experienceYears);
      localStorage.setItem('experienceMonths', experienceMonths);
      localStorage.setItem('noticePeriod', noticePeriod);
      setShowModal(false);

      const currentDate = new Date().toLocaleDateString();
      setProfileUpdateDate(currentDate);
    };


    const formattedDate = moment(profileUpdateDate).format('MMMM Do YYYY');

    // ind currency
    const [convertedAmount, setConvertedAmount] = useState('');
    useEffect(() => {
        convartToRupees();
    },[]);

    const convartToRupees = () => {
        const formattedAmount = formatNumber(currentSalary);
        setConvertedAmount(formattedAmount);
    };
    const formatNumber = (number) => {
        const formattedNumber = number.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");
        return formattedNumber;
    };



  return (
    <>
                    <div className='editProfileDetailsWrapper'>
                        <Row className='editProfileMainDiv'>
                            <Col className='col-lg-3'>
                                <div className='editProfileImage'>
                                    {/* <img src={UserImage} className='' alt=''/> */}
                                    <img src={profilePhoto} className='' alt=''/>
                                </div>
                            </Col>
                            <Col>
                                <Row>
                                    <Col className='col-lg-12'>
                                        <div className='profileInnerRowDiv'>
                                            <div>
                                                <div className='ProfileuserName'>
                                                    <h4>{name}</h4>
                                                    <MdOutlineEdit onClick={handleOpenModal} className='mx-3' size={20}/>  
                                                </div>
                                                <div className='job_designation'>
                                                    <span>{jobRole}</span>
                                                </div>
                                                <div className='currentCompany'>
                                                <span>at {currentCompany}</span>
                                                </div>
                                            </div>
                                            <div className='profileUpdatedStatus'>
                                                <span>Profile last updated - {formattedDate} </span>                                                
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className='col-lg-12'>
                                        <div className='personal_detailsWrapper'>
                                            <div className='personal_detailMainDiv'>
                                                <div>
                                                    <GrLocation className="mx-3" size="22" color="#888888"/>
                                                    <span>Bengalore India</span>
                                                </div>
                                                <div>
                                                    <BsFillBriefcaseFill className="mx-3" size="22" color="#888888"/>
                                                    <span> {experienceYears} Years  and {experienceMonths} Months</span>
                                                </div>
                                                <div>
                                                    <CiWallet className="mx-3" size="22" color="#888888"/>
                                                    <span >
                                                    <LiaRupeeSignSolid className="mx-0" size="22" color="#888888"/>
                                                        {currentSalary}
                                                        {/* {convertedAmount && (
                                                            <span>{convertedAmount}</span>
                                                        )} */}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className='personal_detailMainDiv'>
                                                <div>
                                                    <MdOutlineEmail className="mx-3" size="22" color="#888888"/>
                                                    <span>{email}</span>
                                                </div>
                                                <div>
                                                    <IoCalendarOutline className="mx-3" size="22" color="#888888"/>
                                                    <span>{noticePeriod}</span>
                                                </div>
                                                <div>
                                                    <BsTelephone className="mx-3" size="22" color="#888888"/>
                                                    <span>
                                                    {mobileNumber}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>  


                <Modal show={showModal}  onHide={handleCloseModal} centered>
                    <Modal.Body>
                        
                    <div className='editProfileinnerDiv'>
                        <div className='editProfileheadding'>
                            <div>
                                <h5>Profile Basic Details</h5>
                            </div>
                            <div className='popupCloseIcon' onClick={() => setShowModal(false)}>
                                <IoClose size={26} color='#888888'/>
                            </div>
                        </div>


                        {/* profile change */}
                        <div className='editMainProfileimag'>
                            <img
                                src={profilePhoto || 'https://via.placeholder.com/150'}
                                alt="Profile"
                                className="img-thumbnail"
                                style={{ width: '150px', height: '150px' }}
                            />
                            <input
                                type="file"
                                id="profilePhotoUpload"
                                className="form-control-file mt-2"
                                accept="image/*"
                                onChange={handleProfilePhotoChange}
                            />
                        </div>

                        {/* inputs details*/}
                        <div className='editDataInputInfo'>
                            {/* Name */}
                            <div className="form-group">
                            <label htmlFor="name" className='labelNameField'>Name</label>
                            <input
                                type="text"
                                className="NameField"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                            />
                            </div>

                            {/* jobRole */}
                            <div className="form-group">
                                <label htmlFor="jobRole" className='labelJobRole'>jobRole</label>
                            <input
                                type="text"
                                className="jobRole"
                                id="jobRole"
                                value={jobRole}
                                onChange={(e) => setJobRole(e.target.value)}
                                placeholder="Enter your jobRole"
                            />
                            </div>

                            {/*currentCompany*/}
                            <div className="form-group">
                                <label htmlFor="currentCompany" className='labelCurrentCompany'>currentCompany</label>
                                <input
                                    type="text"
                                    className="currentCompanyinput"
                                    id="currentCompany"
                                    value={currentCompany}
                                    onChange={(e) => setCurrentCompany(e.target.value)}
                                    placeholder="Enter your currentCompany"
                                />
                            </div>

                            {/*  */}
                        <div className="form-group">
                            <label htmlFor="currentSalary" className='labelCurrentSalary'>CurrentSalary</label>
                            <input
                                type="text"
                                className="currentSalary"
                                id="currentSalary"
                                value={currentSalary}
                                onChange={(e) => setCurrentSalary(e.target.value)}
                                placeholder="Enter your current Salary"
                            />
                        </div>

                        {/* Work Status */}
                        <div className="form-group">
                            <label htmlFor="workStatus" className='labelWorkStatus'>Work Status</label>
                            <input
                                type="text"
                                className="workStatus"
                                id="workStatus"
                                value={workStatus}
                                onChange={(e) => setWorkStatus(e.target.value)}
                                placeholder="Enter your work status"
                            />
                        </div>

                        {/* Mobile Number */}
                        <div className="form-group">
                        <label htmlFor="mobileNumber" className='labelMobileNumber'>Mobile Number</label>
                        <input
                            type="text"
                            className="mobileNumber"
                            id="mobileNumber"
                            value={mobileNumber}
                            onChange={handleMobileChange}
                            placeholder="Enter your mobile number"
                        />
                        </div>
                            
                            {/* Email Address */}
                        <div className="form-group">
                        <label htmlFor="email" className='labelEmail'>Email Address</label>
                        <input
                            type="email"
                            className="EditemailAddress"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email address"
                        />
                        </div>
                        {/* Total Experience */}
                        <div className="form-group">
                        <label htmlFor="experienceYears" className='lableTotalExp'>Total Experience (Years)</label>
                        <select
                            className="experienceYears"
                            id="experienceYears"
                            value={experienceYears}
                            onChange={handleExperienceYearsChange}
                        >
                            {[...Array(51).keys()].map(year => (
                            <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        </div>

                        <div className="form-group">
                        <label htmlFor="experienceMonths" className='lableTotalExp'>Total Experience (Months)</label>
                        <select
                            className="experienceMonths"
                            id="experienceMonths"
                            value={experienceMonths}
                            onChange={handleExperienceMonthsChange}
                        >
                            {[...Array(12).keys()].map(month => (
                            <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                        </div>

                            {/* Notice Period */}
                        <div className="form-group">
                        <label htmlFor="noticePeriod" className='labelNoticePeriod'>Notice Period</label>
                        <select
                            className="noticePeriod"
                            id="noticePeriod"
                            value={noticePeriod}
                            onChange={handleNoticePeriodChange}
                        >
                            <option value="15 Days or less">15 Days or less</option>
                            <option value="1 Month">1 Month</option>
                            <option value="2 Months">2 Months</option>
                            <option value="3 Months">3 Months</option>
                            <option value="More than 3 Months">More than 3 Months</option>
                            <option value="Serving Notice Period">Serving Notice Period</option>
                        </select>
                        </div>

                        <div>
                        {error && <p className="text-danger">{error}</p>}
                        </div>


                        </div>

                    </div>    




                

                        

                        

                        

                        

                        

                        

                        

                        

                        
                        

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary" onClick={handleSave}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>
        </>
  )
}

export default EditProfileDetails