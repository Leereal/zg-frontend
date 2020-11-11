import Branch from "../../../API/Branch";

export const fetchAllBranches = async ({ commit }) => {
  const response = await Branch.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_BRANCHES", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export function addBranch(branch) {
  return new Promise((res, rej) => {
    Branch.store(branch)
      .then((response) => {
        res(response.data);
      })
      .catch((err) => {
        rej("Error received");
      });
  });
}

export const updateBranch = ({ commit }, branch) => {
  Branch.update(branch, branch.id).then((response) => {
    commit("UPDATE_BRANCH", response.data.data);
  });
};

export const deleteBranch = ({ commit }, branch) => {
  Branch.delete(branch.id).then(() => {
    commit("DELETE_BRANCH", branch);
  });
};
