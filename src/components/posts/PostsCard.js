import React, { Component } from 'react';

export default class PostsCard extends Component {
  state = {};
  render() {
    const { data, loading } = this.props;

    if (loading) {
      return <h2>Loading ...</h2>;
    }
    return (
      <>
        {data.map(item => (
          <div className="posts-card" key={item.id}>
            <img src="http://fakeimg.pl/1000x625/282828/EAE0D0" alt="posts-card" />
            <div className="posts-card__description">
              <span className="posts-card__time">第 {item.id} 筆資料</span>
              <div className="posts-card__title">
                <a href="./" title={item.title}>
                  {item.title}
                </a>
              </div>
              <div className="posts-card__content">
                <p>{item.body}</p>
              </div>
              <div className="posts-card__footer">
                <span className="posts-card__author">By Ashe</span>
                <button>看更多</button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
