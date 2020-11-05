export const PLAN = (state) => {
  state.planLoading = true;
};

export const PLAN_CREATE_SUCCESS = (state) => {
  state.planLoading = false;
};

export const PLAN_CREATE_FAILED = (state,payload) => {
  state.planLoading = false;
  state.plan_error = payload;
};

export const SET_PLANS = (state, payload) => {
  state.plans = payload;
};

export const ADD_PLAN = (state,payload) => {
  state.plans.push(payload);
};

export const UPDATE_PLAN= (state,payload) => {
  var index = state.plans.findIndex(p => p.id == payload.id);
  state.plans.splice(index, 1);
  state.plans.unshift(payload);
};

export const DELETE_PLAN = (state,payload) => {
 var index = state.plans.findIndex(p => p.id == payload.id);
    state.plans.splice(index, 1);
};
