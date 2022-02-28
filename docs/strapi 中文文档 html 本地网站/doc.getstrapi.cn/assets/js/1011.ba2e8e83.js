(window.webpackJsonp=window.webpackJsonp||[]).push([[1011],{1429:function(a,t,r){"use strict";r.r(t);var s=r(9),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"api-参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-参考"}},[a._v("#")]),a._v(" API 参考")]),a._v(" "),r("ul",[r("li",[a._v("strapi\n"),r("ul",[r("li",[r("a",{attrs:{href:"#strapi-admin"}},[a._v(".admin")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-api"}},[a._v(".api")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-app"}},[a._v(".app")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-config"}},[a._v(".config")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-controllers"}},[a._v(".controllers")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-hook"}},[a._v(".hook")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-load"}},[a._v(".load()")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-log"}},[a._v(".log")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-middleware"}},[a._v(".middleware")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-models"}},[a._v(".models")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-plugins"}},[a._v(".plugins")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-query"}},[a._v(".query()")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-reload"}},[a._v(".reload()")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-router"}},[a._v(".router")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-server"}},[a._v(".server")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-services"}},[a._v(".services")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-start"}},[a._v(".start()")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#strapi-stop"}},[a._v(".stop()")])])])])]),a._v(" "),r("h2",{attrs:{id:"strapi-admin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-admin"}},[a._v("#")]),a._v(" strapi.admin")]),a._v(" "),r("p",[a._v("该对象包含包含在 "),r("code",[a._v("strapi-admin")]),a._v(" 包中的控制器、模型、服务和配置。")]),a._v(" "),r("h2",{attrs:{id:"strapi-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-api"}},[a._v("#")]),a._v(" strapi.api")]),a._v(" "),r("p",[a._v("对象中包含的 api "),r("code",[a._v("./api")]),a._v(" 文件夹。通过使用 "),r("code",[a._v("strapi.api[:name]")]),a._v(" ，您可以访问控制器、服务、模型定义以及。"),r("code",[a._v("./api/:name")]),a._v(" 文件夹")]),a._v(" "),r("h2",{attrs:{id:"strapi-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-app"}},[a._v("#")]),a._v(" strapi.app")]),a._v(" "),r("p",[a._v("返回 Koa 实例。")]),a._v(" "),r("h2",{attrs:{id:"strapi-config"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-config"}},[a._v("#")]),a._v(" strapi.config")]),a._v(" "),r("p",[a._v("返回表示项目配置的对象。中的每个 JavaScript 或 JSON 文件 "),r("code",[a._v("./config")]),a._v(" 文件夹将解析为 "),r("code",[a._v("strapi.config")]),a._v(" 对象。")]),a._v(" "),r("h2",{attrs:{id:"strapi-controllers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-controllers"}},[a._v("#")]),a._v(" strapi.controllers")]),a._v(" "),r("p",[a._v("返回项目中可用的控制器的对象。中的每个 JavaScript 文件 "),r("code",[a._v("./api/**/controllers")]),a._v(" 文件夹将被解析为 "),r("code",[a._v("strapi.controllers")]),a._v(" 对象。由于这个对象，您可以访问项目中任何地方的每个控制器的操作。")]),a._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),r("p",[a._v("这个对象不包括管理员控制器和插件控制器。")])]),a._v(" "),r("h2",{attrs:{id:"strapi-hook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-hook"}},[a._v("#")]),a._v(" strapi.hook")]),a._v(" "),r("p",[a._v("返回项目中可用的钩子的对象。每个符合此模式的文件夹 "),r("code",[a._v("strapi-*")]),a._v(" 并位于 "),r("code",[a._v("./node_modules")]),a._v(" 或 "),r("code",[a._v("/hooks")]),a._v(" 文件夹将挂载到 "),r("code",[a._v("strapi.hook")]),a._v(" 对象中。")]),a._v(" "),r("h2",{attrs:{id:"strapi-load"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-load"}},[a._v("#")]),a._v(" strapi.load")]),a._v(" "),r("p",[a._v("返回一个解析应用程序的配置、钩子、中间件和 api 的函数。它也加载中间件和挂钩与以前加载的配置。此方法可用于更新通过 "),r("code",[a._v("strapi")]),a._v(" 全局变量可用的引用，而无需重新启动服务器。但是，如果不重新启动服务器，就不会考虑新的配置。")]),a._v(" "),r("h2",{attrs:{id:"strapi-log"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-log"}},[a._v("#")]),a._v(" strapi.log")]),a._v(" "),r("p",[a._v("返回 Logger (Pino)实例。")]),a._v(" "),r("h2",{attrs:{id:"strapi-middleware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-middleware"}},[a._v("#")]),a._v(" strapi.middleware")]),a._v(" "),r("p",[a._v("返回项目中可用的中间件的对象。文件夹中的每个文件夹 "),r("code",[a._v("./middlewares")]),a._v(" 文件夹也将挂载到 "),r("code",[a._v("strapi.middleware")]),a._v(" 对象中。")]),a._v(" "),r("h2",{attrs:{id:"strapi-models"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-models"}},[a._v("#")]),a._v(" strapi.models")]),a._v(" "),r("p",[a._v("返回项目中可用模型的对象。中的每个 JavaScript 或 JSON 文件 "),r("code",[a._v("./api/**/models")]),a._v(" 文件夹将被解析为 "),r("code",[a._v("strapi.models")]),a._v(" 对象。还有所有的 "),r("code",[a._v("strapi.models.**")]),a._v(" 对象与 ORM (Mongoose，Bookshelf)返回的模型实例合并。它允许通过 "),r("code",[a._v("strapi.models.**")]),a._v(" 调用 ORM 方法 (ex: "),r("code",[a._v("strapi.models.users.find()")]),a._v(").")]),a._v(" "),r("h2",{attrs:{id:"strapi-plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-plugins"}},[a._v("#")]),a._v(" strapi.plugins")]),a._v(" "),r("p",[a._v("返回项目中可用的插件对象。每个插件对象包含相关的控制器、模型、服务和配置。")]),a._v(" "),r("h2",{attrs:{id:"strapi-query"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-query"}},[a._v("#")]),a._v(" strapi.query")]),a._v(" "),r("p",[a._v("这个工具函数允许绑定模型与特定于每个 ORM 的查询函数(例如: "),r("code",[a._v("mongoose")]),a._v(" 或 "),r("code",[a._v("bookshelf")]),a._v(")。有关详细信息，请参阅"),r("RouterLink",{attrs:{to:"/developer-docs/latest/development/backend-customization.html#queries"}},[a._v("Queries section")]),a._v(" 。")],1),a._v(" "),r("h2",{attrs:{id:"strapi-reload"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-reload"}},[a._v("#")]),a._v(" strapi.reload")]),a._v(" "),r("p",[a._v("返回一个重新加载整个应用程序的函数(带有停机时间)。")]),a._v(" "),r("h2",{attrs:{id:"strapi-router"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-router"}},[a._v("#")]),a._v(" strapi.router")]),a._v(" "),r("p",[a._v("返回 Router (Joi 路由器)实例。")]),a._v(" "),r("h2",{attrs:{id:"strapi-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-server"}},[a._v("#")]),a._v(" strapi.server")]),a._v(" "),r("p",[a._v("返回 "),r("a",{attrs:{href:"https://nodejs.org/api/http.md#http_class_http_server",target:"_blank",rel:"noopener noreferrer"}},[r("code",[a._v("http.Server")]),r("OutboundLink")],1),a._v(" 实例。")]),a._v(" "),r("h2",{attrs:{id:"strapi-services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-services"}},[a._v("#")]),a._v(" strapi.services")]),a._v(" "),r("p",[a._v("返回项目中可用的服务对象。中的每个 JavaScript 文件 "),r("code",[a._v("./api/**/services")]),a._v(" 文件夹将被解析为 "),r("code",[a._v("strapi.services")]),a._v(" 对象。")]),a._v(" "),r("h2",{attrs:{id:"strapi-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-start"}},[a._v("#")]),a._v(" strapi.start")]),a._v(" "),r("p",[a._v("返回一个加载配置、中间件和钩子的函数。然后，它执行引导程序文件，冻结全局变量并侦听配置的端口。")]),a._v(" "),r("h2",{attrs:{id:"strapi-stop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strapi-stop"}},[a._v("#")]),a._v(" strapi.stop")]),a._v(" "),r("p",[a._v("返回一个关闭服务器并销毁当前连接的函数。")])])}),[],!1,null,null,null);t.default=e.exports}}]);