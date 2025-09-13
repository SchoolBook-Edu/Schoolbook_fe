import axios from "axios";

export default axios.create({
    // baseURL: 'https://schoolbook-api.onrender.com'
    baseURL: 'schoolbookbe-production.up.railway.app',
})