import axios from "axios";
if (sessionStorage.user) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(sessionStorage.user).token;
}
const Api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
        //baseURL: 'https://zimgeneral.com/api'
        //Change here in future
})
export default Api;