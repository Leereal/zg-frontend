import PaymentMethod from "../../../API/PaymentMethod";
export const fetchAllPaymentMethods = async ({ commit }) => {
  const response = await PaymentMethod.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_PAYMENT_METHODS", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createPlans= async ({ commit }, payment_method) => {
  const response = await PaymentMethod.store(payment_method);
  if (response.status == 200) {
    const payload = await response;
    commit("PAYMENT_METHOD_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deletePaymentMethod = async ({ commit }, id) => {
  const response = await PaymentMethod.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_PAYMENT_METHOD");
    return payload;
  }  
  throw new Error("Error");
};

