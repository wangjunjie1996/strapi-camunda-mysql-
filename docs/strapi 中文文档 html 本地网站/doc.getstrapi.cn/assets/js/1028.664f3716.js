(window.webpackJsonp=window.webpackJsonp||[]).push([[1028],{1449:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自定义数据响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义数据响应"}},[t._v("#")]),t._v(" 自定义数据响应")]),t._v(" "),a("p",[t._v("在本指南中，我们将看到如何定制 API 的响应。")]),t._v(" "),a("h2",{attrs:{id:"引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[t._v("#")]),t._v(" 引言")]),t._v(" "),a("p",[t._v("为了能够更新默认数据响应，必须首先了解它是如何工作的")]),t._v(" "),a("p",[t._v("当您创建一个内容类型时，它会生成一个带有以下 "),a("RouterLink",{attrs:{to:"/developer-docs/latest/developer-resources/content-api/content-api.html#api-endpoints"}},[t._v("endpoints")]),t._v(" 列表的 API。")],1),t._v(" "),a("p",[t._v("这些端点中的每一个都触发一个 "),a("RouterLink",{attrs:{to:"/developer-docs/latest/development/backend-customization.html#controllers"}},[t._v("控制器操作")]),t._v(" 。下面是创建内容类型时默认存在的控制器操作的列表。")],1),t._v(" "),a("p",[t._v("如果您检查您生成的 API 的控制器文件 "),a("code",[t._v("./api/{content-type}/controller/{Content-Type}.js")]),t._v(" ，你会看到一个空文件。这是因为所有的默认逻辑都是由 Strapi 管理的。但是您可以使用自己的代码覆盖这些操作。")]),t._v(" "),a("p",[t._v("这就是我们管理自定义数据响应所要做的。")]),t._v(" "),a("h2",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),a("p",[t._v("在我们的示例中，我们将使用一个带有厨师的餐厅类型。默认情况下，当您取餐厅时，您将获得厨师的所有信息。让我们考虑一下，出于隐私原因，你不想暴露厨师的邮件。")]),t._v(" "),a("p",[t._v("为了强制执行这个规则，我们将自定义获取所有餐馆的操作，并从返回的数据中删除电子邮件。")]),t._v(" "),a("p",[t._v("按照这个例子，你需要创建一个内容类型的 "),a("code",[t._v("restaurant")]),t._v(" ，并添加以下字段定义:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(" attribute named "),a("code",[t._v("name")])]),t._v(" "),a("li",[a("code",[t._v("text")]),t._v(" attribute named "),a("code",[t._v("description")])]),t._v(" "),a("li",[a("code",[t._v("relation")]),t._v(" attribute "),a("strong",[t._v("Restaurant")]),t._v(" ("),a("code",[t._v("chef")]),t._v(") - "),a("strong",[t._v("User")]),t._v(" has many "),a("strong",[t._v("Restaurants")]),t._v(" - "),a("strong",[t._v("Users")]),t._v(" ("),a("code",[t._v("restaurants")]),t._v(")")])]),t._v(" "),a("p",[t._v("然后添加一些数据。")]),t._v(" "),a("h2",{attrs:{id:"覆盖控制器操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#覆盖控制器操作"}},[t._v("#")]),t._v(" 覆盖控制器操作")]),t._v(" "),a("p",[t._v("为了定制获取所有餐厅的函数，我们必须覆盖 "),a("code",[t._v("find")]),t._v(" 函数。")]),t._v(" "),a("p",[t._v("首先，为了看出区别，让我们请求 "),a("code",[t._v("GET /restaurants")]),t._v("。您将看到您创建的所有数据。现在让我们开始定制。")]),t._v(" "),a("p",[a("strong",[t._v("Path —")]),t._v(" "),a("code",[t._v("./api/restaurant/controller/Restaurant.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'strapi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("保存新函数之后，让我们重新启动 "),a("code",[t._v("GET /restaurants")]),t._v(" 请求。")]),t._v(" "),a("h2",{attrs:{id:"把数据拿回来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#把数据拿回来"}},[t._v("#")]),t._v(" 把数据拿回来")]),t._v(" "),a("p",[t._v("我们现在知道了需要更新的函数，但是我们只是想定制返回的 "),a("code",[t._v("restaurant")]),t._v(" 值。")]),t._v(" "),a("p",[t._v("在 "),a("RouterLink",{attrs:{to:"/developer-docs/latest/development/backend-customization.html#extending-a-model-controller"}},[t._v("controller 文章")]),t._v(" 中，您将找到每个操作的默认实现。它将帮助您覆盖提取逻辑。")],1),t._v(" "),a("p",[a("strong",[t._v("Path —")]),t._v(" "),a("code",[t._v("./api/restaurant/controller/Restaurant.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sanitizeEntity "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'strapi-utils'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      entities "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" strapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("restaurant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      entities "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" strapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("restaurant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sanitizeEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" strapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("restaurant "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("现在，关于 "),a("code",[t._v("GET /restaurants")]),t._v(" 的数据又回来了")]),t._v(" "),a("h2",{attrs:{id:"应用我们的改变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用我们的改变"}},[t._v("#")]),t._v(" 应用我们的改变")]),t._v(" "),a("p",[t._v("我们可以看到 "),a("code",[t._v("find")]),t._v(" 函数返回 "),a("code",[t._v("map")]),t._v(" 的结果，而 "),a("code",[t._v("map")]),t._v(" 函数只是对所有条目进行 "),a("code",[t._v("sanitizes")]),t._v(" 。")]),t._v(" "),a("p",[t._v("因此，我们不仅要返回经过 "),a("code",[t._v("sanitized")]),t._v(" 的条目，还要删除每个餐厅的厨师电子邮件。")]),t._v(" "),a("p",[a("strong",[t._v("Path —")]),t._v(" "),a("code",[t._v("./api/restaurant/controller/Restaurant.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sanitizeEntity "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'strapi-utils'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      entities "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" strapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("restaurant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      entities "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" strapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("restaurant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" restaurant "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sanitizeEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" strapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("restaurant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("restaurant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" restaurant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" restaurant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" restaurant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("然后，电子邮件消失了。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("本指南可以应用于任何其他控制器操作。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);