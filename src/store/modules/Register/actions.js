import Register from "../../../API/Register";
export const register = async ({ commit }, user) => {
  const response = await Register.store(user);
  if (response.status == 201) {
    const registeredUser = await response;
    commit("REGISTRATION_SUCCESS");
    return registeredUser;
  }  
  throw new Error("Error");
};

export const changePassword = async ({ commit }, passwords) => {
  
  const response = await Register.changePassword(passwords);
  if (response.status == 200) {
    const payload = await response;
    commit("CHANGE_PASSWORD_CREATE_SUCCESS");
    return payload;
  }
};

