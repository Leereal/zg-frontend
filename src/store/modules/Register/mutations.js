export const REGISTER = (state) => {
  state.registerLoading = true;
};

export const REGISTRATION_SUCCESS = (state) => {
  state.registerLoading = false;
};

export const REGISTRATION_FAILED = (state,payload) => {
  state.registerLoading = false;
  state.registration_error = payload;
};


