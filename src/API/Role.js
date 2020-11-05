import Api from './Api';
const END_POINT = 'roles';
export default {
    index(){
        return Api.get(END_POINT);
    },    
    store(data){
        return Api.post(END_POINT,data);
    },
    update(payload,id){
        return Api.put(`${END_POINT}/${id}`,payload);
    },
    delete(id){
        return Api.delete(`${END_POINT}/${id}`)
    }
}