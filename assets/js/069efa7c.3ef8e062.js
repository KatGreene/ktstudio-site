"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4858],{7025:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"skill/js&ts/polymorphic-elimination-conditional-branching-refactor","title":"\u91cd\u6784\u4e4b\u591a\u6001\u6d88\u9664\u6761\u4ef6\u5206\u652f","description":"\u6700\u8fd1\u7ffb\u770b\u4e4b\u524d\u5199\u8fc7\u4e00\u4e2a\u9879\u76ee\uff0c\u5176\u4e2d\u7528\u5230\u4e86\u5927\u91cf\u7684 switch-case \u5206\u652f\u8bed\u53e5\uff0c\u5927\u81f4\u7684\u4ee3\u7801\u7ed3\u6784\u5982\u4e0b","source":"@site/docs/skill/js&ts/\u91cd\u6784\u4e4b\u591a\u6001\u53d6\u4ee3\u6761\u4ef6\u5206\u652f.md","sourceDirName":"skill/js&ts","slug":"/polymorphic-elimination-conditional-branching-refactor","permalink":"/docs/polymorphic-elimination-conditional-branching-refactor","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"javascript","permalink":"/docs/tags/javascript"},{"inline":true,"label":"refactor","permalink":"/docs/tags/refactor"}],"version":"current","frontMatter":{"id":"polymorphic-elimination-conditional-branching-refactor","slug":"/polymorphic-elimination-conditional-branching-refactor","title":"\u91cd\u6784\u4e4b\u591a\u6001\u6d88\u9664\u6761\u4ef6\u5206\u652f","date":"2021-12-07T00:00:00.000Z","authors":"kuizuo","tags":["javascript","refactor"],"keywords":["javascript","refactor"]},"sidebar":"skill","previous":{"title":"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0eJSON\u4e92\u8f6c","permalink":"/docs/querystring-and-json-convert"},"next":{"title":"\u91cd\u6784\u4e4b\u5bf9\u8c61\u6620\u5c04\u7c7b\u578b","permalink":"/docs/type-of-object-map-refactor"}}');var s=r(5105),c=r(9999);const o={id:"polymorphic-elimination-conditional-branching-refactor",slug:"/polymorphic-elimination-conditional-branching-refactor",title:"\u91cd\u6784\u4e4b\u591a\u6001\u6d88\u9664\u6761\u4ef6\u5206\u652f",date:new Date("2021-12-07T00:00:00.000Z"),authors:"kuizuo",tags:["javascript","refactor"],keywords:["javascript","refactor"]},a=void 0,i={},u=[{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"\u91cd\u6784\u4ee3\u7801",id:"\u91cd\u6784\u4ee3\u7801",level:2},{value:"\u5229\u7528\u591a\u6001\u6765\u6d88\u9664\u5206\u652f",id:"\u5229\u7528\u591a\u6001\u6765\u6d88\u9664\u5206\u652f",level:2}];function l(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u6700\u8fd1\u7ffb\u770b\u4e4b\u524d\u5199\u8fc7\u4e00\u4e2a\u9879\u76ee\uff0c\u5176\u4e2d\u7528\u5230\u4e86\u5927\u91cf\u7684 switch-case \u5206\u652f\u8bed\u53e5\uff0c\u5927\u81f4\u7684\u4ee3\u7801\u7ed3\u6784\u5982\u4e0b"}),"\n",(0,s.jsx)(e.h2,{id:"\u4ee3\u7801\u6f14\u793a",children:"\u4ee3\u7801\u6f14\u793a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"class A {\n  run() {\n    console.log(A.name, 'run1!');\n  }\n}\n\nclass B {\n  run() {\n    console.log(B.name, 'run2!');\n  }\n}\n\nclass C {\n  run() {\n    console.log(C.name, 'run3!');\n  }\n}\n\nfunction fun1(type) {\n  let temp;\n  switch (type) {\n    case 1:\n      temp = new A();\n      break;\n    case 2:\n      temp = new B();\n      break;\n    case 3:\n      temp = new C();\n      break;\n    default:\n      throw new Error('Unsupported types');\n      break;\n  }\n  temp.run();\n}\n\nfun1(1);\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u53d1\u73b0\u6bcf\u4e2a\u5206\u652f\u90fd\u6709\u4e2a\u5171\u540c\u7684\u7279\u70b9\uff0c\u901a\u8fc7\u6784\u9020\u51fd\u6570\u5b9e\u4f8b\u5316\u5bf9\u8c61 a\uff0c\u8c03\u7528",(0,s.jsx)(e.code,{children:"a.task"}),"\u65b9\u6cd5"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"temp = new A()\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4f46\u73b0\u5728\u6709\u4e00\u4e2a\u9700\u6c42 \u7ed9 A,B,C \u4e09\u4e2a\u7c7b\u5206\u522b\u52a0\u4e0a",(0,s.jsx)(e.code,{children:"getUser"}),"\u65b9\u6cd5\uff0c\u7528\u6765\u83b7\u53d6\u4f20\u5165\u7684 user\uff0c\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"class A {\n  constructor(user) {\n    this.user = user;\n  }\n  getUser() {\n    return this.user;\n  }\n  run() {\n    console.log(A.name, 'run1!');\n  }\n}\n\nclass B {\n  constructor(user) {\n    this.user = user;\n  }\n  getUser() {\n    return this.user;\n  }\n  run() {\n    console.log(B.name, 'run2!');\n  }\n}\n\nclass C {\n  constructor(user) {\n    this.user = user;\n  }\n  getUser() {\n    return this.user;\n  }\n  run() {\n    console.log(C.name, 'run3!');\n  }\n}\n\nfunction fun2(type) {\n  let temp;\n  switch (type) {\n    case 1:\n      temp = new A({ username: 'aaa' });\n      break;\n    case 2:\n      temp = new B({ username: 'bbb' });\n      break;\n    case 3:\n      temp = new C({ username: 'ccc' });\n      break;\n    default:\n      throw new Error('Unsupported types');\n      break;\n  }\n  let user = temp.getUser();\n  return user;\n}\n\nlet user = fun2(1);\nconsole.log(user);\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4ece\u8fd9\u4f60\u4e5f\u80fd\u770b\u7684\u51fa\u6765\uff0c\u5982\u679c\u6211\u8981\u5728\u6dfb\u52a0\u4e00\u4e2a\u9700\u6c42\u7684\u8bdd\uff0c\u6211\u5c31\u8981\u5206\u522b\u7ed9\u8fd9\u4e09\u4e2a\u7c7b\u6dfb\u52a0\u65b9\u6cd5\uff08\u5f53\u7136\u8fd9\u4e2a\u662f\u907f\u514d\u4e0d\u4e86\u7684\uff09\uff0c\u540c\u65f6\u53c8\u8981\u5b9a\u4e49\u4e00\u4e2a",(0,s.jsx)(e.code,{children:"fun3"}),"\u6765\u6307\u5b9a\u529f\u80fd\uff0c\u6ca1\u9519\uff0c\u9700\u6c42\u548c\u5199\u7740\u4ee3\u7801\u7684\u90fd\u662f\u6211\u3002\u4e8e\u662f\u6211\u51b3\u5b9a\u91cd\u6784\u4e00\u4e9b\u8fd9\u4e00\u90e8\u5206\u7684\u4ee3\u7801\uff0c\u4e3a\u4ee5\u540e\u65b9\u4fbf\u6211\u540e\u7eed\u7684\u4fee\u6539\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u91cd\u6784\u4ee3\u7801",children:"\u91cd\u6784\u4ee3\u7801"}),"\n",(0,s.jsxs)(e.p,{children:["\u9996\u5148 \u6211\u4eec\u4e5f\u80fd\u5230\u4e24\u4e2a\u90e8\u5206\u90fd\u6709 switch \u5206\u652f\uff0c\u5e76\u4e14\u90fd\u5939\u6742\u7740 break \u8bed\u53e5\uff0c\u8bf4\u5b9e\u8bdd\uff0c\u770b\u7684\u4e0d\u662f\u5f88\u5165\u773c\u3002\u540c\u65f6\u5b9a\u4e49\u4e86\u4e00\u4e2a temp \u4e34\u65f6\u53c2\u6570\u7528\u4e8e\u8c03\u7528\uff0c\u4e0d\u59a8\u5c01\u88c5\u6210\u4e00\u4e2a\u51fd\u6570\uff0c\u4e13\u95e8\u7528\u6765\u83b7\u53d6\u8be5\u7c7b\u7684",(0,s.jsx)(e.strong,{children:"\u5b9e\u4f8b\u5bf9\u8c61"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"function getClass(type) {\n  switch (type) {\n    case 1:\n      return new A({ username: 'aaa' });\n    case 2:\n      return new B({ username: 'bbb' });\n    case 3:\n      return new C({ username: 'ccc' });\n    default:\n      throw new Error('Unsupported types');\n  }\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"function fun2(type) {\n  let temp = getClass(type);\n  let user = temp.getUser();\n  return user;\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u6837 \u5c31\u80fd\u628a\u90a3\u4e2a\u5171\u6709\u7684",(0,s.jsx)(e.code,{children:"switch-case"}),"\u4ee3\u7801\u5c01\u88c5\u6210\u4e00\u4e2a\u5de5\u5382\u51fd\u6570\u7528\u4e8e\u83b7\u53d6\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5229\u7528\u591a\u6001\u6765\u6d88\u9664\u5206\u652f",children:"\u5229\u7528\u591a\u6001\u6765\u6d88\u9664\u5206\u652f"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f46\u662f\u4e0a\u9762\u8fd9\u4e48\u5199\u7684\u8bdd\uff0c\u5176\u5b9e\u662f\u4f1a\u4e00\u4e2a\u5f88\u9690\u60a3\u7684\u95ee\u9898\uff0c\u6bd4\u5982 C \u7c7b\u5fd8\u8bb0\u5199",(0,s.jsx)(e.code,{children:"getUser"}),"\u65b9\u6cd5\u4e86\uff0c\u4f46\u662f\u6211\u5374\u8c03\u7528\u4e86",(0,s.jsx)(e.code,{children:"temp.getUser()"}),"\uff0c\u90a3\u4e48 js \u8fd0\u884c\u5230\u8be5\u4ee3\u7801\u7684\u65f6\u5019\u5c31\u4f1a\u62a5\u9519",(0,s.jsx)(e.code,{children:"temp.getUser is not a function"}),"\uff0c\u8fd9\u662f js \u7279\u6027\uff0c\u5e76\u4e0d\u80fd\u901a\u8fc7\u6587\u672c\u7f16\u8f91\u5668\u627e\u5230\u8be5 bug\u3002\u4f46\u5982\u679c\u662f TypeScript\uff0c\u4e0a\u9762\u7684\u4ee3\u7801\u5c31\u4f1a\u63d0\u793a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\u7c7b\u578b\u201cA | B | C\u201d\u4e0a\u4e0d\u5b58\u5728\u5c5e\u6027\u201cgetUser\u201d\u3002\n  \u7c7b\u578b\u201cC\u201d\u4e0a\u4e0d\u5b58\u5728\u5c5e\u6027\u201cgetUser\u201d\u3002ts(2339)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u867d\u8bf4 ES6 \u53ef\u4ee5\u901a\u8fc7\u7ee7\u627f\uff0c\u5b9e\u73b0\u5bf9\u8c61\u7684\u591a\u6001\u6027\uff0c\u4f46 ES6 \u5e76\u6ca1\u6709\u62bd\u8c61\u7c7b\u7684\u3002\u52a0\u4e0a\u6211\u7684\u9879\u76ee\u662f\u57fa\u4e8e TypeScript \u7684\uff0c\u6240\u4ee5\u7528\u5230\u7684\u4e5f\u662f TypeScript \u7684\u7c7b\uff08\u4e5f\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528 TypeScript\uff09\uff0c\u6545\u4ee5\u4e0b\u7684\u4ee3\u7801\u4e5f\u90fd\u662f\u57fa\u4e8e TypeScript \u6240\u7f16\u5199\u7684\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"interface User {\n  username: string;\n}\n\nabstract class S {\n  protected user: User;\n  constructor(user) {\n    this.user = user;\n  }\n\n  abstract getUser();\n}\n\nclass A extends S {\n  getUser(): User {\n    console.log('A');\n    return this.user;\n  }\n}\n\nclass B extends S {\n  getUser(): User {\n    console.log('B');\n    return this.user;\n  }\n}\n\nclass C extends S {\n  getUser(): User {\n    console.log('C');\n    return this.user;\n  }\n}\n\nfunction getClass(type): S {\n  switch (type) {\n    case 1:\n      return new A({ username: 'aaa' });\n    case 2:\n      return new B({ username: 'bbb' });\n    case 3:\n      return new C({ username: 'ccc' });\n    default:\n      throw new Error('Unsupported types');\n  }\n}\n\nfunction fun3(type) {\n  let temp = getClass(type);\n  let user = temp.getUser();\n  console.log(user);\n  return user;\n}\n\nfun3(3);\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u6837\uff0cABC \u90fd\u662f\u7ee7\u627f\u4e0e S \u7c7b\uff0c\u5e76\u4e14\u5fc5\u987b\u590d\u5199 getUser \u65b9\u6cd5\uff0c\u5426\u5219\u7f16\u8f91\u5668\u5c06\u4f1a\u62a5\u9519\uff0c\u7f16\u8bd1\u51fa\u6765\u7684 js \u4ee3\u7801\u5982\u4e0b\uff08ES2020 \u6807\u51c6\uff0c\u5176\u5b9e\u4e5f\u5c31\u6b63\u5e38\u7684 JS \u7ee7\u627f\uff09"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"var __extends =\n  (this && this.__extends) ||\n  (function () {\n    var extendStatics = function (d, b) {\n      extendStatics =\n        Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array &&\n          function (d, b) {\n            d.__proto__ = b;\n          }) ||\n        function (d, b) {\n          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n        };\n      return extendStatics(d, b);\n    };\n    return function (d, b) {\n      if (typeof b !== 'function' && b !== null) throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');\n      extendStatics(d, b);\n      function __() {\n        this.constructor = d;\n      }\n      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());\n    };\n  })();\nvar S = /** @class */ (function () {\n  function S(user) {\n    this.user = user;\n  }\n  return S;\n})();\nvar A = /** @class */ (function (_super) {\n  __extends(A, _super);\n  function A() {\n    return (_super !== null && _super.apply(this, arguments)) || this;\n  }\n  A.prototype.getUser = function () {\n    console.log('A');\n    return this.user;\n  };\n  return A;\n})(S);\nvar B = /** @class */ (function (_super) {\n  __extends(B, _super);\n  function B() {\n    return (_super !== null && _super.apply(this, arguments)) || this;\n  }\n  B.prototype.getUser = function () {\n    console.log('B');\n    return this.user;\n  };\n  return B;\n})(S);\nvar C = /** @class */ (function (_super) {\n  __extends(C, _super);\n  function C() {\n    return (_super !== null && _super.apply(this, arguments)) || this;\n  }\n  C.prototype.getUser = function () {\n    console.log('C');\n    return this.user;\n  };\n  return C;\n})(S);\nfunction getClass(type) {\n  switch (type) {\n    case 1:\n      return new A({ username: 'aaa' });\n    case 2:\n      return new B({ username: 'bbb' });\n    case 3:\n      return new C({ username: 'ccc' });\n    default:\n      throw new Error('Unsupported types');\n  }\n}\nfunction fun2(type) {\n  var temp = getClass(type);\n  var user = temp.getUser();\n  console.log(user);\n  return user;\n}\nfun2(3);\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},9999:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>a});var t=r(8101);const s={},c=t.createContext(s);function o(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);