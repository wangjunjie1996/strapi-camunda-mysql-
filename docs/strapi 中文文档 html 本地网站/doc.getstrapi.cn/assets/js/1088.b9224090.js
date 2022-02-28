(window.webpackJsonp=window.webpackJsonp||[]).push([[1088],{1510:function(e,t,a){"use strict";a.r(t);var o=a(9),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"migration-guide-from-alpha-15-to-alpha-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-guide-from-alpha-15-to-alpha-16"}},[e._v("#")]),e._v(" Migration guide from alpha.15 to alpha.16")]),e._v(" "),a("p",[a("strong",[e._v("Here are the major changes:")])]),e._v(" "),a("ul",[a("li",[e._v("Fix Relations on filter")])]),e._v(" "),a("p",[a("strong",[e._v("Useful links:")])]),e._v(" "),a("ul",[a("li",[e._v("Changelog: "),a("a",{attrs:{href:"https://github.com/strapi/strapi/releases/tag/v3.0.0-alpha.16",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/strapi/strapi/releases/tag/v3.0.0-alpha.16"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("GitHub diff: "),a("a",{attrs:{href:"https://github.com/strapi/strapi/compare/v3.0.0-alpha.15...v3.0.0-alpha.16",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/strapi/strapi/compare/v3.0.0-alpha.15...v3.0.0-alpha.16"),a("OutboundLink")],1)])]),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Feel free to "),a("a",{attrs:{href:"http://slack.strapi.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("join us on Slack"),a("OutboundLink")],1),e._v(" and ask questions about the migration process.")])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),a("p",[e._v("Install Strapi "),a("code",[e._v("alpha.16")]),e._v(" globally on your computer. To do so run "),a("code",[e._v("npm install strapi@3.0.0-alpha.16 -g")]),e._v(".")]),e._v(" "),a("p",[e._v("When it's done, generate a new empty project "),a("code",[e._v("strapi new myNewProject")]),e._v(" (don't pay attention to the database configuration).")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"update-node-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-node-modules"}},[e._v("#")]),e._v(" Update node modules")]),e._v(" "),a("p",[e._v("Update the Strapi's dependencies version (move Strapi's dependencies to "),a("code",[e._v("3.0.0-alpha.16")]),e._v(" version) of your project.")]),e._v(" "),a("p",[e._v("Run "),a("code",[e._v("npm install strapi@3.0.0-alpha.16 --save")]),e._v(" to update your strapi version.")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"update-the-admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-admin"}},[e._v("#")]),e._v(" Update the Admin")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you performed updates in the Admin, you will have to manually migrate your changes.")])]),e._v(" "),a("p",[e._v("Delete your old admin folder and replace it with the new one.")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"update-the-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-plugins"}},[e._v("#")]),e._v(" Update the Plugins")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you did a custom update on one of the plugins, you will have to manually migrate your update.")])]),e._v(" "),a("p",[e._v("Copy the fields and relations you had in your "),a("code",[e._v("/plugins/users-permissions/models/User.settings.json")]),e._v(" and "),a("code",[e._v("/plugins/users-permissions/config/jwt.json")]),e._v(" file in the new one.")]),e._v(" "),a("p",[e._v("Then, delete your old "),a("code",[e._v("plugins")]),e._v(" folder and replace it with the new one.")]),e._v(" "),a("h2",{attrs:{id:"⚠️-bookshelf-postgres-and-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⚠️-bookshelf-postgres-and-mysql"}},[e._v("#")]),e._v(" ⚠️ Bookshelf (Postgres and MySQL)")]),e._v(" "),a("p",[e._v("Reverse of migration "),a("RouterLink",{attrs:{to:"/developer-docs/latest/update-migration-guides/migration-guides/migration-guide-alpha.14.5-to-alpha.15.html"}},[e._v("alpha.14.5 to alpha.15")]),e._v(" Bookshelf section.")],1),e._v(" "),a("p",[e._v("Go in "),a("a",{attrs:{href:"https://github.com/strapi/strapi/compare/v3.0.0-alpha.15...v3.0.0-alpha.16",target:"_blank",rel:"noopener noreferrer"}},[e._v("diff files"),a("OutboundLink")],1),e._v(" and search for following files:")]),e._v(" "),a("p",[e._v("Services: "),a("code",[e._v("packages/strapi-generate-api/templates/bookshelf/service.template")]),e._v("\nLife cycle: "),a("code",[e._v("packages/strapi-generate-model/templates/bookshelf/model.template")])]),e._v(" "),a("p",[e._v("You will have to update all your service by applying the diff.")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"⚠️-mongoose-mongo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⚠️-mongoose-mongo"}},[e._v("#")]),e._v(" ⚠️ Mongoose (Mongo)")]),e._v(" "),a("p",[e._v("Reverse of migration "),a("RouterLink",{attrs:{to:"/developer-docs/latest/update-migration-guides/migration-guides/migration-guide-alpha.14.5-to-alpha.15.html"}},[e._v("alpha.14.5 to alpha.15")]),e._v(" Mongoose section.")],1),e._v(" "),a("p",[e._v("Go in "),a("a",{attrs:{href:"https://github.com/strapi/strapi/compare/v3.0.0-alpha.15...v3.0.0-alpha.16",target:"_blank",rel:"noopener noreferrer"}},[e._v("diff files"),a("OutboundLink")],1),e._v(" and search for following files:")]),e._v(" "),a("p",[e._v("Service: "),a("code",[e._v("packages/strapi-generate-api/templates/mongoose/service.template")])]),e._v(" "),a("p",[e._v("You will have to update all your service by applying the diff.")]),e._v(" "),a("br"),e._v(" "),a("p",[e._v("That's all, you have now upgraded to Strapi "),a("code",[e._v("alpha.16")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);