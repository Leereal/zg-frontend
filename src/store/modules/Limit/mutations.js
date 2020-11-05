export const LIMIT = (state) => {
  state.limitLoading = true;
};

export const LIMIT_CREATE_SUCCESS = (state) => {
  state.limitLoading = false;
};

export const LIMIT_CREATE_FAILED = (state,payload) => {
  state.limitLoading = false;
  state.limit_error = payload;
};

export const SET_LIMITS = (state, payload) => {
  state.limits = payload;
};

export const ADD_LIMIT = (state,payload) => {
  state.limits.push(payload);
};

export const UPDATE_LIMIT= (state,payload) => {
  var index = state.limits.findIndex(p => p.id == payload.id);
  state.limits.splice(index, 1);
  state.limits.unshift(payload);
};

export const DELETE_LIMIT = (state,payload) => {
 var index = state.limits.findIndex(p => p.id == payload.id);
    state.limits.splice(index, 1);
};
