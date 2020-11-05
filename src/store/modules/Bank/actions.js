import Bank from "../../../API/Bank";
export const fetchAllBanks = async ({ commit }) => {
  const response = await Bank.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_BANKS", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createBank= async ({ commit }, bank) => {
  const response = await Bank.store(bank);
  if (response.status == 200) {
    const payload = await response;
    commit("BANK_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deleteBank = async ({ commit }, id) => {
  const response = await Bank.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_BANK");
    return payload;
  }  
  throw new Error("Error");
};

