import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
  } from "./register.types";
  import axios from "axios";
  
  export const registerUser = (creds) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      let res = await axios.post(
        "http://localhost:5000/auth/register",
        creds
      );
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      alert("Registed successfully")
      
    } catch (error) {
      dispatch({ type: REGISTER_ERROR, payload: error.message });
      alert(error.message)
    }
  };