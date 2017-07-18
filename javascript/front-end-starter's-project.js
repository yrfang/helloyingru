var project_data = [
  {
    projectName: "Front-end Starter's<br> 50 project",
    coverPhoto: "../image/coverphoto-front-end-starter-project.png",
    tags: [
      {
        tag: "HTML5"
      },{
        tag: "CSS3/Sass"
      },{
        tag: "Bootstrap"
      },{
        tag: "RWD"
      },{
        tag: "JavaScript"
      },{
        tag: "jQuery"
      },{
        tag: "Vue.js"
      },{
        tag: "UI Design"
      }
    ],
    projectWebLink: "",
    codeGitHubLink: "https://github.com/yrfang/frontend-starter",
    summary: [
      {
        list: "由模仿開始",
        list: "從W3C範例參考，開始學習手刻"
      }
    ]
  },
];

var detail_data = [
  {
    title: "Weather Information",
    photo: "../image/feature-1-cover.png",
    features: [
      {
        list: "HTML5",
        list: "ajax",
        list: "Sass"
      }
    ],
    viewWebLink: "",
    vieCodeLink: ""
  },

];

var vm = new Vue({
  el: "#app",
  data: {
    infoData: project_data,
    detailData: detail_data,
  }
});
