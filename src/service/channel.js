
import axios from 'axios';
axios.defaults.baseURL = "/api";

const getAll = () => {
  return axios.get("/channels");
};

const get = (id) => {
  return axios.get(`/channels/${id}`);
};

const create = (data) => {
  return axios.post("/channels", data);
};

const update = (id, data) => {
  return axios.put(`/channels/${id}`, data);
};

const remove = (id) => {
  return axios.delete(`/channels/${id}`);
};

const removeAll = () => {
  return axios.delete(`/channels`);
};

const findByName = (value) => {
  return axios.get(`channels/name/${value}`);
};

const findByTitle = (value) => {
  return axios.get(`/channels/title/${value}`);
};

// const nameIsUnique = (value, id) => {

// 	some issue with return
// 	https://stackoverflow.com/questions/48980380/returning-data-from-axios-api

// 	// check if name already exists in any other row
// 	return axios.get(`channels/name/${value}`)
//   	.then( (res) => {  
// 		if (res.data.length > 0) {
// 	  		for (let row of res.data) {
// 				if (row.id != id){
// 					return {validated: "fail"}
// 				}
// 			}
// 		}
// 		return {validated: "succes"}
// 	})
// 	});
	
// }

const ChannelService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
  findByTitle,
  nameIsUnique,
};

export default ChannelService;