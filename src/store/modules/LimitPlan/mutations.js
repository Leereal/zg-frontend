export const LIMITPLAN = (state) => {
  state.limitplanLoading = true;
};

export const LIMITPLAN_CREATE_SUCCESS = (state) => {
  state.limitplanLoading = false;
};

export const LIMITPLAN_CREATE_FAILED = (state,payload) => {
  state.limitplanLoading = false;
  state.limitplan_error = payload;
};

export const SET_LIMITPLANS = (state, payload) => {
  state.limitplans = payload;
};

export const ADD_LIMITPLAN = (state,payload) => {
  state.limitplans.push(payload);
};

export const UPDATE_LIMITPLAN= (state,payload) => {
  var index = state.limitplans.findIndex(p => p.id == payload.id);
  state.limitplans.splice(index, 1);
  state.limitplans.unshift(payload);
};

export const DELETE_LIMITPLAN = (state,payload) => {
 var index = state.limitplans.findIndex(p => p.id == payload.id);
    state.limitplans.splice(index, 1);
};
