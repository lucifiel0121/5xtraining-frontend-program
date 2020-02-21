import React, { Component } from 'react';
import PostsCard from './PostsCard';
import Pagination from './Pagination';
import './posts.scss';
import ErrorBoundary from './ErrorBoundary';
class Posts extends Component {
  state = {
    loading: true,
    dataArray: [],
    currentPage: 1,
    postsPerPage: 4,
  };

  paginate = pageNumber => {
    const { dataArray, postsPerPage, currentPage } = this.state;

    if (
      pageNumber === 0 ||
      pageNumber === Math.ceil(dataArray.length / postsPerPage) + 1 ||
      currentPage === pageNumber
    ) {
      return;
    }
    this.setState({ currentPage: pageNumber });
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    fetch(url)
      .then(response => {
        /* if (!response.ok) {
          throw new Error(response.status);
        } */
        return response.json();
      })
      .then(data => {
        this.setState({ dataArray: data, loading: false });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { dataArray, loading, currentPage, postsPerPage } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;

    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = dataArray.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div className="posts-container">
        <div
          className="posts-banner"
          style={{ background: `url(/assets/images/posts-banner.jpg) `, backgroundSize: 'cover' }}
        >
          <div className="fb-widget">
            <div className="fb-widget__like">
              <i className="fas fa-thumbs-up"></i>
              <span>讚</span>
              <span>15</span>
            </div>
            <div className="fb-widget__share">分享</div>
          </div>
          <span className="posts-banner__title">首頁 > 最新訊息</span>
          <h1>最新訊息</h1>
          <p>關於五倍還有更多你可以發掘的，都在這邊說給你知！</p>
        </div>
        <div className="posts-filter">
          <select name="type" required>
            <option value="">所有類別</option>
            <option value="專案開發">專案開發</option>
            <option value="技術諮詢">技術諮詢</option>
            <option value="企業內訓">企業內訓</option>
            <option value="課程詢問">課程詢問</option>
            <option value="其他">其他</option>
          </select>
        </div>
        <PostsCard data={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={dataArray.length}
          paginate={this.paginate}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default function PostsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Posts {...props} />
    </ErrorBoundary>
  );
}
