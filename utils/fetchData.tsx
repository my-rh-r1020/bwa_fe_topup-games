// Import Library
import axios from "axios";

// Fetch GET DATA from API
export function getData(url: any, params: any, token: any) {
  return axios.get(`${url}`, { params, headers: { Authorization: `Bearer ${token}` } });
}

// Fetch POST DATA from API
export async function postData(url: any, payload: any, token: any) {
  return await axios.post(`${url}`, payload, { headers: { Authorization: `Bearer ${token}` } });
}
