import React, { memo } from 'react'
import { SongsCoverWrapper } from './style'

import { getCount } from '@/utils/format-utils.js'

export default memo(function BBSongsCover(props) {

    const { info } = props

    return (
        <div>
            <SongsCoverWrapper>
                <div className="cover-top">
                    <img src={info.picUrl} />
                    <div className="cover sprite_cover">
                        <div className="info sprite_cover">
                            <span>
                                <i className="sprite_icon erji"></i>
                                {getCount(info.playCount)}
                            </span>
                            <i className="sprite_icon play"></i>
                        </div>
                    </div>
                </div>
                <div className="cover-bottom">
                    {info.name}
                </div>
                <div className="cover-source">
                    by {info.copywriter || info.creator.nickname}
                </div>
            </SongsCoverWrapper>
        </div>
    )
})
