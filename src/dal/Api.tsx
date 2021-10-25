import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/menu/',
});


export const API = {
    getAllDish(data:string) {
        alert("api start to work")
        const promise = instance.get('')
        return promise;
    }
}







