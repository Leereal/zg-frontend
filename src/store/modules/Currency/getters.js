export const isCurrencyLoading = (state) => {
    return state.spBankDetailLoading;
};

export const currencyError = (state) => {
    return state.currency_error;
};  

export const getCurrencies = (state) => {
    return state.currencies;
};
