"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[32588],{69121:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var t=r(74848),s=r(28453);const d={},i="\u73af\u5883\u548c\u7248\u672c\u9009\u62e9",l={id:"best-practices/selection",title:"\u73af\u5883\u548c\u7248\u672c\u9009\u62e9",description:"\u8be5\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u9009\u62e9\u7cfb\u7edf\u73af\u5883\uff0c\u4ee5\u53ca\u90e8\u7f72\u65b9\u5f0f",source:"@site/versions/version-4.1.0/zh-CN/source/7.best-practices/4.selection.md",sourceDirName:"7.best-practices",slug:"/best-practices/selection",permalink:"/tugraph-db/zh/4.1.0/best-practices/selection",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u8fc1\u79fb",permalink:"/tugraph-db/zh/4.1.0/best-practices/data_migration"},next:{title:"FAQ",permalink:"/tugraph-db/zh/4.1.0/faq"}},h={},c=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. \u73af\u5883\u80fd\u529b\u9009\u62e9",id:"2-\u73af\u5883\u80fd\u529b\u9009\u62e9",level:2},{value:"3. \u90e8\u7f72\u65b9\u5f0f\u9009\u62e9",id:"3-\u90e8\u7f72\u65b9\u5f0f\u9009\u62e9",level:2},{value:"4. \u540e\u7eed\u6b65\u9aa4",id:"4-\u540e\u7eed\u6b65\u9aa4",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u73af\u5883\u548c\u7248\u672c\u9009\u62e9",children:"\u73af\u5883\u548c\u7248\u672c\u9009\u62e9"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8be5\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u9009\u62e9\u7cfb\u7edf\u73af\u5883\uff0c\u4ee5\u53ca\u90e8\u7f72\u65b9\u5f0f"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph\u4e3a\u4e0d\u540c\u9700\u6c42\u7684\u7528\u6237\u63d0\u4f9b\u4e86\u5dee\u5f02\u5316\u7684\u7cfb\u7edf\u73af\u5883\u548c\u90e8\u7f72\u65b9\u5f0f\uff0c\u6765\u6ee1\u8db3\u65b0\u624b\u3001\u7cfb\u7edf\u5f00\u53d1\u8005\u3001\u751f\u4ea7\u8fd0\u7ef4\u4eba\u5458\u3001\u7814\u7a76\u4eba\u5458\u7b49\u4e0d\u540c\u7528\u6237\u7684\u9700\u6c42\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"2-\u73af\u5883\u80fd\u529b\u9009\u62e9",children:"2. \u73af\u5883\u80fd\u529b\u9009\u62e9"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u4f7f\u7528\u573a\u666f\uff0c\u6765\u9009\u62e9\u4e0d\u540c\u7684\u73af\u5883\u3002\u7f16\u8bd1\u73af\u5883\u7684\u80fd\u529b\u6700\u5b8c\u5907\uff0c\u6240\u9700\u7684\u7b2c\u4e09\u65b9\u8f6f\u4ef6\u4e5f\u8d8a\u591a\u3002\u4e0e\u5176\u76f8\u5bf9\u5e94\u7684\uff0c\u7cbe\u7b80\u8fd0\u884c\u73af\u5883\u51e0\u4e4e\u4e0d\u9700\u8981\u5b89\u88c5\u4efb\u4f55\u4f9d\u8d56\u5e93\uff0c\u80fd\u8fd0\u884cTuGraph\u9664\u5b58\u50a8\u8fc7\u7a0b\u5916\u7684\u57fa\u7840\u529f\u80fd\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u73af\u5883"}),(0,t.jsx)(n.th,{children:"\u7528\u9014"}),(0,t.jsx)(n.th,{children:"\u5907\u6ce8"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u7f16\u8bd1\u73af\u5883"}),(0,t.jsx)(n.td,{children:"\u4ece\u6e90\u7801\u7f16\u8bd1TuGraph"}),(0,t.jsx)(n.td,{children:"\u9002\u7528\u4e8e\u5f00\u53d1\u4eba\u5458"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u8fd0\u884c\u73af\u5883"}),(0,t.jsx)(n.td,{children:"\u8fd0\u884cTuGraph\u5b89\u88c5\u5305"}),(0,t.jsx)(n.td,{children:"\u9002\u7528\u4e8e\u5927\u90e8\u5206\u7528\u6237"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u7cbe\u7b80\u8fd0\u884c\u73af\u5883"}),(0,t.jsx)(n.td,{children:"\u8fd0\u884c\u7cbe\u7b80TuGraph\u5b89\u88c5\u5305"}),(0,t.jsx)(n.td,{children:"\u5bf9\u7cfb\u8fd0\u884c\u7edf\u4f9d\u8d56\u8f83\u5c0f"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0d\u540c\u73af\u5883\u7684\u5177\u4f53\u4ecb\u7ecd\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/tugraph-db/zh/4.1.0/developer-manual/installation/environment-mode",children:"\u94fe\u63a5"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"3-\u90e8\u7f72\u65b9\u5f0f\u9009\u62e9",children:"3. \u90e8\u7f72\u65b9\u5f0f\u9009\u62e9"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph\u90e8\u7f72\u4ec5\u9700\u4e00\u53f0\u670d\u52a1\u5668\uff08\u9ad8\u53ef\u7528\u6a21\u5f0f\u9700\u8981\u591a\u53f0\uff09\uff0c\u53ef\u6839\u636e\u5b9e\u9645\u8d44\u6e90\u60c5\u51b5\u548c\u4f7f\u7528\u573a\u666f\uff0c\u9009\u62e9\u9002\u5408\u7684\u90e8\u7f72\u65b9\u5f0f\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u90e8\u7f72\u65b9\u5f0f"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,t.jsx)(n.th,{children:"\u5907\u6ce8"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u4e91\u90e8\u7f72"}),(0,t.jsx)(n.td,{children:"\u963f\u91cc\u4e91\u8ba1\u7b97\u5de2\u4e00\u952e\u90e8\u7f72\uff0c\u514d\u8d39\u8bd5\u7528"}),(0,t.jsxs)(n.td,{children:["\u65b0\u624b\u9002\u7528\uff0c\u6d41\u7a0b\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"/tugraph-db/zh/4.1.0/developer-manual/installation/cloud-deployment",children:"\u94fe\u63a5"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Docker\u90e8\u7f72"}),(0,t.jsx)(n.td,{children:"\u901a\u8fc7\u9884\u5148\u51c6\u5907\u7684Docker\u955c\u50cf\u8de8\u5e73\u53f0\u90e8\u7f72"}),(0,t.jsxs)(n.td,{children:["\u5bf9\u786c\u4ef6\u6709\u8981\u6c42\u7684\u7528\u6237\uff0c\u6bd4\u5982\u6027\u80fd\u6d4b\u8bd5\uff0c\u6d41\u7a0b\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"/tugraph-db/zh/4.1.0/developer-manual/installation/docker-deployment",children:"\u94fe\u63a5"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u672c\u5730\u90e8\u7f72"}),(0,t.jsx)(n.td,{children:"\u5728\u73b0\u6709\u7cfb\u7edf\u7d27\u8026\u5408\u90e8\u7f72"}),(0,t.jsxs)(n.td,{children:["\u6307\u5b9a\u751f\u4ea7\u73af\u5883\u9002\u7528\uff0c\u6d41\u7a0b\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"/tugraph-db/zh/4.1.0/developer-manual/installation/local-package-deployment",children:"\u94fe\u63a5"})]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"4-\u540e\u7eed\u6b65\u9aa4",children:"4. \u540e\u7eed\u6b65\u9aa4"}),"\n",(0,t.jsxs)(n.p,{children:["\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u540e\u7eed\u53ef\u4ee5\u8fdb\u884c",(0,t.jsx)(n.a,{href:"/tugraph-db/zh/4.1.0/developer-manual/running/tugraph-running",children:"\u542f\u52a8\u670d\u52a1"}),"\u3001",(0,t.jsx)(n.a,{href:"/tugraph-db/zh/4.1.0/developer-manual/server-tools/data-import",children:"\u6570\u636e\u5bfc\u5165"}),"\u7b49\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,t.jsx)(n.a,{href:"/tugraph-db/zh/4.1.0/quick-start/demo/movie",children:"\u6837\u4f8b\u6570\u636e"}),"\u6765\u4f53\u9a8c\u6574\u4e2a\u6d41\u7a0b\u3002"]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const s={},d=t.createContext(s);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);