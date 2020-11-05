import Role from "../../../API/Role";
export const fetchAllRoles = async ({ commit }) => {
  const response = await Role.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_ROLES", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createRoles= async ({ commit }, roles) => {
  const response = await Role.store(roles);
  if (response.status == 200) {
    const payload = await response;
    commit("ROLE_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deleteRole = async ({ commit }, id) => {
  const response = await Role.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_ROLE");
    return payload;
  }  
  throw new Error("Error");
};

