import axios from "axios";

const instance = axios.create({
    baseURL:"https://elibrary-backend-191537.herokuapp.com/api",
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export default instance;