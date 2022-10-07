import axios from "axios";

export const getRequest = async (url: string, config = undefined) => {
    return axios.get(url, config);
  }