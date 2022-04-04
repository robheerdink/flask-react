
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

const findByTitle = (title) => {
  return axios.get(`/channels?title=${title}`);
};

const ChannelService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default ChannelService;