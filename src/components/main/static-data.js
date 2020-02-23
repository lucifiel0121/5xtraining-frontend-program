const json = {
   data: {
      bannerImgs: [
         '/assets/images/banner/banner_astro.jpg',
         '/assets/images/banner/banner_imcodingit.jpg',
         '/assets/images/banner/banner_mokumokukai.jpg',
         '/assets/images/banner/banner_5xruby-large.jpg',
      ],
      featureLists: [
         {
            featureImg: '/assets/images/functionLists/feature-list-img1.png',
            featureTitle: ['網頁設計', '前後端課程教學'],
            featureContent:
               '帶你掌握 程式技能轉職工程師， 程式課程 從入門到進階讓你快速上手，學員好評推薦 轉職課程！',
         },
         {
            featureImg: '/assets/images/functionLists/feature-list-img2.png',
            featureTitle: ['頂尖技術', '網頁製作、專案開發'],
            featureContent:
               '網站開發到行動裝置 App 工程服務、系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。',
         },
         {
            featureImg: '/assets/images/functionLists/feature-list-img3.png',
            featureTitle: ['資訊軟體開發', '技術顧問'],
            featureContent:
               '協助您將現有人力快速打造為 Ruby/Rails 團隊，無須經歷繁瑣的人才招募就有即戰力！',
         },
         {
            featureImg: '/assets/images/functionLists/feature-list-img4.png',
            featureTitle: ['前後端工程師', '社群經營'],
            featureContent:
               'Ruby 社群經營、舉辦各類活動，促進 Ruby 社群發展，歡迎前後端工程師分享交流。',
         },
      ],
      lectureInfo: [
         {
            lectureImg: '/assets/images/functional.jpg',
            isLectureOpen: true,
            isLectureNew: true,
            lectureTitle: '工作上用得到的函式式程式設計：從觀唸到實務 - 假日班',
            lectureTeacher: '蘇泰安 (Taian Su)',
            lectureTime: '2 月｜假日班',
         },
         {
            lectureImg: '/assets/images/rwd.jpg',
            isLectureOpen: true,
            isLectureNew: false,
            lectureTitle: '客製化進階 RWD 手機版網頁設計班 - 假日班',
            lectureTeacher: '李建杭 (Amos Lee)',
            lectureTime: '3 月｜假日班',
         },
         {
            lectureImg: '/assets/images/vue-js.jpg',
            isLectureOpen: true,
            isLectureNew: false,
            lectureTitle: 'Vue.js 與 Vuex 前端開發實戰課程 - 假日班',
            lectureTeacher: '許國政 (Kuro Hsu)',
            lectureTime: '3 月｜假日班',
         },
      ],
      recommands: [
         {
            avatar: '/assets/images/avatar/victor.jpg',
            name: 'Victor Lam',
            jobTitle: '連續創業家，自由工作者',
            drecommandDescription:
               'Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。',
         },
         {
            avatar: '/assets/images/avatar/jason.jpg',
            name: 'Jason Hs',
            jobTitle: 'founder of The Big Questions & TEDxTaipei',
            drecommandDescription:
               'Eddie and his team are of the most dedicated Ruby evangelists I have ever come across. With their passion and professionalism, Ruby learners will leapfrog in their progress.',
         },
         {
            avatar: '/assets/images/avatar/felix.jpg',
            name: 'Felix Lin',
            jobTitle: 'dappei.com 「搭配」網站創辦人',
            drecommandDescription:
               '還在尋找專業的 Ruby/Rails 師資嗎？別懷疑了，台灣最頂尖的 Rubyist 盡在「五倍紅寶石」！',
         },
         {
            avatar: '/assets/images/avatar/hana.jpg',
            name: 'Hana Chang',
            jobTitle: 'Co-Founder and CEO of BountyHunter',
            drecommandDescription:
               '慕凡和龍哥是業界數一數二的 Ruby 大師，他們不光是底子深厚，也很懂得引導、訓練學習路上遇到挫折的 Ruby/Rails 學子。很慶幸有他們的協助讓我進入紅寶石的美妙世界。',
         },
         {
            avatar: '/assets/images/avatar/johnsie.jpg',
            name: 'John Sie',
            jobTitle: 'Accuvally Inc.共同創辦人暨營運長',
            drecommandDescription:
               '選擇程式語言很重要，但選擇優秀的導師更重要！能跟擁有多年 Ruby/Rails 實戰經驗、活躍於社群的頂尖 Rubyist 學習，將一窺程式開發殿堂之藝術！我堅信：專業事讓專業的來，而專業的「五倍紅寶石」是寶藏，就等大家來挖掘。',
         },
         {
            avatar: '/assets/images/avatar/benlin.jpg',
            name: 'Ben Li',
            jobTitle: '連續創業家，自由工作者',
            drecommandDescription:
               '「五倍紅寶石」的導師們都是業界經驗豐富的實戰高手，提供的課程及諮詢絕對能讓你大幅省去自行摸索的時間。',
         },
      ],
      showcaseInfo: [
         {
            showcaseImg: '/assets/images/space_next_door.png',
            showcaseTitle: 'SpaceNextDoor',
            showcaseText:
               'Space Next Door is inspired by the sharing economy in which we hope to encourage people to put up their unused space so that users looking for personal or business storage space have better options, closer to where they need it. We are striving to build a trusted community marketplace for you to list, discover and book the nearest and best space at affordable prices.',
         },
         {
            showcaseImg: '/assets/images/shopmatic_go.png',
            showcaseTitle: 'Shopmatic Go app',
            showcaseText:
               'Shopmatic Go is an exciting online platform where you can create a unique and comprehensive online store for your business, in a matter of minutes.',
         },
         {
            showcaseImg: '/assets/images/shopmatic.jpg',
            showcaseTitle: '跨境電子商務 Shopmatic',
            showcaseText:
               'Shopmatic manages the entire ecosystem for anyone wanting to sell online. We go the extra mile to ensure that we help you in every step of the process to grow your business online - from developing your own unique webstore, to listing you on marketplaces and social channels, to providing you insights on how to sell online.',
         },
      ],
      socialIcon: [
         '/assets/images/icon-fb.png',
         '/assets/images/icon-twitter.png',
      ],
   },
}

export default json
