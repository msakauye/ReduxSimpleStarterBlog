import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=markssupercoolkey';

function getUrl(route) {
    return `${ROOT_URL}${route}${API_KEY}`;
}

function handleResponse(response, responseDefault = null) {
    if (!response || !response.data) {
        return responseDefault;
    }
    return response.data;
}

export function fetchPosts() {
    const request = axios.get(getUrl('/posts'))
        .then((response) => {
            return handleResponse(response, []);
        });

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(getUrl('/posts'), values)
        .then((response) => {
            return handleResponse(response, null);
        })
        .then((response) => {
            callback();
            return response;
        });

    return {
        type: CREATE_POST,
        payload: request
    };
}