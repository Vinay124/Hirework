import React, { useState } from 'react'
import './UserRecommendedJobs.moudle.css'
import Applies from './Applies'
import BasedonProfile from './BasedonProfile'
import Preferences from './Preferences'
import RandomJob from './RandomJob'

const UserRecommendedJobs = () => {

  const [activeTab, setActiveTab] = useState('Applies');

  const handleTabClick = (tabname) => {
    setActiveTab(tabname);
  };

    // Job JSON
    const JobJSONData = {
      "Jobdata" : [
          {
              "id":1,
              "company_image":"https://img.naukimg.com/logo_images/groups/v1/1293920.gif",
              "company_name":"Wipro",
              "job_title":"Data Scientist",
              "job_category":"Data Scientist",
              "Job_location":"Bengalore",
              "experience":"1 - 2 years",
              "posted":"Posted 1 day ago",
              "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
              "job_type":"PREMIUM",
              "people_applyed":50
          },
          {
              "id":2,
              "company_image":"https://img.naukimg.com/logo_images/groups/v1/481500.gif",
              "company_name":"SAP",
              "job_title":"Soc Analyst",
              "job_category":"CyberSecurity",
              "Job_location":"Bengalore",
              "experience":"1 - 2 years",
              "posted":"Posted 1 day ago",
              "skills_required":["Technical Proficiency","Cybersecurity Fundamentals","Incident Detection and Response","Threat Intelligence"],
              "job_type":"PREMIUM",
              "people_applyed":10
          },
          {
              "id":3,
              "company_image":"https://img.naukimg.com/logo_images/groups/v1/4586347.gif",
              "company_name":"Robert Bosch",
              "job_title":"iOS Developert",
              "job_category":"CyberSecurity",
              "Job_location":"Bengalore",
              "experience":"3 - 5 Years",
              "posted":"Posted 5 day ago",
              "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
              "job_type":"PREMIUM",
              "people_applyed":80
          },
          {
              "id":2,
              "company_image":"https://www.naukri.com/hotjobs/images/v3/Accen_nov20.gif",
              "company_name":"IBM",
              "job_title":"Soc Analyst",
              "job_category":"CyberSecurity",
              "Job_location":"Bengalore",
              "experience":"1 - 2 years",
              "posted":"Posted 1 day ago",
              "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
              "job_type":"PREMIUM",
              "people_applyed":30
          },
          {
              "id":2,
              "company_image":"https://img.naukimg.com/logo_images/groups/v1/41608.gif",
              "company_name":"Microsoft",
              "job_title":"Soc Analyst",
              "job_category":"CyberSecurity",
              "Job_location":"Bengalore",
              "experience":"1 - 2 years",
              "posted":"Posted 1 day ago",
              "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
              "job_type":"PREMIUM",
              "people_applyed":100
          },
          {
              "id":2,
              "company_image":"https://img.naukimg.com/logo_images/groups/v1/4615427.gif",
              "company_name":"Huawei",
              "job_title":"Soc Analyst",
              "job_category":"CyberSecurity",
              "Job_location":"Bengalore",
              "experience":"1 - 2 years",
              "posted":"Posted 1 day ago",
              "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
              "job_type":"PREMIUM",
              "people_applyed":66
          },
      ]
  }


  const renderTabs = () => {
    switch (activeTab) {
      case 'Applies':
        return <Applies JobData={JobJSONData.Jobdata}/>;
      case 'Profile':
        return <BasedonProfile Profile={JobJSONData.Jobdata}/>;
      case 'Perference':
        return <Preferences Preferences={JobJSONData.Jobdata}/>;
      case 'You might like':
        return <RandomJob RandomJob={JobJSONData.Jobdata}/>;
      default:
        return null;
    };
  };



  return (
    <section className='RecommendedJobs'>
      <div className='recommendedJobHeadding'>
        <div>
            <h4>Recommended Jobs</h4>
        </div>
        <div>
          <button className='btn-viewAllJobs'>View all</button>
        </div>
      </div>

      <div className='recommendedjobs_tabs'>
        <div>
            <button className={activeTab === 'Applies' ? 'activeBtn' : 'tabButtons'} onClick={() => handleTabClick('Applies')}>Applies</button>
        </div>
        <div>
            <button className={activeTab === 'Profile' ? 'activeBtn' : 'tabButtons'} onClick={() => handleTabClick('Profile')}>Profile</button>
        </div>
        <div>
            <button className={activeTab === 'Perference' ? 'activeBtn' : 'tabButtons'} onClick={() => handleTabClick('Perference')}>Perference</button>
        </div>
        <div>
            <button className={activeTab === 'You might like' ? 'activeBtn' : 'tabButtons'} onClick={() => handleTabClick('You might like')}>You might like</button>
        </div>
      </div>

      {/*  */}
      {renderTabs()}
    </section>
  )
}

export default UserRecommendedJobs