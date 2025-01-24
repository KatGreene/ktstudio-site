"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9259],{7949:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"skill/programming-languages/go/go-concurrent","title":"Go\u5e76\u53d1","description":"Go \u8bed\u8a00\u7684\u5e76\u53d1\u662f\u57fa\u4e8e goroutine \u7684\uff0cgoroutine \u7c7b\u4f3c\u4e8e\u7ebf\u7a0b\uff0c\u4f46\u5e76\u975e\u7ebf\u7a0b\u3002\u53ef\u4ee5\u5c06 goroutine \u7406\u89e3\u4e3a\u4e00\u79cd\u865a\u62df\u7ebf\u7a0b\u3002Go \u8bed\u8a00\u8fd0\u884c\u65f6\u4f1a\u53c2\u4e0e\u8c03\u5ea6 goroutine\uff0c\u5e76\u5c06 goroutine \u5408\u7406\u5730\u5206\u914d\u5230\u6bcf\u4e2a CPU \u4e2d\uff0c\u6700\u5927\u9650\u5ea6\u5730\u4f7f\u7528 CPU \u6027\u80fd\u3002\u5f00\u542f\u4e00\u4e2a goroutine \u7684\u6d88\u8017\u975e\u5e38\u5c0f\uff08\u5927\u7ea6 2KB \u7684\u5185\u5b58\uff09\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u6570\u767e\u4e07\u4e2agoroutine\u3002","source":"@site/docs/skill/programming-languages/go/Go\u5e76\u53d1.md","sourceDirName":"skill/programming-languages/go","slug":"/go-concurrent","permalink":"/docs/go-concurrent","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"go","permalink":"/docs/tags/go"}],"version":"current","frontMatter":{"id":"go-concurrent","slug":"/go-concurrent","title":"Go\u5e76\u53d1","date":"2022-05-22T00:00:00.000Z","authors":"kuizuo","tags":["go"],"keywords":["go"]},"sidebar":"skill","previous":{"title":"Go\u8c03\u7528js\u4ee3\u7801","permalink":"/docs/go-call-js"},"next":{"title":"Gin\u6846\u67b6\u521d\u4f53\u9a8c","permalink":"/docs/try-gin-framework"}}');var l=r(5105),i=r(9999);const s={id:"go-concurrent",slug:"/go-concurrent",title:"Go\u5e76\u53d1",date:new Date("2022-05-22T00:00:00.000Z"),authors:"kuizuo",tags:["go"],keywords:["go"]},t=void 0,c={},a=[{value:"goroutine",id:"goroutine",level:2},{value:"\u7b49\u5f85 goroutine \u6267\u884c\u5b8c\u6210",id:"\u7b49\u5f85-goroutine-\u6267\u884c\u5b8c\u6210",level:2},{value:"sync \u5305",id:"sync-\u5305",level:2},{value:"\u901a\u9053\uff08channel\uff09",id:"\u901a\u9053channel",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["Go \u8bed\u8a00\u7684\u5e76\u53d1\u662f\u57fa\u4e8e ",(0,l.jsx)(e.code,{children:"goroutine"})," \u7684\uff0c",(0,l.jsx)(e.code,{children:"goroutine"})," \u7c7b\u4f3c\u4e8e\u7ebf\u7a0b\uff0c\u4f46\u5e76\u975e\u7ebf\u7a0b\u3002\u53ef\u4ee5\u5c06 ",(0,l.jsx)(e.code,{children:"goroutine"})," \u7406\u89e3\u4e3a\u4e00\u79cd\u865a\u62df\u7ebf\u7a0b\u3002Go \u8bed\u8a00\u8fd0\u884c\u65f6\u4f1a\u53c2\u4e0e\u8c03\u5ea6 ",(0,l.jsx)(e.code,{children:"goroutine"}),"\uff0c\u5e76\u5c06 ",(0,l.jsx)(e.code,{children:"goroutine"})," \u5408\u7406\u5730\u5206\u914d\u5230\u6bcf\u4e2a CPU \u4e2d\uff0c\u6700\u5927\u9650\u5ea6\u5730\u4f7f\u7528 CPU \u6027\u80fd\u3002\u5f00\u542f\u4e00\u4e2a goroutine \u7684\u6d88\u8017\u975e\u5e38\u5c0f\uff08\u5927\u7ea6 2KB \u7684\u5185\u5b58\uff09\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u6570\u767e\u4e07\u4e2a",(0,l.jsx)(e.code,{children:"goroutine"}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"goroutine",children:"goroutine"}),"\n",(0,l.jsx)(e.p,{children:"goroutine \u8bed\u6cd5\u683c\u5f0f\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-text",children:"go \u51fd\u6570\u540d( \u53c2\u6570\u5217\u8868 )\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6f14\u793a\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'import (\n  "fmt"\n  "time"\n)\n\nfunc say(s string) {\n  for i := 0; i < 3; i++ {\n    time.Sleep(100 * time.Millisecond)\n    fmt.Println(s)\n  }\n}\n\nfunc main() {\n  go say("world")\n  say("hello")\n  fmt.Println("over!")\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884c\u4e0a\u9762\u4ee3\u7801\u5c06\u4f1a\u8f93\u51fa"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"hello\nworld\nworld\nhello\nhello\nover!\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5176\u4e2d hello \u4e0e world \u6bcf\u6b21\u6267\u884c\u987a\u5e8f\u90fd\u4e0d\u4e00\u81f4\uff0c\u751a\u81f3\u6709\u65f6\u5019 world \u4f1a\u5c11\u8f93\u51fa\u4e00\u904d\uff0c\u6216\u662f world \u5c06\u4f1a\u5728 over! \u540e\u8f93\u51fa\u3002\u56e0\u4e3a\u6b64\u65f6\u7684",(0,l.jsx)(e.code,{children:'go say("world")'})," \u4e0d\u5728\u662f\u4e3b\u7ebf\u7a0b\u4e2d\u6267\u884c\uff0c\u800c\u662f\u521b\u5efa\u4e00\u4e2a goroutine \u53bb\u6267\u884c\u3002\u53ef\u4ee5\u8ba4\u4e3a",(0,l.jsx)(e.code,{children:'go say("world")'}),"\u5c31\u76f8\u5f53\u4e8e js \u4e2d\u7684",(0,l.jsx)(e.code,{children:'await say("world")'})," \u4f46 js \u662f\u5355\u7ebf\u7a0b\u57fa\u4e8e\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u6765\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u4e24\u8005\u8fd8\u662f\u6709\u7740\u4e00\u5b9a\u7684\u533a\u522b\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7b49\u5f85-goroutine-\u6267\u884c\u5b8c\u6210",children:"\u7b49\u5f85 goroutine \u6267\u884c\u5b8c\u6210"}),"\n",(0,l.jsx)(e.p,{children:'\u53ef\u4ee5\u53d1\u73b0 say("hello") \u5b9e\u9645\u4e0a\u4e5f\u662f\u5728\u7b49\u5f85\u6267\u884c\uff0c\u5982\u679c\u5c06 say("hello")\u6ce8\u91ca\u6389\uff0c\u518d\u6b21\u6267\u884c\uff0c\u5c06\u53ea\u4f1a\u8f93\u51fa over!\u3002\u539f\u56e0\u5f88\u7b80\u5355\uff0c\u56e0\u4e3a\u4e3b\u7ebf\u7a0b\u5df2\u7ecf\u7ed3\u675f\u4e86\uff0c\u7a0b\u5e8f\u81ea\u7136\u5c31\u7ed3\u675f\u4e86\uff0cgoroutine \u7684\u6267\u884c\u4e5f\u5c31\u4e0d\u662f\u7a0b\u5e8f\u7684\u91cd\u70b9\u3002'}),"\n",(0,l.jsx)(e.p,{children:"\u6240\u4ee5\u6709\u65f6\u5019\u9700\u8981\u7b49\u5f85 goroutine \u6267\u884c\u5b8c\u6210\uff0c\u6700\u76f4\u63a5\u7684\u65b9\u6cd5\u5c31\u662f\u901a\u8fc7 time.Sleep \u51fd\u6570\uff0c\u6216\u6267\u884c\u65f6\u95f4\u8f83\u957f\u7684\u51fd\u6570\u6765\u7b49\u5f85\uff0c\u4f46\u5b9e\u9645\u6267\u884c\u4e2d\u5e76\u4e0d\u77e5\u9053\u5e94\u8be5\u7b49\u5f85\u591a\u957f\u65f6\u95f4\uff0c\u5f88\u663e\u7136\u8fd9\u79cd\u65b9\u5f0f\u5e76\u4e0d\u662f\u7279\u522b\u597d\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"sync-\u5305",children:"sync \u5305"}),"\n",(0,l.jsx)(e.p,{children:"Golang \u5b98\u65b9\u5728 sync \u5305\u4e2d\u63d0\u4f9b\u4e86 WaitGroup \u7c7b\u578b\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4e0b\u9762\u662f\u5176\u7b80\u5355\u7684\u6f14\u793a\u4f8b\u5b50\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'import (\n  "fmt"\n  "sync"\n  "time"\n)\n\nfunc say(s string, wg *sync.WaitGroup) {\n  defer wg.Done()\n\n  for i := 0; i < 3; i++ {\n    time.Sleep(100 * time.Millisecond)\n    fmt.Println(s)\n  }\n}\n\nfunc main() {\n  var wg sync.WaitGroup\n  wg.Add(2)\n  say("hello", &wg)\n  say("world", &wg)\n\n  wg.Wait()\n  fmt.Println("over!")\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5c06\u4f1a\u50cf\u540c\u6b65\u8f93\u51fa\u4e00\u6837\uff0c\u8f93\u51fa\u7ed3\u679c"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"hello\nhello\nhello\nworld\nworld\nworld\nover!\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u603b\u7ed3\u4e3a\u4e0b\u9762\u51e0\u70b9\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u521b\u5efa\u4e00\u4e2a WaitGroup \u5b9e\u4f8b\uff0c\u6bd4\u5982\u540d\u79f0\u4e3a\uff1awg"}),"\n",(0,l.jsx)(e.li,{children:"\u8c03\u7528 wg.Add(n)\uff0c\u5176\u4e2d n \u662f\u7b49\u5f85\u7684 goroutine \u7684\u6570\u91cf"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u6bcf\u4e2a goroutine \u8fd0\u884c\u7684\u51fd\u6570\u4e2d\u6267\u884c defer wg.Done()"}),"\n",(0,l.jsx)(e.li,{children:"\u8c03\u7528 wg.Wait() \u963b\u585e\u4e3b\u903b\u8f91"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u901a\u9053channel",children:"\u901a\u9053\uff08channel\uff09"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u8bf4 goroutine \u662f Go \u8bed\u8a00\u7a0b\u5e8f\u7684\u5e76\u53d1\u4f53\u7684\u8bdd\uff0c\u90a3\u4e48 channels \u5219\u662f\u5b83\u4eec\u4e4b\u95f4\u7684\u901a\u4fe1\u673a\u5236\u3002\u4e00\u4e2a channel \u662f\u4e00\u4e2a\u901a\u4fe1\u673a\u5236\uff0c\u5b83\u53ef\u4ee5\u8ba9\u4e00\u4e2a goroutine \u901a\u8fc7\u5b83\u7ed9\u53e6\u4e00\u4e2a goroutine \u53d1\u9001\u503c\u4fe1\u606f\u3002\u6bcf\u4e2a channel \u90fd\u6709\u4e00\u4e2a\u7279\u6b8a\u7684\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f channels \u53ef\u53d1\u9001\u6570\u636e\u7684\u7c7b\u578b\u3002\u4e00\u4e2a\u53ef\u4ee5\u53d1\u9001 int \u7c7b\u578b\u6570\u636e\u7684 channel \u4e00\u822c\u5199\u4e3a chan int\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528\u5185\u7f6e\u7684 make \u51fd\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a channel\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"ch := make(chan \u5143\u7d20\u7c7b\u578b, [\u7f13\u51b2\u5927\u5c0f])\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5148\u5c55\u793a\u4e00\u4e2a\u7b80\u5355\u7684\u4ee3\u7801\u4f8b\u5b50"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'import "fmt"\n\nfunc sum(s []int, c chan int) {\n  sum := 0\n  for _, v := range s {\n    sum += v\n  }\n  c <- sum // \u628a sum \u53d1\u9001\u5230\u901a\u9053 c\n}\n\nfunc main() {\n  s := []int{1, 2, 3, 4, 5}\n\n  c := make(chan int)\n  go sum(s[:len(s)/2], c)\n  go sum(s[len(s)/2:], c)\n  x, y := <-c, <-c // \u4ece\u901a\u9053 c \u4e2d\u63a5\u6536\n\n  close(c) // \u5173\u95ed\u901a\u9053\n\n  fmt.Println(x, y, x+y)\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5c06\u4f1a\u8f93\u51fa 12 3 15"}),"\n",(0,l.jsx)(e.p,{children:"\u5173\u95ed\u901a\u9053\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4f46\u5173\u95ed\u540e\u7684\u901a\u9053\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"}),"\n",(0,l.jsx)(e.p,{children:"1.\u5bf9\u4e00\u4e2a\u5173\u95ed\u7684\u901a\u9053\u518d\u53d1\u9001\u503c\u5c31\u4f1a\u5bfc\u81f4 panic\u3002"}),"\n",(0,l.jsx)(e.p,{children:"2.\u5bf9\u4e00\u4e2a\u5173\u95ed\u7684\u901a\u9053\u8fdb\u884c\u63a5\u6536\u4f1a\u4e00\u76f4\u83b7\u53d6\u503c\u76f4\u5230\u901a\u9053\u4e3a\u7a7a\u3002"}),"\n",(0,l.jsx)(e.p,{children:"3.\u5bf9\u4e00\u4e2a\u5173\u95ed\u7684\u5e76\u4e14\u6ca1\u6709\u503c\u7684\u901a\u9053\u6267\u884c\u63a5\u6536\u64cd\u4f5c\u4f1a\u5f97\u5230\u5bf9\u5e94\u7c7b\u578b\u7684\u96f6\u503c\u3002"}),"\n",(0,l.jsx)(e.p,{children:"4.\u5173\u95ed\u4e00\u4e2a\u5df2\u7ecf\u5173\u95ed\u7684\u901a\u9053\u4f1a\u5bfc\u81f4 panic\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5b9e\u4f8b",children:"\u5b9e\u4f8b"}),"\n",(0,l.jsxs)(e.p,{children:["\u4e00\u4e2a\u6df1\u5ea6\u904d\u5386\u7684\u4ee3\u7801\u4f8b\u5b50\uff0c\u5177\u4f53\u53ef\u770b ",(0,l.jsx)(e.a,{href:"https://books.studygolang.com/gopl-zh/ch8/ch8-06.html",children:"\u793a\u4f8b: \u5e76\u53d1\u7684 Web \u722c\u866b \xb7 Go \u8bed\u8a00\u5723\u7ecf (studygolang.com)"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:'import (\n  "fmt"\n  "log"\n  "net/http"\n\n  "golang.org/x/net/html"\n)\n\nfunc crawl(url string) []string {\n  fmt.Println(url)\n  list, err := Extract(url)\n  if err != nil {\n    log.Print(err)\n  }\n  return list\n}\n\nfunc Extract(url string) ([]string, error) {\n  resp, err := http.Get(url)\n  if err != nil {\n    return nil, err\n  }\n  if resp.StatusCode != http.StatusOK {\n    resp.Body.Close()\n    return nil, fmt.Errorf("getting %s: %s", url, resp.Status)\n  }\n\n  doc, err := html.Parse(resp.Body)\n  resp.Body.Close()\n  if err != nil {\n    return nil, fmt.Errorf("parsing %s as HTML: %v", url, err)\n  }\n\n  var links []string\n  visitNode := func(n *html.Node) {\n    if n.Type == html.ElementNode && n.Data == "a" {\n      for _, a := range n.Attr {\n        if a.Key != "href" {\n          continue\n        }\n        link, err := resp.Request.URL.Parse(a.Val)\n        if err != nil {\n          continue // ignore bad URLs\n        }\n        links = append(links, link.String())\n      }\n    }\n  }\n  forEachNode(doc, visitNode, nil)\n  return links, nil\n}\n\nfunc forEachNode(n *html.Node, pre, post func(n *html.Node)) {\n  if pre != nil {\n    pre(n)\n  }\n  for c := n.FirstChild; c != nil; c = c.NextSibling {\n    forEachNode(c, pre, post)\n  }\n  if post != nil {\n    post(n)\n  }\n}\n\nfunc main() {\n  worklist := make(chan []string)\n\n  go func() { worklist <- []string{"http://gopl.io/"} }()\n\n  // Crawl the web concurrently.\n  seen := make(map[string]bool)\n  for list := range worklist {\n    for _, link := range list {\n      if !seen[link] {\n        seen[link] = true\n        go func(link string) {\n          worklist <- crawl(link)\n        }(link)\n      }\n    }\n  }\n}\n\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u53c2\u8003\u6587\u7ae0",children:"\u53c2\u8003\u6587\u7ae0"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://books.studygolang.com/gopl-zh/ch8/ch8.html",children:"Goroutines \u548c Channels \xb7 Go \u8bed\u8a00\u5723\u7ecf (studygolang.com)"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://www.cnblogs.com/sparkdev/p/10917536.html",children:"https://www.cnblogs.com/sparkdev/p/10917536.html"})})]})}function g(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},9999:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>t});var o=r(8101);const l={},i=o.createContext(l);function s(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);