import axios from "axios";


class DataBaseService{



    get(name){
        return axios.get(`http://localhost:8888/${name}`)
    }
    delete(name,id){
        return axios.delete(`http://localhost:8888/${name}/${id}`)
    }
    post(name,data){
        return axios.post(`http://localhost:8888/${name}`,data)
    }
    getById(name,id){
        return axios.get(`http://localhost:8888/${name}/${id}`)

    }
    update(name,id,data){
        return axios.put(`http://localhost:8888/${name}/${id}`,data)
    }

}


const DbService=new DataBaseService()

export default DbService