import { Map } from 'immutable'
// import hotRecommend from '../c-cpns/hot-recommend/index.js';
import * as actionTypes from './constants.js';


const defaultState = Map({
    topBanners: [],
    hotRecommends: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set("topBanners", action.topBanners);
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", action.hotRecommends);
        default:
            return state;
    }
}
export default reducer;