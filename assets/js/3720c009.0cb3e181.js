"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4787],{57:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});a(8101);var n=a(3394),r=a(2298),s=a(6837),l=a(1162),i=a(6198),c=a(4854),u=a(1655),g=a(5105);function o(t){var e=t.title;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.be,{title:e}),(0,g.jsx)(c.A,{tag:"doc_tags_list"})]})}function d(t){var e=t.tags,a=t.title;return(0,g.jsx)(r.e3,{className:(0,n.A)(s.G.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(u.A,{as:"h1",children:a}),(0,g.jsx)(i.A,{tags:e})]})})})})}function h(t){var e=(0,l.b)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,Object.assign({},t,{title:e})),(0,g.jsx)(d,Object.assign({},t,{title:e}))]})}},1162:(t,e,a)=>{a.d(e,{Q:()=>s,b:()=>r});var n=a(2105),r=function(){return(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function s(t){var e={};return Object.values(t).forEach((function(t){var a=function(t){return t[0].toUpperCase()}(t.label);null!=e[a]||(e[a]=[]),e[a].push(t)})),Object.entries(e).sort((function(t,e){var a=t[0],n=e[0];return a.localeCompare(n)})).map((function(t){return{letter:t[0],tags:t[1].sort((function(t,e){return t.label.localeCompare(e.label)}))}}))}},9736:(t,e,a)=>{a.d(e,{A:()=>i});var n=a(2128),r=a(5974);a(8101);const s={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var l=a(5105);function i(t){var e=t.permalink,a=t.label,i=t.count,c=t.className;return(0,l.jsxs)(n.A,{href:e,className:(0,r.cn)(s.tag,i?s.tagWithCount:s.tagRegular,c),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},6198:(t,e,a)=>{a.d(e,{C:()=>u,A:()=>c});var n=a(1162),r=a(9736);const s={tag:"tag_Yyuv"};var l=a(5105);function i(t){var e=t.letterEntry;return(0,l.jsxs)("article",{children:[(0,l.jsx)("h2",{children:e.letter}),(0,l.jsx)("ul",{className:"padding--none mb-4",children:e.tags.map((function(t){return(0,l.jsx)("li",{className:s.tag,children:(0,l.jsx)(r.A,Object.assign({},t))},t.permalink)}))}),(0,l.jsx)("hr",{})]})}function c(t){var e=t.tags,a=(0,n.Q)(e);return(0,l.jsx)("section",{className:"margin-vert--lg",children:a.map((function(t){return(0,l.jsx)(i,{letterEntry:t},t.letter)}))})}function u(t){var e=t.tags;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("ul",{className:"padding--none",children:e.map((function(t){return(0,l.jsx)("li",{className:s.tag,children:(0,l.jsx)(r.A,Object.assign({},t))},t.permalink)}))})})}}}]);