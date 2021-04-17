import React, { memo } from 'react'
// import { HotRecommendWrapper } from './style';
import BBThemeHeaderRCM from '@/components/theme-header-rcm/index'

export default memo(function BBHotRecommend() {
    return (
        <div>
            <BBThemeHeaderRCM title="aaa" keywords={['11', '22', '33']} />
        </div>
    )
})
