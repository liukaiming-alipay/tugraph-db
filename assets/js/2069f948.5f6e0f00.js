"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[90765],{56679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(74848),l=t(28453);const i={},p="Python\u5ba2\u6237\u7aef",a={id:"developer-manual/client-tools/python-client",title:"Python\u5ba2\u6237\u7aef",description:"\u6b64\u6587\u6863\u4e3b\u8981\u662fTuGraph Python SDK\u7684\u4f7f\u7528\u8bf4\u660e\u3002",source:"@site/versions/version-3.5.1/zh-CN/source/5.developer-manual/4.client-tools/1.python-client.md",sourceDirName:"5.developer-manual/4.client-tools",slug:"/developer-manual/client-tools/python-client",permalink:"/tugraph-db/zh/3.5.1/developer-manual/client-tools/python-client",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u9884\u70ed",permalink:"/tugraph-db/zh/3.5.1/developer-manual/server-tools/data-warmup"},next:{title:"C++\u5ba2\u6237\u7aef",permalink:"/tugraph-db/zh/3.5.1/developer-manual/client-tools/cpp-client"}},o={},c=[{value:"1.\u4f7f\u7528\u793a\u4f8b",id:"1\u4f7f\u7528\u793a\u4f8b",level:2},{value:"1.1.\u8c03\u7528Cypher",id:"11\u8c03\u7528cypher",level:3},{value:"1.2.\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b",id:"12\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b",level:3}];function u(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"python\u5ba2\u6237\u7aef",children:"Python\u5ba2\u6237\u7aef"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6b64\u6587\u6863\u4e3b\u8981\u662fTuGraph Python SDK\u7684\u4f7f\u7528\u8bf4\u660e\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"1\u4f7f\u7528\u793a\u4f8b",children:"1.\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"11\u8c03\u7528cypher",children:"1.1.\u8c03\u7528Cypher"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from TuGraphClient import TuGraphClient, AsyncTuGraphClient\n\nclient = TuGraphClient("127.0.0.1:7071" , "admin", "73@TuGraph")\ncypher = "match (n) return properties(n) limit 1"\nres = client.call_cypher(cypher)\nprint(res)\n\naclient = AsyncTuGraphClient("127.0.0.1:7071" , "admin", "73@TuGraph")\ncypher = "match (n) return properties(n) limit 1"\nres = await aclient.call_cypher(cypher)\nprint(res)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"12\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b",children:"1.2.\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from TuGraphClient import TuGraphClient, AsyncTuGraphClient\n\nclient = TuGraphClient("127.0.0.1:7071" , "admin", "73@TuGraph")\nplugin_type = "cpp"\nplugin_name = "khop"\nplugin_input = "{\\"root\\": 10, \\"hop\\": 3}"\nres = client.call_plugin(plugin_type, plguin_name, plugin_input)\nprint(res)\n\naclient = AsyncTuGraphClient("127.0.0.1:7071" , "admin", "73@TuGraph")\nres = await aclient.call_plugin(plugin_type, plguin_name, plugin_input)\nprint(res)\n'})})]})}function s(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>p,x:()=>a});var r=t(96540);const l={},i=r.createContext(l);function p(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:p(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);