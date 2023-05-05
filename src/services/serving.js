import axios from "axios";

const SERVER_URL = "http://localhost:9000";

export const getAllServing = () => {
    const url = `${SERVER_URL}/serving`;
    return axios.get(url);
  };
export const getServing = (id) => {
    const url = `${SERVER_URL}/serving/${id}`;
    return axios.get(url);
  };