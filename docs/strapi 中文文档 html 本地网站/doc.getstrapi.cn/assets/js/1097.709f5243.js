(window.webpackJsonp=window.webpackJsonp||[]).push([[1097],{1519:function(e,t,a){"use strict";a.r(t);var r=a(9),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"migration-guide-from-alpha-24-to-alpha-25-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-guide-from-alpha-24-to-alpha-25-2"}},[e._v("#")]),e._v(" Migration guide from alpha.24 to alpha.25.2")]),e._v(" "),a("p",[a("strong",[e._v("Here are the major changes:")])]),e._v(" "),a("ul",[a("li",[e._v("Getting started videos helper in the admin")]),e._v(" "),a("li",[e._v("New getting started")])]),e._v(" "),a("p",[a("strong",[e._v("Useful links:")])]),e._v(" "),a("ul",[a("li",[e._v("Changelog: "),a("a",{attrs:{href:"https://github.com/strapi/strapi/releases/tag/v3.0.0-alpha.25",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/strapi/strapi/releases/tag/v3.0.0-alpha.25.2"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("GitHub diff: "),a("a",{attrs:{href:"https://github.com/strapi/strapi/compare/v3.0.0-alpha.24...v3.0.0-alpha.25.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/strapi/strapi/compare/v3.0.0-alpha.24...v3.0.0-alpha.25.2"),a("OutboundLink")],1)])]),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Feel free to "),a("a",{attrs:{href:"http://slack.strapi.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("join us on Slack"),a("OutboundLink")],1),e._v(" and ask questions about the migration process.")])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),a("p",[e._v("Install Strapi "),a("code",[e._v("alpha.25.2")]),e._v(" globally on your computer. To do so run "),a("code",[e._v("npm install strapi@3.0.0-alpha.25.2 -g")]),e._v(".")]),e._v(" "),a("p",[e._v("When it's done, generate a new empty project "),a("code",[e._v("strapi new myNewProject")]),e._v(" (don't pay attention to the database configuration).")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"update-node-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-node-modules"}},[e._v("#")]),e._v(" Update node modules")]),e._v(" "),a("p",[e._v("Update the Strapi's dependencies version (move Strapi's dependencies to "),a("code",[e._v("3.0.0-alpha.25.2")]),e._v(" version) of your project.")]),e._v(" "),a("p",[e._v("Run "),a("code",[e._v("npm install strapi@3.0.0-alpha.25.2 --save")]),e._v(" to update your strapi version.")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"update-the-admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-admin"}},[e._v("#")]),e._v(" Update the Admin")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you performed updates in the Admin, you will have to manually migrate your changes.")])]),e._v(" "),a("p",[e._v("Delete your old admin folder and replace it with the new one.")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"update-the-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-plugins"}},[e._v("#")]),e._v(" Update the Plugins")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you did a custom update on one of the plugins, you will have to manually migrate your update.")])]),e._v(" "),a("p",[e._v("Copy the fields and relations you had in your "),a("code",[e._v("/plugins/users-permissions/models/User.settings.json")]),e._v(" and "),a("code",[e._v("/plugins/users-permissions/config/jwt.json")]),e._v(" file in the new one.")]),e._v(" "),a("p",[e._v("Then, delete your old "),a("code",[e._v("plugins")]),e._v(" folder and replace it with the new one.")]),e._v(" "),a("h2",{attrs:{id:"update-mongoose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-mongoose"}},[e._v("#")]),e._v(" Update Mongoose")]),e._v(" "),a("p",[e._v("Update all your API services by following this update "),a("a",{attrs:{href:"https://github.com/strapi/strapi/pull/2812/files#diff-c36b911d1bc2922e1d7cf93ae692e054R132",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/strapi/strapi/pull/2812/files#diff-c36b911d1bc2922e1d7cf93ae692e054R132"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"update-bookshelf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-bookshelf"}},[e._v("#")]),e._v(" Update Bookshelf")]),e._v(" "),a("p",[e._v("Update all your API services by following this update "),a("a",{attrs:{href:"https://github.com/strapi/strapi/pull/2970/files#diff-61ba361ed6161efcd5f4e583001cc9c9R240",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/strapi/strapi/pull/2970/files#diff-61ba361ed6161efcd5f4e583001cc9c9R240"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/strapi/strapi/pull/2864/files#diff-61ba361ed6161efcd5f4e583001cc9c9R124",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/strapi/strapi/pull/2864/files#diff-61ba361ed6161efcd5f4e583001cc9c9R124"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("We update the name of the life cycle for the before/after fetch all "),a("a",{attrs:{href:"https://github.com/strapi/strapi/pull/2965/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/strapi/strapi/pull/2965/files"),a("OutboundLink")],1),e._v("\nYou will have to replace "),a("code",[e._v("beforeFetchCollection")]),e._v(" by "),a("code",[e._v("beforeFetchAll")]),e._v(" if you added theses functions in you "),a("code",[e._v("Model.js")]),e._v(" files.")]),e._v(" "),a("br"),e._v(" "),a("p",[e._v("That's all, you have now upgraded to Strapi "),a("code",[e._v("alpha.25.2")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);