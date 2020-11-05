export const PREMIUM_METHOD = (state) => {
  state.premiumLoading = true;
};

export const PREMIUM_CREATE_SUCCESS = (state) => {
  state.premiumLoading = false;
};

export const PREMIUM_CREATE_FAILED = (state,payload) => {
  state.premiumLoading = false;
  state.premium_method_error = payload;
};

export const SET_PREMIUMS = (state, payload) => {
  state.premiums = payload;
};

export const ADD_PREMIUM= (state,payload) => {
  state.premiums.push(payload);
};

export const UPDATE_PREMIUM= (state,payload) => {
  var index = state.premiums.findIndex(p => p.id == payload.id);
  state.premiums.splice(index, 1);
  state.premiums.unshift(payload);
};

export const DELETE_PREMIUM = (state,payload) => {
 var index = state.premiums.findIndex(p => p.id == payload.id);
    state.premiums.splice(index, 1);
};
