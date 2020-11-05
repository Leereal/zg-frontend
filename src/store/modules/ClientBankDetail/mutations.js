export const CLIENT_BANK_DETAIL = (state) => {
  state.clientLoading = true;
};

export const CLIENT_BANK_DETAIL_CREATE_SUCCESS = (state) => {
  state.clientLoading = false;
};

export const CLIENT_BANK_DETAIL_CREATE_FAILED = (state,payload) => {
  state.clientLoading = false;
  state.client_error = payload;
};

export const SET_CLIENT_BANK_DETAILS = (state, payload) => {
  state.client_bank_details = payload;
};

export const ADD_CLIENT_BANK_DETAIL = (state,payload) => {
  state.client_bank_details.push(payload);
};

export const UPDATE_CLIENT_BANK_DETAIL= (state,payload) => {
  var index = state.client_bank_details.findIndex(p => p.id == payload.id);
  state.client_bank_details.splice(index, 1);
  state.client_bank_details.unshift(payload);
};

export const DELETE_CLIENT_BANK_DETAIL = (state,payload) => {
 var index = state.client_bank_details.findIndex(p => p.id == payload.id);
    state.client_bank_details.splice(index, 1);
};
