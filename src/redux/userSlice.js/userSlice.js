import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
  isLoading:true,
  apiError:false
};
export const userSlice = createSlice({
  name: "fetchUsers",
  initialState,
  reducers: {
    usersData: (state, action) => {
       return state.value;
      },
      updateUsersData: (state, action) => {
        state.value = action.payload;
      },
      setIsloading:(state, action)=>{
        state.isLoading = action.payload
      },
      setAPIError:(state, action)=>{
        state.apiError=action.payload
      }
  },
});
export const { updateUsersData, setIsloading, setAPIError} = userSlice.actions;

export default userSlice.reducer;
