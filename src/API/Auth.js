import Api from './Api';
export default {
    index(credentials){
        return Api.post('login',credentials);
    },    
    store(data){
        return Api.post('user',data);
    },
    update(user,id){
        return Api.put(`user/${id}`,user);
    },
    delete(id){
        return Api.delete(`user/${id}`)
    }
}