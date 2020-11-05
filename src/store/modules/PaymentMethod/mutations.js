export const PAYMENT_METHOD = (state) => {
  state.paymentMethodLoading = true;
};

export const PAYMENT_METHOD_CREATE_SUCCESS = (state) => {
  state.paymentMethodLoading = false;
};

export const PAYMENT_METHOD_CREATE_FAILED = (state,payload) => {
  state.paymentMethodLoading = false;
  state.payment_method_error = payload;
};

export const SET_PAYMENT_METHODS = (state, payload) => {
  state.payment_methods = payload;
};

export const ADD_PAYMENT_METHOD = (state,payload) => {
  state.payment_methods.push(payload);
};

export const UPDATE_PAYMENT_METHOD= (state,payload) => {
  var index = state.payment_methods.findIndex(p => p.id == payload.id);
  state.payment_methods.splice(index, 1);
  state.payment_methods.unshift(payload);
};

export const DELETE_PAYMENT_METHOD = (state,payload) => {
 var index = state.payment_methods.findIndex(p => p.id == payload.id);
    state.payment_methods.splice(index, 1);
};
