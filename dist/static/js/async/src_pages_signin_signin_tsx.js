"use strict";
(self["webpackChunkfrontend_note"] = self["webpackChunkfrontend_note"] || []).push([["src_pages_signin_signin_tsx"], {
"./src/components/modal/modal.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Modal)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

function Modal(props) {
    const { title, content, open, onOk, onCancel } = props;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `relative z-10 ${open ? '' : 'hidden'}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fixed inset-0 transition-opacity bg-gray-500/20"
            }, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "sm:flex sm:items-start",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                className: "text-base font-semibold text-gray-900",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                                                lineNumber: 12,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: content
                                                }, void 0, false, {
                                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                                                    lineNumber: 16,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                                                lineNumber: 15,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                                        lineNumber: 11,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                                    lineNumber: 10,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                                lineNumber: 9,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6",
                                children: [
                                    onOk && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                        type: "button",
                                        onClick: onOk,
                                        className: "inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-xs hover:bg-indigo-500 sm:ml-3 sm:w-auto",
                                        children: "Ok"
                                    }, void 0, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                                        lineNumber: 23,
                                        columnNumber: 17
                                    }, this),
                                    onCancel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                        type: "button",
                                        onClick: onCancel,
                                        className: "inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                        lineNumber: 8,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/modal/modal.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
_c = Modal;
var _c;
$RefreshReg$(_c, "Modal");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/pages/signin/signin.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _lib_httpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/lib/httpClient.ts");
/* ESM import */var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/.pnpm/react-router@7.3.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-router/dist/development/chunk-K6CSEXPM.mjs");
/* ESM import */var _components_modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/modal/modal.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();





const Signin = ()=>{
    _s();
    const navigator = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [pwd, setPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onOk = ()=>{
        setOpen(false);
    };
    const login = async ()=>{
        const res = await _lib_httpClient__WEBPACK_IMPORTED_MODULE_2__["default"].post(`${"https://mango.881103.xyz"}/login`, {
            username: name,
            password: pwd
        });
        if ((res === null || res === void 0 ? void 0 : res.code) === 0) {
            js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set('at', res.data.at, {
                expires: 1
            });
            js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set('rt', res.data.rt, {
                expires: 7
            });
            if (document.referrer) {
                (0,react_router__WEBPACK_IMPORTED_MODULE_5__.redirect)(document.referrer);
            }
            navigator('/note');
        } else {
            setOpen(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "sm:mx-auto sm:w-full sm:max-w-sm",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                                width: 40,
                                height: 40,
                                className: "w-10 h-10 mx-auto",
                                alt: "logo",
                                src: "/logo-home.svg"
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                className: "mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9",
                                children: "账号登录"
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                            htmlFor: "username",
                                            className: "block font-medium text-gray-900 text-sm/6",
                                            children: "用户名:"
                                        }, void 0, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                                id: "username",
                                                name: "username",
                                                type: "text",
                                                onChange: (e)=>setName(e.target.value),
                                                autoComplete: "username",
                                                value: name,
                                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            }, void 0, false, {
                                                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                                    htmlFor: "password",
                                                    className: "block font-medium text-gray-900 text-sm/6",
                                                    children: "密码:"
                                                }, void 0, false, {
                                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "text-sm",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                                        href: "#",
                                                        className: "font-semibold text-indigo-600 hover:text-indigo-500",
                                                        children: "忘记密码"
                                                    }, void 0, false, {
                                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 19
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                                id: "password",
                                                name: "password",
                                                onChange: (e)=>setPwd(e.target.value),
                                                type: "password",
                                                value: pwd,
                                                autoComplete: "current-password",
                                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            }, void 0, false, {
                                                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                        type: "submit",
                                        onClick: login,
                                        className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                        children: "登录"
                                    }, void 0, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
                open,
                ...{
                    content: '登录异常'
                },
                onOk
            }, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/signin/signin.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_s(Signin, "I0e4sTsBW0g2WXMlUEteYxpoW90=", false, function() {
    return [
        react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigate
    ];
});
_c = Signin;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signin);
var _c;
$RefreshReg$(_c, "Signin");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),

}]);
//# sourceMappingURL=src_pages_signin_signin_tsx.js.map