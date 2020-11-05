import LimitPlan from "../../../API/LimitPlan";
export const fetchAllLimitPlans = async ({ commit }) => {
  const response = await LimitPlan.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_LIMITPLANS", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createLimitPlans= async ({ commit }, limitplan) => {
  const response = await LimitPlan.store(limitplan);
  if (response.status == 200) {
    const payload = await response;
    commit("LIMITPLAN_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deleteLimitPlan = async ({ commit }, id) => {
  const response = await LimitPlan.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_LIMITPLAN");
    return payload;
  }  
  throw new Error("Error");
};

