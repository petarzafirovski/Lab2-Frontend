import axios from "axios";

const instance = axios.create({
    baseURL:"https://elibrary-backend-191537.herokuapp.com/api"
})

export default instance;