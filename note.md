# note 


## Week1 :
- 遇到的困難：
  - 嘗試只抽離 carousel 邏輯 ： 花費不少時間也不太理解， 先完成主要項目時間夠再考慮元件共用
  - Header click status , 看不太理解官網原本做法，感覺自己 flex 沒摸熟
  - [ ] 動畫還沒實作
  - rem 單位的掌握不如 px 熟悉 
  - 寫 CSS RWD 不太一致 , 排版的 padding 沒有統一（不如 mt-4 , mt-3 這種 functional style 統一） 
  - 在參考 5x 網站時發現 「(bootstrap 只可用 grid system、排版用的 class)」 的好處 ，類似於 functional CSS 但也不用那麼極端。 但不知道如果和 CSS in JS 的整合會如何，一個只抽離排版一個做樣式？
  - 沒辦法做到 100% 一樣 (排版, 字體顯示 rem/% )
  - [ ] header transition 還需要另外寫動畫    
  - 本來預期環境不會有問題，把指令按照 步驟跑之後，發現之前 macOS 版本更新後很多設定有問題，
    花了不少時間。


瞭解 
- package.json 基本內文格式與基本指令
- dependencies：運行時需要的相依。
- devDependencies：開發及 build 時需要的相依。
- peerDependencies : 套件有相依關聯（間接相依？），提示使用者自行安裝相依。

CRA 的多數 dependencies 都包在 react-script 內，要參考 node_modules > react-script > package.json 才能看到比較細節的 dependencies。

