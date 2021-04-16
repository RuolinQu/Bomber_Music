import { combineReducers } from 'redux-immutable'

import { reducer as recommandReducer } from '../pages/discover/c-pages/recommend/store'

const cReducer = combineReducers({
    recommend: recommandReducer
});

export default cReducer;