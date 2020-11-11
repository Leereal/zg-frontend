export const GROUP = (state) => {
  state.groupLoading = true;
};

export const GROUP_CREATE_SUCCESS = (state) => {
  state.groupLoading = false;
};

export const GROUP_CREATE_FAILED = (state,payload) => {
  state.groupLoading = false;
  state.group_error = payload;
};

export const SET_GROUPS = (state, payload) => {
  state.groups = payload;
};

export const ADD_GROUP = (state,payload) => {
  state.groups.push(payload);
};

export const UPDATE_GROUP= (state,payload) => {
  var index = state.groups.findIndex(p => p.id == payload.id);
  state.groups.splice(index, 1);
  state.groups.unshift(payload);
};
