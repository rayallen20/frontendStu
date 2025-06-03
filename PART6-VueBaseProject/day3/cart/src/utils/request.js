import axios from "axios";

const baseURL = 'http://localhost:3001'

const timeout = 5000

const options = {
    baseURL,
    timeout,
}

const axiosInstance = axios.create(options)

export default axiosInstance