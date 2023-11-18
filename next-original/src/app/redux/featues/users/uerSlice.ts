import {PayloadAction, createSlice} from '@reduxjs/toolkit'


type User = string
    
    
    


type InitialState = {
    user:User | null
    test: string 
}

const userInitialState: InitialState = {
   user: null,
   test: "/home"
}

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers:{
        setUser: (state, action: PayloadAction<User>)=>{
                    state.user = action.payload
        },
        test: (state, action)=>{
            state.test = action.payload
        }
    }
})


export const {setUser,test} = userSlice.actions
export default userSlice.reducer