import Api from './Api';
export default {
    store(data){
        return Api.post('register',data);
    },
    changePassword(payload){
        return Api.put(`change-password`,payload);
    },
}
