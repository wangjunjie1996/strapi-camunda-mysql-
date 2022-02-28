(window.webpackJsonp=window.webpackJsonp||[]).push([[1093],{1515:function(t,e,a){"use strict";a.r(e);var s=a(9),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"migration-guide-from-alpha-20-to-alpha-21"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-guide-from-alpha-20-to-alpha-21"}},[t._v("#")]),t._v(" Migration guide from alpha.20 to alpha.21")]),t._v(" "),a("p",[a("strong",[t._v("Here are the major changes:")])]),t._v(" "),a("ul",[a("li",[t._v("Fix timestamps issue about update data in MySQL")]),t._v(" "),a("li",[t._v("Fix production start")])]),t._v(" "),a("p",[a("strong",[t._v("Useful links:")])]),t._v(" "),a("ul",[a("li",[t._v("Changelog: "),a("a",{attrs:{href:"https://github.com/strapi/strapi/releases/tag/v3.0.0-alpha.21",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/strapi/strapi/releases/tag/v3.0.0-alpha.21"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("GitHub diff: "),a("a",{attrs:{href:"https://github.com/strapi/strapi/compare/v3.0.0-alpha.20...v3.0.0-alpha.21",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/strapi/strapi/compare/v3.0.0-alpha.20...v3.0.0-alpha.21"),a("OutboundLink")],1)])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Feel free to "),a("a",{attrs:{href:"http://slack.strapi.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("join us on Slack"),a("OutboundLink")],1),t._v(" and ask questions about the migration process.")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),a("p",[t._v("Install Strapi "),a("code",[t._v("alpha.21")]),t._v(" globally on your computer. To do so run "),a("code",[t._v("npm install strapi@3.0.0-alpha.21 -g")]),t._v(".")]),t._v(" "),a("p",[t._v("When it's done, generate a new empty project "),a("code",[t._v("strapi new myNewProject")]),t._v(" (don't pay attention to the database configuration).")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"update-node-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-node-modules"}},[t._v("#")]),t._v(" Update node modules")]),t._v(" "),a("p",[t._v("Update the Strapi's dependencies version (move Strapi's dependencies to "),a("code",[t._v("3.0.0-alpha.21")]),t._v(" version) of your project.")]),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("npm install strapi@3.0.0-alpha.21 --save")]),t._v(" to update your strapi version.")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"update-the-admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-admin"}},[t._v("#")]),t._v(" Update the Admin")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you performed updates in the Admin, you will have to manually migrate your changes.")])]),t._v(" "),a("p",[t._v("Delete your old admin folder and replace it with the new one.")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"update-the-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-plugins"}},[t._v("#")]),t._v(" Update the Plugins")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you did a custom update on one of the plugins, you will have to manually migrate your update.")])]),t._v(" "),a("p",[t._v("Copy the fields and relations you had in your "),a("code",[t._v("/plugins/users-permissions/models/User.settings.json")]),t._v(" and "),a("code",[t._v("/plugins/users-permissions/config/jwt.json")]),t._v(" file in the new one.")]),t._v(" "),a("p",[t._v("Then, delete your old "),a("code",[t._v("plugins")]),t._v(" folder and replace it with the new one.")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("That's all, you have now upgraded to Strapi "),a("code",[t._v("alpha.21")]),t._v(".")])])}),[],!1,null,null,null);e.default=o.exports}}]);