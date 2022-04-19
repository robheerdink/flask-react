import axios from 'axios';

/*
set a base url in axios, 
this way we dont have to use the full url or can mock the url
https://axios-http.com/docs/config_defaults
*/

export default axios.create({
    baseURL: "https://624594416b7ecf057c20719c.mockapi.io/"
});
