export const ROLE = (state) => {
  state.roleLoading = true;
};

export const ROLE_CREATE_SUCCESS = (state) => {
  state.roleLoading = false;
};

export const ROLE_CREATE_FAILED = (state,payload) => {
  state.roleLoading = false;
  state.role_error = payload;
};

export const SET_ROLES = (state, payload) => {
  state.roles = payload;
};

export const ADD_ROLE= (state,payload) => {
  state.roles.push(payload);
};

export const UPDATE_ROLE= (state,payload) => {
  var index = state.roles.findIndex(p => p.id == payload.id);
  state.roles.splice(index, 1);
  state.roles.unshift(payload);
};

export const DELETE_ROLE = (state,payload) => {
 var index = state.roles.findIndex(p => p.id == payload.id);
    state.roles.splice(index, 1);
};
