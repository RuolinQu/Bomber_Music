import React, { memo, useEffect } from 'react'
// import { HotRecommendWrapper } from './style';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getHotRecommendsAction } from '../../store/actionCreator'
import BBThemeHeaderRCM from '@/components/theme-header-rcm/index'


export default memo(function BBHotRecommend() {

    const { hotRecommends } = useSelector(state =>
    ({
        hotRecommends: state.getIn(["recommend", "hotRecommends"])
    }), shallowEqual)
    console.log(hotRecommends)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotRecommendsAction(8))
    }, [dispatch])

    return (
        <div>
            <BBThemeHeaderRCM title="aaa" keywords={['11', '22', '33']} />
            <div>
                {
                    hotRecommends.map((item, key) => {
                        return (
                            <div>{item.name}</div>
                        )
                    })
                }
            </div>
        </div>
    )
})
