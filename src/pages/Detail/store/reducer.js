import { fromJS } from "immutable";
import { CHANGE_DETAIL } from "./actionTypes";

const defaultState = fromJS({
  title: "最值得珍藏的5个资源网站，10T硬盘竟不够用，老司机都不一定知道",
  content: `
  <div>
    <p>
      现在资源是越来越难找了，98.76%的资源在百度都找不到了，但是其实你只要偷偷珍藏一些资源网站，那么这个完全就不是问题，下面几个是小编珍藏了多年的资源网站，这次分享给大家，希望大家收藏好，用好他们！
    </p>
    <h3>1、ACG 搜</h3>
    <p>
      追番神器在哪里？？ACG搜号称从未辜负广大年轻人的期望，N多的动漫、BT种子，应有尽有，满足的观影和追番需求，最最关键的是天天更新！永不停歇！像小编这样从未看第二遍的人来说，确实是很好的神器了。
    </p>
    <img
      src="//upload-images.jianshu.io/upload_images/18811977-a0e56fd0ee161be1?imageMogr2/auto-orient/strip|imageView2/2/w/628/format/webp"
      alt=""
    />
  </div>

  <div>
    <h3>2、鸵鸟搜索</h3>
    <p>
      鸵鸟搜索也是非常逆天的资源网站，看看下面的提示这么密密麻麻，就知道这里的资源有多少了，除了经典的小电影，个人还是喜欢来这里看综艺和电视剧，每次都会有新发现，从来没有令人失望过。
    </p>
    <img
      src="//upload-images.jianshu.io/upload_images/18811977-5e7f3527df2315cd?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp"
      alt=""
    />
  </div>

  <div>
    <h3>3、万千合集站</h3>
    <p>
      各位小伙伴们可不能光顾着娱乐呀，也要多抽出时间来学习，特别是一些比较专业的课程，包括数理化啊、人文史哲啊，都要特别注意多看啊，所以万千合集站就是你的不二选择，N多外链资源，足以满足你的大部分学习需求了。
    </p>
    <img
      src="//upload-images.jianshu.io/upload_images/18811977-6d2cf1cbc8260d3a?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp"
      alt=""
    />
  </div>

  <div>
    <h3>4、资源狗</h3>
    <p>
      资源狗也是有N多的资源可以给你用，种类也非常齐全，包括音乐、电影、BT等等的资源，都可以在这里快速找到，最最重要的是完全免费啦，不用担心各种VIP的限制，超好用的一个网站。
    </p>
    <img
      src="//upload-images.jianshu.io/upload_images/18811977-3169a196fb7b95ac?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp"
      alt=""
    />
  </div>

  <div>
    <h3>5、办公资源网</h3>
    <p>
      快速提升效率的方法是什么？？当然就是直接代入模板就ojbk啦，所以平需要模板的时候也可以来办公资源网查找，包括PPT、Excel和Word都有，可以说是非常良心的了~
    </p>
    <img
      src="//upload-images.jianshu.io/upload_images/18811977-da02fb6c90e4da24?imageMogr2/auto-orient/strip|imageView2/2/w/600/format/webp"
      alt=""
    />
  </div>`
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_DETAIL:
      const { title, content } = action.payload;
      return state.merge({
        title,
        content
      });
    default:
      return state;
  }
};
