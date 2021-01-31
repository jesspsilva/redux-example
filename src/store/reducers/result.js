import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.counter})})
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.elId)
            return updateObject(state, {results: updatedArray})
    }
    return state;
};

export default reducer;