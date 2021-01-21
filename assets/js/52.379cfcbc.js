(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{428:function(t,a,v){"use strict";v.r(a);var e=v(17),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"编写插件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编写插件"}},[t._v("#")]),t._v(" 编写插件")]),t._v(" "),v("ul",[v("li",[t._v("Qv2ray 插件文档")])]),t._v(" "),v("h2",{attrs:{id:"何为插件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#何为插件"}},[t._v("#")]),t._v(" 何为插件")]),t._v(" "),v("p",[t._v("插件，意即实现某一特定接口的共享库。在这里，这一特定接口指的是 "),v("code",[t._v("Qv2rayPlugin::QvPluginInterface")]),t._v(" 接口。正因实现了这个接口，Qv2ray 的插件才能被正确加载与识别。")]),t._v(" "),v("h2",{attrs:{id:"编写插件的前置条件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编写插件的前置条件"}},[t._v("#")]),t._v(" 编写插件的前置条件")]),t._v(" "),v("h3",{attrs:{id:"编译器版本-选项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译器版本-选项"}},[t._v("#")]),t._v(" 编译器版本 / 选项")]),t._v(" "),v("ul",[v("li",[t._v("对于 Linux 和 macOS，并无特殊限制。")]),t._v(" "),v("li",[t._v("对于 Windows，你需要使用 MSVC 来编译插件。")]),t._v(" "),v("li",[t._v("编译插件时应记得使用 "),v("code",[t._v("-fno-sized-deallocation")]),t._v(" 选项，尤其是在使用 "),v("strong",[t._v("GitHub Actions")]),t._v(" 编译插件时。")])]),t._v(" "),v("h3",{attrs:{id:"qt-版本号限制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#qt-版本号限制"}},[t._v("#")]),t._v(" Qt 版本号限制")]),t._v(" "),v("ul",[v("li",[t._v("Qt 本身有这样的限制：编译插件所使用的 Qt 版本不能高于编译主程序所使用的 Qt 版本。")]),t._v(" "),v("li",[t._v("建议使用 Qt "),v("code",[t._v("5.11.3")]),t._v(" 版本编译插件，因为这是 Qv2ray 本体所能支持的最低 Qt 版本。")])]),t._v(" "),v("h3",{attrs:{id:"第三方的链接时、运行时依赖"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第三方的链接时、运行时依赖"}},[t._v("#")]),t._v(" 第三方的链接时、运行时依赖")]),t._v(" "),v("ul",[v("li",[t._v("这些依赖应当显式地 "),v("strong",[t._v("静态链接")]),t._v(" 进插件里，否则：\n"),v("ul",[v("li",[t._v("应当通知用户从哪里能下载到对应的库文件。")])])]),t._v(" "),v("li",[t._v("例外情况：OpenSSL 不应进行静态链接。\n"),v("ul",[v("li",[t._v("Qv2ray 本体有其自身的 OpenSSL 依赖检查，会保证安装了合适版本的 OpenSSL。")])])])]),t._v(" "),v("h2",{attrs:{id:"创建插件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建插件"}},[t._v("#")]),t._v(" 创建插件")]),t._v(" "),v("p",[t._v("你有两条路可选：")]),t._v(" "),v("ol",[v("li",[t._v("使用提供的模板工程以开始：\nQv2ray 有个叫 "),v("a",{attrs:{href:"https://github.com/Qv2ray/QvPlugin-Template",target:"_blank",rel:"noopener noreferrer"}},[t._v("QvPlugin-Template"),v("OutboundLink")],1),t._v(" 的项目仓库，你可以基于这个来开始你的插件编写。")]),t._v(" "),v("li",[t._v("从头来。")])]),t._v(" "),v("h3",{attrs:{id:"_1-使用模板工程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用模板工程"}},[t._v("#")]),t._v(" 1. 使用模板工程")]),t._v(" "),v("ol",[v("li",[t._v("在 GitHub 仓库页面点击 “使用这个模板” 按钮，然后遵循说明操作。")]),t._v(" "),v("li",[t._v("克隆你刚刚创建的仓库。")]),t._v(" "),v("li",[t._v("执行下列命令，因为 GitHub 不会保留模板仓库的子模块（submodule）信息。"),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --force https://github.com/Qv2ray/QvPlugin-Interface/ ./interface\n")])])])]),t._v(" "),v("li",[t._v("配置你的构建生成器（"),v("code",[t._v("Build Generator")]),t._v("）:\n"),v("ul",[v("li",[t._v("删掉不需要的文件：例如 "),v("code",[t._v("QvSimplePlugin.pro")]),t._v(" 或者 "),v("code",[t._v("CMakeLists.txt")]),t._v("；")]),t._v(" "),v("li",[t._v("删掉不需要的持续集成配置文件，在 "),v("code",[t._v("./.github/workflows/")]),t._v("。")])])]),t._v(" "),v("li",[t._v("在 Qt Creator 里打开你选择留下的 "),v("code",[t._v(".pro")]),t._v(" 或者 "),v("code",[t._v("CMakeLists.txt")]),t._v(" 文件。")]),t._v(" "),v("li",[t._v("修改 "),v("code",[t._v("QvSimplePlugin.hpp")]),t._v("，尤其是修改其中的 "),v("strong",[t._v("插件元信息")]),t._v("（plugin metadata）。")]),t._v(" "),v("li",[t._v("本地编写并测试，同时可以推送到远程以测试能否通过编译。")])]),t._v(" "),v("h3",{attrs:{id:"_2-从头来"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-从头来"}},[t._v("#")]),t._v(" 2. 从头来")]),t._v(" "),v("ol",[v("li",[t._v("建立一个 Git 仓库。")]),t._v(" "),v("li",[t._v("将 "),v("code",[t._v("https://github.com/Qv2ray/QvPlugin-Interface/")]),t._v(" 添加为子模块。")]),t._v(" "),v("li",[t._v("将 "),v("code",[t._v("QvPluginInterface.cmake")]),t._v(" 或 "),v("code",[t._v("QvPluginInterface.pri")]),t._v(" 文件加入你的工程。")]),t._v(" "),v("li",[t._v("编写一个继承 "),v("code",[t._v("Qv2rayPlugin::Qv2rayInterface")]),t._v(" 的类，并实现所有的虚方法。")]),t._v(" "),v("li",[t._v("添加下列函数的 slot 实现："),v("div",{staticClass:"language-cpp extra-class"},[v("pre",{pre:!0,attrs:{class:"language-cpp"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("PluginLog")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" QString "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("PluginErrorMessageBox")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" QString "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),v("li",[t._v("若插件在其元数据中没有 "),v("code",[t._v("SPECIAL_TYPE_KERNEL")]),t._v("，你可在 "),v("code",[t._v("GetPluginKernel")]),t._v(" 函数中返回 "),v("code",[t._v("nullptr")]),t._v("。\n对于 "),v("code",[t._v("GetSerializer")]),t._v(" 函数也是一样, 但千万不要对 "),v("code",[t._v("GetEventHandler()")]),t._v(" 也这么做。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);