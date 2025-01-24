"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9276],{5908:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"skill/algorithm/double-pointer","title":"\u53cc\u6307\u9488","description":"\u4ee5\u4e0b\u662f\u6709\u5173\u53cc\u6307\u9488\u76f8\u5173\u7b97\u6cd5\u7684\u9898\u76ee\u4e0e\u9898\u89e3\u3002","source":"@site/docs/skill/algorithm/4.\u53cc\u6307\u9488.md","sourceDirName":"skill/algorithm","slug":"/algorithm/double-pointer","permalink":"/docs/algorithm/double-pointer","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"algorithm","permalink":"/docs/tags/algorithm"},{"inline":true,"label":"double-pointer","permalink":"/docs/tags/double-pointer"}],"version":"current","sidebarPosition":4,"frontMatter":{"id":"double-pointer","slug":"/algorithm/double-pointer","title":"\u53cc\u6307\u9488","authors":"kuizuo","tags":["algorithm","double-pointer"],"keywords":["algorithm","double-pointer"]},"sidebar":"skill","previous":{"title":"\u6ed1\u52a8\u7a97\u53e3","permalink":"/docs/algorithm/sliding-window"},"next":{"title":"\u9006\u5411","permalink":"/docs/category/\u9006\u5411"}}');var t=l(5105),i=l(9999);const r={id:"double-pointer",slug:"/algorithm/double-pointer",title:"\u53cc\u6307\u9488",authors:"kuizuo",tags:["algorithm","double-pointer"],keywords:["algorithm","double-pointer"]},o=void 0,c={},u=[{value:"\u79fb\u9664\u5143\u7d20",id:"\u79fb\u9664\u5143\u7d20",level:2},{value:"\u6211\u7684\u89e3\u6cd5",id:"\u6211\u7684\u89e3\u6cd5",level:3},{value:"\u65b9\u6cd5: \u53cc\u6307\u9488",id:"\u65b9\u6cd5-\u53cc\u6307\u9488",level:3},{value:"\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879",id:"\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879",level:2},{value:"\u6211\u7684\u89e3\u6cd5",id:"\u6211\u7684\u89e3\u6cd5-1",level:3},{value:"\u65b9\u6cd5: \u53cc\u6307\u9488",id:"\u65b9\u6cd5-\u53cc\u6307\u9488-1",level:3},{value:"\u5224\u65ad\u5b50\u5e8f\u5217",id:"\u5224\u65ad\u5b50\u5e8f\u5217",level:2},{value:"\u6211\u7684\u89e3\u6cd5(\u5931\u8d25)",id:"\u6211\u7684\u89e3\u6cd5\u5931\u8d25",level:3},{value:"\u65b9\u6cd5: \u53cc\u6307\u9488",id:"\u65b9\u6cd5-\u53cc\u6307\u9488-2",level:3},{value:"\u4e24\u6570\u4e4b\u548c II - \u8f93\u5165\u6709\u5e8f\u6570\u7ec4",id:"\u4e24\u6570\u4e4b\u548c-ii---\u8f93\u5165\u6709\u5e8f\u6570\u7ec4",level:2},{value:"\u65b9\u6cd5: \u53cc\u6307\u9488",id:"\u65b9\u6cd5-\u53cc\u6307\u9488-3",level:3}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u6709\u5173\u53cc\u6307\u9488\u76f8\u5173\u7b97\u6cd5\u7684\u9898\u76ee\u4e0e\u9898\u89e3\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u79fb\u9664\u5143\u7d20",children:(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/remove-element",children:"\u79fb\u9664\u5143\u7d20"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u7ed9\u4f60\u4e00\u4e2a\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u503c val\uff0c\u4f60\u9700\u8981 \u539f\u5730 \u79fb\u9664\u6240\u6709\u6570\u503c\u7b49\u4e8e val \u7684\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u79fb\u9664\u540e\u6570\u7ec4\u7684\u65b0\u957f\u5ea6\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4e0d\u8981\u4f7f\u7528\u989d\u5916\u7684\u6570\u7ec4\u7a7a\u95f4\uff0c\u4f60\u5fc5\u987b\u4ec5\u4f7f\u7528 O(1) \u989d\u5916\u7a7a\u95f4\u5e76 \u539f\u5730 \u4fee\u6539\u8f93\u5165\u6570\u7ec4\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5143\u7d20\u7684\u987a\u5e8f\u53ef\u4ee5\u6539\u53d8\u3002\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u6211\u7684\u89e3\u6cd5",children:"\u6211\u7684\u89e3\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"var removeElement = function (nums, val) {\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] === val) {\n      nums.splice(i, 1)\n      i--\n    }\n  }\n\n  return nums.length\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u7136\u800c splice \u64cd\u4f5c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(n)\uff0c\u5e76\u4e14",(0,t.jsx)(e.strong,{children:"\u6bcf\u6b21\u5220\u9664\u4e00\u4e2a\u5143\u7d20\u90fd\u4f1a\u5bfc\u81f4\u6570\u7ec4\u7684\u91cd\u65b0\u6392\u5e8f"}),"\u3002\u56e0\u6b64\u5728\u7b97\u6cd5\u89e3\u9898\u4e2d\u5e94\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u6570\u7ec4\u81ea\u5e26\u65b9\u6cd5\u64cd\u4f5c"]}),"\n",(0,t.jsx)(e.h3,{id:"\u65b9\u6cd5-\u53cc\u6307\u9488",children:"\u65b9\u6cd5: \u53cc\u6307\u9488"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"var removeElement = function (nums, val) {\n  let left = 0,\n    right = nums.length\n  while (left < right) {\n    if (nums[left] === val) {\n      nums[left] = nums[right - 1]\n      right--\n    } else {\n      left++\n    }\n  }\n  return left\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679c\u9898\u76ee\u6709\u8981\u6c42\u6392\u5e8f\u7684\u8bdd\uff0c\u4e0d\u5982\u5c06\u7b26\u5408\u6761\u4ef6(",(0,t.jsx)(e.code,{children:"nums[i] !== val"}),")\u7684\u5143\u7d20\u79fb\u5230\u6570\u7ec4\u5934\u90e8\uff0c\u8fd9\u6837\u5c31\u4e0d\u9700\u8981\u6392\u5e8f\u4e86\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"var removeElement = function (nums, val) {\n  const n = nums.length\n  let left = 0\n\n  for (let right = 0; right < n; right++) {\n    if (nums[right] !== val) {\n      nums[left] = nums[right]\n      left++\n    }\n  }\n\n  return left\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879",children:(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array",children:"\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u7ed9\u4f60\u4e00\u4e2a \u5347\u5e8f\u6392\u5217 \u7684\u6570\u7ec4 nums \uff0c\u8bf7\u4f60 \u539f\u5730 \u5220\u9664\u91cd\u590d\u51fa\u73b0\u7684\u5143\u7d20\uff0c\u4f7f\u6bcf\u4e2a\u5143\u7d20 \u53ea\u51fa\u73b0\u4e00\u6b21 \uff0c\u8fd4\u56de\u5220\u9664\u540e\u6570\u7ec4\u7684\u65b0\u957f\u5ea6\u3002\u5143\u7d20\u7684 \u76f8\u5bf9\u987a\u5e8f \u5e94\u8be5\u4fdd\u6301 \u4e00\u81f4 \u3002\u7136\u540e\u8fd4\u56de nums \u4e2d\u552f\u4e00\u5143\u7d20\u7684\u4e2a\u6570\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8003\u8651 nums \u7684\u552f\u4e00\u5143\u7d20\u7684\u6570\u91cf\u4e3a k \uff0c\u4f60\u9700\u8981\u505a\u4ee5\u4e0b\u4e8b\u60c5\u786e\u4fdd\u4f60\u7684\u9898\u89e3\u53ef\u4ee5\u88ab\u901a\u8fc7\uff1a"}),"\n",(0,t.jsx)(e.p,{children:"\u66f4\u6539\u6570\u7ec4 nums \uff0c\u4f7f nums \u7684\u524d k \u4e2a\u5143\u7d20\u5305\u542b\u552f\u4e00\u5143\u7d20\uff0c\u5e76\u6309\u7167\u5b83\u4eec\u6700\u521d\u5728 nums \u4e2d\u51fa\u73b0\u7684\u987a\u5e8f\u6392\u5217\u3002nums \u7684\u5176\u4f59\u5143\u7d20\u4e0e nums \u7684\u5927\u5c0f\u4e0d\u91cd\u8981\u3002\u8fd4\u56de k \u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u6211\u7684\u89e3\u6cd5-1",children:"\u6211\u7684\u89e3\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"var removeDuplicates = function (nums) {\n  const counter = {}\n  let count = 0\n  for (let i = 0; i < nums.length; i++) {\n    counter[nums[i]] = (counter[nums[i]] || 0) + 1\n\n    if (counter[nums[i]] > 2) {\n      continue\n    } else {\n      nums[count] = nums[i]\n      count++\n    }\n  }\n\n  return count\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u601d\u8def\u5f88\u6e05\u6670\uff0c\u5c31\u662f\u7528\u4e00\u4e2a\u8ba1\u6570\u5bf9\u8c61\u6765\u8ba1\u6570\uff0c\u7136\u540e\u904d\u5386\u6570\u7ec4\uff0c\u5982\u679c\u8ba1\u6570\u5927\u4e8e 1\uff0c\u5c31\u8df3\u8fc7\uff0c\u5426\u5219\u5c31\u8d4b\u503c\u3002\u4e0d\u8fc7\u6211\u8fd9\u91cc\u5f15\u5165\u4e86 counter \u5bf9\u8c61\uff0c\u56e0\u6b64\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3a O(k)\uff0c\u5176\u4e2d k \u8868\u793a\u4e0d\u540c\u5143\u7d20\u7684\u6570\u91cf\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679c\u4ee5\u6211\u8fd9\u4e2a\u601d\u8def\u53bb\u89e3\u51b3 ",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii",children:"\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879 II"})," \u89e3\u51b3\u9898\u76ee\u5c31\u4f1a\u7279\u522b\u5bb9\u6613\uff0c\u53ea\u9700\u8981\u5c06 > 1 \u6362\u6210 1 \u5373\u53ef\u3002\u4e0d\u8fc7\u9898\u76ee\u8981\u6c42 \u4e0d\u4f7f\u7528\u989d\u5916\u7684\u6570\u7ec4\u7a7a\u95f4\uff0c\u4f60\u5fc5\u987b\u5728 \u539f\u5730 \u4fee\u6539\u8f93\u5165\u6570\u7ec4 \u5e76\u5728\u4f7f\u7528 O(1) \u989d\u5916\u7a7a\u95f4\u7684\u6761\u4ef6\u4e0b\u5b8c\u6210\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u5e76\u4e14\u901a\u5e38\u54c8\u5e0c\u8ba1\u6570\u9488\u5bf9\u65e0\u5e8f\u800c\u8a00\uff0c\u800c\u9898\u76ee\u6240\u7ed9\u5b9a\u7684\u6570\u636e\u53c8\u6709\u5e8f\uff0c\u56e0\u6b64\u60f3\u8981\u89e3\u5f97\u597d\u5c31\u9700\u8981\u91c7\u7528\u5176\u4ed6\u65b9\u6848\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"\u65b9\u6cd5-\u53cc\u6307\u9488-1",children:"\u65b9\u6cd5: \u53cc\u6307\u9488"}),"\n",(0,t.jsxs)(e.p,{children:["\u7531\u4e8e\u9898\u76ee\u58f0\u660e\u8f93\u5165 ",(0,t.jsx)(e.strong,{children:"\u5347\u5e8f\u6392\u5217"})," \u7684\u6570\u7ec4\uff0c\u56e0\u6b64\u91c7\u7528\u5feb\u6162\u53cc\u6307\u9488\u6765\u5224\u65ad\u540e\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u7b49\u4e8e\u524d\u4e00\u4e2a\uff0c\u5982\u679c\u4e0d\u76f8\u7b49\u5219\u8bf4\u660e\u662f\u4e0d\u540c\u7684\u5143\u7d20\uff0c\u6162\u6307\u9488(\u4e0d\u540c\u6570\u5b57\u6b21\u6570)\u52a0\u4e00\uff0c\u5feb\u6307\u9488\u7ee7\u7eed\u904d\u5386\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"var removeDuplicates = function (nums) {\n  const n = nums.length\n\n  let fast = 1,\n    slow = 1\n  while (fast < n) {\n    if (nums[fast] !== nums[fast - 1]) {\n      nums[slow] = nums[fast]\n      ++slow\n    }\n    ++fast\n  }\n  return slow\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5224\u65ad\u5b50\u5e8f\u5217",children:(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/is-subsequence",children:"\u5224\u65ad\u5b50\u5e8f\u5217"})}),"\n",(0,t.jsx)(e.h3,{id:"\u6211\u7684\u89e3\u6cd5\u5931\u8d25",children:"\u6211\u7684\u89e3\u6cd5(\u5931\u8d25)"}),"\n",(0,t.jsx)(e.p,{children:"\u65e2\u7136\u5224\u65ad\u5b50\u5e8f\u5217\uff0c\u90a3\u6211\u5c31\u628a\u65e0\u5173\u5143\u7d20\u5220\u9664\uff0c\u7136\u540e\u5224\u65ad\u6700\u540e\u5143\u7d20\u662f\u5426\u5305\u542b\u5373\u53ef\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"var isSubsequence = function (s, t) {\n  t = t.replace(new RegExp(`[^${s}]`, 'g'), '')\n  return t.includes(s)\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u7136\u800c\u5047\u8bbe\u8f93\u5165\u6570\u636e\u4e3a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'s = "leetcode"\nt = "yyyyyleeeytcode"\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5904\u7406\u540e\u6570\u636e\u4e3a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'s = "leetcode"\nt = "leeetcode"\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5f88\u663e\u7136\u8fd9\u91cc includes \u65e0\u6cd5\u5224\u65ad\u5b50\u5e8f\u5217\uff0c\u56e0\u6b64\u8fd9\u79cd\u601d\u8def\u4e0d\u53ef\u884c\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"\u65b9\u6cd5-\u53cc\u6307\u9488-2",children:"\u65b9\u6cd5: \u53cc\u6307\u9488"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"var isSubsequence = function (s, t) {\n  let i = 0,\n    j = 0\n  while (i < s.length && j < t.length) {\n    if (s[i] === t[j]) {\n      i++\n    }\n    j++\n  }\n\n  return i === s.length\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4e24\u6570\u4e4b\u548c-ii---\u8f93\u5165\u6709\u5e8f\u6570\u7ec4",children:(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted",children:"\u4e24\u6570\u4e4b\u548c II - \u8f93\u5165\u6709\u5e8f\u6570\u7ec4"})}),"\n",(0,t.jsx)(e.h3,{id:"\u65b9\u6cd5-\u53cc\u6307\u9488-3",children:"\u65b9\u6cd5: \u53cc\u6307\u9488"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"function twoSum(nums, target) {\n  let left = 0\n  let right = nums.length - 1\n\n  while (left < right) {\n    const sum = nums[left] + nums[right]\n    if (sum === target) {\n      return [left, right]\n    }\n\n    if (sum > target) {\n      right--\n    } else if (sum < target) {\n      left++\n    }\n  }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},9999:(n,e,l)=>{l.d(e,{R:()=>r,x:()=>o});var s=l(8101);const t={},i=s.createContext(t);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);