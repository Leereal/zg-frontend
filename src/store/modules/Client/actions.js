import Client from "../../../API/Client";
export const fetchAllClients = async ({ commit }) => {
  const response = await Client.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_CLIENTS", payload); 
    return payload;
  }  
  throw new Error("Error");
};


export const addClient= async ({ commit }, client) => {
  const response = await Client.store(client);
  if (response.status == 201) {
    const payload = await response;
    commit("CLIENT_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const updateClient= async ({ commit }, client) => {
  const response = await Client.update(client);
  if (response.status == 200) {
    const payload = await response;
    commit("CLIENT_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};
export const deleteClient = async ({commit},id) => {
  const response = await Client.delete(id);
  if (response.status == 200) {
    return response;
  }  
  throw new Error("Error");
};
