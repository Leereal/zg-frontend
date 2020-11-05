import Currency from "../../../API/Currency";
export const fetchAllCurrencies= async ({ commit }) => {
  const response = await Currency.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_CURRENCIES", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createCurrency= async ({ commit }, currency) => {
  const response = await Currency.store(currency);
  if (response.status == 200) {
    const payload = await response;
    commit("CURRENCY_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deleteCurrency = async ({ commit }, id) => {
  const response = await Currency.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_CURRENCY");
    return payload;
  }  
  throw new Error("Error");
};

