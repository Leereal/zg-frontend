export const SERVICE_PROVIDER = (state) => {
  state.serviceProviderLoading = true;
};

export const SERVICE_PROVIDER_CREATE_SUCCESS = (state) => {
  state.serviceProviderLoading = false;
};

export const SERVICE_PROVIDER_CREATE_FAILED = (state,payload) => {
  state.serviceProviderLoading = false;
  state.service_provider_error = payload;
};

export const SET_SERVICE_PROVIDERS = (state, payload) => {
  state.service_providers = payload;
};

export const ADD_SERVICE_PROVIDER= (state,payload) => {
  state.service_providers.push(payload);
};

export const UPDATE_SERVICE_PROVIDER= (state,payload) => {
  var index = state.service_providers.findIndex(p => p.id == payload.id);
  state.service_providers.splice(index, 1);
  state.service_providers.unshift(payload);
};

export const DELETE_SERVICE_PROVIDER = (state,payload) => {
 var index = state.service_providers.findIndex(p => p.id == payload.id);
    state.service_providers.splice(index, 1);
};
