import {PayloadAction, createSlice} from '@reduxjs/toolkit'




type InitialState = {
     jobs:string,
     dataJob: TypeJob | null
     titleJobs: DataJobs[] | null
}
const jobsInitialState: InitialState = {
       jobs: "",
       dataJob: null,
       titleJobs: null
}

const jobsSlice = createSlice({
    name:'jobs',
    initialState: jobsInitialState,
    reducers:{
        upOpenJob: (state,action)=>{
            state.jobs = action.payload
        },
        setDataJob: (state, action)=>{
            state.dataJob = action.payload
        },
        setTitleJobs: (state, action) => {
            state.titleJobs = action.payload
        }
    }
})


export const {upOpenJob, setDataJob,setTitleJobs} = jobsSlice.actions
export default jobsSlice.reducer