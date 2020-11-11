import Payment from "../../../API/Payment";

export const fetchAllPayments = async ({ commit }) => {
  const response = await Payment.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_PAYMENTS", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const addPayment = async ({ commit }, payment) => {
  const response = await Payment.store(payment);
  if (response.status == 201) {
    const payload = await response;
    commit("PAYMENT_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

//Start: Action to delete 
export const deletePayment = async ({ commit }, id) => {
  const response = await Payment.delete(id);//Send to delete 
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_PAYMENT",payload);//Send to delete from store
    return payload;
  }  
  throw new Error("Error");
};