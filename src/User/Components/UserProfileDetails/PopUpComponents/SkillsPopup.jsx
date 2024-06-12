import React, {useState, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoClose } from "react-icons/io5";
import { MdOutlineEdit } from 'react-icons/md';

const SkillsPopup = () => {

    const [skill, setSkill] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [showModel, setShowModal] = useState(false);
    const [tempSkills, setTempSkills] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const savedSkills = localStorage.getItem('skills');
        if (savedSkills) {
            setSkill(JSON.parse(savedSkills))
        }
    },[]);

    const openModel = () => {
        setTempSkills([...skill]);
        setShowModal(true);
        setErrorMsg('');
    }

    const addTempSkill = () => {
        if (newSkill.trim()) {
            if (tempSkills.includes(newSkill.trim())) {
                setErrorMsg('This Skill already added..');
            } else if (tempSkills.length < 15) {
                setTempSkills([...tempSkills, newSkill.trim()]);
                setNewSkill('');
                setErrorMsg('');
            } else {
                setErrorMsg('You can add a maximum of 8 skills.')
            }
        };
    }

    // remove skills
    const removeTempSkill = (index) => {
        const updatedTempSkills = tempSkills.filter((_, i) => i !== index);
        setTempSkills(updatedTempSkills);
    };

    // Save Skills
    const saveSkills = async () => {
        if (tempSkills.length < 3 || tempSkills.length > 15) {
            setErrorMsg('Please add between 3 to 10 skills.');
            return;
        }
        try {
            // const response = await axios.post('/Api/Endpoint', { skills : tempSkills });
            setSkill(tempSkills);
            localStorage.setItem('skills', JSON.stringify(tempSkills))
            setShowModal(false);
            // alert('Skills Saved Successfully');
        } catch (error) {
            console.error('Error Saving Skills:', error);
            alert('Error Saving Skills');
        }
    };


  return (
    <>
            <Row>
                    <Col className='col-lg-12'>
                        <div className='skillsDivWrapper'>
                            <div className='skillsDivMain'>
                                <div>
                                    <h5>Skills</h5>
                                </div>
                                <div 
                                onClick={openModel}
                                >
                                    <MdOutlineEdit className='mx-2' size={22} color='#888888'/>
                                    <span>Edit</span>
                                </div>
                            </div>

                            <div className='userProfileSkills'>
                                {/* {skills.data.map((items) => {
                                    return(
                                        <div className='skillMain' key={items.id}>
                                            <span>{items.skill}</span>
                                        </div>
                                    )
                                    // <li >{skill}</li>
                                })} */}

                                    {skill.map((skill, index) => (
                                        <>
                                        <div className='skillMain' key={index}>
                                            <span>{skill}</span>
                                        </div>
                                    </>
                                    ))}
                            </div>
                        </div>
                    </Col>
                </Row>
    
            <Modal
                show={showModel}
                size="lg"
                className='SkillsModelPopup'
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Body className='SkillsModelBodyPopup'>
                    <div className='popupCloseIcon' onClick={() => setShowModal(false)}>
                        <IoClose size={26} color='#888888'/>
                    </div>
                    <div className='skillsinnerBody'>
                        <div className='skillsHeaddingWrapper'>
                            <h5>Add Skills</h5>
                            <span>Add skills that best define your expertise, for e.g, Direct Marketing, Oracle, Java, etc. (Minimum 1)</span>
                        </div>
                        
                        <div className='skillsContentData'>
                            <div className='skillsmainDiv'>
                                <div>
                                    {tempSkills.map((skill, index) => (
                                        <span key={index}>
                                            {skill}
                                            <button className='skillRemoveBtn' onClick={() => removeTempSkill(index)}>
                                                <IoClose size={22} className='mx-1'/>
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='skillsInput'>
                                <div>   
                                    <input 
                                    type="text" 
                                    className='AddSkillInput'
                                    value={newSkill} 
                                    onChange={(e) => setNewSkill(e.target.value)} 
                                    placeholder="Add skill"/>
                                     <button className='addSkillBtn' onClick={addTempSkill} disabled={tempSkills.length >= 15}>Add Skill</button>
                                </div>
                            </div>
                            <div className='ErrorMsg'>
                                {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
                            </div>
                        </div>

                        <div className='saveButtonWrapper'>
                            <button className='saveSkillBtn' onClick={saveSkills} disabled={tempSkills.length < 3 || tempSkills.length > 15}>Save Skills</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
    </>
  )
}

export default SkillsPopup