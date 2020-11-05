import Employee from "../../../API/Employee";
export const fetchAllEmployees = async ({ commit }) => {
  const response = await Employee.index();
  if (response.status == 200) {
    const payload = await response.data.data;   
    commit("SET_EMPLOYEES", payload); 
    return payload;
  }  
  throw new Error("Error");
};

export const createEmployee= async ({ commit }, employee) => {
  const response = await Employee.store(employee);
  if (response.status == 200) {
    const payload = await response;
    commit("EMPLOYEE_CREATE_SUCCESS");
    return payload;
  }  
  throw new Error("Error");
};

export const deleteEmployee = async ({ commit }, id) => {
  const response = await Employee.delete(id);
  if (response.status == 200) {
    const payload = await response;
    commit("DELETE_EMPLOYEE");
    return payload;
  }  
  throw new Error("Error");
};

