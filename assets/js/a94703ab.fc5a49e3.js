"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9048],{4746:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(8101),i=n(3394),o=n(2105),r=n(6837),s=n(2622),l=n(1728);const c={backToTopButton:"backToTopButton_tR6u",backToTopButtonShow:"backToTopButtonShow_R3xW"};var d=n(5105);function u(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),i=n[0],o=n[1],r=(0,a.useRef)(!1),c=(0,s.gk)(),d=c.startScroll,u=c.cancelScroll;return(0,s.Mq)((function(e,n){var a=e.scrollY,i=null==n?void 0:n.scrollY;i&&(r.current?r.current=!1:a>=i?(u(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,l.$)((function(e){e.location.hash&&(r.current=!0,o(!1))})),{shown:i,scrollToTop:function(){return d(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return(0,d.jsx)("button",{"aria-label":(0,o.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.A)("clean-btn",r.G.common.backToTopButton,c.backToTopButton,t&&c.backToTopButtonShow),type:"button",onClick:n})}},6699:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(8101),i=n(3394),o=n(2298),r=n(6837),s=n(9387),l=n(5166),c=n(4746),d=n(4083),u=n(5234),m=n(6431),b=n(596),h=n(7104),p=n(2105),x=n(5105);function v(e){return(0,x.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,x.jsxs)("g",{fill:"#7a7a7a",children:[(0,x.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,x.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}const f="collapseSidebarButton_ia5S",j="collapseSidebarButtonIcon_C_4Z";function g(e){var t=e.onClick;return(0,x.jsx)("button",{type:"button",title:(0,p.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.A)("button button--secondary button--outline",f),onClick:t,children:(0,x.jsx)(v,{className:j})})}var A=n(3875),C=n(2622),_=n(5045),k=n(8020),S=Symbol("EmptyContext"),T=a.createContext(S);function N(e){var t=e.children,n=(0,a.useState)(null),i=n[0],o=n[1],r=(0,a.useMemo)((function(){return{expandedItem:i,setExpandedItem:o}}),[i]);return(0,x.jsx)(T.Provider,{value:r,children:t})}var I=n(9136),y=n(4379),w=n(2128),B=n(5225),L=["item","onItemClick","activePath","level","index"];function E(e){var t=e.collapsed,n=e.categoryLabel,a=e.onClick;return(0,x.jsx)("button",{"aria-label":t?(0,p.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,p.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function M(e){var t=e.item,n=e.onItemClick,o=e.activePath,l=e.level,c=e.index,d=(0,_.A)(e,L),u=t.items,m=t.label,h=t.collapsible,p=t.className,v=t.href,f=(0,b.p)().docs.sidebar.autoCollapseCategories,j=function(e){var t=(0,B.A)();return(0,a.useMemo)((function(){return e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,s.Nr)(e):void 0}),[e,t])}(t),g=(0,s.w8)(t,o),A=(0,y.ys)(v,o),C=(0,I.u)({initialState:function(){return!!h&&(!g&&t.collapsed)}}),N=C.collapsed,M=C.setCollapsed,H=function(){var e=(0,a.useContext)(T);if(e===S)throw new k.dV("DocSidebarItemsExpandedStateProvider");return e}(),R=H.expandedItem,P=H.setExpandedItem,G=function(e){void 0===e&&(e=!N),P(e?null:c),M(e)};return function(e){var t=e.isActive,n=e.collapsed,i=e.updateCollapsed,o=(0,k.ZC)(t);(0,a.useEffect)((function(){t&&!o&&n&&i(!1)}),[t,o,n,i])}({isActive:g,collapsed:N,updateCollapsed:G}),(0,a.useEffect)((function(){h&&null!=R&&R!==c&&f&&M(!0)}),[h,R,c,M,f]),(0,x.jsxs)("li",{className:(0,i.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":N},p),children:[(0,x.jsxs)("div",{className:(0,i.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":A}),children:[(0,x.jsx)(w.A,Object.assign({className:(0,i.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!v&&h,"menu__link--active":g}),onClick:h?function(e){null==n||n(t),v?G(!1):(e.preventDefault(),G())}:function(){null==n||n(t)},"aria-current":A?"page":void 0,role:h&&!v?"button":void 0,"aria-expanded":h&&!v?!N:void 0,href:h?null!=j?j:"#":j},d,{children:m})),v&&h&&(0,x.jsx)(E,{collapsed:N,categoryLabel:m,onClick:function(e){e.preventDefault(),G()}})]}),(0,x.jsx)(I.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:N,children:(0,x.jsx)(K,{items:u,tabIndex:N?-1:0,onItemClick:n,activePath:o,level:l+1})})]})}var H=n(696),R=n(437);const P="menuExternalLink_A6AY";var G=["item","onItemClick","activePath","level","index"];function O(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=e.level,l=(e.index,(0,_.A)(e,G)),c=t.href,d=t.label,u=t.className,m=t.autoAddBaseUrl,b=(0,s.w8)(t,a),h=(0,H.A)(c);return(0,x.jsx)("li",{className:(0,i.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),children:(0,x.jsxs)(w.A,Object.assign({className:(0,i.A)("menu__link",!h&&P,{"menu__link--active":b}),autoAddBaseUrl:m,"aria-current":b?"page":void 0,to:c},h&&{onClick:n?function(){return n(t)}:void 0},l,{children:[d,!h&&(0,x.jsx)(R.A,{})]}))},d)}const W="menuHtmlItem_TAIk";function D(e){var t=e.item,n=e.level,a=e.index,o=t.value,s=t.defaultStyle,l=t.className;return(0,x.jsx)("li",{className:(0,i.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(n),s&&[W,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:o}},a)}var z=["item"];function F(e){var t=e.item,n=(0,_.A)(e,z);switch(t.type){case"category":return(0,x.jsx)(M,Object.assign({item:t},n));case"html":return(0,x.jsx)(D,Object.assign({item:t},n));default:return(0,x.jsx)(O,Object.assign({item:t},n))}}var V=["items"];function Y(e){var t=e.items,n=(0,_.A)(e,V),a=(0,s.Y)(t,n.activePath);return(0,x.jsx)(N,{children:a.map((function(e,t){return(0,x.jsx)(F,Object.assign({item:e,index:t},n),t)}))})}const K=(0,a.memo)(Y),U="menu_cnpp",X="menuWithAnnouncementBar_KCyv";function q(e){var t=e.path,n=e.sidebar,o=e.className,s=function(){var e=(0,A.M)().isActive,t=(0,a.useState)(e),n=t[0],i=t[1];return(0,C.Mq)((function(t){var n=t.scrollY;e&&i(0===n)}),[e]),e&&n}();return(0,x.jsx)("nav",{"aria-label":(0,p.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.A)("menu thin-scrollbar",U,s&&X,o),children:(0,x.jsx)("ul",{className:(0,i.A)(r.G.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(K,{items:n,activePath:t,level:1})})})}const Z="sidebar_pIJm",J="sidebarWithHideableNavbar_ojcl",$="sidebarHidden_RcKR",Q="sidebarLogo_Mcun";function ee(e){var t=e.path,n=e.sidebar,a=e.onCollapse,o=e.isHidden,r=(0,b.p)(),s=r.navbar.hideOnScroll,l=r.docs.sidebar.hideable;return(0,x.jsxs)("div",{className:(0,i.A)(Z,s&&J,o&&$),children:[s&&(0,x.jsx)(h.A,{tabIndex:-1,className:Q}),(0,x.jsx)(q,{path:t,sidebar:n}),l&&(0,x.jsx)(g,{onClick:a})]})}const te=a.memo(ee);var ne=n(8798),ae=n(1443),ie=function(e){var t=e.sidebar,n=e.path,a=(0,ae.M)();return(0,x.jsx)("ul",{className:(0,i.A)(r.G.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(K,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function oe(e){return(0,x.jsx)(ne.GX,{component:ie,props:e})}const re=a.memo(oe);function se(e){var t=(0,m.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,x.jsxs)(x.Fragment,{children:[n&&(0,x.jsx)(te,Object.assign({},e)),a&&(0,x.jsx)(re,Object.assign({},e))]})}const le={expandButton:"expandButton_ptC7",expandButtonIcon:"expandButtonIcon_XYfw"};function ce(e){var t=e.toggleSidebar;return(0,x.jsx)("div",{className:le.expandButton,title:(0,p.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,x.jsx)(v,{className:le.expandButtonIcon})})}const de={docSidebarContainer:"docSidebarContainer_EPc3",docSidebarContainerHidden:"docSidebarContainerHidden_m0St",sidebarViewport:"sidebarViewport_LByN"};function ue(e){var t,n=e.children,i=(0,l.t)();return(0,x.jsx)(a.Fragment,{children:n},null!=(t=null==i?void 0:i.name)?t:"noSidebar")}function me(e){var t=e.sidebar,n=e.hiddenSidebarContainer,o=e.setHiddenSidebarContainer,s=(0,u.zy)().pathname,l=(0,a.useState)(!1),c=l[0],m=l[1],b=(0,a.useCallback)((function(){c&&m(!1),!c&&(0,d.O)()&&m(!0),o((function(e){return!e}))}),[o,c]);return(0,x.jsx)("aside",{className:(0,i.A)(r.G.docs.docSidebarContainer,de.docSidebarContainer,n&&de.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(de.docSidebarContainer)&&n&&m(!0)},children:(0,x.jsx)(ue,{children:(0,x.jsxs)("div",{className:(0,i.A)(de.sidebarViewport,c&&de.sidebarViewportHidden),children:[(0,x.jsx)(se,{sidebar:t,path:s,onCollapse:b,isHidden:c}),c&&(0,x.jsx)(ce,{toggleSidebar:b})]})})})}const be={docMainContainer:"docMainContainer_oDoz",docMainContainerEnhanced:"docMainContainerEnhanced_KxrX",docItemWrapperEnhanced:"docItemWrapperEnhanced_gvfy"};function he(e){var t=e.hiddenSidebarContainer,n=e.children,a=(0,l.t)();return(0,x.jsx)("main",{className:(0,i.A)(be.docMainContainer,(t||!a)&&be.docMainContainerEnhanced),children:(0,x.jsx)("div",{className:(0,i.A)("container padding-top--md padding-bottom--lg",be.docItemWrapper,t&&be.docItemWrapperEnhanced),children:n})})}const pe={docRoot:"docRoot_duKg",docsWrapper:"docsWrapper_bwUz"};function xe(e){var t=e.children,n=(0,l.t)(),i=(0,a.useState)(!1),o=i[0],r=i[1];return(0,x.jsxs)("div",{className:pe.docsWrapper,children:[(0,x.jsx)(c.A,{}),(0,x.jsxs)("div",{className:pe.docRoot,children:[n&&(0,x.jsx)(me,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),(0,x.jsx)(he,{hiddenSidebarContainer:o,children:t})]})]})}var ve=n(6986);function fe(e){var t=(0,s.B5)(e);if(!t)return(0,x.jsx)(ve.A,{});var n=t.docElement,a=t.sidebarName,c=t.sidebarItems;return(0,x.jsx)(o.e3,{className:(0,i.A)(r.G.page.docsDocPage),children:(0,x.jsx)(l.V,{name:a,items:c,children:(0,x.jsx)(xe,{children:n})})})}},6986:(e,t,n)=>{n.d(t,{A:()=>s});n(8101);var a=n(3394),i=n(2105),o=n(1655),r=n(5105);function s(e){var t=e.className;return(0,r.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,r.jsx)(o.A,{as:"h1",className:"hero__title",children:(0,r.jsx)(i.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);