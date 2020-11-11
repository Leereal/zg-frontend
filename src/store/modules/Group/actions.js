import Group from "../../../API/Group";
export const fetchAllGroups = async ({ commit }) => {
  const response = await Group.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_GROUPS", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const addGroup= async ({ commit }, group) => {
  const response = await Group.store(group);
  if (response.status == 201) {
    const payload = await response;
    commit("GROUP_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};


export const updateGroup= async ({ commit }, group) => {
  const response = await Group.update(group);
  if (response.status == 200) {
    const payload = await response;
    commit("GROUP_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};


export const deleteGroup = async ({ commit }, id) => {
  const response = await Group.delete(id);
  if (response.status == 200) {
    const payload = await response;
    return payload;
  }  
  throw new Error("Error");
};

