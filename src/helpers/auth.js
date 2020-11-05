import Api from "../API/Api";

export function setAuthorization(token) {
    Api.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export function getLocalUser() {
    const userStr = sessionStorage.getItem("user");

    if(!userStr) {
        return null;
    }

    return JSON.parse(userStr);
}