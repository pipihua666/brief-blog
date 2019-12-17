/*
 * @Descripttion: home主页reducer
 * @Author: zhaokh
 * @Date: 2019-10-04 16:34:55
 */
import {fromJS} from 'immutable';

const defaultState = fromJS({
    articalList:[{
        id:1,
        title:'10个绝对良心的APP，每一个都能给你带来惊喜！',
        imgSrc:'https://upload-images.jianshu.io/upload_images/4314157-100a6c77e359731f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        desc:'今天要给大家推荐的是10个绝对能让你惊喜的良心App，他们唯一的共同点是：简单好用且有趣！一点英语 Android / IOS 边看视频边学英...'
    },{
        id:2,
        title:'10个绝对良心的APP，每一个都能给你带来惊喜！',
        imgSrc:'https://upload-images.jianshu.io/upload_images/4314157-100a6c77e359731f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        desc:'今天要给大家推荐的是10个绝对能让你惊喜的良心App，他们唯一的共同点是：简单好用且有趣！一点英语 Android / IOS 边看视频边学英...'
    }],
    recomandImg:[{
        id:1,
        imgSrc:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },{
        id:2,
        imgSrc:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },{
        id:3,
        imgSrc:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },{
        id:4,
        imgSrc:'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }]
})

export default (state = defaultState,action)=>{
    switch(action.type){
        default :return state;
    }
}