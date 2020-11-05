export const SP_BANK_DETAIL = (state) => {
  state.spLoading = true;
};

export const SP_BANK_DETAIL_CREATE_SUCCESS = (state) => {
  state.spLoading = false;
};

export const SP_BANK_DETAIL_CREATE_FAILED = (state,payload) => {
  state.spLoading = false;
  state.sp_error = payload;
};

export const SET_SP_BANK_DETAILS = (state, payload) => {
  state.sp_bank_details = payload;
};

export const ADD_SP_BANK_DETAIL = (state,payload) => {
  state.sp_bank_details.push(payload);
};

export const UPDATE_SP_BANK_DETAIL= (state,payload) => {
  var index = state.sp_bank_details.findIndex(p => p.id == payload.id);
  state.sp_bank_details.splice(index, 1);
  state.sp_bank_details.unshift(payload);
};

export const DELETE_SP_BANK_DETAIL = (state,payload) => {
 var index = state.sp_bank_details.findIndex(p => p.id == payload.id);
    state.sp_bank_details.splice(index, 1);
};
