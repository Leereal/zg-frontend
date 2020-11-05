export const isPaymentMethodLoading = (state) => {
    return state.paymentMethodLoading;
};

export const paymentMethodError = (state) => {
    return state.payment_method_error;
};  

export const getPaymentMethod = (state) => {
    return state.payment_methods;
};
