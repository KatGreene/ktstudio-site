(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6943],{5222:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});n(8101);var r=n(5105);function s(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}},7202:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});n(8101);var r=n(5105);function s(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}},9475:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});n(8101);var r=n(5105);function s(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}},9062:(e,t,n)=>{"use strict";n.d(t,{f:()=>i});var r=n(8101),s=n(8020),o={attributes:!0,characterData:!0,childList:!0,subtree:!0};function a(e,t){var n=(0,r.useState)(),a=n[0],i=n[1],c=(0,r.useCallback)((function(){var t;i(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,i]);(0,r.useEffect)((function(){c()}),[c]),function(e,t,n){void 0===n&&(n=o);var a=(0,s._q)(t),i=(0,s.Be)(n);(0,r.useEffect)((function(){var t=new MutationObserver(a);return e&&t.observe(e,i),function(){return t.disconnect()}}),[e,a,i])}(a,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function i(){var e=(0,r.useState)(!1),t=e[0],n=e[1],s=(0,r.useState)(!1),o=s[0],i=s[1],c=(0,r.useRef)(null),l=(0,r.useCallback)((function(){var e=c.current.querySelector("code");t?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),n((function(e){return!e}))}),[c,t]),u=(0,r.useCallback)((function(){var e=c.current,t=e.scrollWidth>e.clientWidth||c.current.querySelector("code").hasAttribute("style");i(t)}),[c]);return a(c,u),(0,r.useEffect)((function(){u()}),[t,u]),(0,r.useEffect)((function(){return window.addEventListener("resize",u,{passive:!0}),function(){window.removeEventListener("resize",u)}}),[u]),{codeBlockRef:c,isEnabled:t,isCodeScrollable:o,toggle:l}}},3100:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(4299),s=n(596);function o(){var e=(0,s.p)().prism,t=(0,r.G)().colorMode,n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}},5181:(e,t,n)=>{"use strict";n.d(t,{Li:()=>f,M$:()=>h,Op:()=>g,_u:()=>m,wt:()=>p});var r=n(8939),s=n(4809),o=n.n(s),a=(0,r.A)(/title=(["'])(.*?)\1/,{quote:1,title:2}),i=(0,r.A)(/\{([\d,-]+)\}/,{range:1}),c={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},l=Object.assign({},c,{lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}}),u=Object.keys(c);function d(e,t){var n=e.map((function(e){var n=l[e],r=n.start,s=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+s+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function p(e){var t,n;return null!=(t=null==e||null==(n=e.match(a))?void 0:n.groups.title)?t:""}function m(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function g(e){var t=e.split(" ").find((function(e){return e.startsWith("language-")}));return null==t?void 0:t.replace(/language-/,"")}function f(e,t){var n=e.replace(/\n$/,""),r=t.language,s=t.magicComments,a=t.metastring;if(a&&i.test(a)){var c=a.match(i).groups.range;if(0===s.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var l=s[0].className,p=o()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[l]]}));return{lineClassNames:Object.fromEntries(p),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var m=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return d(["js","jsBlock"],t);case"jsx":case"tsx":return d(["js","jsBlock","jsx"],t);case"html":return d(["js","jsBlock","html"],t);case"python":case"py":case"bash":return d(["bash"],t);case"markdown":case"md":return d(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return d(["tex"],t);case"lua":case"haskell":return d(["lua"],t);case"sql":return d(["lua","jsBlock"],t);case"wasm":return d(["wasm"],t);case"vb":case"vba":case"visual-basic":return d(["vb","rem"],t);case"vbnet":return d(["vbnet","rem"],t);case"batch":return d(["rem"],t);case"basic":return d(["rem","f90"],t);case"fsharp":return d(["js","ml"],t);case"ocaml":case"sml":return d(["ml"],t);case"fortran":return d(["f90"],t);case"cobol":return d(["cobol"],t);default:return d(u,t)}}(r,s),g=n.split("\n"),f=Object.fromEntries(s.map((function(e){return[e.className,{start:0,range:""}]}))),h=Object.fromEntries(s.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),b=Object.fromEntries(s.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),v=Object.fromEntries(s.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),x=0;x<g.length;){var w=g[x].match(m);if(w){var j=w.slice(1).find((function(e){return void 0!==e}));h[j]?f[h[j]].range+=x+",":b[j]?f[b[j]].start=x:v[j]&&(f[v[j]].range+=f[v[j]].start+"-"+(x-1)+","),g.splice(x,1)}else x+=1}n=g.join("\n");var k={};return Object.entries(f).forEach((function(e){var t=e[0],n=e[1].range;o()(n).forEach((function(e){null!=k[e]||(k[e]=[]),k[e].push(t)}))})),{lineClassNames:k,code:n}}function h(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],s=e[1],o=t[r];o&&"string"==typeof s&&(n[o]=s)})),n}},6296:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(5536),s=n(5063),o=n(8101),a=n(2128),i=n(4195);const c={siteInfo:"siteInfo_eYy8",codeBlock:"codeBlock_cKnR"};var l=n(5105),u="\u53cb\u94fe",d="\u6709\u5f88\u591a\u826f\u53cb\uff0c\u80dc\u4e8e\u6709\u5f88\u591a\u8d22\u5bcc\u3002",p="title: '\u6127\u600d'\ndescription: '\u9053\u963b\u4e14\u957f\uff0c\u884c\u5219\u5c06\u81f3'\nwebsite: 'https://kuizuo.cn'\navatar: 'https://kuizuo.cn/img/logo.png'\n",m=[{title:"\u5cf0\u534e\u524d\u7aef\u5de5\u7a0b\u5e08",description:"\u81f4\u529b\u4e8e\u5e2e\u52a9\u4f60\u4ee5\u6700\u76f4\u89c2\u3001\u6700\u5feb\u901f\u7684\u65b9\u5f0f\u5b66\u4f1a\u524d\u7aef\u5f00\u53d1",website:"https://zxuqian.cn",avatar:"/img/friend/zxuqian.png"},{title:"Mas0n",description:"\u68a6\u60f3\u662f\u54b8\u9c7c",website:"https://mas0n.org/",avatar:"/img/friend/mas0n.png"},{title:"Jetzihan",description:"A bug maker.",website:"https://www.jet-lab.site/",avatar:"/img/friend/jetzihan.png"},{title:"Pincman",description:"\u4e2d\u5e74\u8001\u7801\u519c,\u4e13\u6ce8\u4e8e\u5168\u6808\u5f00\u53d1\u4e0e\u6559\u5b66",website:"https://pincman.com",avatar:"/img/friend/pincman.png"},{title:"Opacity",description:"\u52a9\u529b\u6bcf\u4e00\u4e2a\u68a6\u60f3",website:"https://www.opacity.ink",avatar:"/img/friend/opacity.png"},{title:"\u9759\u304b\u306a\u68ee",description:"\u81f4\u865a\u6781\uff0c\u5b88\u9759\u7b03",website:"https://innei.in",avatar:"/img/friend/innei.png"},{title:"AprilNEA",description:"Talk is cheap, show me the code",website:"https://sku.moe/",avatar:"/img/friend/aprilNEA.png"},{title:"Simon He",description:"Front-end development, Open source",website:"https://simonme.netlify.app",avatar:"/img/friend/simonme.png"},{title:"SkyWT",description:"\u70ed\u7231\u4e0e\u6fc0\u60c5\u6c38\u4e0d\u6b62\u606f\u3002",website:"https://skywt.cn",avatar:"/img/friend/skywt.png"},{title:"Licodeao",description:"The water flows incessantly, without vying for precedence.",website:"https://www.licodeao.top",avatar:"/img/friend/licodeao.png"},{title:"\u4e91\u5c0f\u9038",description:"\u4e0d\u79ef\u8dec\u6b65\uff0c\u65e0\u4ee5\u81f3\u5343\u91cc",website:"https://www.gerenbiji.com",avatar:"https://www.gerenbiji.com/img/logo.jpg"},{title:"CWorld Blog",description:"\u6c42\u77e5\u82e5\u611a\uff0c\u865a\u6000\u82e5\u8c37",website:"https://cworld.top",avatar:"/img/friend/cworld.png"},{title:"Fernando Prieto",description:"Cloud Engineer, Open Source, AI Enthusiast.",website:"https://fernandogprieto.com",avatar:"https://fernandogprieto.com/img/logo.png"},{title:"\u5c1a\u5b87",description:"\u5fc3\u6000\u7406\u60f3\uff0c\u4ef0\u671b\u661f\u7a7a\uff0c\u57cb\u5934\u82e6\u5e72",website:"https://www.disnox.top",avatar:"/img/friend/disnox.png"},{title:"Meoo",description:"\u4e00\u676f\u8336\uff0c\u4e00\u6839\u7f51\u7ebf\uff0c\u4e00\u53f0\u7535\u8111",website:"https://cxorz.com",avatar:"/img/friend/meoo.png"},{title:"Shake",description:"\u4e16\u754c\u7ee7\u7eed\u70ed\u95f9\uff0c\u613f\u4f60\u4e0d\u53d8\u6a21\u6837\uff0c\u52c7\u6562\u4e14\u81ea\u7531\ud83d\ude03",website:"https://www.shaking.site",avatar:"/img/friend/shake.png"},{title:"\u9cb8\u843d",description:"\u5fc3\u4e2d\u65e0\u5973\u4eba\uff0c\u4ee3\u7801\u81ea\u7136\u795e",website:"http://www.xiaojunnan.cn",avatar:"/img/friend/xiaojunnan.png"},{title:"LineXic\u4e66\u5c4b",description:"\u5ff5\u5ff5\u4e0d\u5fd8\uff0c\u5fc5\u6709\u56de\u54cd",website:"https://linexic.top",avatar:"/img/friend/linexic.png"}];function g(){return(0,l.jsx)("div",{className:"w-96 rounded-[var(--ifm-pre-border-radius)] border border-solid border-black border-opacity-10 text-left text-sm leading-none",children:(0,l.jsx)(r.A,{language:"yaml",title:"\u672c\u7ad9\u4fe1\u606f",className:c.codeBlock,children:p})})}function f(){return(0,l.jsxs)("section",{className:"margin-top--lg margin-bottom--lg text-center",children:[(0,l.jsx)("h1",{children:u}),(0,l.jsx)("p",{children:d})]})}var h=(0,o.memo)((function(e){var t=e.friend;return(0,l.jsxs)("li",{className:"relative flex min-h-24 cursor-pointer flex-row items-center overflow-hidden rounded-card bg-card px-4 py-1 transition-all duration-300 hover:translate-y-[-5px] hover:scale-[1.01] hover:bg-[rgba(229,231,235,0.3)] hover:shadow-[0_3px_10px_0_rgba(164,190,217,0.3)]",children:[(0,l.jsx)("img",{src:"string"==typeof t.avatar?t.avatar:t.avatar.src.src,alt:t.title,className:"size-16 min-w-16 rounded-full object-contain"}),(0,l.jsxs)("div",{className:"pl-4",children:[(0,l.jsx)("div",{className:"mb-1 flex items-center",children:(0,l.jsx)("h4",{className:"mb-0 flex-1",children:(0,l.jsx)(a.A,{to:t.website,rel:"",className:"from-ifm-color-primary to-ifm-color-primary bg-gradient-to-b bg-[length:0%_1px] bg-[0%_100%] bg-no-repeat no-underline transition-[background-size] duration-200 ease-out hover:bg-[length:100%_1px] focus:bg-[length:100%_1px]",children:t.title})})}),(0,l.jsx)("p",{className:"m-0 line-clamp-2 w-full overflow-hidden text-sm leading-[1.66]",children:t.description})]})]})}));function b(){return(0,l.jsx)("section",{className:"my-8",children:(0,l.jsx)("div",{className:"mx-auto max-w-6xl px-4 py-2",children:(0,l.jsx)("ul",{className:"grid grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3",children:m.map((function(e){return(0,l.jsx)(h,{friend:e},e.avatar)}))})})})}function v(){var e=(0,o.useRef)(null);return(0,l.jsx)(s.A,{title:u,description:d,wrapperClassName:"bg-background",children:(0,l.jsxs)(i.P.main,{ref:e,className:"my-4",children:[(0,l.jsx)(f,{}),(0,l.jsx)(b,{}),(0,l.jsx)(i.P.div,{drag:!0,dragConstraints:e,className:"sticky bottom-4 left-4 inline-flex cursor-move text-right",children:(0,l.jsx)(g,{})})]})})}},5536:(e,t,n)=>{"use strict";n.d(t,{A:()=>I});var r=n(5045),s=n(5225),o=n(5974),a=n(3100),i=n(6837),c=n(5181),l=n(8101);const u={codeBlockContainer:"codeBlockContainer_APcc"};var d=n(5105),p=["as"];function m(e){var t=e.as,n=(0,r.A)(e,p),s=(0,a.A)(),l=(0,c.M$)(s);return(0,d.jsx)(t,Object.assign({},n,{style:l,className:(0,o.cn)(n.className,u.codeBlockContainer,i.G.common.codeBlock)}))}const g={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function f(e){var t=e.children,n=e.className;return(0,d.jsx)(m,{as:"pre",tabIndex:0,className:(0,o.cn)(g.codeBlockStandalone,"thin-scrollbar",n),children:(0,d.jsx)("code",{className:g.codeBlockLines,children:t})})}var h=n(8939),b=n(596),v=n(9062),x=n(7533),w=n(2105),j=n(5222),k=n(7202),y=n(8915);const N={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function B(e){var t=e.code,n=e.className,r=(0,l.useState)(!1),s=r[0],a=r[1],i=(0,l.useRef)(void 0),c=(0,l.useCallback)((function(){(0,y.A)(t),a(!0),i.current=window.setTimeout((function(){a(!1)}),1e3)}),[t]);return(0,l.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),(0,d.jsx)("button",{type:"button","aria-label":s?(0,w.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,w.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,w.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.cn)("clean-btn",n,N.copyButton,s&&N.copyButtonCopied),onClick:c,children:(0,d.jsxs)("span",{className:N.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(j.A,{className:N.copyButtonIcon}),(0,d.jsx)(k.A,{className:N.copyButtonSuccessIcon})]})})}const C={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function A(e){var t,n=e.line,r=e.classNames,s=e.showLineNumbers,a=e.getLineProps,i=e.getTokenProps;1===n.length&&"\n"===(null==(t=n[0])?void 0:t.content)&&(n[0].content="");var c=a({line:n,className:(0,o.cn)(r,s&&C.codeLine)}),l=n.map((function(e,t){return(0,d.jsx)("span",Object.assign({},i({token:e,key:t})),t)}));return(0,d.jsxs)("span",Object.assign({},c,{children:[s?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:C.codeLineNumber}),(0,d.jsx)("span",{className:C.codeLineContent,children:l})]}):l,(0,d.jsx)("br",{})]}))}var L=n(9475);const E={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function _(e){var t=e.className,n=e.onClick,r=e.isEnabled,s=(0,w.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:n,className:(0,o.cn)("clean-btn",t,r&&E.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,d.jsx)(L.A,{className:E.wordWrapButtonIcon,"aria-hidden":"true"})})}var O=n(2355);function T(e){var t,n=e.children,r=e.className,s=void 0===r?"":r,i=e.metastring,l=e.title,u=e.showLineNumbers,p=e.language,f=(0,b.p)().prism,w=f.defaultLanguage,j=f.magicComments,k=function(e){return null==e?void 0:e.toLowerCase()}(null!=(t=null!=p?p:(0,c.Op)(s))?t:w),y=(0,a.A)(),N=(0,v.f)(),C=(0,c.wt)(i)||l,L=function(e){var t,n,r=(0,h.A)(/icon=(["'])(.*?)\1/,{quote:1,icon:2}),s=null!=(t=null==e||null==(n=e.match(r))||null==(n=n.groups)?void 0:n.icon)?t:"";return s?(0,d.jsx)(x.In,{icon:s,width:"16"}):null}(i),E=(0,c.Li)(n,{metastring:i,language:k,magicComments:j}),T=E.lineClassNames,S=E.code,I=null!=u?u:(0,c._u)(i);return(0,d.jsxs)(m,{as:"div",className:(0,o.cn)(s,k&&!s.includes("language-"+k)&&"language-"+k),children:[C&&(0,d.jsxs)("div",{className:g.codeBlockTitle,children:[L,C,(0,d.jsx)("span",{style:{flex:1,textAlign:"right"},children:k})]}),(0,d.jsxs)("div",{className:g.codeBlockContent,children:[(0,d.jsx)(O.f4,{theme:y,code:S,language:null!=k?k:"text",children:function(e){var t=e.className,n=e.style,r=e.tokens,s=e.getLineProps,a=e.getTokenProps;return(0,d.jsx)("pre",{ref:N.codeBlockRef,className:(0,o.cn)(t,g.codeBlock,"thin-scrollbar"),style:n,children:(0,d.jsx)("code",{className:(0,o.cn)(g.codeBlockLines,I&&g.codeBlockLinesWithNumbering),children:r.map((function(e,t){return(0,d.jsx)(A,{line:e,getLineProps:s,getTokenProps:a,classNames:T[t],showLineNumbers:I},t)}))})})}}),(0,d.jsxs)("div",{className:g.buttonGroup,children:[(N.isEnabled||N.isCodeScrollable)&&(0,d.jsx)(_,{className:g.codeButton,onClick:function(){return N.toggle()},isEnabled:N.isEnabled}),(0,d.jsx)(B,{className:g.codeButton,code:S})]})]})]})}var S=["children"];function I(e){var t=e.children,n=(0,r.A)(e,S),o=(0,s.A)(),a=function(e){return l.Children.toArray(e).some((function(e){return(0,l.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof a?T:f;return(0,d.jsx)(i,Object.assign({},n,{children:a}),String(o))}},4809:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,s,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8915:(e,t,n)=>{"use strict";function r(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";var a=document.getSelection(),i=a.rangeCount>0&&a.getRangeAt(0);r.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(l){}return s.remove(),i&&(a.removeAllRanges(),a.addRange(i)),o&&o.focus(),c}n.d(t,{A:()=>r})}}]);