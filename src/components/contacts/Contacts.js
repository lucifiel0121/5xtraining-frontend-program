import React, { Component } from 'react';
import './contacts.scss';
import { Recaptcha } from 'react-recaptcha';

export default class Contacts extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    need: '',
    message: '',
  };
  // create a variable to store the component instance

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChangeName = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSelectChange = event => {
    this.setState({
      selectedValue: event.target.value,
    });
  };
  handleFormChange = event => {
    const target = event.target;
    const name = target.name;
    console.log({ [name]: target.value });
    this.setState({
      [name]: target.value,
    });
  };
  render() {
    const { name, email, phone, message } = this.state;
    return (
      <div className="contacts-container">
        <div className="contacts-banner">
          <div className="fb-widget">
            <div className="fb-widget__like">
              <i className="fas fa-thumbs-up"></i>
              <span>讚</span>
              <span>15</span>
            </div>
            <div className="fb-widget__share">分享</div>
          </div>
          <span>首頁 > 聯絡我們</span>
          <h1>有任何問題嗎？馬上聯絡我們！</h1>
        </div>
        <div className="contacts-info">
          <div className="contacts-detail">
            <div className="contacts-detail__company">
              <h3>五倍紅寶石股份有限公司</h3>
              <span>10046 台北市中正區衡陽路 7 號 5 樓</span>
            </div>
            <div className="contacts-detail__method">
              <div>
                <p>Tel：02-2331-5247</p>
                <p>Mobile：0928-617-687</p>
                <p>
                  E-mail： <a href="mailto:hi@5xruby.tw">hi@5xruby.tw</a>
                </p>
              </div>
              <div>
                <p>Fax：02-2331-8717</p>
                <p>統編：24536806</p>
              </div>
            </div>
            <div className="contacts-detail__gmap"></div>
          </div>

          <div className="contacts-form">
            <div className="contacts-form__text">
              任何問題都歡迎您透過以下表單詢問，我們會盡快回覆您！
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="姓名"
                  value={name}
                  required
                  onChange={this.handleFormChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="信箱"
                  value={email}
                  onChange={this.handleFormChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="電話"
                  value={phone}
                  required
                  onChange={this.handleFormChange}
                />
              </div>
              <div className="form-group">
                <select
                  name="need"
                  required
                  value={this.state.need}
                  onChange={this.handleFormChange}
                >
                  <option value>請選擇主題</option>
                  <option value="專案開發">專案開發</option>
                  <option value="技術諮詢">技術諮詢</option>
                  <option value="企業內訓">企業內訓</option>
                  <option value="課程詢問">課程詢問</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  name="message"
                  placeholder="留下你的訊息"
                  value={message}
                  required
                  onChange={this.handleFormChange}
                />
              </div>
              <Recaptcha ref={e => (recaptchaInstance = e)} sitekey="" />
              <button>送出</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
