import axios from 'axios';

/*
set a base url in axios, this way we dont have to use the full url in the axios request
https://axios-http.com/docs/config_defaults

import axios from "axios"
axios.post('https://624594416b7ecf057c20719c.mockapi.io/fakeData/${id}', {})

import api from "../service/api";
api.post('/fakeData', {});
*/

export default axios.create({
    // baseURL: "http://localhost:8080/api",
    baseURL: "https://624594416b7ecf057c20719c.mockapi.io/"
});
