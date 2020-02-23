# 5xtraining-frontend-program

[![Build Status](https://travis-ci.com/lucifiel0121/5xtraining-frontend-program.svg?branch=master)](https://travis-ci.com/lucifiel0121/5xtraining-frontend-program)

This repo is for Pre-test on 5x.
Check commit message for more info.

=====

# 5xTraining: 前端

詳細內容：docs/frontend.md

## 必修課題

- [x] 步驟 1: 建立 JavaScript 的開發環境

  - 了解 `package.json` 基本內文格式與基本指令
  - 了解 `dependencies`、`devDependencies`、`peerDependencies` 的差異與指令

    - package.json 基本內文格式與基本指令
    - dependencies：運行時需要的相依。
    - devDependencies：開發及 build 時需要的相依。
    - peerDependencies : 套件有相依關聯（間接相依？），提示使用者自行安裝相依。

- [x] 步驟 2: 在 GitHub 建立 repo

- [x] 步驟 3: 建立 React 專案

- [x] 步驟 4: 復刻 [五倍官網首頁](https://5xruby.tw/)

- [x] 步驟 5: 使用 React 改寫 [五倍官網首頁](https://5xruby.tw/)

  - 使用 `bootstrap` 作為 css 框架，請使用 yarn 安裝引入
  - 除了 React App 進入點之外不要使用 jQuery 或是 Vanilla DOM API
  - 將靜態資料抽離存成 json 檔, 並以 react props 的方式帶入
  - 目標著重於 React 元件模組化與 props 傳遞
  - 只需考量 sm、md、lg 3 種 RWD breakpoint
  - Carousel 元件的實作需要達成以下要求：
    - 不使用 BS 內建的，手刻 Carousel React 元件
    - 點下圓點按鈕可以跳到指定的 Slide
    - 自動播放（5 秒換頁一次）
    - 滑鼠在 Carousel 上時暫停自動播放

- [x] 步驟 6: 使用 React 製作 [/contacts](https://5xruby.tw/contacts) 頁面

  - 必須符合 Controlled Components 特性
  - 各個欄位必須加上 html5 validate
  - 使用 [React Modal](https://github.com/reactjs/react-modal) 將送出的表單資料顯示在 Popup Modal 上面(樣式只要求有 popup modal 效果)

- [x] 步驟 7: 改用 [webpack](https://webpack.js.org/) 替代 `create-react-app`

  - 設定 loader, 讓專案能讀取 css、js、font、image 等...檔案
  - 設定 babel, 能編譯 react jsx + es6 語法
  - 分類好資料夾架構
  - 將先前的五倍首頁 react 版本導入至 webpack 並可運作

- [ ] 步驟 8: 加入 eslint 修正語法錯誤與 coding style

  - 要求參照 [airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - 能夠在終端機使用 `$ yarn lint` 來跑專案內的 js 檔案做檢查
  - 修正所有 eslint 錯誤

- [x] 步驟 9: 整合 Travis CI

  - 加入 eslint 當做測試項目

- [x] 步驟 10: 加入 [React-Router](https://github.com/ReactTraining/react-router)

  - 將首頁 nav 的導覽項目做成各個 router page, 並可以有 single page render(SPA) 的效果
  - 新加入的 router page 不需實作該頁內容, 只需標註是哪一頁即可
  - 需有當前網頁路徑的 nav list hightlight 的效果

- [x] 步驟 11: fetch api 資料串接

  - 使用 React 製作 [/posts](https://5xruby.tw/posts) 頁面, 資料來源請使用 [jsonplaceholder](https://jsonplaceholder.typicode.com/)
  - 使用 React 製作 pagination component 需達成以下要求：
    - 必須是一個獨立且可引入使用的 component
    - 一頁 post 資料比數最多顯示 4 筆
    - 至少需要有 `首頁`、`末頁`、`下一頁` 按鈕功能

- [x] 步驟 12: 錯誤處理

  - 使用 [HOC](https://reactjs.org/docs/higher-order-components.html) 與 [Error Boundaries](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries) 替 `/post` 頁面製作 fetch api 拿不到資料的錯誤處理
  - 錯誤處理的效果顯示自行定義 : 5 秒後轉跳首頁

- [x] 步驟 13: 使用 [React Context Api](https://reactjs.org/docs/context.html#api) refactor component

  - 了解 context api 使用時機, 並在現有程式碼尋找哪個 component 適合使用 context api 並以此做 refactor
  - 此步驟可以隨時安插在其他步驟實作

### （番外篇）選修課題

- [ ] [react render props](https://reactjs.org/docs/render-props.html): 可替代 HOC 的另一種程式碼共用手法。
- [ ] react: 用 create-react-app 建立一個新的專案，並研究用 [npm run eject](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) 產生出來的 webpack 設定檔與步驟七手刻的版本有哪些差異？
  - eject 出來的很多設定都先寫在 package.json
- [ ] react application test： https://jestjs.io/docs/en/tutorial-react
- [ ] redux (container、action、reducer)
- [ ] react: credit card form (信用卡表單)
- [ ] react: infinite scroll
- [ ] react: popup video
