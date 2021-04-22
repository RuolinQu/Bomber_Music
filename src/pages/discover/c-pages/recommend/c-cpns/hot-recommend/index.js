import React, { memo, useEffect } from 'react'
// import { HotRecommendWrapper } from './style';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getHotRecommendsAction } from '../../store/actionCreator'

import BBThemeHeaderRCM from '@/components/theme-header-rcm/index'
import BBSongsCover from '@/components/song-cover/index'
import { RecommendWrapper } from './style'

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
        <RecommendWrapper>
            <BBThemeHeaderRCM title="aaa" keywords={['11', '22', '33']} />
            <div className="recommend-list">
                {/* <BBSongsCover info={hotRecommends[0]} /> */}
                {
                    hotRecommends.map((item, key) => {
                        return (
                            <BBSongsCover info={item} />
                        )
                    })
                }
            </div>
        </RecommendWrapper>
    )
})
