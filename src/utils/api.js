import axios from 'axios';

const zigwayUrl = 'staging1.zigway.co/api/v1/';

let instance = axios.create({
    baseURL: `https://${zigwayUrl}`
})

export default instance;