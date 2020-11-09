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

export const addBank= async ({ commit }, bank) => {
  const response = await Bank.store(bank);
  if (response.status == 201) {
    const payload = await response;
    commit("BANK_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const updateBank= async ({ commit }, bank) => {
  const response = await Bank.update(bank);
  if (response.status == 200) {
    const payload = await response;
    commit("BANK_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deleteBank = async (id) => {
  const response = await Bank.delete(id);
  if (response.status == 200) {
    return response;
  }  
  throw new Error("Error");
};

