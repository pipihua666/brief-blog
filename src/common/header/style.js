import styled from 'styled-components';
import logoURL from '../../statics/logo.png';

export const Header = styled.header`
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
    box-sizing:border-box;
`

export const Logo = styled.a.attrs({
    href:'/'
})`
    margin-left:30px;
    width:100px;
    display:block;
    position:absolute;
    top:0;
    left:0;
    height:56px;
    background-image:url(${logoURL});
    background-size:contain;
    cursor:pointer;
`

export const Nav = styled.nav`
    width:900px;
    height:100%;
    margin:0 auto;
    .iconAa{
        font-size:20px;
        font-weight:500;
    }
`

export const NavItem = styled.a`
    color:#333;
    cursor:pointer;
    font-size:17px;
    line-height:58px
    padding:0 15px;
    box-sizing:border-box;
    &.left{
        float:left;
        margin-right:10px;
    }
    &.right{
        float:right;
        color:#969696;
        margin-right:15px;
    }
    &.active{
        color:#e74c3c;
    }
    &.updown{
        background-color:rgb(245,245,245);
    }
    .iconcompass-{
        font-size:18px;
        font-weight:600;
        margin-right:4px;
    }
    .iconshoujixiazai{
        margin-right:4px;
    }
`

export const Search = styled.div`
    position:relative;
    float:left;
    .iconiconset0157{
        position:absolute;
        top:50%;
        right:5px;
        transform:translateY(-35%);
        cursor:pointer;
        color:#777;
        width:25px;
        height:25px;
        font-size:14px;
        border-radius:12.5px;
        text-align:center;
        line-height:28px;
        &.focused{
            background-color:#777;
            color:white;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    outline:none;
    color:#777;
    width:160px;
    height:38px;
    border-radius:40px;
    font-size:14px;
    padding:0 40px 0 20px;
    border:1px solid #eee;
    margin-top:9px;
    margin-left:20px;
    background-color:#eee;
    &::placeholder:{
        color:#333;
    }
    &.slide-enter{
        width:160px;
    }
    &.slide-enter-active{
        width:230px;
        transition:width 0.4s ease-out;
    }
    &.slide-enter-done{
        width:230px;
    }
    &.slide-exit{
        transition:width 0.4s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`

export const SearchInfo = styled.div`
    position:absolute;
    z-index:2;
    width:250px;
    background-color: rgb(255, 255, 255);
    padding:16px 20px 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 0px;
    box-sizing: border-box;
    color: rgb(51, 51, 51);
    margin:6px 0 0 20px;
`

export const SearchTitle = styled.span`
    line-height:20px;
    &.popularSearch{
        color: rgb(150, 150, 150);
        font-size: 14px;
        font-family: -apple-system, "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    }
    &.changeInfo{
        float:right;
        color: rgb(150, 150, 150);
        font-size:13px;
        cursor:pointer;
    }
    &.info{
        color:black;
    }
    .iconfont{
        font-size:17px;
        font-weight:bold;
    }
    .iconhuanyihuan{
        display:inline-block;
        transition:all 0.5s ease-out;
        transform-origin:center center;
    }
`

export const SearchList = styled.div`
    margin-top:10px;
`

export const SearchItem = styled.a`
    float:left;
    color:rgb(120, 120, 120);
    font-size:13px;
    border:1px solid rgb(221, 221, 221);
    border-radius:3px;
    cursor:pointer;
    margin:8px 5px;
    padding:1px;
    font-family: -apple-system, "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
`

export const Addition = styled.div`
    height:50px;
    position:absolute;
    top:0;
    right:20px;
`

export const Button = styled.button`
    cursor:pointer;
    line-height:24px;
    border-radius:20px;
    font-size:15px;
    outline:none;
    height:40px;
    &.signUp{
        width:80px;
        border:1px solid rgba(236,97,73,.7);
        color:#ea6f5a;
        background-color:transparent;
    }
    &.signUpEnter{
        background:rgba(236, 97, 73, 0.1);
        transition:background 0.2s ease;
    }
    &.writing{
        width:95px;
        border:1px solid transparent;
        margin:8px 24px 0 12px;
        background-color:#ea6f5a;
        color:white;
    }
`