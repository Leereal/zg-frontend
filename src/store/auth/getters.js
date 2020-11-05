export const isLoading = (state) => {
    return state.loading;
};

export const isLoggedIn = (state) => {
    return state.isLoggedIn;
};

export const currentUser = (state) => {
    return state.currentUser;
};

export const authError = (state) => {
    return state.auth_error;
};

export function getLocalUser() {
    const userStr = sessionStorage.getItem("user"); // Get user details from sessionStorage
    if(!userStr) {
        return null;
    }  
    return JSON.parse(userStr);
  }
  