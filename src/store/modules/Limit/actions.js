import Limit from "../../../API/Limit";
export const fetchAllLimits = async ({ commit }) => {
  const response = await Limit.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_LIMITS", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createLimits= async ({ commit }, limit) => {
  const response = await Limit.store(limit);
  if (response.status == 200) {
    const payload = await response;
    commit("LIMIT_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deleteLimit = async ({ commit }, id) => {
  const response = await Limit.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_LIMIT");
    return payload;
  }  
  throw new Error("Error");
};

