import zigwayApi from './api';

const authHeader = (token) => {
    return { 
        'headers': {Authorization: 'Bearer ' + token},
        'Content-Type': 'application/json'
    }
}

const getBorrowers = async() => {
    try {
        const token = "671962edf668a796a40d6703433e4c3106eeeba5";
        const result = await zigwayApi.get(`borrowers`, authHeader(token))
        console.log("RESULT: ", result.data);
        return result.data;
    } catch(err) {
        console.error("ERR in fetch", err);
        return err.response.data;
    }
}

export {
    getBorrowers
}