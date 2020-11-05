import CompanyBankDetail from "../../../API/CompanyBankDetail";
export const fetchAllCompanyBankDetails = async ({ commit }) => {
  const response = await CompanyBankDetail.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_COMPANY_BANK_DETAILS", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createCompanyBankDetail= async ({ commit }, company_bank_detail) => {
  const response = await CompanyBankDetail.store(company_bank_detail);
  if (response.status == 200) {
    const payload = await response;
    commit("COMPANY_BANK_DETAIL_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deleteCompanyBankDetail = async ({ commit }, id) => {
  const response = await CompanyBankDetail.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_COMPANY_BANK_DETAIL");
    return payload;
  }  
  throw new Error("Error");
};

