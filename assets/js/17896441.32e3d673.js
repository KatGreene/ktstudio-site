"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8401],{8970:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ye});var a=t(8101),s=t(2298),i=t(8020),o=t(5105),r=a.createContext(null);function l(e){var n=e.children,t=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,o.jsx)(r.Provider,{value:t,children:n})}function c(){var e=(0,a.useContext)(r);if(null===e)throw new i.dV("DocProvider");return e}function d(){var e,n=c(),t=n.metadata,a=n.frontMatter,i=n.assets;return(0,o.jsx)(s.be,{title:t.title,description:t.description,keywords:a.keywords,image:null!=(e=i.image)?e:a.image})}var u=t(3394),m=t(6431),h=t(2105),v=t(2128),p=t(5974);function b(e){var n=e.permalink,t=e.title,a=e.subLabel,s=e.isNext;return(0,o.jsxs)(v.A,{className:(0,p.cn)("pagination-nav__link border-2 border-link hover:bg-[#a1d8f71b]",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[a&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,o.jsx)("div",{className:"pagination-nav__label",children:t})]})}function g(e){var n=e.previous,t=e.next;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,o.jsx)(b,Object.assign({},n,{subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),t&&(0,o.jsx)(b,Object.assign({},t,{subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function x(){var e=c().metadata;return(0,o.jsx)(g,{previous:e.previous,next:e.next})}var f=t(4152),j=t(9063),N=t(6837),A=t(2283),C=t(1694);var L={unreleased:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,o.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,o.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function k(e){var n=L[e.versionMetadata.banner];return(0,o.jsx)(n,Object.assign({},e))}function _(e){var n=e.versionLabel,t=e.to,a=e.onClick;return(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(v.A,{to:t,onClick:a,children:(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function B(e){var n,t=e.className,a=e.versionMetadata,s=(0,f.A)().siteConfig.title,i=(0,j.vT)({failfast:!0}).pluginId,r=(0,A.g1)(i).savePreferredVersionName,l=(0,j.HW)(i),c=l.latestDocSuggestion,d=l.latestVersionSuggestion,m=null!=c?c:(n=d).docs.find((function(e){return e.id===n.mainDocId}));return(0,o.jsxs)("div",{className:(0,u.A)(t,N.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(k,{siteTitle:s,versionMetadata:a})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(_,{versionLabel:d.label,to:m.path,onClick:function(){return r(d.name)}})})]})}function y(e){var n=e.className,t=(0,C.r)();return t.banner?(0,o.jsx)(B,{className:n,versionMetadata:t}):null}function T(e){var n=e.className,t=(0,C.r)();return t.badge?(0,o.jsx)("span",{className:(0,u.A)(n,N.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}var w=t(9736);const I={tags:"tags_lxY9",tag:"tag_JBsP"};function H(e){var n=e.tags;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,u.A)(I.tags,"padding--none","margin-left--sm"),children:n.map((function(e){return(0,o.jsx)("li",{className:I.tag,children:(0,o.jsx)(w.A,Object.assign({},e))},e.permalink)}))})]})}var O=t(5045);const U={iconEdit:"iconEdit_CzCc"};var E=["className"];function M(e){var n=e.className,t=(0,O.A)(e,E);return(0,o.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(U.iconEdit,n),"aria-hidden":"true"},t,{children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function P(e){var n=e.editUrl;return(0,o.jsxs)(v.A,{to:n,className:N.G.common.editThisPage,children:[(0,o.jsx)(M,{}),(0,o.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var S=t(9812);function R(e){var n=e.lastUpdatedAt,t=new Date(n),a=(0,S.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,o.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function G(e){var n=e.lastUpdatedBy;return(0,o.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:n})},children:" by {user}"})}function V(e){var n=e.lastUpdatedAt,t=e.lastUpdatedBy;return(0,o.jsxs)("span",{className:N.G.common.lastUpdated,children:[(0,o.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,o.jsx)(R,{lastUpdatedAt:n}):"",byUser:t?(0,o.jsx)(G,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const F={lastUpdated:"lastUpdated_vw9u"};function W(e){var n=e.className,t=e.editUrl,a=e.lastUpdatedAt,s=e.lastUpdatedBy;return(0,o.jsxs)("div",{className:(0,u.A)("row",n),children:[(0,o.jsx)("div",{className:"col",children:t&&(0,o.jsx)(P,{editUrl:t})}),(0,o.jsx)("div",{className:(0,u.A)("col",F.lastUpdated),children:(a||s)&&(0,o.jsx)(V,{lastUpdatedAt:a,lastUpdatedBy:s})})]})}function D(){var e=c().metadata,n=e.editUrl,t=e.lastUpdatedAt,a=e.lastUpdatedBy,s=e.tags,i=s.length>0,r=!!(n||t||a);return i||r?(0,o.jsxs)("footer",{className:(0,u.A)(N.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",N.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(H,{tags:s})})}),r&&(0,o.jsx)(W,{className:(0,u.A)("margin-top--sm",N.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:a})]}):null}var z=t(9136),q=t(6755);const Y={tocCollapsibleButton:"tocCollapsibleButton_RNxz",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_NB5l"};var Q=["collapsed"];function J(e){var n=e.collapsed,t=(0,O.A)(e,Q);return(0,o.jsx)("button",Object.assign({type:"button"},t,{className:(0,u.A)("clean-btn",Y.tocCollapsibleButton,!n&&Y.tocCollapsibleButtonExpanded,t.className),children:(0,o.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const K={tocCollapsible:"tocCollapsible_IYo1",tocCollapsibleContent:"tocCollapsibleContent_dUAj",tocCollapsibleExpanded:"tocCollapsibleExpanded_SIrq"};function X(e){var n=e.toc,t=e.className,a=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,z.u)({initialState:!0}),r=i.collapsed,l=i.toggleCollapsed;return(0,o.jsxs)("div",{className:(0,u.A)(K.tocCollapsible,!r&&K.tocCollapsibleExpanded,t),children:[(0,o.jsx)(J,{collapsed:r,onClick:l}),(0,o.jsx)(z.N,{lazy:!0,className:K.tocCollapsibleContent,collapsed:r,children:(0,o.jsx)(q.A,{toc:n,minHeadingLevel:a,maxHeadingLevel:s})})]})}const Z={tocMobile:"tocMobile_G9Rp"};function $(){var e=c(),n=e.toc,t=e.frontMatter;return(0,o.jsx)(X,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(N.G.docs.docTocMobile,Z.tocMobile)})}var ee=t(4962);function ne(){var e=c(),n=e.toc,t=e.frontMatter;return(0,o.jsx)(ee.A,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:N.G.docs.docTocDesktop})}var te=t(1655),ae=t(8227);function se(e){var n,t,a,s,i=e.children,r=(n=c(),t=n.metadata,a=n.frontMatter,s=n.contentTitle,a.hide_title||void 0!==s?null:t.title);return(0,o.jsxs)("div",{className:(0,u.A)(N.G.docs.docMarkdown,"markdown"),children:[r&&(0,o.jsx)("header",{children:(0,o.jsx)(te.A,{as:"h1",children:r})}),(0,o.jsx)(ae.A,{children:i})]})}var ie=t(9387),oe=t(4379),re=t(7859);function le(e){return(0,o.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const ce={breadcrumbHomeIcon:"breadcrumbHomeIcon_TcN9"};function de(){var e=(0,re.Ay)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(v.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(le,{className:ce.breadcrumbHomeIcon})})})}const ue={breadcrumbsContainer:"breadcrumbsContainer_YGIQ"};function me(e){var n=e.children,t=e.href,a="breadcrumbs__link";return e.isLast?(0,o.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,o.jsx)(v.A,{className:a,href:t,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:n})}):(0,o.jsx)("span",{className:a,children:n})}function he(e){var n=e.children,t=e.active,a=e.index,s=e.addMicrodata;return(0,o.jsxs)("li",Object.assign({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,o.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function ve(){var e=(0,ie.OF)(),n=(0,oe.Dt)();return e?(0,o.jsx)("nav",{className:(0,u.A)(N.G.docs.docBreadcrumbs,ue.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,o.jsx)(de,{}),e.map((function(n,t){var a=t===e.length-1,s="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,o.jsx)(he,{active:a,index:t,addMicrodata:!!s,children:(0,o.jsx)(me,{href:s,isLast:a,children:n.label})},t)}))]})}):null}var pe=t(2078);function be(){return(0,o.jsx)(h.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function ge(){return(0,o.jsx)(h.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function xe(){return(0,o.jsx)(pe.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function fe(){return(0,o.jsx)(h.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function je(){return(0,o.jsx)(h.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var Ne=t(1229);function Ae(e){var n=e.className;return(0,o.jsx)(Ne.A,{type:"caution",title:(0,o.jsx)(fe,{}),className:(0,u.A)(n,N.G.common.draftBanner),children:(0,o.jsx)(je,{})})}function Ce(e){var n=e.className;return(0,o.jsx)(Ne.A,{type:"caution",title:(0,o.jsx)(be,{}),className:(0,u.A)(n,N.G.common.unlistedBanner),children:(0,o.jsx)(ge,{})})}function Le(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(xe,{}),(0,o.jsx)(Ce,Object.assign({},e))]})}function ke(e){var n=e.metadata,t=n.unlisted,a=n.frontMatter;return(0,o.jsxs)(o.Fragment,{children:[(t||a.unlisted)&&(0,o.jsx)(Le,{}),a.draft&&(0,o.jsx)(Ae,{})]})}const _e={docItemContainer:"docItemContainer_mRf5",docItemCol:"docItemCol_T4M3"};function Be(e){var n,t,a,s,i,r,l=e.children,d=(n=c(),t=n.frontMatter,a=n.toc,s=(0,m.l)(),i=t.hide_table_of_contents,r=!i&&a.length>0,{hidden:i,mobile:r?(0,o.jsx)($,{}):void 0,desktop:!r||"desktop"!==s&&"ssr"!==s?void 0:(0,o.jsx)(ne,{})}),h=c().metadata;return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!d.hidden&&_e.docItemCol),children:[(0,o.jsx)(ke,{metadata:h}),(0,o.jsx)(y,{}),(0,o.jsxs)("div",{className:_e.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(ve,{}),(0,o.jsx)(T,{}),d.mobile,(0,o.jsx)(se,{children:l}),(0,o.jsx)(D,{})]}),(0,o.jsx)(x,{})]})]}),d.desktop&&(0,o.jsx)("div",{className:"col col--3",children:d.desktop})]})}function ye(e){var n="docs-doc-id-"+e.content.metadata.id,t=e.content;return(0,o.jsx)(l,{content:e.content,children:(0,o.jsxs)(s.e3,{className:n,children:[(0,o.jsx)(d,{}),(0,o.jsx)(Be,{children:(0,o.jsx)(t,{})})]})})}},6755:(e,n,t)=>{t.d(n,{A:()=>x});var a=t(5045),s=t(8101),i=t(596),o=["parentIndex"];function r(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var s=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,a.A)(e,o);t>=0?n[t].children.push(i):s.push(i)})),s}function l(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){var n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function d(e,n){var t,a,s=n.anchorTopOffset,i=e.find((function(e){return c(e).top>=s}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,s.useRef)(0),n=(0,i.p)().navbar.hideOnScroll;return(0,s.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,s.useRef)(void 0),t=u();(0,s.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,s=e.linkActiveClassName,i=e.minHeadingLevel,o=e.maxHeadingLevel;function r(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],s=n;s<=t;s+=1)a.push("h"+s+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),l=d(r,{anchorTopOffset:t.current}),c=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===c)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var h=t(2128),v=t(5105);function p(e){var n=e.toc,t=e.className,a=e.linkClassName,s=e.isChild;return n.length?(0,v.jsx)("ul",{className:s?void 0:t,children:n.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsx)(h.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,v.jsx)(p,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const b=s.memo(p);var g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function x(e){var n=e.toc,t=e.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,h=void 0===u?void 0:u,p=e.minHeadingLevel,x=e.maxHeadingLevel,f=(0,a.A)(e,g),j=(0,i.p)(),N=null!=p?p:j.tableOfContents.minHeadingLevel,A=null!=x?x:j.tableOfContents.maxHeadingLevel,C=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,s.useMemo)((function(){return l({toc:r(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:N,maxHeadingLevel:A});return m((0,s.useMemo)((function(){if(d&&h)return{linkClassName:d,linkActiveClassName:h,minHeadingLevel:N,maxHeadingLevel:A}}),[d,h,N,A])),(0,v.jsx)(b,Object.assign({toc:C,className:o,linkClassName:d},f))}},9812:(e,n,t)=>{t.d(n,{i:()=>s});var a=t(4152);function s(e){void 0===e&&(e={});var n=(0,a.A)().i18n.currentLocale,t=function(){var e=(0,a.A)().i18n,n=e.currentLocale;return e.localeConfigs[n].calendar}();return new Intl.DateTimeFormat(n,Object.assign({calendar:t},e))}},5536:(e,n,t)=>{t.d(n,{A:()=>U});var a=t(5045),s=t(5225),i=t(5974),o=t(3100),r=t(6837),l=t(5181),c=t(8101);const d={codeBlockContainer:"codeBlockContainer_APcc"};var u=t(5105),m=["as"];function h(e){var n=e.as,t=(0,a.A)(e,m),s=(0,o.A)(),c=(0,l.M$)(s);return(0,u.jsx)(n,Object.assign({},t,{style:c,className:(0,i.cn)(t.className,d.codeBlockContainer,r.G.common.codeBlock)}))}const v={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function p(e){var n=e.children,t=e.className;return(0,u.jsx)(h,{as:"pre",tabIndex:0,className:(0,i.cn)(v.codeBlockStandalone,"thin-scrollbar",t),children:(0,u.jsx)("code",{className:v.codeBlockLines,children:n})})}var b=t(8939),g=t(596),x=t(9062),f=t(7533),j=t(2105),N=t(5222),A=t(7202),C=t(8915);const L={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function k(e){var n=e.code,t=e.className,a=(0,c.useState)(!1),s=a[0],o=a[1],r=(0,c.useRef)(void 0),l=(0,c.useCallback)((function(){(0,C.A)(n),o(!0),r.current=window.setTimeout((function(){o(!1)}),1e3)}),[n]);return(0,c.useEffect)((function(){return function(){return window.clearTimeout(r.current)}}),[]),(0,u.jsx)("button",{type:"button","aria-label":s?(0,j.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,j.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,j.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.cn)("clean-btn",t,L.copyButton,s&&L.copyButtonCopied),onClick:l,children:(0,u.jsxs)("span",{className:L.copyButtonIcons,"aria-hidden":"true",children:[(0,u.jsx)(N.A,{className:L.copyButtonIcon}),(0,u.jsx)(A.A,{className:L.copyButtonSuccessIcon})]})})}const _={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function B(e){var n,t=e.line,a=e.classNames,s=e.showLineNumbers,o=e.getLineProps,r=e.getTokenProps;1===t.length&&"\n"===(null==(n=t[0])?void 0:n.content)&&(t[0].content="");var l=o({line:t,className:(0,i.cn)(a,s&&_.codeLine)}),c=t.map((function(e,n){return(0,u.jsx)("span",Object.assign({},r({token:e,key:n})),n)}));return(0,u.jsxs)("span",Object.assign({},l,{children:[s?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:_.codeLineNumber}),(0,u.jsx)("span",{className:_.codeLineContent,children:c})]}):c,(0,u.jsx)("br",{})]}))}var y=t(9475);const T={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function w(e){var n=e.className,t=e.onClick,a=e.isEnabled,s=(0,j.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,u.jsx)("button",{type:"button",onClick:t,className:(0,i.cn)("clean-btn",n,a&&T.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,u.jsx)(y.A,{className:T.wordWrapButtonIcon,"aria-hidden":"true"})})}var I=t(2355);function H(e){var n,t=e.children,a=e.className,s=void 0===a?"":a,r=e.metastring,c=e.title,d=e.showLineNumbers,m=e.language,p=(0,g.p)().prism,j=p.defaultLanguage,N=p.magicComments,A=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=m?m:(0,l.Op)(s))?n:j),C=(0,o.A)(),L=(0,x.f)(),_=(0,l.wt)(r)||c,y=function(e){var n,t,a=(0,b.A)(/icon=(["'])(.*?)\1/,{quote:1,icon:2}),s=null!=(n=null==e||null==(t=e.match(a))||null==(t=t.groups)?void 0:t.icon)?n:"";return s?(0,u.jsx)(f.In,{icon:s,width:"16"}):null}(r),T=(0,l.Li)(t,{metastring:r,language:A,magicComments:N}),H=T.lineClassNames,O=T.code,U=null!=d?d:(0,l._u)(r);return(0,u.jsxs)(h,{as:"div",className:(0,i.cn)(s,A&&!s.includes("language-"+A)&&"language-"+A),children:[_&&(0,u.jsxs)("div",{className:v.codeBlockTitle,children:[y,_,(0,u.jsx)("span",{style:{flex:1,textAlign:"right"},children:A})]}),(0,u.jsxs)("div",{className:v.codeBlockContent,children:[(0,u.jsx)(I.f4,{theme:C,code:O,language:null!=A?A:"text",children:function(e){var n=e.className,t=e.style,a=e.tokens,s=e.getLineProps,o=e.getTokenProps;return(0,u.jsx)("pre",{ref:L.codeBlockRef,className:(0,i.cn)(n,v.codeBlock,"thin-scrollbar"),style:t,children:(0,u.jsx)("code",{className:(0,i.cn)(v.codeBlockLines,U&&v.codeBlockLinesWithNumbering),children:a.map((function(e,n){return(0,u.jsx)(B,{line:e,getLineProps:s,getTokenProps:o,classNames:H[n],showLineNumbers:U},n)}))})})}}),(0,u.jsxs)("div",{className:v.buttonGroup,children:[(L.isEnabled||L.isCodeScrollable)&&(0,u.jsx)(w,{className:v.codeButton,onClick:function(){return L.toggle()},isEnabled:L.isEnabled}),(0,u.jsx)(k,{className:v.codeButton,code:O})]})]})]})}var O=["children"];function U(e){var n=e.children,t=(0,a.A)(e,O),i=(0,s.A)(),o=function(e){return c.Children.toArray(e).some((function(e){return(0,c.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),r="string"==typeof o?H:p;return(0,u.jsx)(r,Object.assign({},t,{children:o}),String(i))}},4962:(e,n,t)=>{t.d(n,{A:()=>b});var a=t(5045),s=t(2020),i=t(9043),o=t(8101),r=function(){var e=(0,o.useState)(0),n=e[0],t=e[1],a=(0,o.useRef)(null),r=(0,s.L)({container:a}).scrollYProgress;return(0,o.useLayoutEffect)((function(){a.current=document.getElementById("__blog-post-container")}),[]),(0,i.L)(r,"change",(function(e){t(e)})),{readPercent:(0,o.useMemo)((function(){return Math.round(100*n)}),[n])}},l=t(5974),c=t(6755),d=t(4195);const u={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs",hr:"hr_UhE0",percent:"percent_H6RK"};var m=t(5105),h=["className"],v="table-of-contents__link toc-highlight",p="table-of-contents__link--active";function b(e){var n=e.className,t=(0,a.A)(e,h),s=r().readPercent;return(0,m.jsxs)(d.P.div,{className:(0,l.cn)(u.tableOfContents,"thin-scrollbar",n),initial:{opacity:1e-4,x:100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:3},children:[(0,m.jsx)(c.A,Object.assign({},t,{className:"table-of-contents pl-0",linkClassName:v,linkActiveClassName:p})),(0,m.jsx)("hr",{className:u.hr}),(0,m.jsxs)("span",{className:u.percent,children:[s+"%"," "]})]})}},9736:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(2128),s=t(5974);t(8101);const i={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var o=t(5105);function r(e){var n=e.permalink,t=e.label,r=e.count,l=e.className;return(0,o.jsxs)(a.A,{href:n,className:(0,s.cn)(i.tag,r?i.tagWithCount:i.tagRegular,l),children:[t,r&&(0,o.jsx)("span",{children:r})]})}},9043:(e,n,t)=>{t.d(n,{L:()=>s});var a=t(8101);function s(e,n,t){(0,a.useInsertionEffect)((()=>e.on(n,t)),[e,n,t])}}}]);