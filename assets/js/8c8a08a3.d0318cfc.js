"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2585],{5955:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"skill/algorithm/algorithm-introduction","title":"\u7b80\u4ecb","description":"\u6574\u7406\u5e38\u7528\u7b97\u6cd5, \u5927\u90e8\u5206\u9898\u578b\u6765\u6e90\u4e8e \u9762\u8bd5\u7ecf\u5178 150 \u9898","source":"@site/docs/skill/algorithm/0.introduction.mdx","sourceDirName":"skill/algorithm","slug":"/algorithm","permalink":"/ktstudio-site/docs/algorithm","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"id":"algorithm-introduction","slug":"/algorithm","title":"\u7b80\u4ecb","authors":"kuizuo","keywords":["algorithm-introduction"]},"sidebar":"skill","previous":{"title":".github \u5176\u4ed6\u6587\u4ef6","permalink":"/ktstudio-site/docs/skill/git/github-other"},"next":{"title":"\u4e24\u6570\u4e4b\u548c","permalink":"/ktstudio-site/docs/algorithm/two-sum"}}');var i=r(5105),o=r(9999),s=r(4011);const l={id:"algorithm-introduction",slug:"/algorithm",title:"\u7b80\u4ecb",authors:"kuizuo",keywords:["algorithm-introduction"]},a=void 0,c={},u=[];function d(t){const e={a:"a",p:"p",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["\u6574\u7406\u5e38\u7528\u7b97\u6cd5, \u5927\u90e8\u5206\u9898\u578b\u6765\u6e90\u4e8e ",(0,i.jsx)(e.a,{href:"https://leetcode.cn/studyplan/top-interview-150/",children:"\u9762\u8bd5\u7ecf\u5178 150 \u9898"})]}),"\n","\n",(0,i.jsx)(s.A,{})]})}function m(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},4011:(t,e,r)=>{r.d(e,{A:()=>v});r(8101);var n=r(3394),i=r(9387),o=r(2128),s=r(8031),l=r(696),a=r(2105),c=r(1655);const u={cardContainer:"cardContainer_sGAR",cardTitle:"cardTitle_Q56X",cardDescription:"cardDescription_siM2"};var d=r(5105);function m(t){var e=t.href,r=t.children;return(0,d.jsx)(o.A,{href:e,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function h(t){var e=t.href,r=t.icon,i=t.title,o=t.description;return(0,d.jsxs)(m,{href:e,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:i,children:[r," ",i]}),o&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(t){var e,r,n=t.item,o=(0,i.Nr)(n),l=(r=(0,s.W)().selectMessage,function(t){return r(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))});return o?(0,d.jsx)(h,{href:o,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(e=n.description)?e:l(n.items.length)}):null}function p(t){var e,r,n=t.item,o=(0,l.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.cC)(null!=(e=n.docId)?e:void 0);return(0,d.jsx)(h,{href:n.href,icon:o,title:n.label,description:null!=(r=n.description)?r:null==s?void 0:s.description})}function g(t){var e=t.item;switch(e.type){case"link":return(0,d.jsx)(p,{item:e});case"category":return(0,d.jsx)(f,{item:e});default:throw new Error("unknown item type "+JSON.stringify(e))}}function x(t){var e=t.className,r=(0,i.$S)();return(0,d.jsx)(v,{items:r.items,className:e})}function v(t){var e=t.items,r=t.className;if(!e)return(0,d.jsx)(x,Object.assign({},t));var o=(0,i.d1)(e);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:o.map((function(t,e){return(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:t})},e)}))})}},8031:(t,e,r)=>{r.d(e,{W:()=>c});var n=r(8101),i=r(4152),o=["zero","one","two","few","many","other"];function s(t){return o.filter((function(e){return t.includes(e)}))}var l={locale:"en",pluralForms:s(["one","other"]),select:function(t){return 1===t?"one":"other"}};function a(){var t=(0,i.A)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return e=t,r=new Intl.PluralRules(e),{locale:e,pluralForms:s(r.resolvedOptions().pluralCategories),select:function(t){return r.select(t)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+t+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),l}var e,r}),[t])}function c(){var t=a();return{selectMessage:function(e,r){return function(t,e,r){var n=t.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+n.length+": "+t);var i=r.select(e),o=r.pluralForms.indexOf(i);return n[Math.min(o,n.length-1)]}(r,e,t)}}}},9999:(t,e,r)=>{r.d(e,{R:()=>s,x:()=>l});var n=r(8101);const i={},o=n.createContext(i);function s(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);