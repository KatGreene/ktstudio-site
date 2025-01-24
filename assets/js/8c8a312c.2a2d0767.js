"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7692],{5080:(n,l,d)=>{d.r(l),d.d(l,{assets:()=>c,contentTitle:()=>h,default:()=>t,frontMatter:()=>r,metadata:()=>i,toc:()=>j});const i=JSON.parse('{"id":"tools/idea-config","title":"IDEA\u57fa\u672c\u914d\u7f6e","description":"\u51c6\u5907\u7cfb\u7edf\u7684\u5b66\u4e60\u4e00\u904d java\uff08\u4e3b\u8981\u662f\u540e\u7aef\u4e0e\u5b89\u5353\uff09\uff0c\u6240\u4ee5\u5c31\u514d\u4e0d\u4e86\u4f7f\u7528\u4e1a\u754c\u597d\u8bc4\u6700\u9ad8\u7684 IDE \u5de5\u5177\u2014\u2014IDEA\u3002","source":"@site/docs/tools/IDEA\u57fa\u672c\u914d\u7f6e.md","sourceDirName":"tools","slug":"/idea-config","permalink":"/docs/idea-config","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Jetbrains","permalink":"/docs/tags/jetbrains"},{"inline":true,"label":"idea","permalink":"/docs/tags/idea"},{"inline":true,"label":"java","permalink":"/docs/tags/java"},{"inline":true,"label":"\u5de5\u5177","permalink":"/docs/tags/\u5de5\u5177"}],"version":"current","frontMatter":{"id":"idea-config","slug":"/idea-config","title":"IDEA\u57fa\u672c\u914d\u7f6e","date":"2022-01-06T00:00:00.000Z","authors":"kuizuo","tags":["Jetbrains","idea","java","\u5de5\u5177"],"keywords":["Jetbrains","idea","java","\u5de5\u5177"]},"sidebar":"tools","previous":{"title":"VScode\u76f8\u5173\u914d\u7f6e","permalink":"/docs/vscode-config"},"next":{"title":"Vite\u76f8\u5173\u63d2\u4ef6","permalink":"/docs/vite-plugin"}}');var s=d(5105),e=d(9999);const r={id:"idea-config",slug:"/idea-config",title:"IDEA\u57fa\u672c\u914d\u7f6e",date:new Date("2022-01-06T00:00:00.000Z"),authors:"kuizuo",tags:["Jetbrains","idea","java","\u5de5\u5177"],keywords:["Jetbrains","idea","java","\u5de5\u5177"]},h=void 0,c={},j=[{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:2},{value:"\u4e3b\u9898\u56fe\u6807",id:"\u4e3b\u9898\u56fe\u6807",level:3},{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",level:2},{value:"Ctrl",id:"ctrl",level:3},{value:"Alt",id:"alt",level:3},{value:"Ctrl + Alt",id:"ctrl--alt",level:3},{value:"Ctrl + Shift",id:"ctrl--shift",level:3},{value:"Alt + Shift",id:"alt--shift",level:3},{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",level:3},{value:"\u81ea\u5b9a\u4e49",id:"\u81ea\u5b9a\u4e49",level:3},{value:"\u5176\u4ed6\u64cd\u4f5c",id:"\u5176\u4ed6\u64cd\u4f5c",level:2},{value:"\u5feb\u901f\u751f\u6210\u4ee3\u7801",id:"\u5feb\u901f\u751f\u6210\u4ee3\u7801",level:3},{value:"\u4fee\u6539 Maven \u4f9d\u8d56\u4ed3\u5e93\u4f4d\u7f6e",id:"\u4fee\u6539-maven-\u4f9d\u8d56\u4ed3\u5e93\u4f4d\u7f6e",level:3},{value:"\u914d\u7f6e\u5bfc\u5165\u4e0e\u5bfc\u51fa",id:"\u914d\u7f6e\u5bfc\u5165\u4e0e\u5bfc\u51fa",level:2}];function x(n){const l={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,e.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.p,{children:"\u51c6\u5907\u7cfb\u7edf\u7684\u5b66\u4e60\u4e00\u904d java\uff08\u4e3b\u8981\u662f\u540e\u7aef\u4e0e\u5b89\u5353\uff09\uff0c\u6240\u4ee5\u5c31\u514d\u4e0d\u4e86\u4f7f\u7528\u4e1a\u754c\u597d\u8bc4\u6700\u9ad8\u7684 IDE \u5de5\u5177\u2014\u2014IDEA\u3002"}),"\n",(0,s.jsx)(l.p,{children:"\u540c\u65f6\u5728\u5199\u8fd9\u7bc7\u4e4b\u524d\uff0cJetBrains \u5168\u5bb6\u6876\u5c31\u6ca1\u600e\u4e48\u4f7f\u7528\u8fc7\uff0c\u57fa\u672c\u4e0a\u6211\u80fd\u7528 vscode \u6211\u90fd\u7528 codeRun \u63d2\u4ef6\u6765\u8fd0\u884c\uff0c\u4f46\u5bf9\u4e8e\u4e00\u4e2a\u5927\u578b\u9879\u76ee\uff0c\u4f55\u51b5\u662f\u5f00\u53d1 java \u9879\u76ee\u7684\u8bdd\uff0cvscode \u6709\u70b9\u96be\u4ee5\u80dc\u4efb\uff0c\u52a0\u4e0a\u540e\u7eed\u4f1a\u4f7f\u7528 GoLand\uff0cPyCharm \u8fd9\u4e9b\uff0c\u6240\u4ee5\u5f88\u6709\u5fc5\u8981\u8bb0\u5f55\u4e0b JetBrains \u5168\u5bb6\u6876\u7684\u4e00\u4e9b\u57fa\u672c\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(l.p,{children:"ps: \u6211\u672c\u5730\u7535\u8111\u57fa\u672c\u628a\u5927\u90e8\u5206 JetBrains \u4ea7\u54c1\u7ed9\u5b89\u88c5\u4e86\u4e00\u904d\uff0c\u800c\u5728\u53bb\u5e74 1 \u6708 13 \u53f7\u6dd8\u5b9d\u4e0a\u4e70\u7684\u4e00\u4e2a\u8d26\u53f7\u7528\u4e8e\u6fc0\u6d3b\uff0c\u5230\u73b0\u5728\u6574\u6574\u4e00\u5e74\u65f6\u95f4\u90fd\u6ca1\u600e\u4e48\u4f7f\u7528 JetBrains \u4ea7\u54c1 \ud83d\ude02"}),"\n",(0,s.jsxs)(l.p,{children:["\u8fd9\u91cc\u6709\u4e00\u4efd\u6211\u7684",(0,s.jsx)(l.a,{href:"https://pan.kuizuo.cn/s/Bpf0",children:"\u914d\u7f6e\u6587\u4ef6"}),"\uff0c\u5728\u6700\u540e\u4e5f\u4f1a\u8bf4\u660e\u914d\u7f6e\u7684\u5bfc\u5165\u4e0e\u5bfc\u51fa\u3002"]}),"\n",(0,s.jsx)(l.h2,{id:"\u63d2\u4ef6",children:"\u63d2\u4ef6"}),"\n",(0,s.jsx)(l.h3,{id:"\u4e3b\u9898\u56fe\u6807",children:"\u4e3b\u9898\u56fe\u6807"}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.code,{children:"Atom Material Icons"})," \u8bbe\u7f6e\u6587\u4ef6\u56fe\u6807"]}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.code,{children:"Material Theme UI"})," \u8bbe\u7f6e\u4e3b\u9898 (\u6211\u4e00\u822c\u8bbe\u7f6e Atom One Dark Theme \u8fd9\u4e2a\u4e3b\u9898)"]}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.code,{children:"Rainbow Brackets"})," \u5f69\u8679\u62ec\u53f7"]}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.p,{children:"\u8bf4\u5b9e\u8bdd\uff0cIDEA \u5185\u7f6e\u96c6\u6210\u4e86\u4e00\u5806\u597d\u7528\u7684\u529f\u80fd\uff0c\u6bd4\u5982 TODO\uff0cGit\uff0c\u8fd9\u4e9b\u5728 VSCode \u4e2d\u63d2\u4ef6\u7684\u4f53\u9a8c\u751a\u81f3\u6709\u4e0d\u5982 IDEA\u3002\uff08\u5c24\u5176\u662f\u8fd9 Git \u7528\u8fc7\u90fd\u8bf4\u597d\uff09\uff0c\u540e\u7eed\u6709\u5176\u4ed6\u63d2\u4ef6\u624d\u8fdb\u884c\u8865\u5145\u3002"}),"\n",(0,s.jsx)(l.h2,{id:"\u5feb\u6377\u952e",children:"\u5feb\u6377\u952e"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.a,{href:"https://zhuanlan.zhihu.com/p/61690346",children:"IntelliJ IDEA \u5e38\u7528\u5feb\u6377\u952e - \u77e5\u4e4e (zhihu.com)"})}),"\n",(0,s.jsx)(l.h3,{id:"ctrl",children:"Ctrl"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"D"})," \u590d\u5236\u5149\u6807\u6240\u5728\u884c \u6216 \u590d\u5236\u9009\u62e9\u5185\u5bb9\uff0c\u5e76\u628a\u590d\u5236\u5185\u5bb9\u63d2\u5165\u5149\u6807\u4f4d\u7f6e\u4e0b\u9762"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"W"})," \u9012\u8fdb\u5f0f\u9009\u62e9\u4ee3\u7801\u5757\u3002\u53ef\u9009\u4e2d\u5149\u6807\u6240\u5728\u7684\u5355\u8bcd\u6216\u6bb5\u843d\uff0c\u8fde\u7eed\u6309\u4f1a\u5728\u539f\u6709\u9009\u4e2d\u7684\u57fa\u7840\u4e0a\u518d\u6269\u5c55\u9009\u4e2d\u8303\u56f4"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"E"})," \u663e\u793a\u6700\u8fd1\u6253\u5f00\u7684\u6587\u4ef6\u8bb0\u5f55\u5217\u8868"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"N"})," \u6839\u636e\u8f93\u5165\u7684 \u540d/\u7c7b\u540d \u67e5\u627e\u7c7b\u6587\u4ef6"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"G"})," \u5728\u5f53\u524d\u6587\u4ef6\u8df3\u8f6c\u5230\u6307\u5b9a\u884c\u5904"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"F12"})," \u5f39\u51fa\u5f53\u524d\u6587\u4ef6\u7ed3\u6784\u5c42\uff0c\u53ef\u4ee5\u5728\u5f39\u51fa\u7684\u5c42\u4e0a\u76f4\u63a5\u8f93\u5165\uff0c\u8fdb\u884c\u7b5b\u9009"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"\u5de6\u952e\u5355\u51fb"})," \u5728\u6253\u5f00\u7684\u6587\u4ef6\u6807\u9898\u4e0a\uff0c\u5f39\u51fa\u8be5\u6587\u4ef6\u8def\u5f84"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"alt",children:"Alt"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"1,2,3\u20269"})," \u663e\u793a\u5bf9\u5e94\u6570\u503c\u7684\u9009\u9879\u5361\uff0c\u5176\u4e2d 1 \u662f Project \u7528\u5f97\u6700\u591a \uff08\u5fc5\u5907\uff09"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"Enter"})," \u6839\u636e\u5149\u6807\u6240\u5728\u95ee\u9898\uff0c\u63d0\u4f9b\u5feb\u901f\u4fee\u590d\u9009\u62e9\uff0c\u5149\u6807\u653e\u5728\u7684\u4f4d\u7f6e\u4e0d\u540c\u63d0\u793a\u7684\u7ed3\u679c\u4e5f\u4e0d\u540c"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"Insert"})," \u4ee3\u7801\u81ea\u52a8\u751f\u6210\uff0c\u5982\u751f\u6210\u5bf9\u8c61\u7684 set / get \u65b9\u6cd5\uff0c\u6784\u9020\u51fd\u6570\uff0ctoString() \u7b49"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"\u5de6\u65b9\u5411\u952e"})," \u5207\u6362\u5f53\u524d\u5df2\u6253\u5f00\u7684\u7a97\u53e3\u4e2d\u7684\u5b50\u89c6\u56fe\uff0c\u6bd4\u5982 Debug \u7a97\u53e3\u4e2d\u6709 Output\u3001Debugger \u7b49\u5b50\u89c6\u56fe\uff0c\u7528\u6b64\u5feb\u6377\u952e\u5c31\u53ef\u4ee5\u5728\u5b50\u89c6\u56fe\u4e2d\u5207\u6362"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"\u53f3\u65b9\u5411\u952e"})," \u6309\u5207\u6362\u5f53\u524d\u5df2\u6253\u5f00\u7684\u7a97\u53e3\u4e2d\u7684\u5b50\u89c6\u56fe\uff0c\u6bd4\u5982 Debug \u7a97\u53e3\u4e2d\u6709 Output\u3001Debugger \u7b49\u5b50\u89c6\u56fe\uff0c\u7528\u6b64\u5feb\u6377\u952e\u5c31\u53ef\u4ee5\u5728\u5b50\u89c6\u56fe\u4e2d\u5207\u6362"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"\u524d\u65b9\u5411\u952e"})," \u5f53\u524d\u5149\u6807\u8df3\u8f6c\u5230\u5f53\u524d\u6587\u4ef6\u7684\u524d\u4e00\u4e2a\u65b9\u6cd5\u540d\u4f4d\u7f6e"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"\u540e\u65b9\u5411\u952e"})," \u5f53\u524d\u5149\u6807\u8df3\u8f6c\u5230\u5f53\u524d\u6587\u4ef6\u7684\u540e\u4e00\u4e2a\u65b9\u6cd5\u540d\u4f4d\u7f6e"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"ctrl--alt",children:"Ctrl + Alt"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"L"})," \u683c\u5f0f\u5316\u4ee3\u7801\uff0c\u53ef\u4ee5\u5bf9\u5f53\u524d\u6587\u4ef6\u548c\u6574\u4e2a\u5305\u76ee\u5f55\u4f7f\u7528"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"T"})," \u9009\u62e9\u4ee3\u7801\uff0c\u53ef\u4ee5\u5c06\u5176\u5305\u88f9\u5728 if\u3001try\u3001while \u7b49\u4ee3\u7801\u5757\u4e2d"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"O"})," \u4f18\u5316\u5bfc\u5165\u7684\u7c7b\uff0c\u53ef\u4ee5\u5bf9\u5f53\u524d\u6587\u4ef6\u548c\u6574\u4e2a\u5305\u76ee\u5f55\u4f7f\u7528"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"V"})," \u5feb\u901f\u5f15\u8fdb\u53d8\u91cf"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"S"})," \u6253\u5f00 IntelliJ IDEA \u7cfb\u7edf\u8bbe\u7f6e"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"Enter"})," \u5149\u6807\u6240\u5728\u884c\u4e0a\u7a7a\u51fa\u4e00\u884c\uff0c\u5149\u6807\u5b9a\u4f4d\u5230\u65b0\u884c"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"\u5de6\u65b9\u5411\u952e"})," \u9000\u56de\u5230\u4e0a\u4e00\u4e2a\u64cd\u4f5c\u7684\u5730\u65b9"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"\u53f3\u65b9\u5411\u952e"})," \u524d\u8fdb\u5230\u4e0a\u4e00\u4e2a\u64cd\u4f5c\u7684\u5730\u65b9"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"\u524d\u65b9\u5411\u952e"})," \u5728\u67e5\u627e\u6a21\u5f0f\u4e0b\uff0c\u8df3\u5230\u4e0a\u4e2a\u67e5\u627e\u7684\u6587\u4ef6"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"\u540e\u65b9\u5411\u952e"})," \u5728\u67e5\u627e\u6a21\u5f0f\u4e0b\uff0c\u8df3\u5230\u4e0b\u4e2a\u67e5\u627e\u7684\u6587\u4ef6"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"ctrl--shift",children:"Ctrl + Shift"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"Z"})," \u53d6\u6d88\u64a4\u9500"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"W"})," \u9012\u8fdb\u5f0f\u53d6\u6d88\u9009\u62e9\u4ee3\u7801\u5757\u3002\u53ef\u9009\u4e2d\u5149\u6807\u6240\u5728\u7684\u5355\u8bcd\u6216\u6bb5\u843d\uff0c\u8fde\u7eed\u6309\u4f1a\u5728\u539f\u6709\u9009\u4e2d\u7684\u57fa\u7840\u4e0a\u518d\u6269\u5c55\u53d6\u6d88\u9009\u4e2d\u8303\u56f4"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"T"})," \u5bf9\u5f53\u524d\u7c7b\u751f\u6210\u5355\u5143\u6d4b\u8bd5\u7c7b\uff0c\u5982\u679c\u5df2\u7ecf\u5b58\u5728\u7684\u5355\u5143\u6d4b\u8bd5\u7c7b\u5219\u53ef\u4ee5\u8fdb\u884c\u9009\u62e9"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"C"})," \u590d\u5236\u5f53\u524d\u6587\u4ef6\u78c1\u76d8\u8def\u5f84\u5230\u526a\u8d34\u677f"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"V"})," \u5f39\u51fa\u7f13\u5b58\u7684\u6700\u8fd1\u62f7\u8d1d\u7684\u5185\u5bb9\u7ba1\u7406\u5668\u5f39\u51fa\u5c42"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"E"})," \u663e\u793a\u6700\u8fd1\u4fee\u6539\u7684\u6587\u4ef6\u5217\u8868\u7684\u5f39\u51fa\u5c42"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"A"})," \u67e5\u627e\u52a8\u4f5c / \u8bbe\u7f6e"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"/"})," \u4ee3\u7801\u5757\u6ce8\u91ca"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"["})," \u9009\u4e2d\u4ece\u5149\u6807\u6240\u5728\u4f4d\u7f6e\u5230\u5b83\u7684\u9876\u90e8\u4e2d\u62ec\u53f7\u4f4d\u7f6e"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"]"})," \u9009\u4e2d\u4ece\u5149\u6807\u6240\u5728\u4f4d\u7f6e\u5230\u5b83\u7684\u5e95\u90e8\u4e2d\u62ec\u53f7\u4f4d\u7f6e"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"+"})," \u5c55\u5f00\u6240\u6709\u4ee3\u7801"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"-"})," \u6298\u53e0\u6240\u6709\u4ee3\u7801"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"F3"})," \u9009\u62e9\u4e0b\u4e00\u4e2a\u5355\u8bcd"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"F7"})," \u9ad8\u4eae\u663e\u793a\u6240\u6709\u8be5\u9009\u4e2d\u6587\u672c\uff0c\u6309 Esc \u9ad8\u4eae\u6d88\u5931"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"Space"})," \u667a\u80fd\u4ee3\u7801\u63d0\u793a"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"Enter"})," \u81ea\u52a8\u7ed3\u675f\u4ee3\u7801\uff0c\u884c\u672b\u81ea\u52a8\u6dfb\u52a0\u5206\u53f7"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"ackspace"})," \u9000\u56de\u5230\u4e0a\u6b21\u4fee\u6539\u7684\u5730\u65b9"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"\u5de6\u952e\u5355\u51fb"})," \u628a\u5149\u6807\u653e\u5728\u67d0\u4e2a\u7c7b\u53d8\u91cf\u4e0a\uff0c\u6309\u6b64\u5feb\u6377\u952e\u53ef\u4ee5\u76f4\u63a5\u5b9a\u4f4d\u5230\u8be5\u7c7b\u4e2d"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"\u5de6\u65b9\u5411\u952e"})," \u5728\u4ee3\u7801\u6587\u4ef6\u4e0a\uff0c\u5149\u6807\u8df3\u8f6c\u5230\u5f53\u524d\u5355\u8bcd / \u4e2d\u6587\u53e5\u7684\u5de6\u4fa7\u5f00\u5934\u4f4d\u7f6e\uff0c\u540c\u65f6\u9009\u4e2d\u8be5\u5355\u8bcd / \u4e2d\u6587\u53e5"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"\u53f3\u65b9\u5411\u952e"})," \u5728\u4ee3\u7801\u6587\u4ef6\u4e0a\uff0c\u5149\u6807\u8df3\u8f6c\u5230\u5f53\u524d\u5355\u8bcd / \u4e2d\u6587\u53e5\u7684\u53f3\u4fa7\u5f00\u5934\u4f4d\u7f6e\uff0c\u540c\u65f6\u9009\u4e2d\u8be5\u5355\u8bcd / \u4e2d\u6587\u53e5"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"\u524d\u65b9\u5411\u952e"})," \u5149\u6807\u653e\u5728\u65b9\u6cd5\u540d\u4e0a\uff0c\u5c06\u65b9\u6cd5\u79fb\u52a8\u5230\u4e0a\u4e00\u4e2a\u65b9\u6cd5\u524d\u9762\uff0c\u8c03\u6574\u65b9\u6cd5\u6392\u5e8f"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Ctrl"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"\u540e\u65b9\u5411\u952e"})," \u5149\u6807\u653e\u5728\u65b9\u6cd5\u540d\u4e0a\uff0c\u5c06\u65b9\u6cd5\u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u65b9\u6cd5\u524d\u9762\uff0c\u8c03\u6574\u65b9\u6cd5\u6392\u5e8f"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"alt--shift",children:"Alt + Shift"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"\u524d\u65b9\u5411\u952e"})," \u79fb\u52a8\u5149\u6807\u6240\u5728\u884c\u5411\u4e0a\u79fb\u52a8"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"\u540e\u65b9\u5411\u952e"})," \u79fb\u52a8\u5149\u6807\u6240\u5728\u884c\u5411\u4e0b\u79fb\u52a8"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"\u8c03\u8bd5",children:"\u8c03\u8bd5"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"F9"})," \u8c03\u8bd5\u6a21\u5f0f\u8fd0\u884c"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"F7"})," \u6b65\u5165\uff0c\u5982\u679c\u5f53\u524d\u884c\u65ad\u70b9\u662f\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5219\u8fdb\u5165\u5f53\u524d\u65b9\u6cd5\u4f53\u5185"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"F8"})," \u6b65\u8fc7\uff0c\u5982\u679c\u5f53\u524d\u884c\u65ad\u70b9\u662f\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5219\u4e0d\u8fdb\u5165\u5f53\u524d\u65b9\u6cd5\u4f53\u5185"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"F8"})," \u8df3\u51fa\u6b65\u5165\u7684\u65b9\u6cd5\u4f53\u5916"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)("kbd",{children:"F9"})," \u6062\u590d\u7a0b\u5e8f\u8fd0\u884c\uff0c\u4f46\u662f\u5982\u679c\u8be5\u65ad\u70b9\u4e0b\u9762\u4ee3\u7801\u8fd8\u6709\u65ad\u70b9\u5219\u505c\u5728\u4e0b\u4e00\u4e2a\u65ad\u70b9\u4e0a"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"\u81ea\u5b9a\u4e49",children:"\u81ea\u5b9a\u4e49"}),"\n",(0,s.jsx)(l.p,{children:"\u5728 vscode \u4e2d\u6211\u901a\u5e38\u90fd\u4f1a\u8bbe\u7f6e\u5149\u6807\u952e\uff0c\u6bd4\u5982"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"J"})," \u5de6\u5149\u6807\u79fb\u52a8"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"K"})," \u4e0b\u5149\u6807\u79fb\u52a8"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"L"})," \u53f3\u5149\u6807\u79fb\u52a8"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"I"})," \u4e0a\u5149\u6807\u79fb\u52a8"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:";"})," \u5149\u6807\u79fb\u52a8\u81f3\u884c\u5c3e\uff0c\u76f8\u5f53\u4e8e End \u952e"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)("kbd",{children:"Shift"}),"+",(0,s.jsx)("kbd",{children:"Alt"}),"+",(0,s.jsx)("kbd",{children:"H"})," \u5149\u6807\u79fb\u52a8\u81f3\u884c\u9996\uff0c\u76f8\u5f53\u4e8e Home \u952e"]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"\u540c\u6837\u7684\u5728 IDEA \u80af\u5b9a\u4e5f\u8981\u5982\u6b64\u8bbe\u7f6e"}),"\n",(0,s.jsx)(l.p,{children:"\u5728 setting \u4e2d\u627e\u5230 keymap\uff0c\u5206\u522b\u641c\u7d22\u5173\u952e\u5b57 up down left right home end \u5206\u522b\u4e3a\u5176\u8bbe\u7f6e\u5feb\u6377\u952e\uff0c\u5982\u679c\u9047\u5230\u5feb\u6377\u952e\u51b2\u7a81\uff0c\u4f1a\u63d0\u793a REMOVE\uff08\u79fb\u9664\uff09\u8fd8\u662f LEAVE\uff08\u4fdd\u7559\uff09\uff0c\u9009\u62e9 REMOVE\uff08\u8fd9\u4e9b\u90fd\u662f\u7528\u5904\u76f8\u5bf9\u5c0f\u7684\u529f\u80fd\u952e\uff0c\u53ef\u4ee5\u76f4\u63a5\u8986\u76d6\uff0c\u4ecb\u610f\u8005\u5ffd\u89c6\uff09"}),"\n",(0,s.jsx)(l.p,{children:"\u8fd8\u6709\u4e00\u4e9b\u5feb\u6377\u952e\u9488\u5bf9 VSCode \u6211\u8fd9\u5c31\u5217\u4e3e\u4e00\u4e0b"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u91cd\u547d\u540d ",(0,s.jsx)(l.code,{children:"rename Shift+F6"})," \u21d2 ",(0,s.jsx)(l.code,{children:"F2"})]}),"\n",(0,s.jsxs)(l.li,{children:["\u91cd\u505a ",(0,s.jsx)(l.code,{children:"Ctrl + Shift + Z"})," \u21d2 ",(0,s.jsx)(l.code,{children:"Ctrl + Y"})]}),"\n",(0,s.jsxs)(l.li,{children:["\u6253\u5f00\u7ec8\u7aef ",(0,s.jsx)(l.code,{children:"Alt + F12"})," \u21d2 Ctrl + `\uff08\u6839\u636e\u7ec8\u7aef\u4f7f\u7528\u7387\uff09"]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"\u5982\u679c\u4e60\u60ef\u4e86 Vscode \u5feb\u6377\u952e\u65b9\u5f0f\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6 VSCode Keymap \u6765\u5bf9 IDEA \u5feb\u6377\u952e\u8fdb\u884c\u6620\u5c04\uff0c\u76f8\u5bf9\u4f7f\u7528\u6210\u672c\u4f1a\u6709\u6240\u964d\u4f4e\u3002"}),"\n",(0,s.jsx)(l.h2,{id:"\u5176\u4ed6\u64cd\u4f5c",children:"\u5176\u4ed6\u64cd\u4f5c"}),"\n",(0,s.jsx)(l.h3,{id:"\u5feb\u901f\u751f\u6210\u4ee3\u7801",children:"\u5feb\u901f\u751f\u6210\u4ee3\u7801"}),"\n",(0,s.jsx)(l.p,{children:"\u901a\u8fc7\u7f29\u5199\u6216\u540e\u7f00\u7684\u65b9\u5f0f\u5feb\u901f\u5b8c\u6210\u4e00\u4e9b\u4ee3\u7801\u7684\u8865\u5168\uff0c\u4e00\u822c\u5199\u5b8c\uff0c\u6309 tab \u6216\u56de\u8f66\u5373\u53ef\u3002\u7f57\u5217\u4e00\u4e9b\u6bd4\u8f83\u5e38\u7528\u7684\uff1a"}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{children:"\u4ee3\u7801"}),(0,s.jsx)(l.th,{children:"\u6548\u679c"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"psvm"}),(0,s.jsx)(l.td,{children:"\u81ea\u52a8\u751f\u6210 main \u51fd\u6570"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:".var"}),(0,s.jsx)(l.td,{children:"\u81ea\u52a8\u4e3a\u5bf9\u8c61\u751f\u6210\u58f0\u660e"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"sout / .sout"}),(0,s.jsx)(l.td,{children:"\u8f93\u51fa\uff1aSystem.out.println()"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:".if"}),(0,s.jsx)(l.td,{children:"\u751f\u6210 if \u5224\u65ad"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:".for"}),(0,s.jsx)(l.td,{children:"\u751f\u6210\u5faa\u73af\uff0c\u9ed8\u8ba4\u662f\u9ad8\u7ea7 for"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:".try"}),(0,s.jsx)(l.td,{children:"\u751f\u6210 try \u2026 catch"})]})]})]}),"\n",(0,s.jsx)(l.p,{children:"\u53ef\u5728 Settings \u21d2 Editor \u21d2 Live Templates \u4e2d \u6839\u636e\u5bf9\u5e94\u7684\u8bed\u8a00\u751f\u6210\u76f8\u5e94\u7684\u6a21\u677f\uff0c\u4e5f\u53ef\u81ea\u5b9a\u4e49\u751f\u6210"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.img,{src:"https://img.kuizuo.cn/image-20220106052026798.png",alt:"image-20220106052026798"})}),"\n",(0,s.jsx)(l.h3,{id:"\u4fee\u6539-maven-\u4f9d\u8d56\u4ed3\u5e93\u4f4d\u7f6e",children:"\u4fee\u6539 Maven \u4f9d\u8d56\u4ed3\u5e93\u4f4d\u7f6e"}),"\n",(0,s.jsxs)(l.p,{children:["\u4e00\u822c Maven \u6240\u4e0b\u8f7d\u7684\u4f9d\u8d56\u90fd\u4f1a\u5b58\u50a8\u5728",(0,s.jsx)(l.code,{children:"C:\\User\\{user}\\.m2\\repository"})," \uff0c\u901a\u8fc7\u4e0b\u56fe\u4f4d\u7f6e\u53ef\u4ee5\u5c06\u5176\u79fb\u52a8\u5230\u5176\u4ed6\u5730\u65b9\u3002"]}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.img,{src:"https://img.kuizuo.cn/image-20220106052100190.png",alt:"image-20220106052100190"})}),"\n",(0,s.jsx)(l.h2,{id:"\u914d\u7f6e\u5bfc\u5165\u4e0e\u5bfc\u51fa",children:"\u914d\u7f6e\u5bfc\u5165\u4e0e\u5bfc\u51fa"}),"\n",(0,s.jsx)(l.p,{children:"\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b\u56fe\uff0c\u6839\u636e\u81ea\u5df1\u9700\u8981\u8fdb\u884c\u5bfc\u5165\u4e0e\u5bfc\u51fa"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.img,{src:"https://img.kuizuo.cn/image-20220616135757525.png",alt:"image-20220616135757525"})}),"\n",(0,s.jsx)(l.p,{children:"\u5bfc\u51fa"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.img,{src:"https://img.kuizuo.cn/image-20220616135810570.png",alt:"image-20220616135810570"})}),"\n",(0,s.jsx)(l.p,{children:"\u5bfc\u5165"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.img,{src:"https://img.kuizuo.cn/image-20220616135847464.png",alt:"image-20220616135847464"})})]})}function t(n={}){const{wrapper:l}={...(0,e.R)(),...n.components};return l?(0,s.jsx)(l,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},9999:(n,l,d)=>{d.d(l,{R:()=>r,x:()=>h});var i=d(8101);const s={},e=i.createContext(s);function r(n){const l=i.useContext(e);return i.useMemo((function(){return"function"==typeof n?n(l):{...l,...n}}),[l,n])}function h(n){let l;return l=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(e.Provider,{value:l},n.children)}}}]);