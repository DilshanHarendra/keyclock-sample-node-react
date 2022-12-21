import {createSlice} from '@reduxjs/toolkit';
import jwt_decode from "jwt-decode";
const init = {
  user: null,
  token:localStorage.getItem('kc_token')||null,
  refreshToken:localStorage.getItem('kc_refreshToken') || null,
  activeAccount:null,
  tokenData:null,
  isAuthenticated:null
};
const usersSlice = createSlice({
  name: 'user',
  initialState: init,
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload;
    },
    setToken: (state,action) => {
      state.token = action.payload;
      console.log(action.payload)
    },
    setActiveAccount: (state,action) => {
      state.activeAccount = action.payload;
    },
    setIsAuthenticated: (state,action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser,setToken,setActiveAccount,setIsAuthenticated} = usersSlice.actions;

export default usersSlice.reducer;
