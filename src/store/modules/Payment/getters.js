export const isPaymentLoading = (state) => {
    return state.paymentLoading;
};

export const paymentError = (state) => {
    return state.payment_error;
};  

export const getPayments = (state) => {
    return state.payments;
};


export const currentMonthPayments = (state) => {
    const current_month_payments = state.payments.filter(function(payment) {
        let d = payment.date_paid
        let payment_month = (new Date(d)).getMonth();
        let payment_year = (new Date(d)).getYear();
        let current_month = (new Date()).getMonth();
        let current_year = (new Date()).getYear();
        return payment_month == current_month && payment_year == current_year;      
      });     
    return current_month_payments;
};
export const previousMonthPayments = (state) => {
    const previous_month_payments = state.payments.filter(function(payment) {
        let d = payment.date_paid
        let payment_month = (new Date(d)).getMonth();
        let payment_year = (new Date(d)).getYear();
        let previous_month = (new Date()).getMonth() - 1;
        let current_year = (new Date()).getYear();
        return payment_month == previous_month && payment_year == current_year;      
      });     
    return previous_month_payments;
};

