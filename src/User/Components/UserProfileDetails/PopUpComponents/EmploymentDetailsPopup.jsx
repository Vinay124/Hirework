import React, {useState, useEffect} from 'react'
import { Col, Modal, Row } from 'react-bootstrap'
import { LuDot } from 'react-icons/lu'
import { MdOutlineEdit } from 'react-icons/md'
import { LuPlus } from "react-icons/lu";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoClose } from 'react-icons/io5';
import { CiEdit } from 'react-icons/ci';
import { AiOutlineDelete } from 'react-icons/ai';
import { Button, Form } from 'react-bootstrap';

const EmploymentDetailsPopup = () => {

const [showAddModal, setShowAddModal] = useState(false);
const [showEditModal, setShowEditModal] = useState(false);
const [employmentDetails, setEmploymentDetails] = useState({
  employmentType: '',
  experienceYears: '',
  experienceMonths: '',
  currentCompanyName: '',
  currentJobTitle: '',
  joiningDate: new Date(),
  endDate: new Date(),
  currentSalary: '',
  skills: '',
  jobProfile: '',
  noticePeriod: '',
  stillWorking: false,
});
const [employmentList, setEmploymentList] = useState([]);
const [currentEmploymentIndex, setCurrentEmploymentIndex] = useState(null);

useEffect(() => {
  const savedEmploymentList = JSON.parse(localStorage.getItem('employmentList'));
  if (savedEmploymentList) {
    // Convert string dates back to Date objects
    const parsedList = savedEmploymentList.map(item => ({
      ...item,
      joiningDate: new Date(item.joiningDate),
      endDate: item.endDate ? new Date(item.endDate) : null
    }));
    setEmploymentList(parsedList);
  }
}, []);

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setEmploymentDetails((prevDetails) => ({
    ...prevDetails,
    [name]: type === 'checkbox' ? checked : value,
  }));
};

const handleDateChange = (date, field) => {
  setEmploymentDetails((prevDetails) => ({
    ...prevDetails,
    [field]: date,
  }));
};

const handleSave = () => {
  if (currentEmploymentIndex !== null) {
    const updatedList = [...employmentList];
    updatedList[currentEmploymentIndex] = employmentDetails;
    setEmploymentList(updatedList);
    localStorage.setItem('employmentList', JSON.stringify(updatedList));
  } else {
    const updatedList = [...employmentList, employmentDetails];
    setEmploymentList(updatedList);
    localStorage.setItem('employmentList', JSON.stringify(updatedList));
  }
  setShowAddModal(false);
  setShowEditModal(false);
  setEmploymentDetails({
    employmentType: '',
    experienceYears: '',
    experienceMonths: '',
    currentCompanyName: '',
    currentJobTitle: '',
    joiningDate: new Date(),
    endDate: new Date(),
    currentSalary: '',
    skills: '',
    jobProfile: '',
    noticePeriod: '',
    stillWorking: false,
  });
  setCurrentEmploymentIndex(null);
};

const handleEdit = (index) => {
  setEmploymentDetails(employmentList[index]);
  setCurrentEmploymentIndex(index);
  setShowEditModal(true);
};

const handleDelete = (index) => {
  const updatedList = employmentList.filter((_, i) => i !== index);
  setEmploymentList(updatedList);
  localStorage.setItem('employmentList', JSON.stringify(updatedList));
};

const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth() + (years * 12);
  
  const displayYears = Math.floor(months / 12);
  const displayMonths = months % 12;

  return `${displayYears} year${displayYears !== 1 ? 's' : ''} ${displayMonths} month${displayMonths !== 1 ? 's' : ''}`;
};



  return (
    <>
            <Row>
                    <Col className='col-lg-12'>
                        <div className='employmentDiv'>
                            <div className='employeeHeadding'>
                                <div>
                                    <h5>Employment Details</h5>
                                </div>

                                <div className='d-flex'>
                                    <div 
                                    onClick={() => setShowAddModal(true)}>
                                        <LuPlus className='mx-2' size={22} color='#888888'/>
                                        <span>Add Employment </span>
                                    </div>
                                    {/* <div className='mx-3'>
                                        <MdOutlineEdit className='mx-2' size={22} color='#888888'/>
                                        <span>Edit</span>
                                    </div> */}
                                </div>
                            </div>


                            <div className='employeementBody'>
                            {employmentList.map((employment, index) => (
                                        <div className='experienceDivMain' key={index}>
                                            <div>
                                                <div className='companyNameAndType'>
                                                    <h6>{employment.currentCompanyName}</h6>
                                                    <span>{employment.employmentType}</span>
                                                </div>
                                                <div className='currentJobTitle'>
                                                    <h6>{employment.currentJobTitle}</h6>
                                                </div>
                                                <div className='exp_rolesWrap'>
                                                    <div className='Exp_Role'>
                                                        <span>{employment.Role}</span>
                                                    </div>
                                                    <div className='job_startdate'>
                                                        {employment.employmentType}
                                                        <LuDot size={20} className='mx-1' color='#888888'/>
                                                        {employment.joiningDate.toLocaleDateString()}
                                                        <LuDot size={20} className='mx-1' color='#888888'/>
                                                        {employment.stillWorking ? 'Present' : employment.endDate?.toLocaleDateString()}
                                                        <LuDot size={20} className='mx-1' color='#888888'/>
                                                        {employment.stillWorking ? `(${calculateDuration(employment.joiningDate, null)})` : `(${calculateDuration(employment.joiningDate, employment.endDate)})`}
                                                    </div>
                                                </div>

                                                {/* notice */}
                                                <div>
                                                    <div className='jobDescriptiondiv'>
                                                        <p>{employment.jobProfile}</p>
                                                    </div>

                                                    <div className='notice_period'>
                                                        <h6>SKills: {employment.skills}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='actionButtons'>
                                              <button className="btn_edit mx-2" onClick={() => handleEdit(index)}>
                                              <MdOutlineEdit color="#888888" size={18}/>
                                              </button>
                                              <button className="btn_delete" onClick={() => handleDelete(index)}>
                                              <AiOutlineDelete color="#888888" size={18} />
                                              </button>
                                            </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>

        
                <Modal
                //  show={showAddModal} onHide={() => setShowAddModal(false)}
                show={showAddModal} onHide={() => setShowAddModal(false)}

                size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
            <Modal.Body>
                <div>
                    <div className='employmentDetailsHeaddingDiv'>
                        <div>
                            <h5>EmployementDetail</h5>
                        </div>
                        <div className='popupCloseIcon' onClick={() => setShowAddModal(false)}>
                            <IoClose size={26} color='#888888' />
                        </div>
                    </div>

                    <div className='EmployementDetailPopup'>
                        <div className="form-group">
                            <label htmlFor="currentCompanyName" className='currentCompanyNameLabel'>Current Company Name</label>
                            <input
                            type="text"
                            className="form-control"
                            id="currentCompanyName"
                            name="currentCompanyName"
                            value={employmentDetails.currentCompanyName}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="currentJobTitle" className='currentJobTitleLabel'>Current Job Title</label>
                            <input
                            type="text"
                            className="form-control"
                            id="currentJobTitle"
                            name="currentJobTitle"
                            value={employmentDetails.currentJobTitle}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="employmentType" className='employmentTypeLabel' >Employment Type</label>
                            <input
                            type="text"
                            className="form-control"
                            id="employmentType"
                            name="employmentType"
                            value={employmentDetails.employmentType}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="experienceYears" className='experienceYearsLabel'>Total Experience (Years)</label>
                            <input
                            type="text"
                            inputmode="numeric"
                            pattern="[0-9]"
                            className="form-control"
                            id="experienceYears"
                            name="experienceYears"
                            value={employmentDetails.experienceYears}
                            onChange={handleChange}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="experienceMonths" className='experienceMonthsLabel'>Total Experience (Months)</label>
                            <input
                            type="text"
                            inputmode="numeric"
                            pattern="[0-9]"
                            className="form-control"
                            id="experienceMonths"
                            name="experienceMonths"
                            value={employmentDetails.experienceMonths}
                            onChange={handleChange}
                            />
                        </div>
                        
                        <div className="JoinigDiv">
                            <label htmlFor="joiningDate" className='joiningDateLabel'>Joining Date</label>
                            <DatePicker
                            selected={employmentDetails.joiningDate}
                            onChange={(date) => handleDateChange(date, 'joiningDate')}
                            className="form-control"
                            />
                        </div>
                        <div className="StillWorkingDiv" >
                            <label htmlFor="stillWorking">
                            <input
                                type="checkbox"
                                id="stillWorking"
                                name="stillWorking"
                                checked={employmentDetails.stillWorking}
                                onChange={handleChange}
                            />{' '}
                            Still working here
                            </label>
                        </div>
                        <div className='EndDateDiv'>
                        {!employmentDetails.stillWorking && (
                            <div className="form-group">
                            <label htmlFor="endDate" className='endDateLabel'>End Date</label>
                            <DatePicker
                                selected={employmentDetails.endDate}
                                onChange={(date) => handleDateChange(date, 'endDate')}
                                className="form-control"
                                id='endDateInput'
                            />
                            </div>
                        )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="currentSalary" className='currentSalaryLabel'>Current Salary</label>
                            <input
                            type="text"
                            className="form-control"
                            id="currentSalary"
                            name="currentSalary"
                            value={employmentDetails.currentSalary}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="skills" className='skillsLabel'>Skills Used</label>
                            <input
                            type="text"
                            className="form-control"
                            id="EmpSkills"
                            name="skills"
                            value={employmentDetails.skills}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="jobProfile" className='jobProfileLabel'>Job Profile</label>
                            <textarea
                            className="form-control"
                            id="jobProfile"
                            name="jobProfile"
                            rows="3"
                            value={employmentDetails.jobProfile}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="noticePeriod" className='noticePeriodLabel'>Notice Period</label>
                            <select
                            className="form-control"
                            id="noticePeriod"
                            name="noticePeriod"
                            value={employmentDetails.noticePeriod}
                            onChange={handleChange}
                            >
                            <option value="">Select Notice Period</option>
                            <option value="15 Days or less">15 Days or less</option>
                            <option value="1 Month">1 Month</option>
                            <option value="2 Months">2 Months</option>
                            <option value="3 Months">3 Months</option>
                            <option value="More than 3 Months">More than 3 Months</option>
                            <option value="Serving Notice Period">Serving Notice Period</option>
                            </select>
                        </div>
                        </div>
                    </div>

                    <div className='EmploymentDetailsPopupBtn'>
                        <button type="button" className="btn-SaveChanges" onClick={handleSave}>
                        Save Changes
                        </button>
                    </div>
            </Modal.Body>
        </Modal>



        <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Body>
                <div>
                    <div className='employmentDetailsHeaddingDiv'>
                        <div>
                            <h5>Edit Employment Details</h5>
                        </div>
                        <div className='popupCloseIcon' onClick={() => setShowAddModal(false)}>
                            <IoClose size={26} color='#888888' />
                        </div>
                    </div>

                    <div className='EmployementDetailPopup'>
                        <div className="form-group">
                            <label htmlFor="currentCompanyName" className='currentCompanyNameLabel'>Current Company Name</label>
                            <input
                            type="text"
                            className="form-control"
                            id="currentCompanyName"
                            name="currentCompanyName"
                            value={employmentDetails.currentCompanyName}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="currentJobTitle" className='currentJobTitleLabel'>Current Job Title</label>
                            <input
                            type="text"
                            className="form-control"
                            id="currentJobTitle"
                            name="currentJobTitle"
                            value={employmentDetails.currentJobTitle}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="employmentType" className='employmentTypeLabel' >Employment Type</label>
                            <input
                            type="text"
                            className="form-control"
                            id="employmentType"
                            name="employmentType"
                            value={employmentDetails.employmentType}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="experienceYears" className='experienceYearsLabel'>Total Experience (Years)</label>
                            <input
                            type="text"
                            inputmode="numeric"
                            pattern="[0-9]"
                            className="form-control"
                            id="experienceYears"
                            name="experienceYears"
                            value={employmentDetails.experienceYears}
                            onChange={handleChange}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="experienceMonths" className='experienceMonthsLabel'>Total Experience (Months)</label>
                            <input
                            type="text"
                            inputmode="numeric"
                            pattern="[0-9]"
                            className="form-control"
                            id="experienceMonths"
                            name="experienceMonths"
                            value={employmentDetails.experienceMonths}
                            onChange={handleChange}
                            />
                        </div>
                        
                        <div className="JoinigDiv">
                            <label htmlFor="joiningDate" className='joiningDateLabel'>Joining Date</label>
                            <DatePicker
                            selected={employmentDetails.joiningDate}
                            onChange={(date) => handleDateChange(date, 'joiningDate')}
                            className="form-control"
                            />
                        </div>
                        <div className="StillWorkingDiv" >
                            <label htmlFor="stillWorking">
                            <input
                                type="checkbox"
                                id="stillWorking"
                                name="stillWorking"
                                checked={employmentDetails.stillWorking}
                                onChange={handleChange}
                            />{' '}
                            Still working here
                            </label>
                        </div>
                        <div className='EndDateDiv'>
                        {!employmentDetails.stillWorking && (
                            <div className="form-group">
                            <label htmlFor="endDate" className='endDateLabel'>End Date</label>
                            <DatePicker
                                selected={employmentDetails.endDate}
                                onChange={(date) => handleDateChange(date, 'endDate')}
                                className="form-control"
                                id='endDateInput'
                            />
                            </div>
                        )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="currentSalary" className='currentSalaryLabel'>Current Salary</label>
                            <input
                            type="text"
                            className="form-control"
                            id="currentSalary"
                            name="currentSalary"
                            value={employmentDetails.currentSalary}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="skills" className='skillsLabel'>Skills Used</label>
                            <input
                            type="text"
                            className="form-control"
                            id="EmpSkills"
                            name="skills"
                            value={employmentDetails.skills}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="jobProfile" className='jobProfileLabel'>Job Profile</label>
                            <textarea
                            className="form-control"
                            id="jobProfile"
                            name="jobProfile"
                            rows="3"
                            value={employmentDetails.jobProfile}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="noticePeriod" className='noticePeriodLabel'>Notice Period</label>
                            <select
                            className="form-control"
                            id="noticePeriod"
                            name="noticePeriod"
                            value={employmentDetails.noticePeriod}
                            onChange={handleChange}
                            >
                            <option value="">Select Notice Period</option>
                            <option value="15 Days or less">15 Days or less</option>
                            <option value="1 Month">1 Month</option>
                            <option value="2 Months">2 Months</option>
                            <option value="3 Months">3 Months</option>
                            <option value="More than 3 Months">More than 3 Months</option>
                            <option value="Serving Notice Period">Serving Notice Period</option>
                            </select>
                        </div>
                        </div>
                    </div>

                    <div className='EmploymentDetailsPopupBtn'>
                        <button type="button" className="btn-SaveChanges" onClick={handleSave}>
                        Save Changes
                        </button>
                    </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>


    </>
  )
}

export default EmploymentDetailsPopup