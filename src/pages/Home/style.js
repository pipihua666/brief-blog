/*
 * @Descripttion:
 * @Author: zhaokh
 * @Date: 2019-10-04 16:34:55
 */
import styled from "styled-components";

export const HomeDiv = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const HomeLeft = styled.div`
  width: 600px;
`;

export const HomeRight = styled.div`
  width: 300px;
  margin-left: 30px;
`;

//组件
export const LeftCarouselStyled = styled.div`
  width: 100%;
  cursor: pointer;
  margin-bottom: 30px;
  .ant-carousel .slick-slide {
    overflow: hidden;
    border-radius: 10px;
    line-height: 100%;
    color: #000;
  }
  & img {
    width: 100%;
  }
`;

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #999;
  margin-bottom: 10px;
  .articalPic {
    float: right;
    width: 150px;
    height: 100px;
  }
  a {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700px;
    line-height: 1.5;
    background: none;
    color: black;
    &:hover {
      border-bottom: 1px solid black;
      text-decoration: none;
      outline: none;
      color: black;
    }
  }
  artical {
    padding-top: 2px;
    display: block;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const RightSectionStyled = styled.div`
  width: 100%;
  height: 230px;
  margin-bottom: 10px;
  img {
    width: 100%;
    margin-bottom: 5px;
  }
`;

export const RightDownloadStyled = styled.div`
  width: 100%;
  border: 1px solid #f0f0f0;
  height: 100px;
  margin: 6px 0 20px 0;
  padding: 10px;
  img {
    width: 28%;
    vertical-align: middle;
  }
  .content {
    width:65%;
    float:right;
    text-align:left;
    margin-top:10px;
    div:first-child{
      font-size:15px;
      color:#333;
      &::after{
        content:'>';
        margin-left:8px;
        font-size:16px;
      }
    }
    div:last-child{
      color:#999;
    }
  }
`;

export const RightWriterStyled = styled.div`
  width: 100%;
  background: red;
  height: 200px;
`;
