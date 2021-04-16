import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getTopBannersAction } from '../../store/actionCreator';


import {
    BannerWrapper,
    BannerRight,
    BannerLeft,
    BannerControl
} from './style';
import { Carousel } from 'antd';
import Item from 'antd/lib/list/Item';

export default memo(function BBTopBanner() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const { topBanners } = useSelector(state => {

        return {
            topBanners: state.getIn(["recommend", "topBanners"])
        }
    }, shallowEqual)

    const dispatch = useDispatch();
    const bannerRef = useRef();

    useEffect(() => {
        dispatch(getTopBannersAction());
    }, [dispatch])

    const bannerChange = useCallback((from, to) => {
        setCurrentIndex(to)
    }, []);

    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

    return (
        <BannerWrapper bgImg={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {

                            topBanners.map((item, index) =>

                                <div className="banner-item" key={item.imageUrl}>
                                    <img className='img' src={item.imageUrl}></img>
                                </div>

                            )

                            // topBanners.map((item, index) => {
                            //     return (
                            //         <div className="banner-item" key={item.imageUrl}>
                            //             <img src={item.imageUrl}></img>
                            //         </div>
                            //     )
                            // })
                        }

                    </Carousel>
                </BannerLeft>
                <BannerRight>
                </BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}> </button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}> </button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
