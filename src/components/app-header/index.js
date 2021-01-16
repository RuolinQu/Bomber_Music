import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

export default memo(function BBAppHeader() {
    return (
        <div>
            <NavLink to="/">Find Music</NavLink>
            <NavLink to="/mine">My Music</NavLink>
            <NavLink to="/friend">Friends Music</NavLink>
        </div>
    )
})
