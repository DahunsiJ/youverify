import { useDispatch } from "react-redux";
import FilterComponent from "../component/FilterComponent";
import FooterComponent from "../component/Footer";
import Header from "../component/Header";
import JobPostJobPage from "../component/JobPostJobPage";
import SearchComponent from "../component/SearchComponent";
import { useParams } from "react-router-dom";

function PostedJobs() {
  const dispatch = useDispatch()
  const params = useParams()
  const allJobs = dispatch(state=>state)

  return (
    <div>

    <div className="px-24">
      <Header darkMode={true} />
      <div className="my-8">
        <SearchComponent />
        <div className="mt-10 flex items-start justify-start gap-6">
        <div className="w-2/3">
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
        <div className="w-1/3">
          <FilterComponent/>
        </div>
            </div>
      </div>
    </div>
      <FooterComponent/>
</div>
  );
}

export default PostedJobs;
