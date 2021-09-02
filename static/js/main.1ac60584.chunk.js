(this["webpackJsonpsarahngg.github.io"]=this["webpackJsonpsarahngg.github.io"]||[]).push([[0],{82:function(e,t,i){},92:function(e,t,i){},93:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i.n(a),n=i(27),r=i.n(n),o=i(29),c=i(133),l=(i(82),i(13)),u=i(63),d=i(136),p=i(132),m=i(131),h=i(142),b=i(135),g=i(141),j=i(134),f=i(2);var v=function(e){if(!e.value)return Object(f.jsx)("span",{});var t="";switch(e.type){case"title":t=Object(f.jsx)(j.a,{variant:"h4",component:"h1",gutterBottom:!0,children:e.value});break;case"description":t=Object(f.jsx)(j.a,{variant:"h5",component:"h1",children:e.value});break;case"card-title":t=Object(f.jsx)(j.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.value});break;case"card-description":t=Object(f.jsx)(j.a,{variant:"body1",color:"text.secondary",children:e.value});break;case"modal-title":t=Object(f.jsx)(j.a,{gutterBottom:!0,variant:"h6",component:"h2",children:e.value});break;case"modal-description":t=Object(f.jsx)(j.a,{variant:"body1",color:"text.secondary",sx:{mt:2},children:e.value});break;case"normal":default:t=Object(f.jsx)(j.a,{gutterBottom:!0,children:e.value})}return t};var x=function(e){return Object(f.jsx)(m.a,{children:Object(f.jsxs)(g.a,{children:[Object(f.jsx)(b.a,{component:"img",height:"180",image:e.image,alt:"random image"}),Object(f.jsxs)(h.a,{sx:{minHeight:"8rem"},children:[Object(f.jsx)(v,{type:"card-title",value:e.title}),Object(f.jsx)(v,{type:"card-description",value:e.description})]})]})})},y=["primary.light","secondary.light"];var O=function(e){return Object(f.jsxs)(p.a,{container:!0,bgcolor:(t=e.id,y[t%y.length]),py:3,children:[Object(f.jsx)(p.a,{item:!0,xs:1,md:2}),Object(f.jsx)(p.a,{item:!0,xs:10,md:8,children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)(v,{type:"title",value:e.title}),Object(f.jsx)(v,{type:"description",value:e.description}),e.contentList&&Object(f.jsx)(p.a,{container:!0,py:2,spacing:2,children:e.contentList.map((function(e){return Object(f.jsx)(p.a,{item:!0,xs:12,md:4,children:Object(f.jsx)(o.b,{to:"/p/".concat(e.id),style:{textDecoration:"none"},children:Object(f.jsx)(x,Object(u.a)({},e))})},e.id)}))})]})}),Object(f.jsx)(p.a,{item:!0,xs:1,md:2})]});var t};var k=function(e){return function(e){return e.map((function(e,t){return a.cloneElement(e,{id:t,key:t})}))}([Object(f.jsx)(O,{title:"Sarah Ng",description:"\ud83d\udc4b Hello",layout:"hero"}),Object(f.jsx)(O,{title:"Projects",description:"Things I did",contentList:e.projectList})])};var w=i(14),S=i(130),q=i(138),I=i(139),C=i(128),D=i(137),A=i(127),L=i(140),T={width:600,bgcolor:"background.paper",border:0,p:4,py:5,overflow:"auto"},E={width:"100%",bgcolor:"background.paper",border:0,p:4,py:5,overflow:"auto"},F={display:"flex",alignItems:"top",justifyContent:"center"};function P(e){var t=a.useState(!0),i=Object(w.a)(t,2),s=i[0],n=i[1],r=function(){n(!1)},o=e.item,c=function(){var e=o.links&&Object.keys(o.links).filter((function(e){return o.links[e]})).map((function(e){var t=o.links[e];return Object(f.jsx)(D.a,{href:t,target:"_blank",color:"inherit",children:Object(f.jsx)(q.a,{disableElevation:!0,variant:"contained",children:e})},t)}));return Object(f.jsxs)(A.a,{direction:"row-reverse",justifyContent:"flex-start",alignItems:"center",spacing:1,sx:{mt:2},children:[e&&e,Object(f.jsx)(q.a,{variant:"outlined",onClick:r,size:"medium",children:"Back"})]})},u=Object(f.jsx)(C.a,{sx:F,open:s,onClose:r,"aria-labelledby":o.title,"aria-describedby":o.description,children:Object(f.jsx)(I.a,{sx:Object(L.a)("(min-width:600px)")?T:E,children:Object(f.jsxs)(d.a,{children:[o.role?Object(f.jsx)(v,{type:"modal-title",value:"".concat(o.role," @ ").concat(o.title)}):Object(f.jsx)(v,{type:"modal-title",value:o.title}),o.technologies&&Object(f.jsx)(A.a,{direction:"row",spacing:1,children:o.technologies.map((function(e){return Object(f.jsx)(S.a,{label:e,size:"small",component:"a",href:"",clickable:!0})}))}),Object(f.jsx)(b.a,{component:"img",height:"200",image:o.image,alt:"random image",sx:{my:2}}),o.date?Object(f.jsx)(v,{value:"".concat(o.date," | ").concat(o.description)}):Object(f.jsx)(v,{value:o.description}),Object(f.jsx)(v,{type:"modal-description",value:o.blurb}),Object(f.jsx)(c,{})]})})});return s?u:Object(f.jsx)(l.a,{to:"/"})}P.defaultProps={image:"https://source.unsplash.com/random/640x360/?minimalist",blurb:"An interesting project"};var B=P;var H=function(){return Object(f.jsx)(p.a,{item:!0,children:Object(f.jsx)(d.a,{sx:{py:4},children:Object(f.jsxs)(j.a,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",Object(f.jsx)(D.a,{color:"inherit",href:"https://sarahngg.github.io/",children:"sarahngg.github.io"})," ",(new Date).getFullYear(),"."]})})})},G=[{id:"portfolio",title:"My Portfolio",description:"This website!",role:"Frontend Developer",technologies:["ReactJS","Material-UI v5","GitHub Pages"],image:"https://source.unsplash.com/random/640x360/?minimalist",date:2021,blurb:"This is a website showcasing my projects and experience. The content of this project is templatized such that anyone can fork the repo and quickly build a portfolio site. To add additional project and experience, the user would only need to edit a JSON file.",links:{"trust the recursion":"https://sarahngg.github.io/",repo:"https://github.com/sarahngg/sarahngg.github.io"}},{id:"chatroom",title:"Chatroom App",description:"A full-stack chatroom application",role:"Fullstack Developer",technologies:["JavaScript","Node.js","MongoDB","CSS"],image:"https://res.cloudinary.com/sng/image/upload/v1630534979/portfolio/chatapp.jpg",date:2020,blurb:"Created a Single-page Application with vanilla JavaScript. Styled the GUI with CSS. Implemented WebSocket client and server for communication. Set up a MongoDB database for the application, created REST endpoints for reading objects from the database. Implemented a simple authentication mechanism, protected server resources from unauthorized users by using session cookies, sanitize user input to defend against Cross-Site Scripting attacks.",links:{demo:"https://youtu.be/Ttwih3m7DK8"}},{id:"community-centre",title:"Community Centre Database",description:"Manage classes, memberships, and equipment",role:"Database Developer",technologies:["SQL","CSS"],image:"https://res.cloudinary.com/sng/image/upload/v1630430587/portfolio/cc.png",date:2020,blurb:"(Note: The project is hosted on UBC student server which may only allow certain operations.) Designed, implemented, and populated a relational database application using relational database knowlege, extended website templates for SQL*Plus, PHP, and HTML. Styled website with CSS.",links:{"demo link":"https://www.students.cs.ubc.ca/~sarahn26/cc.php"}},{id:"gh-issue",title:"GitHub Issue Viewer",description:"A frontend app to view issues of a public repo",role:"Frontend Developer",technologies:["ReactJS","Redux","GitHub API","GitHub Pages"],image:"https://res.cloudinary.com/sng/image/upload/v1630535135/portfolio/ghissue.jpg",date:2019,blurb:"The web application contains a search page with a search bar where users can paste a piblic GitHub repo URL. Using GitHub Issues API, the results page displays all (open, closed, pull requests) issues from the search query, and they are filterable by issue types. Issue types are indicated using the icons. Fetching errors are covered.",links:{repo:"https://github.com/sarahngg/gh-issues-viewer",demo:"https://sarahngg.github.io/gh-issues-viewer/"}},{id:"learnoncology",title:"LearnOncology.ca",description:"Educational resource about oncology management",role:"Webmaster",technologies:["Webflow Designer & Editor","CSS","SEO"],image:"https://res.cloudinary.com/sng/image/upload/b_rgb:ffffff,bo_100px_solid_rgb:ffffff/v1630358741/portfolio/lo.png",blurb:"I decreased the load time by 75% through migrating content from the old Wordpress site to Webflow. I redesigned the learning resources and its templates using CSS concepts in Webflow. As non-technical content editors would be adding contents to the site, I created quick guides and detailed tutorial documentations. In addition, I managed SEO and integrated the site with Google Analytics.",links:{link:"https://learnoncology.ca"}},{id:"lorem-ipsum",title:"Lorem Ipsum",description:"de Finibus Bonorum et Malorum",image:"https://source.unsplash.com/random/640x360/?placeholder",blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra nibh cras. Sit amet est placerat in. Aliquam sem fringilla ut morbi tincidunt. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Ultricies mi eget mauris pharetra et ultrices. Elit pellentesque habitant morbi tristique senectus et netus et. Ut aliquam purus sit amet luctus venenatis. Dignissim sodales ut eu sem integer. Amet porttitor eget dolor morbi non. Ut porttitor leo a diam sollicitudin tempor. At urna condimentum mattis pellentesque id nibh tortor. Facilisis leo vel fringilla est ullamcorper eget nulla. Tristique et egestas quis ipsum suspendisse ultrices. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Egestas quis ipsum suspendisse ultrices gravida dictum. Odio euismod lacinia at quis risus sed. Vitae et leo duis ut diam. Neque gravida in fermentum et. Ac turpis egestas sed tempus urna. Gravida quis blandit turpis cursus in hac. Elementum nisi quis eleifend quam adipiscing. Euismod quis viverra nibh cras pulvinar. Sed felis eget velit aliquet sagittis. Sed adipiscing diam donec adipiscing tristique risus. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Integer enim neque volutpat ac. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Turpis massa sed elementum tempus. Netus et malesuada fames ac turpis. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget."}];i(92);var M=function(){var e=Object(l.f)();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(l.b,{path:"/",render:function(){return Object(f.jsx)(k,{projectList:G})}}),Object(f.jsx)(l.b,{path:"/p/:itemId",render:function(t){var i=t.match;return Object(f.jsx)(B,{history:e,item:G.find((function(e){return e.id===i.params.itemId}))})}}),Object(f.jsx)(H,{})]})},N=i(67);function U(e){return Object(N.a)({palette:e,typography:{fontFamily:"Questrial"}})}var J={light:U({type:"light",primary:{main:"#78909c"},secondary:{main:"#ffab40"},background:{paper:"#f5f5f5"}}),dark:U({type:"dark",primary:{main:"#78909c"},secondary:{main:"#ffab40"}})},R=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,143)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;i(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(o.a,{children:Object(f.jsx)(c.a,{theme:J.light,children:Object(f.jsx)(M,{})})})}),document.getElementById("root")),R()}},[[93,1,2]]]);
//# sourceMappingURL=main.1ac60584.chunk.js.map