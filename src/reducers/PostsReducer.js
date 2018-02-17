import _ from 'lodash';
import { FETCH_POSTS, CREATE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload, 'id');
        case CREATE_POST:
            const newState = _.mapKeys(state, 'id');
            newState[action.payload.id];
            return newState;
        default:
            return state;
    }
}