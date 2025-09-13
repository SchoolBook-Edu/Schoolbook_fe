import axios from "axios";

export default axios.create({
    // baseURL: 'https://schoolbook-api.onrender.com'
    baseURL: 'https://schoolbookbe-production.up.railway.app',
})