import Premium from "../../../API/Premium";
export const fetchAllPremiums = async ({ commit }) => {
  const response = await Premium.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_PREMIUMS", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createPremiums= async ({ commit }, premiums) => {
  const response = await Premium.store(premiums);
  if (response.status == 200) {
    const payload = await response;
    commit("PREMIUM_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deletePremium = async ({ commit }, id) => {
  const response = await Premium.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_PREMIUM");
    return payload;
  }  
  throw new Error("Error");
};

