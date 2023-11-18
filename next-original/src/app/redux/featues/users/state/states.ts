import {PayloadAction, createSlice} from '@reduxjs/toolkit'





const state = {
    stNavbarDashdoard: 'employers waiting'
}

const stateReduxSlice = createSlice({
    name:'stateRedux',
    initialState: state,
    reducers:{
        setNavDashdoard: (state,action)=>{
            state.stNavbarDashdoard = action.payload
        },

    }
})


export const {setNavDashdoard} = stateReduxSlice.actions
export default stateReduxSlice.reducer