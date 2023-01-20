import axios from "axios";
import { application } from "express";
import env  from '../config.json';

const services  = axios.create({
    baseURL: env.baseURL,
    timeout: 1000,
    headers: {
      'Accept': 'application/json',
    }
});

export default services;
