export const EMPLOYEE = (state) => {
  state.employeeLoading = true;
};

export const EMPLOYEE_CREATE_SUCCESS = (state) => {
  state.employeeLoading = false;
};

export const EMPLOYEE_CREATE_FAILED = (state,payload) => {
  state.employeeLoading = false;
  state.employee_error = payload;
};

export const SET_EMPLOYEES = (state, payload) => {
  state.employees = payload;
};

export const ADD_EMPLOYEE = (state,payload) => {
  state.employees.push(payload);
};

export const UPDATE_EMPLOYEE= (state,payload) => {
  var index = state.employees.findIndex(p => p.id == payload.id);
  state.employees.splice(index, 1);
  state.employees.unshift(payload);
};

export const DELETE_EMPLOYEE = (state,payload) => {
 var index = state.employees.findIndex(p => p.id == payload.id);
    state.employees.splice(index, 1);
};
