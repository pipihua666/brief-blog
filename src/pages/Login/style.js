import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`;

export const LoginBox = styled.div`
  width: 30%;
  height: 500px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  .title {
    font-size: 18px;
    margin:0 auto;
    width:40%;
    margin-bottom:50px;
    span {
      padding: 10px;
      color: #969696;
      font-weight: 700;
      color: #ea6f5a;
      border-bottom: 2px solid #ea6f5a;
    }
  }
  .problem {
    cursor: pointer;
    color: #999;
    float: right;
    &:hover {
      color: black;
    }
  }
`;
