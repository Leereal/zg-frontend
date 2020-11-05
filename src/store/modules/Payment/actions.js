import Payment from "../../../API/Payment";
export const make_payment = async ({ commit }, payment) => {
  const response = await Payment.store(payment);
  if (response.status == 200) {
    const payload = await response;
    commit("PAYMENT_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const fetchAllPayments = async ({ commit }) => {
  const response = await Payment.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_PAYMENTS", payload); 
    return payload;
  }  
  throw new Error("Error");
};
