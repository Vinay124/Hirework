import React, {useEffect, useState} from 'react'
import { IoClose } from 'react-icons/io5';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { IoIosClose } from "react-icons/io";
import LetteredAvatar from 'lettered-avatar'
import { RiCloseLine } from "react-icons/ri";
import { Col, Row } from 'react-bootstrap';
import { LuDot } from "react-icons/lu";
import { RiDeleteBin4Line as AiTwotoneDelete, RiCheckLine } from "react-icons/ri";
import { MdOutlineEdit } from 'react-icons/md';


const LanguagesPopup = () => {


    const [languages, setLanguage] = useState([]);
    const [newLanguage, setNewLanguage] = useState({ name: '', Proficiency:'', skills: { read: false, write: false, speak: false } });
    const [model, setModal] = useState(false);
    const [tempLanguage, setTempLanguage] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        const savedLanguages = localStorage.getItem('languages');
        if (savedLanguages) {
            setLanguage(JSON.parse(savedLanguages));
        }
    },[]);

    const openLanguageModel = () => {
        setTempLanguage(languages.map(language => ({
            ...language,
            skill: {
                read: language.skill?.read || false,
                write: language.skills?.write || false,
                speak: language.skills?.speak || false,
            }
        })));
        setModal(true)
        setErrorMessage('');
    };


    const isValidNewLanguage = () => {
        const { name, proficiency, skills } = newLanguage;
        return (
            name.trim() &&
            proficiency &&
            (skills.read || skills.write || skills.speak)
        );
    };

    const addTempLanguage = () => {
        if (isValidNewLanguage()) {
            if (tempLanguage.find(lang => lang.name.toLowerCase() === newLanguage.name.trim().toLowerCase())) {
                setErrorMessage('This lnguage is already added.');
            } else  {
                setTempLanguage([...tempLanguage, { ...newLanguage, skills: { ...newLanguage.skills } }]);
                setNewLanguage({ name:'', proficiency:'', skills: { read: false, write: false, speak: false } });
                setErrorMessage('');
            }
        } else {
            setErrorMessage('Please fill all mandatory fields and select at least one skill...');
        }
    }

    const removeTempLanguage = (index) => {
        const updatedTempLanguages = tempLanguage.filter((_, i) => i !== index);
        setTempLanguage(updatedTempLanguages);
    };

    const saveLanguages = () => {
        if (tempLanguage.length < 2) {
            setErrorMessage('Please add at least three language.');
            return;
        }
        setLanguage(tempLanguage);
        localStorage.setItem('languages', JSON.stringify(tempLanguage));
        setModal(false);
        console.log('Language Saved Successfully')
    }

    const proficiencyLevels = ['Begineer', 'Intermediate', 'Advance', 'Fluent'];

  return (
    <>
            <Row>
                    <Col className='col-lg-12'>
                        <div className='languageDivWrapper'>
                            <div className='resumeHeadlineDiv'>
                                    <div>
                                        <h6>Languages</h6>
                                    </div>
                                    <div onClick={openLanguageModel}>
                                        <MdOutlineEdit className='mx-2' size={22} color='#888888'/>
                                        <span>Edit</span>
                                    </div>
                            </div>

                                <Row>
                                {languages.map((language, index) => (
                                    <Col className='col-lg-6' key={index}>
                                        <div className='languageCardDiv'>
                                        <Row className='align-items-center '>
                                            <Col className="col-lg-4">
                                                <div>
                                                <LetteredAvatar name={language.name}
                                                className="letteravatar"
                                                    options={{  
                                                        size: 40, 
                                                        twoLetter: true,
                                                        shape: 'round',
                                                        bgColor: '#222222', 
                                                        href: '', 
                                                        target: '_blank',
                                                        tooltip: false, 
                                                        tooltipTitle: 'CEO Avatar', 
                                                        imgClass: 'image-responsive user-image', 
                                                        imgWidth: 100, 
                                                        imgHeight: 100 }} />  
                                                </div>
                                            </Col>
                                            <Col className='col-lg-8'>
                                                <div className='LanguageText'>
                                                    <h6>{language.name}</h6>
                                                </div>
                                                <div className='proficiencyDiv'>
                                                    <span>{language.proficiency}</span>
                                                </div>
                                                
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col className="p-0">
                                                <div className='languageDivs'>
                                                        <ul>
                                                            <li>
                                                                Read: {language.skills?.read ? <RiCheckLine size={15}  /> : <RiCloseLine size={15}  />}  
                                                            </li>
                                                            <li>
                                                                Write: {language.skills?.write ? <RiCheckLine size={15}  /> : <RiCloseLine size={15}  />}
                                                            </li>
                                                            <li>
                                                                Speak: {language.skills?.speak ? <RiCheckLine size={15}  /> : <RiCloseLine size={15}  />}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                 </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                ))}
                                </Row>
                        </div>
                    </Col>
                </Row>


    <Modal
        show={model}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                <div>
                    <div className='popupCloseIcon' onClick={() => setModal(false)}>
                        <IoClose size={26} color='#888888'/>
                    </div>

                    <div className='skillsinnerBody'>
                        <div className='skillsHeaddingWrapper'>
                            <h5>Add Language</h5>
                        </div>

                        <div className='languagepopupform'>
                        <Form className='lanuageFrom'>
                            <Form.Group controlId="formLanguageName">
                                    <Form.Control 
                                        type="text" 
                                        value={newLanguage.name} 
                                        onChange={(e) => setNewLanguage({...newLanguage, name: e.target.value})} 
                                        placeholder="Enter language"/>
                            </Form.Group>
                            
                            <Form.Group controlId="formProficiencyLevel">
                                <Form.Control 
                                    as="select" className='selectSelectorDiv'
                                    value={newLanguage.proficiency} 
                                    onChange={(e) => setNewLanguage({...newLanguage, proficiency: e.target.value})}>
                                    <option value="">Select proficiency</option>
                                    {proficiencyLevels.map((level, index) => (
                                        <option className='formSelectorwrapper' key={index} value={level}>{level}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formSkills" className='checklistWrapper'>
                                <Form.Check 
                                    type="checkbox" 
                                    label="Read" 
                                    className='checklistStyle_B'
                                    checked={newLanguage.skills.read} 
                                    onChange={(e) => setNewLanguage({...newLanguage, skills: {...newLanguage.skills, read: e.target.checked}})}
                                />
                                <Form.Check 
                                    type="checkbox" 
                                    label="Write" 
                                    checked={newLanguage.skills.write} 
                                    onChange={(e) => setNewLanguage({...newLanguage, skills: {...newLanguage.skills, write: e.target.checked}})}/>

                                <Form.Check 
                                    type="checkbox" 
                                    label="Speak" 
                                    checked={newLanguage.skills.speak} 
                                    onChange={(e) => setNewLanguage({...newLanguage, skills: {...newLanguage.skills, speak: e.target.checked}})}/>
                        </Form.Group>
                    </Form>

                    <div className='errorMessage'>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </div>
                        </div>
                    </div>
                </div>


                <div className='languageSelector'>
                            <Row>
                            {tempLanguage.map((language, index) => (
                                <Col className='languagePopupCard col-lg-3'>
                                    <Row className='align-items-center'>
                                        <Col className='col-lg-3'>
                                            <div>
                                                <LetteredAvatar name={language.name} className="letteravatar"
                                                    options={{  
                                                    size: 40, 
                                                    twoLetter: true,
                                                    shape: 'round',
                                                    bgColor: '#222222', 
                                                    href: '', 
                                                    target: '_blank',
                                                    tooltip: false, 
                                                    tooltipTitle: 'CEO Avatar', 
                                                    imgClass: 'image-responsive user-image', 
                                                    imgWidth: 100, 
                                                    imgHeight: 100 }} />  
                                            </div>


                                        </Col>
                                        <Col className='col-lg-9'>
                                            <div className='languageName'>
                                                <span>{language.name}</span>
                                            </div>
                                            <div className='proficiency'>
                                                <span>{language.proficiency}</span>
                                            </div>
                                            <Row>
                                                <Col>
                                                <div className='languageRates'>
                                                    <span>{language.skills.read ? 'Read' : ''}</span>
                                                    <span>{language.skills.write ? ' write' : ''}</span>
                                                    <span>{language.skills.speak ? ' Speak' : ''}</span>
                                                </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <div className='removeBtnDiv'>
                                        <button className='btn-removesLanguage' onClick={() => removeTempLanguage(index)}><IoIosClose size={28}/></button>
                                    </div>
                                </Col>
                            
                            ))}
                            </Row>
                        </div>
                
                <div className='languageBtnWrapper'>
                    <button className='languageBtns' onClick={addTempLanguage} disabled={!isValidNewLanguage}>Add Language</button>
                    <button className='languageBtnsSave' onClick={saveLanguages} disabled={tempLanguage.length < 2}>Save Languages</button>
                </div>
                
            </Modal.Body>
        </Modal>
  </>
  )
}

export default LanguagesPopup