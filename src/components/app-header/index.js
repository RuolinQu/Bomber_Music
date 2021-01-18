import React, { memo } from 'react'


import { NavLink } from 'react-router-dom'

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style'

export default memo(function BBAppHeader() {
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">

                <HeaderLeft>
                    <a href="#/" className="logo sprite_01"></a>
                </HeaderLeft>
                <HeaderRight>Right</HeaderRight>
                {/* <NavLink to="/">Find Music</NavLink>
                <NavLink to="/mine">My Music</NavLink>
                <NavLink to="/friend">Friends Music</NavLink> */}
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
