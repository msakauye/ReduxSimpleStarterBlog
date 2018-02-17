import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=markssupercoolkey';

function getUrl(route) {
    return `${ROOT_URL}${route}${API_KEY}`;
}

export function fetchPosts() {
    const request = axios.get(getUrl('/posts'))
        .then((response) => {
            if (!response || !response.data) {
                return [];
            }
            return response.data;
        });

    return {
        type: FETCH_POSTS,
        payload: request
    };
}