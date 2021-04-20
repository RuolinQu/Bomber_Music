import React, { memo } from 'react'
import PropTypes from 'prop-types';

import { HeaderWrapper } from './style.js'



const BBThemeHeaderRCM = function (props) {

    const { title, keywords } = props

    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title} </h3>
                <div className="keyword">
                    {keywords.map((item, index) => {
                        return (
                            <div className="item" key={item}>
                                <a href="todo">{item} </a>
                                <span className="divider">|</span>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className="right">
                <a href='todo'>More</a>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
}

BBThemeHeaderRCM.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}

BBThemeHeaderRCM.defaultProps = {
    keywords: []
}

export default memo(BBThemeHeaderRCM);