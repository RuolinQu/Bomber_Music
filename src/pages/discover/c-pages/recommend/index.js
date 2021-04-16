import React, { memo } from 'react'
import BBTopBanner from './c-cpns/top-banner/index'


function BBRecommend(props) {


    return (
        <div>
            <BBTopBanner />
            <h2>Recommend</h2>
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
