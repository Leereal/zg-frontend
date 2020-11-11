import axios from "axios";
if(sessionStorage.user){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(sessionStorage.user).token;
}
const Api = axios.create({
     baseURL: 'http://127.0.0.1:8000/api'
    // baseURL: 'http://zimgeneral.com/api'
})
export default Api;