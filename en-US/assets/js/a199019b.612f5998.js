"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[26559],{31532:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var t=r(74848),i=r(28453);const s={},c="\u6027\u80fd\u4f18\u5148",o={id:"introduction/characteristics/performance-oriented",title:"\u6027\u80fd\u4f18\u5148",description:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u6027\u80fd\u4f18\u5148\u7684\u8bbe\u8ba1\u7406\u5ff5\u3002",source:"@site/versions/version-4.3.0/zh-CN/source/2.introduction/5.characteristics/1.performance-oriented.md",sourceDirName:"2.introduction/5.characteristics",slug:"/introduction/characteristics/performance-oriented",permalink:"/tugraph-db/en-US/zh/4.3.0/introduction/characteristics/performance-oriented",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TuGraph\u56fe\u6a21\u578b\u8bf4\u660e",permalink:"/tugraph-db/en-US/zh/4.3.0/introduction/schema"},next:{title:"\u591a\u5c42\u7ea7\u63a5\u53e3",permalink:"/tugraph-db/en-US/zh/4.3.0/introduction/characteristics/multi-level-Interfaces"}},d={},h=[{value:"1.\u7b80\u4ecb",id:"1\u7b80\u4ecb",level:2},{value:"2.\u56fe\u64cd\u4f5c\u7684\u7279\u6027",id:"2\u56fe\u64cd\u4f5c\u7684\u7279\u6027",level:2},{value:"3.\u5b58\u50a8\u6570\u636e\u7ed3\u6784",id:"3\u5b58\u50a8\u6570\u636e\u7ed3\u6784",level:2},{value:"4.\u6570\u636e\u7f16\u7801",id:"4\u6570\u636e\u7f16\u7801",level:2}];function l(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u6027\u80fd\u4f18\u5148",children:"\u6027\u80fd\u4f18\u5148"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u6027\u80fd\u4f18\u5148\u7684\u8bbe\u8ba1\u7406\u5ff5\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1\u7b80\u4ecb",children:"1.\u7b80\u4ecb"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph\u76ee\u524d\u662f\u4e16\u754c\u4e0a\u6700\u5feb\u7684\u56fe\u6570\u636e\u5e93\uff0c\u5728\u56fe\u6570\u636e\u5e93\u6807\u51c6\u8bc4\u6d4bLDBC SNB Interactive\u4f4d\u5c45\u699c\u9996\uff082023.3\uff09\u3002TuGraph\u7684\u8bbe\u8ba1\u57fa\u4e8e\u6027\u80fd\u4f18\u5148\uff0c\u81f4\u529b\u4e8e\u6253\u9020\u9ad8\u6027\u80fd\u7684\u5355\u673a\u56fe\u6570\u636e\u5e93\u3002\u8be5\u6587\u6863\u662fTuGraph\u57fa\u4e8e\u6027\u80fd\u4f18\u5148\u5728\u5b58\u50a8\u5c42\u7684\u6838\u5fc3\u8bbe\u8ba1\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"2\u56fe\u64cd\u4f5c\u7684\u7279\u6027",children:"2.\u56fe\u64cd\u4f5c\u7684\u7279\u6027"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5c5e\u6027\u56fe\u4e0a\u7684\u64cd\u4f5c\u6d89\u53ca\u8bfb\u3001\u5199\u53ca\u5176\u5c5e\u6027\uff0c\u5bf9\u4e00\u4e9b\u7279\u6b8a\u7684\u5c5e\u6027\u6bd4\u5982\u65f6\u95f4\u6233\u4e5f\u8bbf\u95ee\u6a21\u5f0f\u4e5f\u4f1a\u5f71\u54cd\u5230\u6574\u4f53\u6027\u80fd\u3002\u8fd9\u91cc\u901a\u8fc7\u5bf9\u4e00\u4e9b\u56fe\u64cd\u4f5c\u7279\u6027\u7684\u89c4\u5f8b\u603b\u7ed3\uff0c\u6765\u6307\u5bfc\u6700\u7ec8\u7684\u6027\u80fd\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u89c2\u5bdf\u5230\u5f88\u591a\u56fe\u5e94\u7528\u6709\u7c7b\u4f3c\u7684\u6570\u636e\u8bbf\u95ee\u6a21\u5f0f\u3002\u4f8b\u5982\uff0c\u5728\u4fe1\u8d37\u98ce\u9669\u63a7\u5236\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u9012\u5f52\u8def\u5f84\u8fc7\u6ee4\u641c\u7d22\u591a\u5bf9\u4e00\u6a21\u5f0f\uff0c\u4ee5\u627e\u5230\u53ef\u7591\u7684\u4fe1\u7528\u6b3a\u8bc8\u7528\u6237\u548c\u884c\u4e3a\u3002\u9488\u5bf9\u7f51\u7edc\u8d4c\u535a\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bc6\u522b\u77ed\u65f6\u95f4\u5185\u7684\u591a\u7b14\u8d44\u91d1\u8f6c\u79fb\uff0c\u6765\u53d1\u73b0\u6d89\u8d4c\u7684\u8d44\u91d1\u8d26\u53f7\u3002\u80a1\u6743\u7a7f\u900f\u573a\u666f\u5bf9\u5b9e\u4f53\u95f4\u7684\u80a1\u6743\u5173\u7cfb\u8fdb\u884c\u9012\u5f52\u8ba1\u7b97\u3002\u8fd9\u4e9b\u573a\u666f\u5177\u6709\u591a\u8df3\u5b9e\u4f53\u548c\u5173\u7cfb\u8bbf\u95ee\u3001\u65f6\u95f4\u7a97\u53e3\u7ea6\u675f\u548c\u8bfb\u5199\u4e8b\u52a1\u7b49\u5e38\u89c1\u6a21\u5f0f\u3002\n\u66f4\u8fdb\u4e00\u6b65\uff0c\u4ece\u4ecb\u7ecd\u4e2d\u7684\u8ba8\u8bba\u548c\u56fe\u8d1f\u8f7d\u7684\u5206\u6790\u4e2d\uff0c\u5f52\u7eb3\u51fa\u4ee5\u4e0b\u7279\u5f81:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u89c4\u5f8b\u4e00"})," KHop\u662f\u56fe\u4e2d\u6700\u5178\u578b\u7684\u64cd\u4f5c\uff0c\u5b83\u57fa\u4e8e\u70b9\u548c\u8fb9\u7684\u56fe\u62d3\u6251\u7684\u6570\u636e\u8bbf\u95ee\u6a21\u5f0f\uff0c\u548c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u6709\u7740\u672c\u8d28\u7684\u533a\u522b\u3002KHop \u7684\u5178\u578b\u6027\u9664\u4e86\u8868\u73b0\u5728\u6570\u636e\u8bbf\u95ee\u6a21\u5f0f\u4e0d\u540c\uff0c\u5b83\u540c\u65f6\u4e5f\u662f\u56fe\u6570\u636e\u5e93\u6700\u9700\u8981\u5173\u6ce8\u7684\u6027\u80fd\u70b9\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u89c4\u5f8b\u4e8c"})," \u56fe\u8d1f\u8f7d\u7684\u6570\u636e\u8bbf\u95ee\u5728\u62d3\u6251\u4e0a\u6709\u4e00\u5b9a\u7684\u5c40\u90e8\u6027\uff0c\u540c\u4e00\u4e2a\u70b9\u7684\u8fb9\u901a\u5e38\u4f1a\u88ab\u540c\u65f6\u8bbf\u95ee\u3002\u5f53\u8fd9\u4e9b\u8fb9\u7684\u6807\u7b7e\u76f8\u540c\u65f6\uff0c\u6709\u66f4\u5927\u7684\u6982\u7387\u4f1a\u88ab\u540c\u65f6\u8bbf\u95ee\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u89c4\u5f8b\u4e09"})," \u56fe\u8d1f\u8f7d\u5728\u8bbf\u95ee\u70b9\u8fb9\u65f6\uff0c\u901a\u5e38\u4f1a\u8bbf\u95ee\u5176\u5bf9\u5e94\u7684\u5c5e\u6027\uff0c\u6765\u4f5c\u4e3a\u904d\u5386\u8fc7\u6ee4\u7684\u6761\u4ef6\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u89c4\u5f8b\u56db"})," \u5728\u57fa\u4e8e\u65f6\u5e8f\u7684\u56fe\u8d1f\u8f7d\uff0c\u5bf9\u70b9\u8fb9\u7684\u8fc7\u6ee4\u901a\u5e38\u662f\u5728\u67d0\u4e2a\u65f6\u95f4\u8303\u56f4\uff0c\u6bd4\u5982\u6700\u8fd1\u7684\u4e00\u5468\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u89c4\u5f8b\u4e94"})," \u5199\u64cd\u4f5c\u53ef\u80fd\u4f34\u968f\u7740\u5927\u91cf\u7684\u8bfb\u64cd\u4f5c\uff0c\u9700\u8981\u5728\u5355\u4e2a\u4e8b\u52a1\u5468\u671f\u91cc\u5904\u7406\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u5bf9\u5b9e\u9645\u7ebf\u4e0a\u56fe\u5e94\u7528\u7684\u5206\u6790\uff0c\u56fe\u8d1f\u8f7d\u7684\u8bfb\u5199\u6bd4\u7387\u5927\u7ea6\u4e3a 20:1\uff0c\u867d\u7136\u573a\u666f\u5c40\u9650\u5728\u91d1\u878d\u573a\u666f\uff0c\u96c6\u7fa4\u6570\u4e5f\u6709\u9650\uff0c\u4f46\u6d89\u53ca\u7684\u6570\u636e\u89c4\u6a21\u548c\u7528\u6237\u91cf\u975e\u5e38\u5e9e\u5927\uff0c\u5177\u6709\u4e00\u5b9a\u4ee3\u8868\u6027\u300220:1 \u7684\u56fe\u8d1f\u8f7d\u8bfb\u5199\u6bd4\u7387\uff0c\u8bf4\u660e\u8bfb\u5de5\u4f5c\u8d1f\u8f7d\u5bf9\u6574\u4f53\u6027\u80fd\u7684\u5f71\u54cd\u66f4\u5927\uff0c \u800c\u5199\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6027\u80fd\u4e5f\u4e0d\u80fd\u5ffd\u89c6\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"3\u5b58\u50a8\u6570\u636e\u7ed3\u6784",children:"3.\u5b58\u50a8\u6570\u636e\u7ed3\u6784"}),"\n",(0,t.jsx)(n.p,{children:"TuGraph\u5e95\u5c42\u91c7\u7528B+\u6811\u6765\u652f\u6301\u5b9e\u65f6\u7684\u589e\u5220\u67e5\u6539\u4e8b\u52a1\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6392\u5e8f\u6811\u7684\u6570\u636e\u7ed3\u6784\u4e2d\uff0cB+\u6811\u548cLSM\u6811\u4e3a\u4e3b\u8981\u4ee3\u8868\u3002B+\u6811\u5728\u6811\u8282\u70b9\u4e2d\u4f7f\u7528\u62c6\u5206\u548c\u5408\u5e76\u5f0f\u6765\u66f4\u65b0\u6392\u5e8f\u6570\u636e\uff0c\u800c LSM \u6811\u5728\u65e5\u5fd7\u4e2d\u8ffd\u52a0\u66f4\u65b0\uff0c\u4ee5\u8fdb\u884c\u5ef6\u8fdf\u6570\u636e\u5408\u5e76\u3002B+ \u65e9\u671f\u7528\u5728\u6587\u4ef6\u7cfb\u7edf\u7684\u5b9e\u73b0\u4e2d\uff0c\u901a\u8fc7\u5c06\u6570\u636e\u4fdd\u5b58 \u5728\u81ea\u9002\u5e94\u957f\u5ea6\u7684\u53f6\u5b50\u8282\u70b9\u4e2d\uff0c\u89e3\u51b3\u786c\u76d8\u987a\u5e8f\u64cd\u4f5c\u548c\u968f\u673a\u64cd\u4f5c\u6027\u80fd\u5b58\u5728\u6570\u636e\u91cf\u7ea7\u5dee\u522b\u7684\u95ee\u9898\uff0c\u6709\u8f83\u5747\u8861\u7684\u8bfb\u5199\u6027\u80fd\u3002LSM \u6811\u7684\u4e3b\u8981\u4f18\u52bf\u4f7f\u7528 WAL(Write Ahead Log) \u8fdb\u884c\u66f4\u65b0\uff0c\u5c06\u66f4\u65b0\u64cd\u4f5c\u53d8\u6210\u987a\u5e8f\u64cd\u4f5c\uff0c\u5728\u952e\u503c\u8f83\u5c0f\u65f6\u6027\u80fd\u4f18\u52bf\u5c24\u4e3a\u7a81\u51fa\u3002WAL \u610f\u5473\u7740\u5c06\u6570\u636e\u7684\u66f4\u65b0\u5408\u5e76\u63a8\u8fdf\uff0c\u6279\u91cf\u66f4\u65b0\u80fd\u63d0\u5347\u7efc\u5408\u6548\u7387\uff0c\u4e5f\u4f7f\u5f97\u7cfb\u7edf\u7684\u8c03\u5ea6\u53d8\u5f97\u590d\u6742\u3002\u5982\u679c\u66f4\u65b0\u5408\u5e76\u5b8c\u6210\u524d\uff0c\u6070\u597d\u5bf9\u5176\u4e2d\u7684\u6570\u636e\u7ee7\u7eed\u8bfb\u53d6\uff0cLSM \u6811\u5c31\u9700\u8981\u8bfb\u53d6\u51e0\u4e2a\u5c42\u7ea7\u5c40\u90e8\u5408\u5e76\u7684\u65e5\u5fd7\uff0c\u4f1a\u5bfc\u81f4\u8bfb\u53d6\u653e\u5927\u548c\u7a7a\u95f4\u653e\u5927\uff0c\u4ece\u800c\u5f71\u54cd\u8bfb\u6548\u7387\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u603b\u7ed3\u6765\u8bf4\uff0cB+ \u6811\u6709\u8f83\u597d\u7684\u987a\u5e8f\u8bfb\u5199\u6027\u80fd\uff0c\u800c LSM \u6811\u5728\u6570\u636e\u968f\u673a\u5199\u65b9\u9762\u5360\u4f18\u3002\u6b64\u5916 LSM \u6811\u91c7\u7528\u540e\u53f0\u5408\u5e76\u7684\u65b9\u5f0f\uff0c\u4f7f\u5f97\u6027\u80fd\u7684\u6ce2\u52a8\u96be\u4ee5\u9884\u671f\uff0c\u6027\u80fd\u6ce2\u52a8\u548c\u4e0a\u5c42\u5b58\u50a8\u548c\u8ba1\u7b97\u7684\u5173\u8054\u6027\u8f83\u5f31\uff0c\u589e\u52a0\u4e86\u6574\u4f53\u8bbe\u8ba1\u7684\u6210\u672c\u3002\u7efc\u4e0a\u8003\u8651\uff0cTuGraph \u9009\u7528 B+ \u6811\u4f5c\u4e3a\u8bfb\u6027\u80fd\u4f18\u5148\u7684\u5b9e\u73b0\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"4\u6570\u636e\u7f16\u7801",children:"4.\u6570\u636e\u7f16\u7801"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u5c5e\u6027\u56fe\u6a21\u578b\u800c\u8a00\uff0c\u9664\u4e86\u56fe\u62d3\u6251\u7f16\u7801\u5916\uff0c\u5c5e\u6027\u6570\u636e\u4e5f\u4f1a\u5f88\u5927\u7a0b\u5ea6\u5f71\u54cd\u529f\u80fd\u548c\u6027\u80fd\uff0c\u6211\u4eec\u5148\u8ba8\u8bba\u5c5e\u6027\u6570\u636e\u5982\u4f55\u4e0e\u62d3\u6251\u6570\u636e\u5171\u5b58\u7684\u7f16\u7801\u683c\u5f0f\u3002\u4ece\u76ee\u524d\u7684\u8c03\u7814\u6765\u770b\uff0c\u5c5e\u6027\u7f16\u7801\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u57fa\u4e8e\u6307\u9488\u7d22\u5f15\u5c06\u5c5e\u6027\u6570\u636e\u5355\u72ec\u5b58\u50a8\u7684\u79bb\u6563\u7f16\u7801\uff0c\u548c\u5c06\u5c5e\u6027\u6570\u636e\u548c\u62d3\u6251\u6570\u636e\u6253\u5305\u5728\u4e00\u8d77\u7684\u7d27\u51d1\u7f16\u7801\u3002\u79bb\u6563\u7f16\u7801\u6839\u636e\u7a0b\u5ea6\u7684\u4e0d\u540c\uff0c\u53ef\u4ee5\u6bcf\u4e2a\u5c5e\u6027\u90fd\u5355\u72ec\u5b58\u50a8\uff0c\u6216\u8005\u6bcf\u6761\u8fb9\u7684\u5c5e\u6027\u6253\u5305\u540e\u5404\u81ea\u5b58\u50a8\uff0c\u4e0b\u9762\u7684\u8ba8\u8bba\u5bf9\u4e24\u79cd\u60c5\u51b5\u90fd\u9002\u7528\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u70b9\u67e5\u8be2\u3002\u5c5e\u6027\u7f16\u7801\u4e3b\u8981\u9488\u5bf9\u8fb9\uff0c\u4e0d\u6d89\u53ca\u70b9\u67e5\u8be2\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5355\u8fb9\u67e5\u8be2\u3002\u79bb\u6563\u7f16\u7801\u901a\u8fc7\u6307\u9488\u5b9a\u4f4d\u8fb9\uff0c\u7d27\u51d1\u7f16\u7801\u5219\u9700\u8981\u4e8c\u5206\u67e5\u627e\u5b9a\u4f4d\u8fb9\u7684\u4f4d\u7f6e\uff0c\u79bb\u6563\u7f16\u7801\u6709\u7565\u5fae\u7684\u4f18\u52bf\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fb9\u904d\u5386\u3002\u79bb\u6563\u7f16\u7801\u5728\u8fb9\u904d\u5386\u8fc7\u7a0b\u9700\u8981\u4e0d\u65ad\u5730\u8fdb\u884c\u6307\u9488\u8df3\u8f6c\u8fdb\u884c\u968f\u673a\u6570\u636e\u8bbf\u95ee\uff0c\u800c\u7d27\u51d1\u7f16\u7801\u63d0\u524d\u628a\u6570\u636e\u6392\u5217\u5728\u4e00\u8d77\uff0c\u987a\u5e8f\u8bbf\u95ee\u7684\u7279\u6027\u4f7f\u5f97\u6548\u7387\u5927\u5927\u63d0\u5347\u3002 \u7531\u89c4\u5f8b\u4e09\u77e5\u5bf9\u8fb9\u7684\u904d\u5386\u64cd\u4f5c\u5f88\u666e\u904d\uff0c\u7d27\u51d1\u7f16\u7801\u5728\u8fb9\u904d\u5386\u7684\u4f18\u52bf\u660e\u663e\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5355\u8fb9\u66f4\u65b0\u3002\u79bb\u6563\u7f16\u7801\u5bf9\u8fb9\u7684\u66f4\u65b0\u4ec5\u9700\u627e\u5230\u5bf9\u5e94\u7684\u6307\u9488\u4f4d\u7f6e\uff0c\u63d2\u5165\u6570\u636e\u540e\u4fee\u6539\u524d\u540e\u6307\u9488\u6307\u5411\u3002\u7d27\u51d1\u7f16\u7801\u5219\u9700\u8981\u5bf9\u7d27\u51d1\u6392\u5217\u7684\u6570\u636e\u8fdb\u884c\u91cd\u7f16\u7801\uff0c\u5bf9\u6574\u4e2a\u8fb9\u503c\u8fdb\u884c\u91cd\u65b0\u5199\u5165\uff0c\u5f00\u9500\u663e\u8457\u5927\u4e8e\u79bb\u6563\u7f16\u7801\u7684\u60c5\u5f62\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6279\u91cf\u8fb9\u66f4\u65b0\u3002\u6279\u91cf\u66f4\u65b0\u53ef\u4ee5\u5728\u5185\u5b58\u4e2d\u9884\u5148\u6784\u5efa\u70b9\u7684\u6240\u6709\u8fb9\u5c5e\u6027\uff0c\u4e00\u6b21\u6027\u7f16\u7801\u5199\u5165\uff0c\u79bb\u6563\u7f16\u7801\u548c\u7d27\u51d1\u7f16\u7801\u76f8\u5f53\u3002\u4f46\u7d27\u51d1\u7f16\u7801\u4e0d\u9700\u8981\u5b58\u50a8\u6307\u9488\u53d8\u91cf\uff0c\u66f4\u5c11\u7684\u5b58\u50a8\u7a7a\u95f4\u6548\u7387\u4e5f\u4f1a\u66f4\u9ad8\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0a\u79bb\u6563\u7f16\u7801\u548c\u7d27\u51d1\u7f16\u7801\u5728\u67d0\u4e00\u7c7b\u7684\u67e5\u8be2\u7684\u6027\u80fd\u95ee\u9898\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f18\u5316\u7684\u6765\u7f13\u89e3\u3002\u6574\u4f53\u4e0a\u8bf4\uff0c\u7531\u4e8e\u56fe\u8d1f\u8f7d\u8bfb\u5199 20:1 \u7684\u7279\u6027\uff0c\u8bfb\u6027\u80fd\u5728\u6574\u4f53\u6027\u80fd\u4e2d\u5360\u6bd4\u66f4\u9ad8\u3002\u4ee5\u53ca\u89c4\u5f8b\u4e09\u6240\u63ed\u793a\u7684\u5bf9\u5c5e\u6027\u8bbf\u95ee\u7684\u7279\u5f81\uff0cTuGraph \u66f4\u503e\u5411\u4e8e\u91c7\u7528\u7d27\u51d1\u7f16\u7801\u6765\u4fdd\u8bc1\u8bfb\u6027\u80fd\u3002\u5176\u4e3b\u8981\u5f31\u52bf\u4e3a\u5355\u8fb9\u66f4\u65b0\u65f6\u91cd\u7f16\u7801\u7684\u5f00\u9500\uff0c\u53ef\u4ee5\u7528\u81ea\u9002\u5e94\u6620\u5c04\u7684\u6280\u672f\u6765\u89e3\u51b3\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var t=r(96540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);