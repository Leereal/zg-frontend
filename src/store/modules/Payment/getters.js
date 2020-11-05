export const isPaymentLoading = (state) => {
    return state.paymentLoading;
};

export const paymentError = (state) => {
    return state.payment_error;
};  

export const getPayments = (state) => {
    return state.payments;
};
