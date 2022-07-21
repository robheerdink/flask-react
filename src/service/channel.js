
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


const ChannelService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
  findByTitle,
};

export default ChannelService;