import Api from './Api';
const END_POINT = 'banks';
export default {
    index(){
        return Api.get(END_POINT);
    },    
    store(data){
        return Api.post(END_POINT,data);
    },
    update(payload){
        return Api.put(`${END_POINT}/${payload.id}`,payload);
    },
    delete(id){
        return Api.delete(`${END_POINT}/${id}`)
    }
}