import _ from 'lodash';
import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload, 'id');
        case CREATE_POST:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_POST:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}