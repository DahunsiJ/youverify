import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import rootReducer from './reducers'
import userReducer from './users/userSlice.js'
import notificationReducer from './notification/notificationSlice.js'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
import jobListReducer from './jobList/jobListSlice.js'
import setApplicationReducer from './currentApplication/currentApplicationSlice.js'
import educationReducer from './education/educationSlice.js'
import certificateReducer from './CertificateList/certificateSlice.js'
import guarantorReducer from './guarantor/guarantorSlice.js'
import workExperienceReducer from './workSlice/workSlice.js'
import ApplicationReducer from './applicationList/applicationSlice.js'
import BenefitReducer from './benefitList/benefitSlice.js'
import HiredReducer from './hiredList/hiredSlice.js'
import EmployerJobReducer from './employerJob/employerJobSlice.js'
import CompanyContactReducer from './companyContact/companyContact.js'
import ReportMade from './reportMade/reportMadeSlice.js'
import ReportGotten from './reportGotten/reportGottenSlice.js'
import EmployerProof from './employerProof/employerProofSlice.js'
import EmployerAddressProof from './employerAddressProof/employerAddressProofSlice.js'
import CandidateList from './candidateList/candidateListSlice.js'



const rootReducer = combineReducers({
  user: userReducer,
  notification: notificationReducer,
  jobListSlice: jobListReducer,
  currentApplication: setApplicationReducer,
  education: educationReducer,
  certificateList: certificateReducer,
  guarantorList: guarantorReducer,
  workExperience: workExperienceReducer,
  applicationList: ApplicationReducer,
  BenefitList: BenefitReducer,
  HiredList: HiredReducer,
  EmployerListedJob: EmployerJobReducer,
  CompanyContact: CompanyContactReducer,
  ReportMade: ReportMade,
  ReportGotten: ReportGotten,
  employerProof: EmployerProof,
  employerAddressProof: EmployerAddressProof,
  candidateList: CandidateList,
})

const persistConfig = {
  key: 'root',
  storage,
  version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false})
})


export const persistor = persistStore(store)