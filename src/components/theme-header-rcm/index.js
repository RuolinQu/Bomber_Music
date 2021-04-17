import React, { memo } from 'react'
import { HeaderWrapper } from './style.js'

export default memo(function BBThemeHeaderRCM(props) {

    const { title, keywords } = props

    return (
        <HeaderWrapper>
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
            <div className="right"></div>
        </HeaderWrapper>
    )
})
