"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[59855],{11551:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(74848),h=t(28453);const s={},i="\u6587\u6863\u5730\u56fe",c={id:"guide",title:"\u6587\u6863\u5730\u56fe",description:"\u8fd9\u91cc\u662f\u6587\u6863\u5730\u56fe\uff0c\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u5b66\u4e60\u548c\u4f7f\u7528TuGraph\u793e\u533a\u7248\u3002",source:"@site/../docs/zh-CN/source/1.guide.md",sourceDirName:".",slug:"/guide",permalink:"/tugraph-db/en-US/zh/latest/guide",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"\u4ec0\u4e48\u662f\u56fe",permalink:"/tugraph-db/en-US/zh/latest/introduction/what-is-graph"}},a={},d=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u5f00\u53d1\u6307\u5357",id:"\u5f00\u53d1\u6307\u5357",level:2},{value:"\u53c2\u4e0e\u793e\u533a\u8d21\u732e",id:"\u53c2\u4e0e\u793e\u533a\u8d21\u732e",level:2},{value:"\u4e3b\u8981\u4ed3\u5e93",id:"\u4e3b\u8981\u4ed3\u5e93",level:2},{value:"\u89c6\u9891\u4e2d\u5fc3",id:"\u89c6\u9891\u4e2d\u5fc3",level:2},{value:"TuGraph\u6700\u65b0\u7248\u672c",id:"tugraph\u6700\u65b0\u7248\u672c",level:2}];function l(n){const e={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,h.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u6587\u6863\u5730\u56fe",children:"\u6587\u6863\u5730\u56fe"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u8fd9\u91cc\u662f\u6587\u6863\u5730\u56fe\uff0c\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u5b66\u4e60\u548c\u4f7f\u7528TuGraph\u793e\u533a\u7248\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u5148\u4e86\u89e3",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/introduction/what-is-graph",children:"\u4ec0\u4e48\u662f\u56fe"}),"\u3001\u56fe",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/introduction/scenarios",children:"\u53ef\u4ee5\u505a\u4ec0\u4e48"}),"\u3001\u4ee5\u53ca",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/introduction/what-is-tugraph",children:"\u4ec0\u4e48\u662fTuGraph"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u57fa\u4e8e",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/installation&running/cloud-deployment",children:"\u963f\u91cc\u4e91\u8ba1\u7b97\u5de2"}),"\u6216",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/installation&running/docker-deployment",children:"Docker\u65b9\u5f0f"}),"\u5feb\u901f\u90e8\u7f72TuGraph\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u4ea7\u54c1\u5185\u7f6e\u7684\u573a\u666f\u4e0a\u624b\u4f53\u9a8c\uff1a",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/quick-start/demo/movie",children:"\u7535\u5f71"}),"\u3001",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/quick-start/demo/wandering-earth",children:"\u6d41\u6d6a\u5730\u7403"}),"\u3001",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/quick-start/demo/the-three-body",children:"\u4e09\u4f53"}),"\u3001",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/quick-start/demo/three-kingdoms",children:"\u4e09\u56fd"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u53ef\u89c6\u5316\u64cd\u4f5c\u624b\u518c\u770b\u8fd9\u91cc\uff1a",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/user-guide/tugraph-browser",children:"\u53ef\u89c6\u5316\u64cd\u4f5c\u624b\u518c"}),"\u3001",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/user-guide/tugraph-browser-legacy",children:"\u53ef\u89c6\u5316\u64cd\u4f5c\u624b\u518c\uff08\u65e7\u7248\uff09"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5f00\u53d1\u6307\u5357",children:"\u5f00\u53d1\u6307\u5357"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u5ba2\u6237\u7aef\u8bbf\u95eeTuGraph\uff1a",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/client-tools/bolt-client",children:"Bolt Client"})]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u67e5\u8be2\u8bed\u8a00\u3001\u8bed\u53e5\u521b\u5efa\u56fe\u6a21\u578b\u770b\u8fd9\u91cc\uff1a",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/query/cypher",children:"Cypher API"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5b58\u50a8\u8fc7\u7a0b\u548c\u7b97\u6cd5\u4ecb\u7ecd\u770b\u8fd9\u91cc\uff1a",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/olap&procedure/procedure/",children:"Procedure API (POG API)"}),"\u3001",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/olap&procedure/olap/tutorial",children:"OLAP API"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["C++/Python\u5f00\u53d1\u5b58\u50a8\u8fc7\u7a0b\u63a5\u53e3\u770b\u8fd9\u91cc\uff1a",(0,r.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(59123).A+"",children:"C++/Python Procedure API"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u53c2\u4e0e\u793e\u533a\u8d21\u732e",children:"\u53c2\u4e0e\u793e\u533a\u8d21\u732e"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5728\u5f00\u59cb\u8d21\u732e\u524d\uff0c\u53ef\u4ee5\u5148\u4e86\u89e3",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/contributor-manual/contributing",children:"\u5982\u4f55\u8d21\u732e"})]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u60f3\u4e86\u89e3\u793e\u533a\u89d2\u8272\u7684\u5212\u5206\uff0c\u8bf7\u8bbf\u95ee",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/contributor-manual/community-roles",children:"\u793e\u533a\u89d2\u8272"})]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4e3b\u8981\u4ed3\u5e93",children:"\u4e3b\u8981\u4ed3\u5e93"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["TuGraph-DB \u4ed3\u5e93: ",(0,r.jsx)(e.a,{href:"https://github.com/TuGraph-family/tugraph-db",children:"https://github.com/TuGraph-family/tugraph-db"})]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u53ef\u89c6\u5316\u754c\u9762: ",(0,r.jsx)(e.a,{href:"https://github.com/TuGraph-family/tugraph-db-browser",children:"https://github.com/TuGraph-family/tugraph-db-browser"})]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u57fa\u4e8etwitter\u6570\u636e\u7684\u7b80\u5355\u6d4b\u8bd5\u65b9\u6cd5: ",(0,r.jsx)(e.a,{href:"https://github.com/TuGraph-family/gdbms-microbenchmark",children:"https://github.com/TuGraph-family/gdbms-microbenchmark"})]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u57fa\u4e8e\u6807\u51c6LDBC-SNB\u7684\u6d4b\u8bd5\u65b9\u6cd5: ",(0,r.jsx)(e.a,{href:"https://github.com/TuGraph-family/tugraph-snb-interactive",children:"https://github.com/TuGraph-family/tugraph-snb-interactive"})]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["TuGraph-Analytics \u4ed3\u5e93: ",(0,r.jsx)(e.a,{href:"https://github.com/TuGraph-family/tugraph-analytics",children:"https://github.com/TuGraph-family/tugraph-analytics"})]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u89c6\u9891\u4e2d\u5fc3",children:"\u89c6\u9891\u4e2d\u5fc3"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://space.bilibili.com/1196053065/channel/seriesdetail?sid=2593741",children:"TuGraph\u5feb\u901f\u4e0a\u624b"})}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://space.bilibili.com/1196053065/channel/seriesdetail?sid=3009777",children:"TuGraph\u6280\u672f\u5206\u4eab\u96c6\u5408"})}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://www.bilibili.com/video/BV15U4y1r7AW/",children:"3\u5206\u949f\u8bfb\u61c2\u56fe\u8ba1\u7b97"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"tugraph\u6700\u65b0\u7248\u672c",children:"TuGraph\u6700\u65b0\u7248\u672c"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u63cf\u8ff0"}),(0,r.jsx)(e.th,{children:"\u6587\u4ef6"}),(0,r.jsx)(e.th,{children:"\u94fe\u63a5"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CentOS7 \u5b89\u88c5\u5305"}),(0,r.jsx)(e.td,{children:"tugraph-4.5.0-1.el7.x86_64.rpm"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.5.0/tugraph-4.5.0-1.el7.x86_64.rpm",children:"\u4e0b\u8f7d"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CentOS8 \u5b89\u88c5\u5305"}),(0,r.jsx)(e.td,{children:"tugraph-4.5.0-1.el8.x86_64.rpm"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.5.0/tugraph-4.5.0-1.el8.x86_64.rpm",children:"\u4e0b\u8f7d"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Ubuntu18.04 \u5b89\u88c5\u5305"}),(0,r.jsx)(e.td,{children:"tugraph-4.5.0-1.x86_64.deb"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.5.0/tugraph-4.5.0-1.x86_64.deb",children:"\u4e0b\u8f7d"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CentOS7 \u9884\u5b89\u88c5\u955c\u50cf"}),(0,r.jsx)(e.td,{children:"tugraph-runtime-centos7-4.5.0.tar"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.5.0/tugraph-runtime-centos7-4.5.0.tar",children:"\u4e0b\u8f7d"})," \u3001",(0,r.jsx)(e.a,{href:"https://hub.docker.com/r/tugraph/tugraph-runtime-centos7",children:"\u8bbf\u95ee"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CentOS8 \u9884\u5b89\u88c5\u955c\u50cf"}),(0,r.jsx)(e.td,{children:"tugraph-runtime-centos8-4.5.0.tar"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.5.0/tugraph-runtime-centos8-4.5.0.tar",children:"\u4e0b\u8f7d"})," \u3001",(0,r.jsx)(e.a,{href:"https://hub.docker.com/r/tugraph/tugraph-runtime-centos8",children:"\u8bbf\u95ee"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Ubuntu18.04 \u9884\u5b89\u88c5\u955c\u50cf"}),(0,r.jsx)(e.td,{children:"tugraph-runtime-ubuntu18.04-4.5.0.tar"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.5.0/tugraph-runtime-ubuntu18.04-4.5.0.tar",children:"\u4e0b\u8f7d"})," \u3001",(0,r.jsx)(e.a,{href:"https://hub.docker.com/r/tugraph/tugraph-runtime-ubuntu18.04",children:"\u8bbf\u95ee"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CentOS7 \u7cbe\u7b80\u5b89\u88c5\u5305"}),(0,r.jsx)(e.td,{children:"tugraph-mini-4.5.0-1.el7.x86_64.rpm"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.5.0/tugraph-mini-4.5.0-1.el7.x86_64.rpm",children:"\u4e0b\u8f7d"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CentOS8 \u7cbe\u7b80\u5b89\u88c5\u5305"}),(0,r.jsx)(e.td,{children:"tugraph-mini-4.5.0-1.el8.x86_64.rpm"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.5.0/tugraph-mini-4.5.0-1.el8.x86_64.rpm",children:"\u4e0b\u8f7d"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Ubuntu18.04 \u7cbe\u7b80\u5b89\u88c5\u5305"}),(0,r.jsx)(e.td,{children:"tugraph-mini-4.5.0-1.x86_64.deb"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.5.0/tugraph-mini-4.5.0-1.x86_64.deb",children:"\u4e0b\u8f7d"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CentOS7 \u7cbe\u7b80\u9884\u5b89\u88c5\u955c\u50cf"}),(0,r.jsx)(e.td,{children:"tugraph-mini-runtime-centos7-4.5.0.tar"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.5.0/tugraph-mini-runtime-centos7-4.5.0.tar",children:"\u4e0b\u8f7d"})," \u3001",(0,r.jsx)(e.a,{href:"https://hub.docker.com/r/tugraph/tugraph-mini-runtime-centos7",children:"\u8bbf\u95ee"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CentOS8 \u7cbe\u7b80\u9884\u5b89\u88c5\u955c\u50cf"}),(0,r.jsx)(e.td,{children:"tugraph-mini-runtime-centos8-4.5.0.tar"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.5.0/tugraph-mini-runtime-centos8-4.5.0.tar",children:"\u4e0b\u8f7d"})," \u3001",(0,r.jsx)(e.a,{href:"https://hub.docker.com/r/tugraph/tugraph-mini-runtime-centos8",children:"\u8bbf\u95ee"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Ubuntu18.04 \u7cbe\u7b80\u9884\u5b89\u88c5\u955c\u50cf"}),(0,r.jsx)(e.td,{children:"tugraph-mini-runtime-ubuntu18.04-4.5.0.tar"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.5.0/tugraph-mini-runtime-ubuntu18.04-4.5.0.tar",children:"\u4e0b\u8f7d"})," \u3001",(0,r.jsx)(e.a,{href:"https://hub.docker.com/r/tugraph/tugraph-mini-runtime-ubuntu18.04",children:"\u8bbf\u95ee"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CentOS7 \u7f16\u8bd1\u955c\u50cf"}),(0,r.jsx)(e.td,{children:"tugraph-compile-centos7-1.3.2.tar"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-docker-compile/tugraph-compile-centos7-1.3.2.tar",children:"\u4e0b\u8f7d"})," \u3001",(0,r.jsx)(e.a,{href:"https://hub.docker.com/r/tugraph/tugraph-compile-centos7",children:"\u8bbf\u95ee"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CentOS8 \u7f16\u8bd1\u955c\u50cf"}),(0,r.jsx)(e.td,{children:"tugraph-compile-centos8-1.3.2.tar"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-docker-compile/tugraph-compile-centos8-1.3.2.tar",children:"\u4e0b\u8f7d"})," \u3001",(0,r.jsx)(e.a,{href:"https://hub.docker.com/r/tugraph/tugraph-compile-centos8",children:"\u8bbf\u95ee"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Ubuntu18.04 \u7f16\u8bd1\u955c\u50cf"}),(0,r.jsx)(e.td,{children:"tugraph-compile-ubuntu18.04-1.3.2.tar"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.a,{href:"https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-docker-compile/tugraph-compile-ubuntu18.04-1.3.2.tar",children:"\u4e0b\u8f7d"})," \u3001",(0,r.jsx)(e.a,{href:"https://hub.docker.com/r/tugraph/tugraph-compile-ubuntu18.04",children:"\u8bbf\u95ee"})]})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["\u7248\u672c\u66f4\u65b0\u65e5\u5fd7\u89c1\uff1a",(0,r.jsx)(e.a,{href:"https://github.com/TuGraph-family/tugraph-db/blob/master/release/CHANGELOG_CN.md",children:"\u94fe\u63a5"}),"\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u4e0d\u6e05\u695a\u4f7f\u7528\u5b89\u88c5\u5305\u548c\u955c\u50cf\uff0c\u8bf7\u53c2\u8003 ",(0,r.jsx)(e.a,{href:"/tugraph-db/en-US/zh/latest/best-practices/selection",children:"\u73af\u5883\u548c\u7248\u672c\u9009\u62e9"}),"\u3002"]})]})}function u(n={}){const{wrapper:e}={...(0,h.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},59123:(n,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/files/index-07adf872280840868ada97d8aeecb891.rst"},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var r=t(96540);const h={},s=r.createContext(h);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(h):n.components||h:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);