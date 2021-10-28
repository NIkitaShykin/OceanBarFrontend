import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/menu/',
});


export const API = {
    getAllDish() {
        const promise = instance.get('')
        return promise;
    }
}







