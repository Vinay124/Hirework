import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    category: '',
    type: 'Freelancer',
    applicationDeadline: '',
    jobApplyType: '',
    externalUrl: '',
    jobApplyEmail: '',
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

  // const [logoImage, setLogoImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   setLogoImage(e.target.files[0]);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = new FormData();
    Object.keys(formData).forEach(key => jobData.append(key, formData[key]));
    if (logoImage) {
      jobData.append('logoImage', logoImage);
    }

    try {
      const response = await axios.post('API_ENDPOINT', jobData);
      console.log('Job posted successfully:', response.data);
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Job Title *</label>
        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
      </div>
      <div>
        <label>Job Description *</label>
        <textarea name="jobDescription" value={formData.jobDescription} onChange={handleChange} required />
      </div>
      <div>
        <label>Category</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Accounting">Accounting</option>
          <option value="Customer Service">Customer Service</option>
          <option value="Data Science">Data Science</option>
          <option value="Delivery Driver">Delivery Driver</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resource">Human Resource</option>
          <option value="IT & Networking">IT & Networking</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Sales & Marketing">Sales & Marketing</option>
          <option value="Writing">Writing</option>
        </select>
      </div>
      <div>
        <label>Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Freelancer">Freelancer</option>
          <option value="Part-time">Part-time</option>
          <option value="Full-time">Full-time</option>
        </select>
      </div>
      <div>
        <label>Application Deadline Date</label>
        <input type="date" name="applicationDeadline" value={formData.applicationDeadline} onChange={handleChange} />
      </div>
      <div>
        <label>Job Apply Type</label>
        <input type="text" name="jobApplyType" value={formData.jobApplyType} onChange={handleChange} />
      </div>
      <div>
        <label>External URL for Apply Job</label>
        <input type="url" name="externalUrl" value={formData.externalUrl} onChange={handleChange} />
      </div>
      <div>
        <label>Job Apply Email</label>
        <input type="email" name="jobApplyEmail" value={formData.jobApplyEmail} onChange={handleChange} />
      </div>
      <div>
        <label>Phone Number</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </div>
      <div>
        <label>Salary Type</label>
        <input type="text" name="salaryType" value={formData.salaryType} onChange={handleChange} />
      </div>
      <div>
        <label>Min. Salary</label>
        <input type="number" name="minSalary" value={formData.minSalary} onChange={handleChange} />
      </div>
      <div>
        <label>Max. Salary</label>
        <input type="number" name="maxSalary" value={formData.maxSalary} onChange={handleChange} />
      </div>
      <div>
        <label>Gender</label>
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
      </div>
      <div>
        <label>Tag</label>
        <input type="text" name="tag" value={formData.tag} onChange={handleChange} />
      </div>
      <div>
        <label>Industry</label>
        <select name="industry" value={formData.industry} onChange={handleChange}>
          <option value="Development">Development</option>
          <option value="Management">Management</option>
          <option value="Finance">Finance</option>
          <option value="Html & Css">Html & Css</option>
          <option value="Seo">Seo</option>
          <option value="Banking">Banking</option>
          <option value="Designer Graphics">Designer Graphics</option>
        </select>
      </div>
      <div>
        <label>Qualification</label>
        <select name="qualification" value={formData.qualification} onChange={handleChange}>
          <option value="Certificate">Certificate</option>
          <option value="Associate Degree">Associate Degree</option>
          <option value="Bachelor Degree">Bachelor Degree</option>
          <option value="Master’s Degree">Master’s Degree</option>
          <option value="Doctorate Degree">Doctorate Degree</option>
        </select>
      </div>
      <div>
        <label>Career Level</label>
        <select name="careerLevel" value={formData.careerLevel} onChange={handleChange}>
          <option value="Manager">Manager</option>
          <option value="Officer">Officer</option>
          <option value="Student">Student</option>
          <option value="Executive">Executive</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div>
        <label>Experience</label>
        <input type="text" name="experience" value={formData.experience} onChange={handleChange} />
      </div>
      <div>
        <label>Introduction Video URL</label>
        <input type="url" name="introductionVideoUrl" value={formData.introductionVideoUrl} onChange={handleChange} />
      </div>
      <div>
        <label>Friendly Address</label>
        <input type="text" name="friendlyAddress" value={formData.friendlyAddress} onChange={handleChange} />
      </div>
      <div>
        <label>Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </div>
      {/* <div>
        <label>Logo Image</label>
        <input type="file" name="logoImage" onChange={handleFileChange} />
      </div> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Test;
