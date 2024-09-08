import React from 'react'
import JobSearchResult from '../component/JobSearchResult'
import SearchComponent from '../component/SearchComponent'
import Header from '../component/Header'
import JobPostJobPage from '../component/JobPostJobPage'

function SearchResult() {
  return (
    <div className="px-24">
      <Header darkMode={true} />
      <div className="my-8">
        {/* <SearchComponent /> */}
        <div className="mt-10">
          <JobPostJobPage
            position="digital marketing executive"
            companyName="Empharm Ltd"
            location="25, Landmark, Ikorodu, Lagos"
            salary="#70,000"
            jobType="Full time"
            experience="2"
            duration="10 months ago"
            status="Apply now"
          />
          <JobPostJobPage
            position="digital marketing executive"
            companyName="Empharm Ltd"
            location="25, Landmark, Ikorodu, Lagos"
            salary="#70,000"
            jobType="Full time"
            experience="2"
            duration="10 months ago"
            status="Apply now"
          />
          <JobPostJobPage
            position="digital marketing executive"
            companyName="Empharm Ltd"
            location="25, Landmark, Ikorodu, Lagos"
            salary="#70,000"
            jobType="Full time"
            experience="2"
            duration="10 months ago"
            status="Apply now"
          />
          <JobPostJobPage
            position="digital marketing executive"
            companyName="Empharm Ltd"
            location="25, Landmark, Ikorodu, Lagos"
            salary="#70,000"
            jobType="Full time"
            experience="2"
            duration="10 months ago"
            status="Apply now"
          />
          <JobPostJobPage
            position="digital marketing executive"
            companyName="Empharm Ltd"
            location="25, Landmark, Ikorodu, Lagos"
            salary="#70,000"
            jobType="Full time"
            experience="2"
            duration="10 months ago"
            status="Apply now"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchResult