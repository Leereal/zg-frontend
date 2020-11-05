import SP from "../../../API/SP";
export const fetchAllServiceProviders = async ({ commit }) => {
  const response = await SP.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_SERVICE_PROVIDERS", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createServiceProvider= async ({ commit }, service_providers) => {
  const response = await SP.store(service_providers);
  if (response.status == 200) {
    const payload = await response;
    commit("SERVICE_PROVIDER_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deleteServiceProvider= async ({ commit }, id) => {
  const response = await SP.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_SERVICE_PROVIDER");
    return payload;
  }  
  throw new Error("Error");
};

