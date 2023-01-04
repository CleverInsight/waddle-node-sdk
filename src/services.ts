import axios from "axios";
import env  from '../config.json';



const services  = axios.create({
    baseURL: env.baseURL,
    timeout: 1000,
    headers: {
      'Accept': 'application/json',
    }
});

export default services;