import axios from 'axios';
// import { base } from '../../../react_library_backend/models/book';
const baseUrl = 'http://localhost:3003/api/books/';

const getAll = () => {
    const request = axios.get(baseUrl)

    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)

    return request.then(response => response.data)
}



export default { getAll, create };