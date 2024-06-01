import axios from 'axios';
const http = axios.create({
    baseURL: 'https://www.dnd5eapi.co'
});

export default {

    getUrl(apiString){
        return http.get(apiString)
    }
}