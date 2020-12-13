export const isClientLoading = (state) => {
    return state.clientLoading;
};

export const clientError = (state) => {
    return state.client_error;
};  

export const getClients = (state) => {
    return state.clients;
};

export const clientsCount = (state) => {
    return state.clients.length;
};


export const currentMonthClients = (state) => {
    const current_month_clients = state.clients.filter(function(client) {
        let d = client.date_joined
        let client_month = (new Date(d)).getMonth();
        let client_year = (new Date(d)).getYear();
        let current_month = (new Date()).getMonth();
        let current_year = (new Date()).getYear();
        return client_month == current_month && client_year == current_year;      
      });     
    return current_month_clients;
};
export const previousMonthClients = (state) => {
    const previous_month_clients = state.clients.filter(function(client) {
        let d = client.date_joined
        let client_month = (new Date(d)).getMonth();
        let client_year = (new Date(d)).getYear();
        let previous_month = (new Date()).getMonth() - 1;
        let current_year = (new Date()).getYear();
        return client_month == previous_month && client_year == current_year;      
      });     
    return previous_month_clients;
};