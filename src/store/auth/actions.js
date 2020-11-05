import Auth from "../../API/Auth";
import { setAuthorization } from "../../helpers/auth";

export const login = async ({ commit }, credentials) => {
  const response = await  Auth.index(credentials);
  if(response.status !== 200){    
    throw new Error("Login failed. Email or Password is incorrect.");
  } 
  setAuthorization(response.data.token);//Authorize axios to post to database
  const loggedUser = await response.data;
  commit("LOGIN_SUCCESS", loggedUser);
  return loggedUser.user;
};
