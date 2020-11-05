import Plan from "../../../API/Plan";
export const fetchAllPlans = async ({ commit }) => {
  const response = await Plan.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_PLANS", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createPlans= async ({ commit }, plan) => {
  const response = await Plan.store(plan);
  if (response.status == 200) {
    const payload = await response;
    commit("PLAN_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deletePlan = async ({ commit }, id) => {
  const response = await Plan.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_PLAN");
    return payload;
  }  
  throw new Error("Error");
};

