/*
 * @Descripttion:
 * @Author: zhaokh
 * @Date: 2019-12-12 22:55:05
 */
import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  padding: 30px 30px 100px 30px;
  overflow:hidden;
`;

export const DetailHeader = styled.div`
  margin: 10px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: bold;
`;

export const DetailContent = styled.article`
  color:#2f2f2f;
  img{
    width:100%;
  }
  p{
    margin:25px 0;
    font-size:16px;
    line-height:30px;
  }
  div {
    margin-bottom:20px;
  }
`;
