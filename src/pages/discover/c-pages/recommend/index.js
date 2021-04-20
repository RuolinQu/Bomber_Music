import React, { memo } from 'react'
import BBTopBanner from './c-cpns/top-banner/index'
import BBHotRecommend from './c-cpns/hot-recommend/index'
import BBRecommendAlbum from './c-cpns/new-album/index'
import BBRecommendRanking from './c-cpns/ranking/index'

import { RecommendLeft, RecommendRight, RecommendWrapper, Content } from './style'



function BBRecommend(props) {


    return (
        <div>
            <RecommendWrapper>
                <BBTopBanner />
                <Content className='wrap-v2'>
                    <RecommendLeft>
                        <BBHotRecommend></BBHotRecommend>
                        <BBRecommendAlbum></BBRecommendAlbum>
                        <BBRecommendRanking></BBRecommendRanking>
                    </RecommendLeft>
                    <RecommendRight>

                    </RecommendRight>
                </Content>
            </RecommendWrapper>
        </div>
    )
}


export default memo(BBRecommend);





// import React, { memo, useEffect } from 'react'
// import { connect } from 'react-redux';
// import { getTopBannersAction } from './store/actionCreator';

// function BBRecommend(props) {

//     const { getBanners, topBanners } = props

//     useEffect(() => {
//         getBanners();
//     }, [getBanners])

//     return (
//         <div>
//             <h2>Recommend{ }</h2>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         topBanners: state.recommend.topBanners
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getBanners: () => {
//             dispatch(getTopBannersAction())
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(memo(BBRecommend));
