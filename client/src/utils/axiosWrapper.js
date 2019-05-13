import axios from 'axios';

const client = axios.create({
    baseURL: 'https://reactjs-cdp.herokuapp.com'
});

function requestWrapper(options) {
    const onSuccess = ({ data }) => data;

    const onError = (error) => {
        console.error('Request Failed:', error.message);
        return Promise.reject(error.response || error.message);
    };

    return client(options)
        .then(onSuccess)
        .catch(onError);
}

export default requestWrapper;
