import React, { useState } from 'react'
import './JobFilter.moudle.css'

const JobFilter = () => {

  const initialFilters = {
    workMode: [],
    department: [],
    location: [],
    experience: [],
    salaryRange: [],
    companies: [],
    industries: [],
    role: [],
    education: [],
    postBy: [],
    freshness: [],
    sort: [],
  };


  const options = {
    workMode: { 'Remote': 120, 'On-Site': 300, 'Hybrid': 150 },
    department: { 'Engineering': 200, 'Marketing': 100, 'Sales': 150, 'HR': 50, 'Finance': 80 },
    location: { 'Bengalore': 1000, 'Kochi': 80, 'Chennai': 70, 'Hyderabad': 60, 'Remote': 200 },
    experience: { 'Entry Level': 150, 'Mid Level': 250, 'Senior Level': 120 },
    salaryRange: { '<50k': 90, '50k-100k': 200, '100k-150k': 150, '>150k': 80 },
    companies: { 'infosys': 150, 'TCS': 100, 'Wipro': 120, 'Bosch':500 },
    industries: { 'Technology': 300, 'Finance': 200, 'Healthcare': 150, 'Education': 80 },
    role: { 'Developer': 180, 'Designer': 90, 'Manager': 120, 'Analyst': 130 },
    education: { 'High School': 50, 'Bachelors': 300, 'Masters': 150, 'PhD': 70 },
    postBy: { 'Company': 400, 'Recruiter': 150 },
    freshness: { 'Last 24 hours': 80, 'Last 3 days': 150, 'Last 7 days': 200, 'Last 14 days': 250 },
    sort: { 'Relevance': 0, 'Date': 0, 'Salary': 0 },
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleCheckboxChange = (e, category) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => {
      const updateCategory = checked
      ? [...prevFilters[category], name]
      : prevFilters[category].filter((item) => item !== name);
      return {...prevFilters, [category]: updateCategory };
    });
  };


  // handle from submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Applied Filters:', filters);
  }

  // const selectAll = () => {
  //   const allFilters = {};
  //   for (const category in options) {
  //     allFilters[category] = Object.keys(options[category]);
  //   }
  //   setFilters(allFilters);
  // };

  // // Deselect all filters
  // const deselectAll = () => {
  //   setFilters(initialFilters);
  // };

  return (
    <>
    <section className='jobFilterSection'>
      <div>
        <div>
        <form onSubmit={handleSubmit}>
    
        {/* <button type="button" onClick={selectAll}>Select All</button>
        <button type="button" onClick={deselectAll}>Deselect All</button> */}

        {Object.keys(options).map((category) => (
        <div key={category} className='checkListDiv'>
          <h5>{category.charAt(0).toUpperCase() + category.slice(1)}:</h5>
          {Object.entries(options[category]).map(([option, jobCount]) => (
            <div key={option} >
              <label className='containerlabel'>
                <input
                  className='FilterInputWrapper'
                  type="checkbox"
                  name={option}
                  checked={filters[category].includes(option)}
                  onChange={(e) => handleCheckboxChange(e, category)}
                />
                <span class="checkmark">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M9 16.2l-3.3-3.3 1.4-1.4 1.9 1.9 4.5-4.5 1.4 1.4z"/>
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffffff" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg>
                </span>
                {`${option}`}
              </label>
              <span className='jobCount'>{`${jobCount}`}</span>
            </div>
          ))}
        </div>
      ))}

      <button type="submit" className='btn-FilterBtn'>Apply Filters</button>
    </form>
        </div>
      </div>
    </section>
  </>
  )
}

export default JobFilter