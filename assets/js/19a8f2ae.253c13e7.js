"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6256],{5575:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"skill/programming-languages/go/try-gin-framework","title":"Gin\u6846\u67b6\u521d\u4f53\u9a8c","description":"\u5b89\u88c5 Gin","source":"@site/docs/skill/programming-languages/go/Gin\u6846\u67b6\u521d\u4f53\u9a8c.md","sourceDirName":"skill/programming-languages/go","slug":"/try-gin-framework","permalink":"/ktstudio-site/docs/try-gin-framework","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"go","permalink":"/ktstudio-site/docs/tags/go"},{"inline":true,"label":"gin","permalink":"/ktstudio-site/docs/tags/gin"}],"version":"current","frontMatter":{"id":"try-gin-framework","slug":"/try-gin-framework","title":"Gin\u6846\u67b6\u521d\u4f53\u9a8c","date":"2021-09-01T00:00:00.000Z","authors":"kuizuo","tags":["go","gin"],"keywords":["go","gin"]},"sidebar":"skill","previous":{"title":"Go\u5e76\u53d1","permalink":"/ktstudio-site/docs/go-concurrent"},"next":{"title":"Git","permalink":"/ktstudio-site/docs/category/git"}}');var r=t(5105),s=t(9999);const l={id:"try-gin-framework",slug:"/try-gin-framework",title:"Gin\u6846\u67b6\u521d\u4f53\u9a8c",date:new Date("2021-09-01T00:00:00.000Z"),authors:"kuizuo",tags:["go","gin"],keywords:["go","gin"]},c=void 0,o={},d=[{value:"\u5b89\u88c5 Gin",id:"\u5b89\u88c5-gin",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u70ed\u52a0\u8f7d",id:"\u70ed\u52a0\u8f7d",level:3},{value:"Fresh",id:"fresh",level:3},{value:"\u8fd4\u56de\u6570\u636e\u683c\u5f0f",id:"\u8fd4\u56de\u6570\u636e\u683c\u5f0f",level:3},{value:"JSON",id:"json",level:3},{value:"HTML",id:"html",level:3},{value:"\u914d\u7f6e\u9759\u6001 Web \u76ee\u5f55",id:"\u914d\u7f6e\u9759\u6001-web-\u76ee\u5f55",level:3},{value:"\u83b7\u53d6 Query \u53c2\u6570",id:"\u83b7\u53d6-query-\u53c2\u6570",level:3},{value:"\u83b7\u53d6 Post \u6570\u636e",id:"\u83b7\u53d6-post-\u6570\u636e",level:3},{value:"Post \u4f20\u503c\u7ed1\u5b9a\u5230\u7ed3\u6784\u4f53",id:"post-\u4f20\u503c\u7ed1\u5b9a\u5230\u7ed3\u6784\u4f53",level:3},{value:"\u52a8\u6001\u8def\u7531\u4f20\u503c",id:"\u52a8\u6001\u8def\u7531\u4f20\u503c",level:3},{value:"\u8def\u7531\u5206\u7ec4",id:"\u8def\u7531\u5206\u7ec4",level:3},{value:"\u63a7\u5236\u5668",id:"\u63a7\u5236\u5668",level:3},{value:"\u4e2d\u95f4\u4ef6",id:"\u4e2d\u95f4\u4ef6",level:3},{value:"\u5c40\u90e8\u4e2d\u95f4\u4ef6",id:"\u5c40\u90e8\u4e2d\u95f4\u4ef6",level:4},{value:"\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u5168\u5c40\u4e2d\u95f4\u4ef6",level:4},{value:"\u5206\u7ec4\u4e2d\u95f4\u4ef6",id:"\u5206\u7ec4\u4e2d\u95f4\u4ef6",level:4},{value:"\u53d6\u6d88\u9ed8\u8ba4\u4e2d\u95f4\u4ef6",id:"\u53d6\u6d88\u9ed8\u8ba4\u4e2d\u95f4\u4ef6",level:4},{value:"\u4e2d\u95f4\u4ef6\u4e2d\u4f7f\u7528 goroutine \u534f\u7a0b",id:"\u4e2d\u95f4\u4ef6\u4e2d\u4f7f\u7528-goroutine-\u534f\u7a0b",level:4},{value:"\u6587\u4ef6\u4e0a\u4f20",id:"\u6587\u4ef6\u4e0a\u4f20",level:3},{value:"\u6700\u7ec8\u9879\u76ee\u7ed3\u6784",id:"\u6700\u7ec8\u9879\u76ee\u7ed3\u6784",level:2},{value:"\u6574\u4f53\u611f\u53d7",id:"\u6574\u4f53\u611f\u53d7",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u5b89\u88c5-gin",children:"\u5b89\u88c5 Gin"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://gin-gonic.com/zh-cn/docs/",children:"\u6587\u6863 | Gin Web Framework (gin-gonic.com)"})}),"\n",(0,r.jsx)(e.p,{children:"\u6253\u5f00\u547d\u4ee4\u884c\u7a97\u53e3\uff0c\u8f93\u5165"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"go get -u github.com/gin-gonic/gin\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5927\u6982\u7387\u53ef\u80fd\u5b89\u88c5\u4e0d\u4e0a\uff0c\u4e00\u822c\u8fd9\u91cc\u5c31\u9700\u8981\u914d\u7f6e Go \u4ee3\u7406"}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,r.jsxs)(e.p,{children:["\u521b\u5efa\u6587\u4ef6\u5939 GinTest\uff0c\u8fdb\u5165\u76ee\u5f55\u8f93\u5165\u547d\u4ee4",(0,r.jsx)(e.code,{children:"go mod init GinTest"}),"\u6765\u7ba1\u7406\u9879\u76ee\u7684\u5305"]}),"\n",(0,r.jsx)(e.p,{children:"\u521b\u5efa\u6587\u4ef6 main.go \u5185\u5bb9\u4e3a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport "github.com/gin-gonic/gin"\n\nfunc main() {\n\tr := gin.Default()\n\n\tr.GET("/", func(c *gin.Context) {\n\t\tc.String(200, "\u4f60\u597d,gin")\n\t})\n\n\tr.Run()\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7",(0,r.jsx)(e.code,{children:'go run "f:\\GO\\GinTest\\main.go"'}),"\u5373\u53ef\u8fd0\u884c go \u670d\u52a1\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20210831045351327.png",alt:"image-20210831045351327"})}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,r.jsx)(e.code,{children:"http:127.0.0.1:8080"}),"\u4fbf\u53ef\u8f93\u51fa",(0,r.jsx)(e.code,{children:"\u4f60\u597d,gin"})]}),"\n",(0,r.jsx)(e.h3,{id:"\u70ed\u52a0\u8f7d",children:"\u70ed\u52a0\u8f7d"}),"\n",(0,r.jsx)(e.p,{children:"\u7531\u4e8e\u6bcf\u6b21\u66f4\u6539\u4ee3\u7801\u540e\u90fd\u9700\u8981\u91cd\u65b0\u542f\u52a8\uff0c\u901a\u8fc7\u70ed\u52a0\u8f7d\u53ef\u4ee5\u7701\u53bb\u6bcf\u6b21\u624b\u52a8\u7f16\u8bd1\u7684\u8fc7\u7a0b"}),"\n",(0,r.jsx)(e.h3,{id:"fresh",children:"Fresh"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u8fb9\u4f7f\u7528\u7684\u662f fresh\uff0c\u8fd8\u6709\u5176\u4ed6\u7684\u70ed\u52a0\u8f7d\u5de5\u5177\uff0c\u4f8b\u5982 Air\uff0cbee\uff0cgin \u7b49\u7b49"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"go get github.com/pilu/fresh\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u63a5\u7740\u8f93\u5165 fresh \u5373\u53ef"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20210831061629685.png",alt:"image-20210831061629685"})}),"\n",(0,r.jsx)(e.p,{children:"\u540c\u65f6\u8fd8\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa tmp \u6587\u4ef6\u5939\uff0c\u6709\u4e2a\u7f16\u8bd1\u597d\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u8fd4\u56de\u6570\u636e\u683c\u5f0f",children:"\u8fd4\u56de\u6570\u636e\u683c\u5f0f"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u6240\u6f14\u793a\u7684",(0,r.jsx)(e.code,{children:"c.String()"})," \u8fd4\u56de\u7684\u662f\u6587\u672c\u683c\u5f0f\uff0c\u4f46\u6709\u65f6\u5019\u8981\u8fd4\u56de\u7684\u53ef\u80fd\u662f\u4e00\u4e2a JSON \u7c7b\u578b\uff0c\u6216\u8005\u662f\u4e00\u4e2a HTML \u6216 XML \u683c\u5f0f\u3002\u8fd9\u65f6\u5019\u7684\u8bdd\u5c31\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u65b9\u6cd5\u4e86"]}),"\n",(0,r.jsx)(e.h3,{id:"json",children:"JSON"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'r.GET("/json", func(c *gin.Context) {\n\tc.JSON(200, map[string]interface{}{\n\t\t"code": 200,\n\t\t"msg":  "\u6210\u529f",\n\t})\n})\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,r.jsx)(e.a,{href:"http://127.0.0.1:8080/json%E6%98%BE%E7%A4%BA%E5%A6%82%E4%B8%8B%E6%95%B0%E6%8D%AE",children:"http://127.0.0.1:8080/json\u663e\u793a\u5982\u4e0b\u6570\u636e"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{ "code": 200, "msg": "\u6210\u529f" }\n'})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u6ce8: msg \u5c5e\u6027\u540e\uff0c\u5fc5\u987b\u8981\u6709,\u53f7"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4e2d",(0,r.jsx)(e.code,{children:"map[string]interface{}"}),"\u53ef\u4ee5\u7b80\u5199\u4e3a",(0,r.jsx)(e.code,{children:"gin.H"})]}),"\n",(0,r.jsx)(e.p,{children:"\u4e5f\u53ef\u901a\u8fc7\u5b9a\u4e49\u7ed3\u6784\u4f53"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'type Article struct {\n\tTitle   string `json:"title"`\n\tDesc    string `json:"desc"`\n\tContent string `json:"content"`\n}\n\nr.GET("/json3", func(c *gin.Context) {\n\ta := &Article{\n\t\tTitle:   "\u8fd9\u662f\u6807\u9898",\n\t\tDesc:    "\u63cf\u8ff0",\n\t\tContent: "\u6d4b\u8bd5\u5185\u5bb9",\n\t}\n\n\tc.JSON(200, a)\n})\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5f97\u5230\u6570\u636e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{ "title": "\u8fd9\u662f\u6807\u9898", "desc": "\u63cf\u8ff0", "content": "\u6d4b\u8bd5\u5185\u5bb9" }\n'})}),"\n",(0,r.jsx)(e.p,{children:"JSONP \u4e0e XML \u6570\u636e\u5c31\u4e0d\u505a\u4ecb\u7ecd\uff0c\u987a\u4fbf\u63d0\u4e00\u4e0b\uff0c\u8fd9\u5e74\u5934\u8fd8\u6709\u4eba\u7528 JSONP \u6765\u8de8\u57df\u5417\uff1f"}),"\n",(0,r.jsx)(e.h3,{id:"html",children:"HTML"}),"\n",(0,r.jsxs)(e.p,{children:["\u8981\u53d1\u9001 HTML \u7684\u8bdd\uff0c\u9996\u5148\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u6587\u4ef6\u5939",(0,r.jsx)(e.code,{children:"templates"}),"\uff0c\u518d\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6",(0,r.jsx)(e.code,{children:"test.html"}),"\uff0c\u5176\u4e2d",(0,r.jsx)(e.code,{children:"<body>"}),"\u5185\u5bb9\u4e3a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",metastring:'title="/templates/test.html"',children:"<body>\n  <h2>{{.title}}</h2>\n</body>\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u63a5\u7740\u5728 main.go \u4e2d\u914d\u7f6e Html \u6a21\u677f\u6587\u4ef6\uff0c\u5982\u4e0b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'r := gin.Default()\nr.LoadHTMLFiles("templates/*")\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u91cd\u542f\u4e0b\u670d\u52a1\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u5728\u8def\u7531\u4e2d\u8fd4\u56de HTML \u6587\u4ef6\uff0c\u5982"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'r.GET("/html", func(c *gin.Context) {\n\n\tc.HTML(200, "test.html", gin.H{\n\t\t"title": "\u4e00\u4e2a\u6807\u9898\u800c\u5df2",\n\t})\n})\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u7ed3\u679c\u5c31\u4e0d\u653e\u56fe\u4e86\uff0c\u5c31\u662f\u5c06",(0,r.jsx)(e.code,{children:"\u4e00\u4e2a\u6807\u9898\u800c\u5df2"}),"\u586b\u5165\u81f3 h2 \u6807\u7b7e\u5904"]}),"\n",(0,r.jsx)(e.h3,{id:"\u914d\u7f6e\u9759\u6001-web-\u76ee\u5f55",children:"\u914d\u7f6e\u9759\u6001 Web \u76ee\u5f55"}),"\n",(0,r.jsx)(e.p,{children:"\u548c\u914d\u7f6e html \u6a21\u677f\u4e00\u6837\uff0c\u5148\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u9759\u6001 web \u76ee\u5f55 static\uff0c\u7136\u540e\u6dfb\u52a0"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'r.Static("/static", "./static")\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u8bbf\u95ee ",(0,r.jsx)(e.code,{children:"http://127.0.0.1:8080/static"})," \u5c31\u80fd\u8bbf\u95ee\u9759\u6001\u6587\u4ef6\u5939\u4e0b\u7684\u8d44\u6e90"]}),"\n",(0,r.jsx)(e.h3,{id:"\u83b7\u53d6-query-\u53c2\u6570",children:"\u83b7\u53d6 Query \u53c2\u6570"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'r.GET("/query", func(c *gin.Context) {\n\tusername := c.Query("username")\n\tpage := c.DefaultQuery("page", "1")\n\n\tc.String(200, username+page)\n})\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6d4f\u89c8\u5668\u8bf7\u6c42 ",(0,r.jsx)(e.code,{children:"http://127.0.0.1:8080/query?username=kuizuo"})," \u4fbf\u53ef\u8f93\u51fa ",(0,r.jsx)(e.code,{children:"kuizuo1"})]}),"\n",(0,r.jsx)(e.h3,{id:"\u83b7\u53d6-post-\u6570\u636e",children:"\u83b7\u53d6 Post \u6570\u636e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'r.POST("/add", func(c *gin.Context) {\n    username := c.PostForm("username")\n    password := c.PostForm("password")\n\n    c.String(200, username+password)\n})\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528 api \u8bf7\u6c42\u5de5\u5177\u53d1\u9001 post \u6570\u636e\u4fbf\u53ef\u8f93\u51fa\u76f8\u5e94\u6570\u636e"}),"\n",(0,r.jsx)(e.h3,{id:"post-\u4f20\u503c\u7ed1\u5b9a\u5230\u7ed3\u6784\u4f53",children:"Post \u4f20\u503c\u7ed1\u5b9a\u5230\u7ed3\u6784\u4f53"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'type UserInfo struct {\n\tUsername string `json:"username" form:"username"`\n\tPassword string `json:"password" form:"password"`\n}\n\nr.POST("/add1", func(c *gin.Context) {\n\tuser := &UserInfo{}\n\n\tif err := c.ShouldBind(&user); err == nil {\n\t\tc.JSON(200, user)\n\t} else {\n\t\tc.JSON(400,gin.H{\n\t\t\t"err":err.Error()\n\t\t})\n\t}\n})\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u540c\u6837\u4f7f\u7528 api \u8bf7\u6c42\u5de5\u5177\uff0c\u53d1\u9001 post \u6570\u636e\uff0c\u5c31\u53ef\u76f4\u63a5\u901a\u8fc7 user \u83b7\u53d6\u4fe1\u606f"}),"\n",(0,r.jsx)(e.h3,{id:"\u52a8\u6001\u8def\u7531\u4f20\u503c",children:"\u52a8\u6001\u8def\u7531\u4f20\u503c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'r.GET("/list/:id", func(c *gin.Context) {\n    id := c.Param("id")\n    c.String(200, id)\n})\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6d4f\u89c8\u5668\u8bf7\u6c42",(0,r.jsx)(e.a,{href:"http://127.0.0.1:8080/list/123",children:"http://127.0.0.1:8080/list/123"})," id \u4fbf\u53ef\u8d4b\u503c\u4e3a 123"]}),"\n",(0,r.jsx)(e.h3,{id:"\u8def\u7531\u5206\u7ec4",children:"\u8def\u7531\u5206\u7ec4"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u6587\u4ef6\u5939",(0,r.jsx)(e.code,{children:"routers"}),"\uff0c\u91cc\u9762\u521b\u5efa\u8def\u7531\u6587\u4ef6\uff0c\u5982",(0,r.jsx)(e.code,{children:"apiRouters.go"}),"\uff0c\u5185\u5bb9\u5982\u4e0b"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="/routers/apiRouters.go"',children:'package routers\n\nimport "github.com/gin-gonic/gin"\n\nfunc ApiRoutersInit(r *gin.Engine) {\n\tapiRouters := r.Group("/api")\n\t{\n\t\tapiRouters.GET("/json", func(c *gin.Context) {\n\t\t\tc.JSON(200, gin.H{\n\t\t\t\t"code": 200,\n\t\t\t\t"msg":  "\u6210\u529f",\n\t\t\t})\n\t\t})\n\t}\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u63a5\u7740\u5728",(0,r.jsx)(e.code,{children:"main.go"}),"\u6587\u4ef6\u4e2d\uff0c\u5bfc\u5165 routers"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'import (\n\t"GinTest/routers"\n\t"github.com/gin-gonic/gin"\n)\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u540c\u65f6\u8f93\u5165"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:"r := gin.Default()\n\nrouters.ApiRoutersInit(r)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u8bbf\u95ee ",(0,r.jsx)(e.a,{href:"http://127.0.0.1:8080/api/json",children:"http://127.0.0.1:8080/api/json"}),"\uff0c\u663e\u793a",(0,r.jsx)(e.code,{children:'{"code":200,"msg":"\u6210\u529f"}'})]}),"\n",(0,r.jsx)(e.h3,{id:"\u63a7\u5236\u5668",children:"\u63a7\u5236\u5668"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u6587\u4ef6\u5939",(0,r.jsx)(e.code,{children:"controllers"}),"\uff0c\u91cc\u9762\u521b\u5efa\u63a7\u5236\u5668\u6587\u4ef6\uff0c\u5982",(0,r.jsx)(e.code,{children:"userController.go"}),"\uff0c\u5185\u5bb9\u5982\u4e0b"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="/controllers/user/userController.go"',children:'package user\n\nimport "github.com/gin-gonic/gin"\n\ntype UserController\n\nfunc UserList(c *gin.Context) {\n\tc.String(200, "\u7528\u6237\u5217\u8868")\n}\n\nfunc UserAdd(c *gin.Context) {\n\tc.String(200, "\u6dfb\u52a0\u7528\u6237")\n}\n\nfunc UserEdit(c *gin.Context) {\n\tc.String(200, "\u7f16\u8f91\u7528\u6237")\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="/routers/userRouters.go"',children:'package routers\n\nimport (\n\t"GinTest/controllers/user"\n\t"github.com/gin-gonic/gin"\n)\n\nfunc UserRoutersInit(r *gin.Engine) {\n\tuserRouters := r.Group("/user")\n\t{\n\t\tuserRouters.GET("/list", user.UserList)\n\t\tuserRouters.GET("/add", user.UserAdd)\n\t\tuserRouters.GET("/edit", user.UserEdit)\n\t}\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5206\u522b\u8bbf\u95ee\u5bf9\u5e94\u4e09\u4e2a\u8def\u7531\uff0c\u90fd\u53ef\u5f97\u5230\u5bf9\u5e94\u7ed3\u679c"}),"\n",(0,r.jsx)(e.p,{children:"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63a7\u5236\u5668\u7ed3\u6784\u4f53\u4f18\u5316\u6210\u5982\u4e0b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="/controllers/user/userController.go"',children:'package user\n\nimport "github.com/gin-gonic/gin"\n\ntype UserController struct {\n}\n\nfunc (con UserController) List(c *gin.Context) {\n\tc.String(200, "\u7528\u6237\u5217\u8868")\n}\n\nfunc (con UserController) Add(c *gin.Context) {\n\tc.String(200, "\u6dfb\u52a0\u7528\u6237")\n}\n\nfunc (con UserController) Edit(c *gin.Context) {\n\tc.String(200, "\u7f16\u8f91\u7528\u6237")\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="/routers/userRouters.go"',children:'package routers\n\nimport (\n\t"GinTest/controllers/user"\n\n\t"github.com/gin-gonic/gin"\n)\n\nfunc UserRoutersInit(r *gin.Engine) {\n\tuserRouters := r.Group("/user")\n\t{\n\t\tuserRouters.GET("/list", user.UserController{}.List)\n\t\tuserRouters.GET("/add", user.UserController{}.Add)\n\t\tuserRouters.GET("/edit", user.UserController{}.Edit)\n\t}\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u4e2d\u95f4\u4ef6",children:"\u4e2d\u95f4\u4ef6"}),"\n",(0,r.jsx)(e.p,{children:"\u4e2d\u95f4\u4ef6\u672c\u8d28\u4e0a\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8def\u7531\u6267\u884c\u7684\u65f6\u5019\u53ef\u4ee5\u5728\u5bf9\u5e94\u7684\u5730\u65b9\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u6267\u884c\uff0c\u5982"}),"\n",(0,r.jsx)(e.h4,{id:"\u5c40\u90e8\u4e2d\u95f4\u4ef6",children:"\u5c40\u90e8\u4e2d\u95f4\u4ef6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'func initMiddleware(c *gin.Context) {\n\tfmt.Println("1-\u4e2d\u95f4\u4ef6")\n\n\tc.Next()\n\n\tfmt.Println("2-\u4e2d\u95f4\u4ef6")\n}\n\nr.GET("/", initMiddleware, func(c *gin.Context) {\n    c.String(200, "\u4f60\u597d,gin")\n})\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u8bbf\u95ee",(0,r.jsx)(e.a,{href:"http://127.0.0.1:8080",children:"http://127.0.0.1:8080"})," \u4fbf\u4f1a\u8f93\u51fa ",(0,r.jsx)(e.code,{children:"1-\u4e2d\u95f4\u4ef6"})," ",(0,r.jsx)(e.code,{children:"2-\u4e2d\u95f4\u4ef6"})]}),"\n",(0,r.jsx)(e.h4,{id:"\u5168\u5c40\u4e2d\u95f4\u4ef6",children:"\u5168\u5c40\u4e2d\u95f4\u4ef6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:"r.Use(initMiddleware)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u6837\u5c31\u9700\u8981\u7ed9\u6bcf\u4e2a\u8def\u7531\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u914d\u7f6e\uff0c\u6240\u6709\u8def\u7531\u8bf7\u6c42\u540e\u90fd\u5c06\u4f1a\u8f93\u51fa\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"\u5206\u7ec4\u4e2d\u95f4\u4ef6",children:"\u5206\u7ec4\u4e2d\u95f4\u4ef6"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0e\u5168\u5c40\u4e2d\u95f4\u4ef6\u4f7f\u7528\u4e00\u6837\uff0c\u5982"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="/routers/apiRouters.go"',children:'apiRouters := r.Group("/api",initMiddleware)\n\n// \u6216\napiRouters := r.Group("/api")\napiRouters.Use(initMiddleware)\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u521b\u5efa\u4e2d\u95f4\u4ef6\u76ee\u5f55",(0,r.jsx)(e.code,{children:"middlewares"}),"\uff0c\u521b\u5efa\u6587\u4ef6",(0,r.jsx)(e.code,{children:"init.go"}),"\uff0c\u5185\u5bb9"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="/middleware/init.go"',children:'package middlewares\n\nimport (\n\t"fmt"\n\t"github.com/gin-gonic/gin"\n)\n\nfunc InitMiddleware(c *gin.Context) {\n\tfmt.Println("1-\u4e2d\u95f4\u4ef6")\n\n\tc.Next()\n\n\tfmt.Println("2-\u4e2d\u95f4\u4ef6")\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u5982\u4e0b\uff08\u524d\u63d0\u9700\u8981\u5bfc\u5165\u4e2d\u95f4\u4ef6\u7684\u5305\uff09"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="/routers/apiRouters.go"',children:"apiRouters.Use(middlewares.InitMiddleware)\n"})}),"\n",(0,r.jsx)(e.h4,{id:"\u53d6\u6d88\u9ed8\u8ba4\u4e2d\u95f4\u4ef6",children:"\u53d6\u6d88\u9ed8\u8ba4\u4e2d\u95f4\u4ef6"}),"\n",(0,r.jsx)(e.p,{children:"gin.Default()\u9ed8\u8ba4\u4f7f\u7528\u4e86 Logger \u548c Recovery \u4e2d\u95f4\u4ef6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"// Default returns an Engine instance with the Logger and Recovery middleware already attached.\nfunc Default() *Engine {\n\tdebugPrintWARNINGDefault()\n\tengine := New()\n\tengine.Use(Logger(), Recovery())\n\treturn engine\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u9700\u8981\u4e0a\u9762\u4e24\u4e2a\u9ed8\u8ba4\u7684\u4e2d\u95f4\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 gin.New()\u65b0\u5efa\u4e00\u4e2a\u6ca1\u6709\u4efb\u4f55\u4e2d\u95f4\u4ef6\u7684\u8def\u7531"}),"\n",(0,r.jsx)(e.h4,{id:"\u4e2d\u95f4\u4ef6\u4e2d\u4f7f\u7528-goroutine-\u534f\u7a0b",children:"\u4e2d\u95f4\u4ef6\u4e2d\u4f7f\u7528 goroutine \u534f\u7a0b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="/middleware/init.go"',children:'func InitMiddleware(c *gin.Context) {\n\tfmt.Println("1-\u4e2d\u95f4\u4ef6")\n\n\tcCp := c.Copy()\n\tgo func() {\n\t\ttime.Sleep(2 * time.Second)\n        fmt.Println("path: " + cCp.Request.URL.Path)\n\t}()\n\n\tc.Next()\n\n\tfmt.Println("2-\u4e2d\u95f4\u4ef6")\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u8bf7\u6c42\u5b8c\u6210\u4e24\u79d2\u540e\uff0c\u5c06\u4f1a\u6253\u5370",(0,r.jsx)(e.code,{children:"path /"})]}),"\n",(0,r.jsx)(e.h3,{id:"\u6587\u4ef6\u4e0a\u4f20",children:"\u6587\u4ef6\u4e0a\u4f20"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'r.MaxMultipartMemory = 8 << 20 // 8 MiB\nr.POST("/upload", func(c *gin.Context) {\n\t// \u5355\u6587\u4ef6\n\tfile, _ := c.FormFile("file")\n\tlog.Println(file.Filename)\n\n\t// \u4e0a\u4f20\u6587\u4ef6\u81f3\u6307\u5b9a\u76ee\u5f55\n\tdst := path.Join("./static/upload", file.Filename)\n\tc.SaveUploadedFile(file, dst)\n\n\tc.String(200, fmt.Sprintf("\'%s\' uploaded!", file.Filename))\n})\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528 curl\uff0c\u5373\u53ef\u4e0a\u4f20\u6587\u4ef6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'curl -X POST http://localhost:8080/upload \\\n  -F "file=@/Users/appleboy/test.zip" \\\n  -H "Content-Type: multipart/form-data"\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u6700\u7ec8\u9879\u76ee\u7ed3\u6784",children:"\u6700\u7ec8\u9879\u76ee\u7ed3\u6784"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20210901033059576.png",alt:"image-20210901033059576"})}),"\n",(0,r.jsx)(e.h2,{id:"\u6574\u4f53\u611f\u53d7",children:"\u6574\u4f53\u611f\u53d7"}),"\n",(0,r.jsx)(e.p,{children:"\u8bf4\u5b9e\u8bdd\uff0c\u6211\u5df2\u7ecf\u5feb\u4e00\u5e74\u6ca1\u771f\u6b63\u63a5\u89e6\u4e00\u95e8\u65b0\u7684\u8bed\u8a00\u4e86\uff0c\u5199 Js \u548c Ts \u4ee3\u7801\u4e5f\u5199\u4e86\u5feb\u4e00\u5e74\u4e86\uff0c\u521d\u6b21\u4f53\u9a8c Gin \u6846\u67b6\u6574\u4f53\u611f\u53d7\u8fd8\u7b97\u4e0d\u9519\uff0c\u5927\u90e8\u5206\u7684\u540e\u7aef\u6846\u67b6\u8def\u7531\u57fa\u672c\u90fd\u662f\u8fd9\u4e48\u5199\u7684\uff0c\u4f53\u9a8c\u8fc7 Express\uff0cFlask \u8def\u7531\u5199\u6cd5\u5927\u81f4\u76f8\u540c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4ec5\u4ec5\u53ea\u662f\u521d\u6b65\u4f53\u9a8c\uff0c\u540e\u7eed\u4f30\u8ba1\u4f1a\u8003\u8651\u5c1d\u8bd5\u4e0a\u624b gin-vue-admin \u9879\u76ee"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://www.gin-vue-admin.com/",children:"\u81ea\u52a8\u5316\u5168\u6808\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf | Gin-Vue-Admin"})})]})}function g(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},9999:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var i=t(8101);const r={},s=i.createContext(r);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);