export const isEmployeeLoading = (state) => {
    return state.employeeLoading;
};

export const employeeError = (state) => {
    return state.employee_error;
};  

export const getEmployee = (state) => {
    return state.employees;
};
