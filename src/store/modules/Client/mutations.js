export const CLIENT = (state) => {
  state.clientLoading = true;
};

export const CLIENT_CREATE_SUCCESS = (state) => {
  state.clientLoading = false;
};

export const CLIENT_CREATE_FAILED = (state,payload) => {
  state.clientLoading = false;
  state.client_error = payload;
};

export const SET_CLIENTS = (state, payload) => {
  state.clients = payload;
};

export const ADD_CLIENT = (state,payload) => {
  state.clients.push(payload);
};

export const UPDATE_CLIENT= (state,payload) => {
  var index = state.clients.findIndex(p => p.id == payload.id);
  state.clients.splice(index, 1);
  state.clients.unshift(payload);
};

export const DELETE_CLIENT = (state,payload) => {
 var index = state.clients.findIndex(p => p.id == payload.id);
    state.clients.splice(index, 1);
};
