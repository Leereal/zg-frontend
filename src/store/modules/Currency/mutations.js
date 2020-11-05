export const CURRENCYL = (state) => {
  state.currencyLoading = true;
};

export const CURRENCY_CREATE_SUCCESS = (state) => {
  state.currencyLoading = false;
};

export const CURRENCY_CREATE_FAILED = (state,payload) => {
  state.currencyLoading = false;
  state.currency_error = payload;
};

export const SET_CURRENCIES = (state, payload) => {
  state.currencies = payload;
};

export const ADD_CURRENCY= (state,payload) => {
  state.currencies.push(payload);
};

export const UPDATE_CURRENCY= (state,payload) => {
  var index = state.currencies.findIndex(p => p.id == payload.id);
  state.currencies.splice(index, 1);
  state.currencies.unshift(payload);
};

export const DELETE_CURRENCY= (state,payload) => {
 var index = state.currencies.findIndex(p => p.id == payload.id);
    state.currencies.splice(index, 1);
};
