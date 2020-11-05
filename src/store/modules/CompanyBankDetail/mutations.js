export const COMPANY_BANK_DETAIL = (state) => {
  state.companyLoading = true;
};

export const COMPANY_BANK_DETAIL_CREATE_SUCCESS = (state) => {
  state.companyLoading = false;
};

export const COMPANY_BANK_DETAIL_CREATE_FAILED = (state,payload) => {
  state.companyLoading = false;
  state.company_error = payload;
};

export const SET_COMPANY_BANK_DETAILS = (state, payload) => {
  state.company_bank_details = payload;
};

export const ADD_COMPANY_BANK_DETAIL = (state,payload) => {
  state.company_bank_details.push(payload);
};

export const UPDATE_COMPANY_BANK_DETAIL= (state,payload) => {
  var index = state.company_bank_details.findIndex(p => p.id == payload.id);
  state.company_bank_details.splice(index, 1);
  state.company_bank_details.unshift(payload);
};

export const DELETE_COMPANY_BANK_DETAIL = (state,payload) => {
 var index = state.company_bank_details.findIndex(p => p.id == payload.id);
    state.company_bank_details.splice(index, 1);
};
