"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2585],{5955:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"skill/algorithm/algorithm-introduction","title":"\u7b80\u4ecb","description":"\u6574\u7406\u5e38\u7528\u7b97\u6cd5, \u5927\u90e8\u5206\u9898\u578b\u6765\u6e90\u4e8e \u9762\u8bd5\u7ecf\u5178 150 \u9898","source":"@site/docs/skill/algorithm/0.introduction.mdx","sourceDirName":"skill/algorithm","slug":"/algorithm","permalink":"/docs/algorithm","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"id":"algorithm-introduction","slug":"/algorithm","title":"\u7b80\u4ecb","authors":"kuizuo","keywords":["algorithm-introduction"]},"sidebar":"skill","previous":{"title":".github \u5176\u4ed6\u6587\u4ef6","permalink":"/docs/skill/git/github-other"},"next":{"title":"\u4e24\u6570\u4e4b\u548c","permalink":"/docs/algorithm/two-sum"}}');var i=r(5105),o=r(9999),s=r(4011);const l={id:"algorithm-introduction",slug:"/algorithm",title:"\u7b80\u4ecb",authors:"kuizuo",keywords:["algorithm-introduction"]},a=void 0,c={},u=[];function d(e){const t={a:"a",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["\u6574\u7406\u5e38\u7528\u7b97\u6cd5, \u5927\u90e8\u5206\u9898\u578b\u6765\u6e90\u4e8e ",(0,i.jsx)(t.a,{href:"https://leetcode.cn/studyplan/top-interview-150/",children:"\u9762\u8bd5\u7ecf\u5178 150 \u9898"})]}),"\n","\n",(0,i.jsx)(s.A,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4011:(e,t,r)=>{r.d(t,{A:()=>v});r(8101);var n=r(3394),i=r(9387),o=r(2128),s=r(8031),l=r(696),a=r(2105),c=r(1655);const u={cardContainer:"cardContainer_sGAR",cardTitle:"cardTitle_Q56X",cardDescription:"cardDescription_siM2"};var d=r(5105);function m(e){var t=e.href,r=e.children;return(0,d.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function h(e){var t=e.href,r=e.icon,i=e.title,o=e.description;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:i,children:[r," ",i]}),o&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(e){var t,r,n=e.item,o=(0,i.Nr)(n),l=(r=(0,s.W)().selectMessage,function(e){return r(e,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return o?(0,d.jsx)(h,{href:o,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:l(n.items.length)}):null}function p(e){var t,r,n=e.item,o=(0,l.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.cC)(null!=(t=n.docId)?t:void 0);return(0,d.jsx)(h,{href:n.href,icon:o,title:n.label,description:null!=(r=n.description)?r:null==s?void 0:s.description})}function g(e){var t=e.item;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function x(e){var t=e.className,r=(0,i.$S)();return(0,d.jsx)(v,{items:r.items,className:t})}function v(e){var t=e.items,r=e.className;if(!t)return(0,d.jsx)(x,Object.assign({},e));var o=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:o.map((function(e,t){return(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)}))})}},8031:(e,t,r)=>{r.d(t,{W:()=>c});var n=r(8101),i=r(4152),o=["zero","one","two","few","many","other"];function s(e){return o.filter((function(t){return e.includes(t)}))}var l={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function a(){var e=(0,i.A)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:s(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),l}var t,r}),[e])}function c(){var e=a();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var i=r.select(t),o=r.pluralForms.indexOf(i);return n[Math.min(o,n.length-1)]}(r,t,e)}}}},9999:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(8101);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);