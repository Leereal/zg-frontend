export const REGISTER = (state) => {
  state.registerLoading = true;
};

export const REGISTRATION_SUCCESS = (state) => {
  state.registerLoading = false;
  state.registration_error = null;
};

export const REGISTRATION_FAILED = (state,payload) => {
  state.registerLoading = false;
  state.registration_error = payload;
};


export const CHANGE_PASSWORD = (state) => {
  state.changePasswordLoading = true;
};

export const CHANGE_PASSWORD_CREATE_SUCCESS = (state) => {
  state.changePasswordLoading = false;
  state.change_password_error = null;
};

export const CHANGE_PASSWORD_FAILED = (state,payload) => {
  state.changePasswordLoading = false;
  state.change_password_error = payload;
};


