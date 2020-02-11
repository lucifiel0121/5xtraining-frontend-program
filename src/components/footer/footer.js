import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="media-pic">
            <img
              className="filter-grayscale"
              src={`${process.env.PUBLIC_URL}/assets/images/footer-media.png`}
              alt="lots-of-media"
            />
            <div className="media-pic_cakeresume filter-grayscale">
              <img
                className="media-pic_cakeresume"
                src={`${process.env.PUBLIC_URL}/assets/images/cakeresume.png`}
                alt="cakeresume"
              />
              <span>找工作</span>
            </div>
          </div>
          <div className="footer-bar">
            <div className="footer-bar__nav">
              <li>關於五倍紅寶石</li>
              <li>媒體報導</li>
              <li>團隊成員</li>
              <li>聯絡價格</li>
              <li>常見問題</li>
              <li>工作機會</li>
              <li>開源專案</li>
              <li>隱私權條款</li>
            </div>
            <div className="footer-bar__contact">
              <div className="contact-info">
                <div className="contact-info__detail">
                  <strong>02-2331-5247</strong>
                  <small>Mon - Fri / 09:30 - 22:00</small>
                </div>
                <div className="contact-info__icon">
                  <i className="media-icon fab fa-facebook-f"></i>
                  <i className="media-icon fab fa-twitter"></i>
                  <i className="media-icon fab fa-github"></i>
                </div>
              </div>
              <div className="contact-mail">
                <span>有任何問題？</span>
                <p>hi@5xruby.tw</p>
                <p>地址： 10046 台北市中正區衡陽路 7 號 5 樓</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2014 - 2020 五倍紅寶石股份有限公司 (5XRUBY CO., LTD)</p>
          <p>台北市短期補習班立案 第 7594 號</p>
        </div>
      </footer>
    );
  }
}
