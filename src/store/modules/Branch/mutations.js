export const SET_BRANCHES = (state, branches) => {
  state.branches = branches;
};

export const ADD_BRANCH = (state,payload) => {
  state.branches.push(payload);
};

export const UPDATE_BRANCH = (state,branch) => {
  var index = state.branches.findIndex(b => b.id == branch.id);
  state.branches.splice(index, 1);
  state.branches.unshift(branch);
};

export const DELETE_BRANCH = (state,branch) => {
 var index = state.branches.findIndex(b => b.id == branch.id);
    state.branches.splice(index, 1);
};