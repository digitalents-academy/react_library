import axios from "axios";
// import { base } from '../../../react_library_backend/models/book';
const baseUrl = "http://localhost:3003/api/books";

let token = null;

const setToken = (newToken) => {
  token = newToken;
};

const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const deleteBook = (id) => {
  console.log(id);
  console.log("frontend");
  const request = axios.delete(`${baseUrl}/${id}`);

  return request.then((response) => response.data);
};

const updateLoanStatus = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = await axios.put(`${baseUrl}/loan/${id}`, {}, config);

  //return request.then((response) => response.data);
};

export default { getAll, create, deleteBook, updateLoanStatus, setToken };
