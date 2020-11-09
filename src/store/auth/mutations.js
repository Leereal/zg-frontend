export const LOGIN = (state) => {
  state.loading = true;
  state.auth_error = null;
};

export const LOGIN_SUCCESS = (state, payload) => {
  state.auth_error = null;
  state.isLoggedIn = true;
  state.loading = false;
  state.currentUser = Object.assign({}, payload.user, {
    token: payload.token,
    roles:payload.roles
  });

  sessionStorage.setItem("user", JSON.stringify(state.currentUser));
};

export const LOGIN_FAILED = (state, payload) => {
  state.loading = false;
  state.auth_error = payload.error;
};

export const LOGOUT = (state) => {
  sessionStorage.removeItem("user");
  state.isLoggedIn = false;
  state.currentUser = null;
};

