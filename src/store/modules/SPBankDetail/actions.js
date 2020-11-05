import SPBankDetail from "../../../API/SPBankDetail";
export const fetchAllSPBankDetails = async ({ commit }) => {
  const response = await SPBankDetail.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_SP_BANK_DETAILS", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createSPBankDetail= async ({ commit }, sp_bank_detail) => {
  const response = await SPBankDetail.store(sp_bank_detail);
  if (response.status == 200) {
    const payload = await response;
    commit("SP_BANK_DETAIL_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deleteSPBankDetail = async ({ commit }, id) => {
  const response = await SPBankDetail.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_SP_BANK_DETAIL");
    return payload;
  }  
  throw new Error("Error");
};

