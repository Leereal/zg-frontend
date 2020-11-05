import ClientBankDetail from "../../../API/ClientBankDetail";
export const fetchAllClientBankDetails = async ({ commit }) => {
  const response = await ClientBankDetail.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_CLIENT_BANK_DETAILS", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createClientBankDetail= async ({ commit }, client_bank_detail) => {
  const response = await ClientBankDetail.store(client_bank_detail);
  if (response.status == 200) {
    const payload = await response;
    commit("CLIENT_BANK_DETAIL_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deleteClientBankDetail = async ({ commit }, id) => {
  const response = await ClientBankDetail.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_CLIENT_BANK_DETAIL");
    return payload;
  }  
  throw new Error("Error");
};

