export const PAYMENT = (state) => {
  state.paymentLoading = true;
};

export const PAYMENT_SUCCESS = (state) => {
  state.paymentLoading = false;
};

export const PAYMENT_FAILED = (state,payload) => {
  state.paymentLoading = false;
  state.payment_error = payload;
};

export const SET_PAYMENTS = (state, payload) => {
  state.payments = payload;
};

export const ADD_PAYMENT = (state,payload) => {
  state.payments.push(payload);
};

export const UPDATE_PAYMENT = (state,payload) => {
  var index = state.payments.findIndex(p => p.id == payload.id);
  state.payments.splice(index, 1);
  state.payments.unshift(payload);
};

export const DELETE_PAYMENT = (state,payload) => {
 var index = state.payments.findIndex(p => p.id == payload.id);
    state.payments.splice(index, 1);
};
