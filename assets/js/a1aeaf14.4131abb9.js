"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1793],{8932:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"skill/code-specification/editorconfig","title":"editorconfig","description":"Editorconfig \u6709\u52a9\u4e8e\u8de8\u5404\u79cd\u7f16\u8f91\u5668\u548c IDE \u4e3a\u5904\u7406\u540c\u4e00\u9879\u76ee\u7684\u591a\u4e2a\u5f00\u53d1\u4eba\u5458\u7ef4\u62a4\u4e00\u81f4\u7684\u7f16\u7801\u6837\u5f0f\u3002","source":"@site/docs/skill/code-specification/editorconfig.md","sourceDirName":"skill/code-specification","slug":"/editorconfig","permalink":"/ktstudio-site/docs/editorconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"editorconfig","slug":"/editorconfig","title":"editorconfig","authors":"kuizuo","keywords":["code-specification","editorconfig"]},"sidebar":"skill","previous":{"title":"stylelint","permalink":"/ktstudio-site/docs/stylelint"},"next":{"title":"husky","permalink":"/ktstudio-site/docs/husky"}}');var o=n(5105),r=n(9999);const s={id:"editorconfig",slug:"/editorconfig",title:"editorconfig",authors:"kuizuo",keywords:["code-specification","editorconfig"]},c=void 0,d={},l=[{value:"\u4f7f\u7528 ESLint \u505a\u4ee3\u7801 lint\uff0c\u90a3\u4e48\u4e3a\u4ec0\u4e48\u8fd8\u8981\u4f7f\u7528 .editorconfig \u5462\uff1f",id:"\u4f7f\u7528-eslint-\u505a\u4ee3\u7801-lint\u90a3\u4e48\u4e3a\u4ec0\u4e48\u8fd8\u8981\u4f7f\u7528-editorconfig-\u5462",level:2},{value:"\u5b89\u88c5 EditorConfig",id:"\u5b89\u88c5-editorconfig",level:2}];function f(i){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...i.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://editorconfig.org/",children:"Editorconfig"})," \u6709\u52a9\u4e8e\u8de8\u5404\u79cd\u7f16\u8f91\u5668\u548c IDE \u4e3a\u5904\u7406\u540c\u4e00\u9879\u76ee\u7684\u591a\u4e2a\u5f00\u53d1\u4eba\u5458\u7ef4\u62a4\u4e00\u81f4\u7684\u7f16\u7801\u6837\u5f0f\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u4f7f\u7528-eslint-\u505a\u4ee3\u7801-lint\u90a3\u4e48\u4e3a\u4ec0\u4e48\u8fd8\u8981\u4f7f\u7528-editorconfig-\u5462",children:"\u4f7f\u7528 ESLint \u505a\u4ee3\u7801 lint\uff0c\u90a3\u4e48\u4e3a\u4ec0\u4e48\u8fd8\u8981\u4f7f\u7528 .editorconfig \u5462\uff1f"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"ESLint \u786e\u5b9e\u5305\u542b .editorconfig \u4e2d\u7684\u4e00\u4e9b\u5c5e\u6027\uff0c\u5982\u7f29\u8fdb\u7b49\uff0c\u4f46\u5e76\u4e0d\u5168\u90e8\u5305\u542b\uff0c\u5982 .editorconfig \u4e2d\u7684 insert_final_newline \u5c5e\u6027 Eslint \u5c31\u6ca1\u6709\u3002Eslint \u66f4\u504f\u5411\u4e8e\u5bf9\u8bed\u6cd5\u7684\u63d0\u793a\uff0c\u5982\u5b9a\u4e49\u4e86\u4e00\u4e2a\u53d8\u91cf\u4f46\u662f\u6ca1\u6709\u4f7f\u7528\u65f6\u5e94\u8be5\u7ed9\u4e88\u63d0\u9192\u3002\u800c .editorconfig \u66f4\u504f\u5411\u4e8e\u4ee3\u7801\u98ce\u683c\uff0c\u5982\u7f29\u8fdb\u7b49\u3002"}),"\n",(0,o.jsx)(e.li,{children:"ESLint \u4ec5\u4ec5\u652f\u6301\u5bf9 js \u6587\u4ef6\u7684\u6821\u9a8c\uff0c\u800c .editorconfig \u4e0d\u5149\u53ef\u4ee5\u68c0\u9a8c js \u6587\u4ef6\u7684\u4ee3\u7801\u98ce\u683c\uff0c\u8fd8\u53ef\u4ee5\u5bf9 .py\uff08python \u6587\u4ef6\uff09\u3001.md\uff08markdown \u6587\u4ef6\uff09\u8fdb\u884c\u4ee3\u7801\u98ce\u683c\u63a7\u5236\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"\u6839\u636e\u9879\u76ee\u9700\u8981\uff0cEslint \u548c .editorconfig \u5e76\u4e0d\u51b2\u7a81\uff0c\u540c\u65f6\u914d\u5408\u4f7f\u7528\u53ef\u4ee5\u4f7f\u4ee3\u7801\u98ce\u683c\u66f4\u52a0\u4f18\u96c5\u3002"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u5b89\u88c5-editorconfig",children:"\u5b89\u88c5 EditorConfig"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",children:"EditorConfig for VS Code"})}),"\n",(0,o.jsxs)(e.p,{children:["\u521b\u5efa ",(0,o.jsx)(e.code,{children:".editorconfig"}),"\uff0c\u793a\u4f8b\u5185\u5bb9\u5982\u4e0b"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-editorconfig",metastring:"title='.editorconfig' icon='logos:editorconfig'",children:"# http://editorconfig.org\n\nroot = true\n\n[*]\ncharset = utf-8\nindent_style = space\nindent_size = 2\nend_of_line = lf\ninsert_final_newline = true\ntrim_trailing_whitespace = true\nquote_type = single\n\n[*.md]\ninsert_final_newline = false\ntrim_trailing_whitespace = false\n"})})]})}function a(i={}){const{wrapper:e}={...(0,r.R)(),...i.components};return e?(0,o.jsx)(e,{...i,children:(0,o.jsx)(f,{...i})}):f(i)}},9999:(i,e,n)=>{n.d(e,{R:()=>s,x:()=>c});var t=n(8101);const o={},r=t.createContext(o);function s(i){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function c(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(o):i.components||o:s(i.components),t.createElement(r.Provider,{value:e},i.children)}}}]);