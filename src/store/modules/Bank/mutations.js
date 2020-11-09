export const BANK = (state) => {
  state.bankLoading = true;
};

export const BANK_CREATE_SUCCESS = (state) => {
  state.bankLoading = false;
  state.bank_error = null;
};

export const BANK_CREATE_FAILED = (state,payload) => {
  state.bankLoading = false;
  state.bank_error = payload;
};

export const SET_BANKS = (state, payload) => {
  state.banks = payload;
};

export const ADD_BANK = (state,payload) => {
  state.banks.push(payload);
};

export const UPDATE_BANK= (state,payload) => {
  var index = state.banks.findIndex(p => p.id == payload.id);
  state.banks.splice(index, 1);
  state.banks.unshift(payload);
};

