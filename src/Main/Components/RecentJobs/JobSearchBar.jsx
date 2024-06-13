import React from 'react'
import Select from 'react-select';

const JobSearchBar = ({
  jobCategory,
  place,
  handleCategoryChange,
  handlePlaceChange,
  jobCategories,
  places,
  handleSearch,
  loading,
}) => {
  return (
    <>
    <div className='jobSearchInput'>
      <select
        className='Job_CategoryInp'
        value={jobCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Select Job Category</option>
        {jobCategories.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select
        className='Job_placeOp'
        value={place}
        onChange={handlePlaceChange}
      >
        <option value="">Select Place</option>
        {places.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
      <button onClick={handleSearch}  className='search-btn' disabled={loading}>{loading ? 'Searching...' : 'Search'}</button>
      </div>
    </div>
  </>
  )
}

export default JobSearchBar