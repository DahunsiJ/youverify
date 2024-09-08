import { useState } from "react"
import StepOne from "../component/StepOne"
import StepTwo from "../component/StepTwo"
import StepThree from "../component/StepThree"
import StepFour from "../component/StepFour"
import EmployerStepTwo from "../component/EmployerStepTwo"
import IndividualEmployee from "../component/IndividualEmployee"
import OrganizationEmployee from "../component/OrganizationEmployee"

function SignupPages() {
    const [currentStep, setCurrentStep] = useState('stepOne')
    const [formData, setFormData] = useState({})

    const GetNextPage = (e)=>{
        setCurrentStep(e)
    }

    const GetPreviousPage = (e)=>{
        setCurrentStep(e)
    }

    const signupSteps = (step)=>{
        switch (step) {
            case "stepOne":
                return(<StepOne setFormData = {setFormData} formData = {formData} next={GetNextPage} prev = {GetPreviousPage}/>)
                break;
            case "stepTwo":
                return(<StepTwo setFormData = {setFormData} formData = {formData} next={GetNextPage} prev = {GetPreviousPage}/>)
                break;
            case "stepThree":
                return(<StepThree setFormData = {setFormData} formData = {formData} next={GetNextPage} prev = {GetPreviousPage}/>)
                break;
            case "stepFour":
                return(<StepFour setFormData = {setFormData} formData = {formData} next={GetNextPage} prev = {GetPreviousPage}/>)
                break;
            case "employerTwo":
                return(<EmployerStepTwo setFormData = {setFormData} formData = {formData} next={GetNextPage} prev = {GetPreviousPage}/>)
                break;
            case "individual":
                return(<IndividualEmployee setFormData = {setFormData} formData = {formData} next={GetNextPage} prev = {GetPreviousPage}/>)
                break;
            case "organization":
                return(<OrganizationEmployee setFormData = {setFormData} formData = {formData} next={GetNextPage} prev = {GetPreviousPage}/>)
                break;
        
            default:
                break;
        }
    }


  return (
        <div>
            {signupSteps(currentStep)}
        </div>
  )
}

export default SignupPages