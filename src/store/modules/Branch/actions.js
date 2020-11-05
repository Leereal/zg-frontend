import Branch from "../../../API/Branch";

export const getBranches = ({ commit }) => {
  Branch.index().then((response) => {
    commit("SET_BRANCHES", response.data.data);
  });
};

// export const addBranch = ({commit},payload) => {
//   Branch.store(payload)
//   .then(response =>{
//     commit('ADD_BRANCH',response.data.data);
//   })
// };

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
