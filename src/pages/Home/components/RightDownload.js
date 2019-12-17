/*
 * @Descripttion: 
 * @Author: zhaokh
 * @Date: 2019-10-04 16:34:55
 */
import React, { Component } from "react";
import { RightDownloadStyled } from "../style";

class RightDownload extends Component {
  render() {
    return (
      <RightDownloadStyled>
        <img
          src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
          alt=""
        />
				<div className="content">
					<div className="download">下载简书手机APP</div>
					<div>随时随地发现和创作内容</div>
				</div>
      </RightDownloadStyled>
    );
  }
}

export default RightDownload;
