(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1540:function(e,t,a){"use strict";a.r(t);var i=a(9),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"welcome-to-the-strapi-user-guide"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#welcome-to-the-strapi-user-guide"}},[e._v("#")]),e._v(" Welcome to the Strapi user guide!")]),e._v(" "),i("p",[e._v("This user guide contains the functional documentation related to all features available in the admin panel of your Strapi application.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(423),alt:"Homepage of the Admin Panel"}})]),e._v(" "),i("p",[e._v("Before going any further into this user guide, we recommend you to acknowledge the main concepts below. They will help you to understand how Strapi works, and ensure a smooth Strapi experience.")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("Development, Staging or Production Environment")]),e._v(" "),i("br"),e._v(" When you start working on your application, it is in a development environment, which is the status for the content structure and application configuration. After deploying your application, it is in production or staging environment. This status change impacts how you can use your Strapi application, as some features are only available in development environment, such as the Content-Types Builder. In this user guide the availability or not of a feature, depending on the application status, is always mentioned in the feature's introduction.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Versions")]),e._v(" "),i("br"),e._v(" Strapi is constantly evolving and growing. This implies that new releases are quite frequent, to improve what is already available but also to add new features to Strapi. For every new Strapi version, we communicate through our main channels and by sending notifications both on your terminal (when launching your Strapi application), and on your application's admin panel. We always recommend to use the latest version, especially since our documentation including this user guide, are only aligned with the latest version"),e._v(". If you are on an older version of Strapi, some information in this documentation may not apply to your application.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("License and Pricing Plans")]),e._v(" "),i("br"),e._v(" As a Strapi user you have the choice between using the Community Edition, which is entirely free, or one of the 3 paying plans of the Enterprise Edition: Bronze, Silver, and Gold (see "),i("a",{attrs:{href:"https://strapi.io/pricing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pricing and Plans"),i("OutboundLink")],1),e._v("). In this user guide if a feature is only available for a specific plan of the Enterprise Edition, a badge is displayed beside the section's title to indicate the name of the plan.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Roles and Permissions")]),e._v(" "),i("br"),e._v(" Some features of the admin panel, as well as the content managed with Strapi itself, are ruled by a system of permissions. From your Strapi admin panel, you have the possibility to define, at a detailed level, the roles and permissions of all administrators and end-users. In this user guide, all features and possible options are documented. It is however possible, depending on your role and permissions, that you may not be able to access all these features and options. In that case, 访问 the main Super Admin of your Strapi application.")])])]),e._v(" "),i("p",[e._v("With all this in mind, you should be ready to start your Strapi experience!")]),e._v(" "),i("h2",{attrs:{id:"accessing-the-admin-panel"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-admin-panel"}},[e._v("#")]),e._v(" Accessing the admin panel")]),e._v(" "),i("p",[e._v("The admin panel is the back office of your Strapi application. From the admin panel, you will be able to manage content types, and write their actual content. It is also from the admin panel that you will manage users, both administrators and end-users of your Strapi application.")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("IMPORTANT")]),e._v(" "),i("p",[e._v("In order to access the admin panel, your Strapi application must be launched"),e._v(", and you must be aware of the URL to its admin panel (e.g. "),i("code",[e._v("api.example.com/admin")]),e._v(").")])]),e._v(" "),i("p",[i("img",{attrs:{src:a(424),alt:"Login page with SSO activated"}})]),e._v(" "),i("p",[e._v("To access the admin panel:")]),e._v(" "),i("ol",[i("li",[e._v("Go to the URL of your Strapi application's admin panel.")]),e._v(" "),i("li",[e._v("Enter your credentials to log in.")]),e._v(" "),i("li",[e._v("点击 the "),i("strong",[e._v("Log in")]),e._v(" 按钮 You should be redirected to the homepage of the admin panel.")])]),e._v(" "),i("h3",{attrs:{id:"using-sso-for-authentication"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#using-sso-for-authentication"}},[e._v("#")]),e._v(" Using SSO for authentication "),i("GoldBadge",{attrs:{withLinkIcon:"",link:"https://strapi.io/pricing"}})],1),e._v(" "),i("p",[e._v("If your Strapi application was configured to allow authentication through SSO (see "),i("RouterLink",{attrs:{to:"/user-docs/latest/settings/managing-global-settings.html"}},[e._v("Configuring Single Sign-On")]),e._v("), you can access the admin panel using a specific provider instead of logging in with a regular Strapi administrator account.")],1),e._v(" "),i("p",[e._v("To do so, in the login page of your Strapi application, click on a chosen provider. If you cannot see your provider, click the "),i("img",{attrs:{src:a(425),alt:"icon more"}}),e._v(" button to access the full list of all available providers. You will be redirected to your provider's own login page where you will be able to authenticate.")]),e._v(" "),i("h2",{attrs:{id:"setting-up-your-administrator-profile"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-administrator-profile"}},[e._v("#")]),e._v(" Setting up your administrator profile")]),e._v(" "),i("p",[e._v("If you are a new administrator, we recommend making sure your profile is all set, before diving into your Strapi application. From your administrator profile, you are able to modify your user information, such as name, username, email or password.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(426),alt:"User profile"}})]),e._v(" "),i("p",[e._v("To modify your user information:")]),e._v(" "),i("ol",[i("li",[e._v("点击 your user name in the top right hand corner of the admin panel.")]),e._v(" "),i("li",[e._v("In the drop-down menu, click on "),i("strong",[e._v("Profile")]),e._v(".")]),e._v(" "),i("li",[e._v("Modify the information of your choice:")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("User information")]),e._v(" "),i("th",[e._v("Instructions")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("First name")]),e._v(" "),i("td",[e._v("Write your first name in the textbox.")])]),e._v(" "),i("tr",[i("td",[e._v("Last name")]),e._v(" "),i("td",[e._v("Write your last name in the textbox.")])]),e._v(" "),i("tr",[i("td",[e._v("Email")]),e._v(" "),i("td",[e._v("Write your complete email address in the textbox.")])]),e._v(" "),i("tr",[i("td",[e._v("Username")]),e._v(" "),i("td",[e._v("(optional) Write a username in the textbox.")])]),e._v(" "),i("tr",[i("td",[e._v("Password")]),e._v(" "),i("td",[e._v("Write a new password in the textbox. You can click on the eye icon for the password to be shown.")])]),e._v(" "),i("tr",[i("td",[e._v("Confirmation password")]),e._v(" "),i("td",[e._v("Write the same new password in the textbox. You can click on the eye icon for the password to be shown.")])])])]),e._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[e._v("点击 the "),i("strong",[e._v("Save")]),e._v(" 按钮")])]),e._v(" "),i("hr"),e._v(" "),i("p",[e._v("Congratulations on being a new Strapi user! You're now ready to discover all the features and options that Strapi has to offer!")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("💡 TIP")]),e._v(" "),i("p",[e._v("If you have any trouble with your Strapi experience, you can reach us through "),i("a",{attrs:{href:"https://github.com/strapi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),i("OutboundLink")],1),e._v(" or our "),i("a",{attrs:{href:"https://forum.strapi.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("forum"),i("OutboundLink")],1),e._v("! The Strapi Community and Strapi team are always available to answer your questions or help you with anything!")])])])}),[],!1,null,null,null);t.default=n.exports},423:function(e,t,a){e.exports=a.p+"assets/img/admin-panel-homepage.7f9d2725.png"},424:function(e,t,a){e.exports=a.p+"assets/img/login-page-sso.ead5cbc2.png"},425:function(e,t){e.exports="data:image/png;base64,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"},426:function(e,t,a){e.exports=a.p+"assets/img/user-information-profile.49df1e0e.png"}}]);