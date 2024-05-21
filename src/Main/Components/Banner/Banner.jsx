import React, { useState, useRef, useEffect } from 'react'
import './Banner.moudle.css'
import Navigation from '../Navigation/Navigation'
import { Col, Container, Row } from 'react-bootstrap'
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Banner = () => {
    
const jobSuggestion = [
    'Software Engineer',
    'Data Analyst',
    'Product manager',
    'graphic Designner',
    'Network Engineer',
    'UI Developer',
    'React Developer'
];

const experienceSuggestion = [
    'Fresher',
    '0-1 years',
    '1-3 years',
    '3-5 years',
    '5-10 years'
];

const locationSuggestion = [
    'Bengalore',
    'Hydrabad',
    'Mysore',
    'Chennai',
    'TamilNadu',
    'Kerala'
];

    const [jobInput, setJobInput] = useState('');
    const [experienceInput, setExperienceInput] = useState('');
    const [locationInput, setLocationInput] = useState('');

    const [filteredJobSuggestions, setFilteredJobSuggestions] = useState([]);
    const [filteredExperienceSuggestions, setFilteredExperienceSuggestions] = useState([]);
    const [filteredLocationSuggestions, setFilteredLocationSuggestions] = useState([]);

    const jobRef = useRef(null);
    const experienceRef = useRef(null);
    const locationRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (
            jobRef.current && !jobRef.current.contains(event.target) &&
            experienceRef.current && !experienceRef.current.contains(event.target) &&
            locationRef.current && !locationRef.current.contains(event.target)
        ) {
            setFilteredJobSuggestions([]);
            setFilteredExperienceSuggestions([]);
            setFilteredLocationSuggestions([]);
        }
    };

    const handleJobInputChange = (e) => {
        const inputValue = e.target.value;
        setJobInput(inputValue);
        setFilteredJobSuggestions(jobSuggestion.filter(job => job.toLowerCase().includes(inputValue.toLowerCase())));
    };

    const handleExperienceInputChange = (e) => {
        const inputValue = e.target.value;
        setExperienceInput(inputValue);
        setFilteredExperienceSuggestions(experienceSuggestion.filter(exp => exp.toLowerCase().includes(inputValue.toLowerCase())));
    };

    const handleLocationInputChange = (e) => {
        const inputValue = e.target.value;
        setLocationInput(inputValue);
        setFilteredLocationSuggestions(locationSuggestion.filter(loc => loc.toLowerCase().includes(inputValue.toLowerCase())));
    };

    const handleSuggestionClick = (value, inputType) => {
        switch (inputType) {
            case 'job':
                setJobInput(value);
                setFilteredJobSuggestions([]);
                break;
            case 'experience':
                setExperienceInput(value);
                setFilteredExperienceSuggestions([]);
                break;
            case 'location':
                setLocationInput(value);
                setFilteredLocationSuggestions([]);
                break;
            default:
                break;
        }
    };


    // Suggestion Data
    const suggestionData = {
      "data": [
          {
            "id":1,
            "TagName":"Designer",
            "TagUrl":""
          },
          {
            "id":1,
            "TagName":"Developer",
            "TagUrl":""
          },
          {
            "id":1,
            "TagName":"Tester",
            "TagUrl":""
          },
          {
            "id":1,
            "TagName":"Project Manager",
            "TagUrl":""
          },
          {
            "id":1,
            "TagName":"Sales",
            "TagUrl":""
          },
          {
            "id":1,
            "TagName":"Digitel Marketing",
            "TagUrl":""
          },
      ]
    }
    
  return (
    <>
    <Navigation/>
    <header className='main_banner'>
      <Container>
          <Row>
            <Col className='col-lg-12 main_banner_wrapper'>
              <div className='main_banner_section'>
                <div>
                  <h1>Find The Job That Fits Your Life</h1>
                  <p>Resume-Library is a true performance-based job board. Enjoy custom hiring products and access to up to 10,000 new resume registrations daily, with no subscriptions or user licences.</p>
                </div>
                {/* input search */}
                <div>
                  <form className='formInputwrapper'>
                    {/* input */}
                    <div className='inputSearchField' ref={jobRef}>
                      <label >
                        <IoSearch size={26} color='#64666c'/>
                    </label>
                      <input type="text" id="skill Company" autoComplete='false' placeholder='Enter skill or company'
                         value={jobInput} onChange={handleJobInputChange} required/>
                        <ul className='SearchUIDropdown'>
                            {filteredJobSuggestions.map((job, index) => (
                                <li key={index} onClick={() => handleSuggestionClick(job, 'job')}>
                                    {job}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* search Experience */}
                    <div className='selectorExperienceArea' ref={experienceRef}> 
                      <input type="text" className='selectorArea' placeholder='1 Year' 
                      value={experienceInput} onChange={handleExperienceInputChange} required></input>
                        <ul className='ExperienceAreaSearch'>
                            {filteredExperienceSuggestions.map((exp, index) => (
                                <li key={index} onClick={() => handleSuggestionClick(exp, 'experience')}>
                                    {exp}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Enter location */}
                    <div className='locationInput' ref={locationRef}>
                      <label>
                        <IoLocationOutline size={26} color='#64666c'/>
                      </label>
                      <input type="text" value={locationInput} onChange={handleLocationInputChange}
                       placeholder='Enter location' required></input>
                      <ul className='locationInputWrapper'>
                        {filteredLocationSuggestions.map((loc, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(loc, 'location')}>
                                {loc}
                            </li>
                        ))}
                      </ul>
                      <button className='btn-search'>Search</button>
                    </div>
                  </form>
                </div>
                {/* Suggestions */}
                <div className='SuggestionTags'>
                    <ul className='suggestionUl'>
                        {suggestionData.data.map((searchSuggestion) => {
                            return(
                            <li key={searchSuggestion.id}>
                              <div className='searchSuggestionDivs'>
                                <Link to={searchSuggestion.TagUrl}>{searchSuggestion.TagName}</Link>
                              </div>
                            </li>
                          )
                        })}
                    </ul>
                </div>
              </div>
            </Col>
          </Row>
      </Container>
    </header>
    </>
  )
}

export default Banner