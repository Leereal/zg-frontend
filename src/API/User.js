import Api from './Api';
export default {
    index(){
        return Api.get('branches');
    },    
    store(data){
        return Api.post('branches',data);
    },
    update(branch,id){
        return Api.put(`branches/${id}`,branch);
    },
    delete(id){
        return Api.delete(`branches/${id}`)
    }
}