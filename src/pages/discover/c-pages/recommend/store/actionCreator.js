import * as actionTypes from './constants';

import {
    getTopBanners,
    getHotRecommends,

} from '@/service/recommend';

const changeTopBannerAction = (res) => {
    return {
        type: actionTypes.CHANGE_TOP_BANNERS,
        topBanners: res.banners
    }
}

export const getTopBannersAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res))
        })
    }
}

export const getHotRecommendsAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(value => {
            console.log(value)
        })
    }
}