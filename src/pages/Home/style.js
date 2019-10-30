import styled from 'styled-components';

export const HomeDiv = styled.div`
    width:960px;
    height:500px;
    margin:0 auto;
    padding:30px;
    display:flex;
    flex:1;
    justify-content:center;
`

export const HomeLeft = styled.div`
    width:600px;
    overflow:hidden;
`

export const HomeRight = styled.div`
    width:300px;
    margin-left:30px;
`

//组件
export const LeftCarouselStyled = styled.div`
    width:100%;
    cursor:pointer;
    .ant-carousel .slick-slide{
        overflow:hidden;
        border-radius:10px;
        line-height:100%;
    }
    & img {
        width:100%;
    }
`

export const LeftSectionStyled = styled.div`
    background:red;
    width:100%;
    height:100px;
`

export const RightSectionStyled = styled.div`
    width:100%;
    height:100px;
    background:yellow;
    margin-bottom:10px;
`

export const RightDownloadStyled = styled.div`
    width:100%;
    border:1px solid black;
    height:100px;
    margin:6px 0 20px 0;
    background:blue;
`

export const RightWriterStyled = styled.div`
    width:100%;
    background:red;
    height:200px;
`