import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
    .top{
        background-color: #C20C0C;
        height:30px;
    }
`


export const TopMenu = styled.div`
    display:flex;
    padding-left:180px;
    position:relative;
    top:-4px;

    .item{
        a {
            display:inline-block;
            height:20px;
            line-height:20px;
            padding:0 10px;
            margin:7px 17px;
            color: #fff;
            text-decoration:none;
        }

        &:hover, &.active{
            text-decoration:none;
            background-color: #9B0909;
            border-radius: 20px;
        }
    }

`