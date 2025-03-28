(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./src/index.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1743140733087
        var cssReload = (__webpack_require__("./node_modules/.pnpm/@rspack+core@1.2.8_@swc+helpers@0.5.15/node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"./src/App.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (App)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/.pnpm/react-router@7.3.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-router/dist/development/chunk-K6CSEXPM.mjs");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs");
/* ESM import */var _pages_index_index_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/pages/index/index.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");





const Signin = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>__webpack_require__.e(/* import() */ "src_pages_signin_signin_tsx").then(__webpack_require__.bind(__webpack_require__, "./src/pages/signin/signin.tsx")));
_c = Signin;
const Signup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>__webpack_require__.e(/* import() */ "src_pages_signup_signup_tsx").then(__webpack_require__.bind(__webpack_require__, "./src/pages/signup/signup.tsx")));
_c1 = Signup;
const Note = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>__webpack_require__.e(/* import() */ "src_pages_note_note_tsx").then(__webpack_require__.bind(__webpack_require__, "./src/pages/note/note.tsx")));
_c2 = Note;
const Category = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>__webpack_require__.e(/* import() */ "src_pages_category_category_tsx").then(__webpack_require__.bind(__webpack_require__, "./src/pages/category/category.tsx")));
_c3 = Category;
const Layout = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>Promise.all(/* import() */ [__webpack_require__.e("vendors-node_modules_pnpm_marked_15_0_7_node_modules_marked_lib_marked_esm_js"), __webpack_require__.e("src_pages_layout_layout_tsx")]).then(__webpack_require__.bind(__webpack_require__, "./src/pages/layout/layout.tsx")));
_c4 = Layout;
const router = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.createBrowserRouter)([
    {
        path: '/',
        element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_index_index_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/App.tsx",
            lineNumber: 19,
            columnNumber: 14
        }, undefined),
        children: [
            {
                path: '/signin',
                loader: loginLoader,
                element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signin, {}, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/App.tsx",
                    lineNumber: 24,
                    columnNumber: 18
                }, undefined)
            },
            {
                path: '/signup',
                element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signup, {}, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/App.tsx",
                    lineNumber: 28,
                    columnNumber: 18
                }, undefined)
            },
            {
                path: '/note',
                loader: protectedLoader,
                element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Note, {}, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/App.tsx",
                    lineNumber: 33,
                    columnNumber: 18
                }, undefined)
            },
            {
                path: '/category',
                loader: protectedLoader,
                element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Category, {}, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/App.tsx",
                    lineNumber: 38,
                    columnNumber: 18
                }, undefined)
            },
            {
                path: ':categoryId',
                element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {}, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/App.tsx",
                    lineNumber: 42,
                    columnNumber: 18
                }, undefined)
            },
            {
                path: '/',
                element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {}, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/App.tsx",
                    lineNumber: 46,
                    columnNumber: 18
                }, undefined)
            }
        ]
    }
]);
async function loginLoader() {
    if (js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('at')) {
        return (0,react_router__WEBPACK_IMPORTED_MODULE_4__.redirect)("/note");
    }
    return null;
}
async function protectedLoader() {
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('at')) {
        return (0,react_router__WEBPACK_IMPORTED_MODULE_4__.redirect)("/signin");
    }
    return null;
}
function App() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router__WEBPACK_IMPORTED_MODULE_4__.RouterProvider, {
        router: router
    }, void 0, false, {
        fileName: "/Users/wangl577/Documents/project/mango-app/src/App.tsx",
        lineNumber: 67,
        columnNumber: 10
    }, this);
}
_c5 = App;
var _c, _c1, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "Signin");
$RefreshReg$(_c1, "Signup");
$RefreshReg$(_c2, "Note");
$RefreshReg$(_c3, "Category");
$RefreshReg$(_c4, "Layout");
$RefreshReg$(_c5, "App");

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
"./src/components/footer/footer.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((()=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "grid row-start-5 border-0 lg:col-start-3",
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "pt-10 pb-24 ",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex flex-col items-start w-9/12 mx-auto sm:flex-row sm:items-center sm:justify-between sm:gap-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "relative z-0 inline-grid grid-cols-3 gap-0.5 rounded-full bg-gray-950/5 p-0.75 text-gray-950 dark:bg-white/10 dark:text-white",
                            id: "headlessui-radiogroup-:Rcaulb:",
                            role: "radiogroup"
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/footer/footer.tsx",
                            lineNumber: 7,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex flex-col text-gray-700 text-sm/6 sm:flex-row dark:text-gray-400",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    children: "Copyright \xa9\xa02025\xa0Mango Labs Inc."
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/footer/footer.tsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "max-sm:hidden",
                                    children: "\xb7"
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/footer/footer.tsx",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                    className: "hover:underline",
                                    href: "/brand",
                                    children: "Trademark Policy"
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/footer/footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/footer/footer.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/footer/footer.tsx",
                    lineNumber: 6,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/footer/footer.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/footer/footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, undefined)
    }, void 0, false);
}));

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
"./src/components/header/header.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Header)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/.pnpm/react-router@7.3.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-router/dist/development/chunk-K6CSEXPM.mjs");
/* ESM import */var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs");
/* ESM import */var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/constants.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();



function Header(props) {
    _s();
    const { navigation } = props;
    const location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    const navigator = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    const signOut = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove('at');
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove('rt');
        navigator('/note');
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sticky top-0 z-50 min-h-full border-gray-300 shadow-md",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
            className: "bg-white",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "w-9/12 mx-auto sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "shrink-0",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                            to: '/',
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                                                width: 24,
                                                height: 24,
                                                className: "w-6 h-6",
                                                alt: "logo",
                                                src: "/hudie1.svg"
                                            }, void 0, false, {
                                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                                lineNumber: 24,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                            lineNumber: 22,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "hidden md:block",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-baseline ml-10 space-x-4",
                                            children: navigation.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                                    className: `px-3 py-5 text-sm font-medium relative text-gray-900 after:w-full after:h-0.5 after:absolute after:-bottom-0.5 after:left-0 ${location.pathname === item.href ? 'after:bg-indigo-500 font-medium' : 'hover:after:bg-indigo-500'}`,
                                                    to: item.href,
                                                    children: item.name
                                                }, item.name, false, {
                                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "hidden md:block",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center ml-4 md:ml-6",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                        type: "button",
                                        onClick: signOut,
                                        className: "relative p-1 text-gray-400 rounded-full cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "absolute -inset-1.5"
                                            }, void 0, false, {
                                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "sr-only"
                                            }, void 0, false, {
                                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this),
                                            _constants_constants__WEBPACK_IMPORTED_MODULE_2__["default"].PROTECTED_ROUTES.includes(location.pathname) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                                                width: 20,
                                                height: 20,
                                                className: "w-5 h-5",
                                                alt: "signout",
                                                src: "/log-out.svg"
                                            }, void 0, false, {
                                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex -mr-2 md:hidden",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    type: "button",
                                    className: "relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md",
                                    "aria-controls": "mobile-menu",
                                    "aria-expanded": "false",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                            className: "absolute -inset-0.5"
                                        }, void 0, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                            className: "sr-only"
                                        }, void 0, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                                            width: 24,
                                            height: 24,
                                            className: "w-6 h-6",
                                            alt: "signout-menu",
                                            src: "/head-menu.svg"
                                        }, void 0, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "md:hidden",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                            children: navigation.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                    className: `block px-3 py-2 text-base font-medium text-gray-900 rounded-md ${location.pathname === item.href ? 'bg-indigo-600 text-white' : 'bg-white'}`,
                                    to: item.href,
                                    children: item.name
                                }, item.name, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "pt-4 pb-3 border-t border-gray-300",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex items-center px-5",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    type: "button",
                                    className: "relative p-1 ml-auto text-gray-400 rounded-full shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                            className: "absolute -inset-1.5"
                                        }, void 0, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                            className: "sr-only"
                                        }, void 0, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                                            width: 20,
                                            height: 20,
                                            className: "w-5 h-5",
                                            alt: "sign-out",
                                            src: "/log-out.svg"
                                        }, void 0, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/header/header.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Header, "I3gfwShBaHSssBBQAppOG8/Ihtg=", false, function() {
    return [
        react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation,
        react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate
    ];
});
_c = Header;
var _c;
$RefreshReg$(_c, "Header");

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
"./src/components/loading/loading.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/hooks/index.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();

const Loading = ()=>{
    _s();
    const loading = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.global.loading);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `fixed top-0 left-0 w-full bg-gray-50/60 h-dvh ${loading ? '' : 'hidden'}`,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            width: 32,
            height: 32,
            className: "w-8 h-8 m-auto mt-72 animate-spin size-5",
            alt: "logo",
            src: "/loading.svg"
        }, void 0, false, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/loading/loading.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/loading/loading.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, undefined);
};
_s(Loading, "rXPml3F534oSMqYG27ny6wAIg8o=", false, function() {
    return [
        _hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector
    ];
});
_c = Loading;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);
var _c;
$RefreshReg$(_c, "Loading");

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
"./src/components/toast/gloablToast.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Toast)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/hooks/index.ts");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var _features_global_globalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/features/global/globalSlice.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();




function Toast() {
    _s();
    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();
    const { content, show } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.global.toast);
    const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        timeoutRef.current = setTimeout(()=>{
            onCancel();
        }, 3000);
        return ()=>{
            clearTimeout(timeoutRef.current);
        };
    }, [
        show
    ]);
    const onCancel = ()=>{
        dispatch((0,_features_global_globalSlice__WEBPACK_IMPORTED_MODULE_3__.updateStatus)({
            toast: {
                content: '',
                show: false
            }
        }));
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: `z-50 fixed inset-0 w-screen pt-6 overflow-y-auto ${show ? '' : 'hidden'}`,
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center p-8",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: `animate-[var(--animate-toast)] grid min-w-2xs max-w-md grid-cols-[90%_10%] items-center row-start-2 p-4 transition duration-100 bg-white rounded-lg shadow-lg ring-1 ring-zinc-950/10 forced-colors:outline will-change-transform`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                            className: "font-semibold text-left text-gray-600 text-sm/6 text-wrap",
                            children: content
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/toast/gloablToast.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                            onClick: onCancel,
                            className: "w-4 h-4 cursor-pointer",
                            src: `/close.svg`,
                            alt: "close"
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/toast/gloablToast.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/toast/gloablToast.tsx",
                    lineNumber: 33,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/toast/gloablToast.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/toast/gloablToast.tsx",
            lineNumber: 31,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
_s(Toast, "WBSyRWNi+tKgsL7Fc1VgW/dHiNU=", false, function() {
    return [
        _hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,
        _hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector
    ];
});
_c = Toast;
var _c;
$RefreshReg$(_c, "Toast");

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
"./src/constants/constants.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
const CONSTANTS = {
    API_URL: "https://mango.881103.xyz",
    PROTECTED_ROUTES: [
        '/note',
        '/category',
        '/signin',
        '/signup'
    ]
};
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONSTANTS);

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
"./src/features/category/categorySlice.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addCategory: () => (addCategory),
  categorySlice: () => (categorySlice),
  createAppSlice: () => (createAppSlice),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  updateCategory: () => (updateCategory)
});
/* ESM import */var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/@reduxjs+toolkit@2.6.1_react-redux@9.2.0_react@19.0.0_redux@5.0.1__react@19.0.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* ESM import */var _lib_httpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/lib/httpClient.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


const initialState = {
    category: {},
    loading: true,
    fetchResult: {}
};
const createAppSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.buildCreateSlice)({
    creators: {
        asyncThunk: _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.asyncThunkCreator
    }
});
const categorySlice = createAppSlice({
    name: 'category',
    initialState,
    reducers: (create)=>({
            addCategory: create.reducer((state, action)=>{
                state.category = action.payload;
            }),
            updateCategory: create.asyncThunk(async (categoryBody)=>{
                const res = await _lib_httpClient__WEBPACK_IMPORTED_MODULE_0__["default"].post('/auth/category/update', categoryBody);
                return res;
            }, {
                pending: (state)=>{
                    state.loading = true;
                },
                rejected: (state)=>{
                    state.loading = false;
                },
                fulfilled: (state, action)=>{
                    state.loading = false;
                    state.fetchResult = action.payload;
                }
            })
        })
});
const { updateCategory, addCategory } = categorySlice.actions;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorySlice.reducer);

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
"./src/features/global/globalSlice.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  globalSlice: () => (globalSlice),
  updateStatus: () => (updateStatus)
});
/* ESM import */var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/@reduxjs+toolkit@2.6.1_react-redux@9.2.0_react@19.0.0_redux@5.0.1__react@19.0.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

const initialState = {
    loading: false,
    tab: '1',
    toast: {
        content: '',
        show: false
    }
};
const globalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'global',
    initialState,
    reducers: {
        updateStatus: (state, action)=>{
            return Object.assign({}, state, action.payload);
        }
    }
});
const { updateStatus } = globalSlice.actions;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalSlice.reducer);

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
"./src/features/note/noteSlice.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  noteSlice: () => (noteSlice),
  searchNote: () => (searchNote),
  selectedNote: () => (selectedNote)
});
/* ESM import */var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/@reduxjs+toolkit@2.6.1_react-redux@9.2.0_react@19.0.0_redux@5.0.1__react@19.0.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

const initialState = {
    notes: [],
    currentNote: {}
};
const noteSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'note',
    initialState,
    reducers: {
        searchNote: (state, action)=>{
            state.notes = action.payload;
        },
        selectedNote: (state, action)=>{
            state.currentNote = action.payload;
        }
    }
});
const { searchNote, selectedNote } = noteSlice.actions;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noteSlice.reducer);

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
"./src/features/selected-note/selectedNoteSlice.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  selectedNote: () => (selectedNote),
  selectedNoteSlice: () => (selectedNoteSlice)
});
/* ESM import */var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/@reduxjs+toolkit@2.6.1_react-redux@9.2.0_react@19.0.0_redux@5.0.1__react@19.0.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

const initialState = {
    selectedNote: {}
};
const selectedNoteSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'note',
    initialState,
    reducers: {
        selectedNote: (state, action)=>{
            state.selectedNote = action.payload;
        }
    }
});
const { selectedNote } = selectedNoteSlice.actions;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectedNoteSlice.reducer);

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
"./src/hooks/index.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useAppDispatch: () => (useAppDispatch),
  useAppSelector: () => (useAppSelector)
});
/* ESM import */var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react-redux@9.2.0_react@19.0.0_redux@5.0.1/node_modules/react-redux/dist/react-redux.mjs");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch.withTypes();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector.withTypes();

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
"./src/hooks/useFetch.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _lib_httpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/lib/httpClient.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


/**
 * useFetch 请求数据
 * method: Post
 */ /* ESM default export */ function __WEBPACK_DEFAULT_EXPORT__(url) {
    let body = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        _lib_httpClient__WEBPACK_IMPORTED_MODULE_1__["default"].post(url, body).then((res)=>{
            setLoading(false);
            setData(res);
        }).catch((err)=>{
            setLoading(false);
            const error = {
                code: -1,
                message: err
            };
            setError(error);
        });
    }, []);
    return {
        data,
        loading,
        error
    };
};

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
"./src/index.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/.pnpm/react-dom@19.0.0_react@19.0.0/node_modules/react-dom/client.js");
/* ESM import */var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/store.ts");
/* ESM import */var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/.pnpm/react-redux@9.2.0_react@19.0.0_redux@5.0.1/node_modules/react-redux/dist/react-redux.mjs");
/* ESM import */var react_error_boundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/.pnpm/react-error-boundary@5.0.0_react@19.0.0/node_modules/react-error-boundary/dist/react-error-boundary.development.esm.js");
/* ESM import */var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/index.css");
/* ESM import */var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/App.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");








const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(document.getElementById('root'));
const Loading = ()=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `fixed top-0 left-0 w-full bg-gray-50/60 h-dvh`,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            width: 32,
            height: 32,
            className: "w-8 h-8 m-auto mt-72 animate-spin size-5",
            alt: "logo",
            src: "/loading.svg"
        }, void 0, false, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/index.tsx",
            lineNumber: 13,
            columnNumber: 3
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/wangl577/Documents/project/mango-app/src/index.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, undefined);
};
_c = Loading;
root.render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_error_boundary__WEBPACK_IMPORTED_MODULE_6__.ErrorBoundary, {
        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Something went wrong"
        }, void 0, false, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/index.tsx",
            lineNumber: 25,
            columnNumber: 30
        }, void 0),
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
            fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {}, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/index.tsx",
                lineNumber: 26,
                columnNumber: 27
            }, void 0),
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {
                store: _store__WEBPACK_IMPORTED_MODULE_3__.store,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/index.tsx",
                    lineNumber: 27,
                    columnNumber: 45
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/index.tsx",
                lineNumber: 27,
                columnNumber: 11
            }, undefined)
        }, void 0, false, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/index.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/wangl577/Documents/project/mango-app/src/index.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, undefined)
}, void 0, false, {
    fileName: "/Users/wangl577/Documents/project/mango-app/src/index.tsx",
    lineNumber: 24,
    columnNumber: 3
}, undefined));
var _c;
$RefreshReg$(_c, "Loading");

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
"./src/lib/httpClient.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/axios@1.8.3/node_modules/axios/lib/axios.js");
/* ESM import */var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


// axios instance
const httpRequest = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
    baseURL: "https://mango.881103.xyz",
    timeout: 15000
});
const refreshUserToken = ()=>{
    const url = `${"https://mango.881103.xyz"}/refresh`;
    const rt = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get('rt');
    return httpRequest.post(url, {
        rt
    }).then((res)=>{
        return res;
    });
};
const errorHandler = (error)=>{
    /* eslint-disable */ let errorMessage = {};
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorMessage = error.response;
    } else {
        // The request was made but no response was received
        // Server api exception && Redirection exception
        errorMessage.data = {
            message: 'ERROR',
            errorCode: 'OTHERS'
        };
    }
    return Promise.resolve(errorMessage);
};
httpRequest.interceptors.request.use(function(config) {
    const at = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get('at');
    config.headers['Authorization'] = `Bearer ${at ? at : ''}`;
    return config;
}, errorHandler);
httpRequest.interceptors.response.use((res)=>{
    if ([
        200,
        201
    ].includes(res.status)) {
        return Promise.resolve(res.data);
    } else {
        return Promise.reject(res);
    }
}, async (error)=>{
    const res = error.response;
    // after token expired to refresh token
    if (res && res.data && res.data.msg === 'INVALID_ACCESS_TOKEN') {
        const refreshTokenResponse = await refreshUserToken();
        if (refreshTokenResponse.code !== 0) {
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove('at');
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove('rt');
            window.location.href = '/signin';
        } else {
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set('at', refreshTokenResponse.data.at, {
                expires: 1
            });
            return httpRequest.request(res.config);
        }
        return Promise.resolve(refreshTokenResponse);
    }
    return errorHandler(error);
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (httpRequest);

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
"./src/pages/index/index.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/.pnpm/react-router@7.3.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-router/dist/development/chunk-K6CSEXPM.mjs");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/.pnpm/js-cookie@3.0.5/node_modules/js-cookie/dist/js.cookie.mjs");
/* ESM import */var _components_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/header/header.tsx");
/* ESM import */var _components_loading_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/loading/loading.tsx");
/* ESM import */var _components_toast_gloablToast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/toast/gloablToast.tsx");
/* ESM import */var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/hooks/useFetch.ts");
/* ESM import */var _constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/constants/constants.ts");
/* ESM import */var _components_footer_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/footer/footer.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();









const protectedRoutes = _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].PROTECTED_ROUTES;
const Index = ()=>{
    _s();
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('at');
    const location = (0,react_router__WEBPACK_IMPORTED_MODULE_9__.useLocation)();
    const [navigation, setNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            name: '笔记',
            href: '/note'
        },
        {
            name: '类型',
            href: '/category'
        }
    ]);
    const { data, loading } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__["default"])('/category/find');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        if (!loading && !protectedRoutes.includes(location.pathname)) {
            const routes = data.data.map((item)=>{
                const uuid = Math.random().toString(36).slice(2, 8);
                return {
                    name: item.alias,
                    href: `/${uuid}${item.id}`
                };
            });
            setNavigation(routes);
        }
    }, [
        loading
    ]);
    const props = {
        token,
        navigation
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
                ...props
            }, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/index/index.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "overflow-hidden",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "px-4 m-auto max-w-screen-2xl md:px-8",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router__WEBPACK_IMPORTED_MODULE_9__.Outlet, {}, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/index/index.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/index/index.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/index/index.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/index/index.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading_loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/index/index.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toast_gloablToast__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/index/index.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/index/index.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, undefined);
};
_s(Index, "bu356j43NPxE4fNUlGZcmPiR41A=", false, function() {
    return [
        react_router__WEBPACK_IMPORTED_MODULE_9__.useLocation,
        _hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__["default"]
    ];
});
_c = Index;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);
var _c;
$RefreshReg$(_c, "Index");

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
"./src/store.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  store: () => (store)
});
/* ESM import */var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/.pnpm/@reduxjs+toolkit@2.6.1_react-redux@9.2.0_react@19.0.0_redux@5.0.1__react@19.0.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* ESM import */var _features_note_noteSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/features/note/noteSlice.ts");
/* ESM import */var _features_global_globalSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/features/global/globalSlice.ts");
/* ESM import */var _features_category_categorySlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/features/category/categorySlice.ts");
/* ESM import */var _features_selected_note_selectedNoteSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/features/selected-note/selectedNoteSlice.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");





const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({
    reducer: {
        note: _features_note_noteSlice__WEBPACK_IMPORTED_MODULE_0__["default"],
        global: _features_global_globalSlice__WEBPACK_IMPORTED_MODULE_1__["default"],
        category: _features_category_categorySlice__WEBPACK_IMPORTED_MODULE_2__["default"],
        selectedNote: _features_selected_note_selectedNoteSlice__WEBPACK_IMPORTED_MODULE_3__["default"]
    }
});

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

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
if (cachedModule.error !== undefined) throw cachedModule.error;
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
try {

var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
module = execOptions.module;
if (!execOptions.factory) {
  console.error("undefined factory", moduleId)
}
execOptions.factory.call(module.exports, module, module.exports, execOptions.require);

} catch (e) {
module.error = e;
throw e;
}
// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// expose the module cache
__webpack_require__.c = __webpack_module_cache__;

// expose the module execution interceptor
__webpack_require__.i = [];

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/ensure_chunk
(() => {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = (chunkId) => {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce((promises, key) => {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};
})();
// webpack/runtime/get javascript chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.u = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "static/js/async/" + chunkId + ".js"
}
})();
// webpack/runtime/get mini-css chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.miniCssF = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "" + chunkId + ".css"
}
})();
// webpack/runtime/get_chunk_update_filename
(() => {
__webpack_require__.hu = (chunkId) => ('' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js')
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("274e5b8c8bd040ba")
})();
// webpack/runtime/get_main_filename/update manifest
(() => {
__webpack_require__.hmrF = function () {
            return "index." + __webpack_require__.h() + ".hot-update.json";
         };
        
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/hot_module_replacement
(() => {
var currentModuleData = {};
var installedModules = __webpack_require__.c;

// module and require creation
var currentChildModule;
var currentParents = [];

// status
var registeredStatusHandlers = [];
var currentStatus = "idle";

// while downloading
var blockingPromises = 0;
var blockingPromisesWaiting = [];

// The update info
var currentUpdateApplyHandlers;
var queuedInvalidatedModules;

__webpack_require__.hmrD = currentModuleData;
__webpack_require__.i.push(function (options) {
	var module = options.module;
	var require = createRequire(options.require, options.id);
	module.hot = createModuleHotObject(options.id, module);
	module.parents = currentParents;
	module.children = [];
	currentParents = [];
	options.require = require;
});

__webpack_require__.hmrC = {};
__webpack_require__.hmrI = {};

function createRequire(require, moduleId) {
	var me = installedModules[moduleId];
	if (!me) return require;
	var fn = function (request) {
		if (me.hot.active) {
			if (installedModules[request]) {
				var parents = installedModules[request].parents;
				if (parents.indexOf(moduleId) === -1) {
					parents.push(moduleId);
				}
			} else {
				currentParents = [moduleId];
				currentChildModule = request;
			}
			if (me.children.indexOf(request) === -1) {
				me.children.push(request);
			}
		} else {
			console.warn(
				"[HMR] unexpected require(" +
				request +
				") from disposed module " +
				moduleId
			);
			currentParents = [];
		}
		return require(request);
	};
	var createPropertyDescriptor = function (name) {
		return {
			configurable: true,
			enumerable: true,
			get: function () {
				return require[name];
			},
			set: function (value) {
				require[name] = value;
			}
		};
	};
	for (var name in require) {
		if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
			Object.defineProperty(fn, name, createPropertyDescriptor(name));
		}
	}

	fn.e = function (chunkId, fetchPriority) {
		return trackBlockingPromise(require.e(chunkId, fetchPriority));
	};

	return fn;
}

function createModuleHotObject(moduleId, me) {
	var _main = currentChildModule !== moduleId;
	var hot = {
		_acceptedDependencies: {},
		_acceptedErrorHandlers: {},
		_declinedDependencies: {},
		_selfAccepted: false,
		_selfDeclined: false,
		_selfInvalidated: false,
		_disposeHandlers: [],
		_main: _main,
		_requireSelf: function () {
			currentParents = me.parents.slice();
			currentChildModule = _main ? undefined : moduleId;
			__webpack_require__(moduleId);
		},
		active: true,
		accept: function (dep, callback, errorHandler) {
			if (dep === undefined) hot._selfAccepted = true;
			else if (typeof dep === "function") hot._selfAccepted = dep;
			else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._acceptedDependencies[dep[i]] = callback || function () { };
					hot._acceptedErrorHandlers[dep[i]] = errorHandler;
				}
			} else {
				hot._acceptedDependencies[dep] = callback || function () { };
				hot._acceptedErrorHandlers[dep] = errorHandler;
			}
		},
		decline: function (dep) {
			if (dep === undefined) hot._selfDeclined = true;
			else if (typeof dep === "object" && dep !== null)
				for (var i = 0; i < dep.length; i++)
					hot._declinedDependencies[dep[i]] = true;
			else hot._declinedDependencies[dep] = true;
		},
		dispose: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		addDisposeHandler: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		removeDisposeHandler: function (callback) {
			var idx = hot._disposeHandlers.indexOf(callback);
			if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
		},
		invalidate: function () {
			this._selfInvalidated = true;
			switch (currentStatus) {
				case "idle":
					currentUpdateApplyHandlers = [];
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					setStatus("ready");
					break;
				case "ready":
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					break;
				case "prepare":
				case "check":
				case "dispose":
				case "apply":
					(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
						moduleId
					);
					break;
				default:
					break;
			}
		},
		check: hotCheck,
		apply: hotApply,
		status: function (l) {
			if (!l) return currentStatus;
			registeredStatusHandlers.push(l);
		},
		addStatusHandler: function (l) {
			registeredStatusHandlers.push(l);
		},
		removeStatusHandler: function (l) {
			var idx = registeredStatusHandlers.indexOf(l);
			if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
		},
		data: currentModuleData[moduleId]
	};
	currentChildModule = undefined;
	return hot;
}

function setStatus(newStatus) {
	currentStatus = newStatus; 
	var results = [];
	for (var i = 0; i < registeredStatusHandlers.length; i++)
		results[i] = registeredStatusHandlers[i].call(null, newStatus);

	return Promise.all(results).then(function () { });
}

function unblock() {
	if (--blockingPromises === 0) {
		setStatus("ready").then(function () {
			if (blockingPromises === 0) {
				var list = blockingPromisesWaiting;
				blockingPromisesWaiting = [];
				for (var i = 0; i < list.length; i++) {
					list[i]();
				}
			}
		});
	}
}

function trackBlockingPromise(promise) {
	switch (currentStatus) {
		case "ready":
			setStatus("prepare");
		case "prepare":
			blockingPromises++;
			promise.then(unblock, unblock);
			return promise;
		default:
			return promise;
	}
}

function waitForBlockingPromises(fn) {
	if (blockingPromises === 0) return fn();
	return new Promise(function (resolve) {
		blockingPromisesWaiting.push(function () {
			resolve(fn());
		});
	});
}

function hotCheck(applyOnUpdate) {
	if (currentStatus !== "idle") {
		throw new Error("check() is only allowed in idle status");
	} 
	return setStatus("check")
		.then(__webpack_require__.hmrM)
		.then(function (update) {
			if (!update) {
				return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
					function () {
						return null;
					}
				);
			}

			return setStatus("prepare").then(function () {
				var updatedModules = [];
				currentUpdateApplyHandlers = [];

				return Promise.all(
					Object.keys(__webpack_require__.hmrC).reduce(function (
						promises,
						key
					) {
						__webpack_require__.hmrC[key](
							update.c,
							update.r,
							update.m,
							promises,
							currentUpdateApplyHandlers,
							updatedModules
						);
						return promises;
					},
						[])
				).then(function () {
					return waitForBlockingPromises(function () {
						if (applyOnUpdate) {
							return internalApply(applyOnUpdate);
						}
						return setStatus("ready").then(function () {
							return updatedModules;
						});
					});
				});
			});
		});
}

function hotApply(options) {
	if (currentStatus !== "ready") {
		return Promise.resolve().then(function () {
			throw new Error(
				"apply() is only allowed in ready status (state: " + currentStatus + ")"
			);
		});
	}
	return internalApply(options);
}

function internalApply(options) {
	options = options || {};
	applyInvalidatedModules();
	var results = currentUpdateApplyHandlers.map(function (handler) {
		return handler(options);
	});
	currentUpdateApplyHandlers = undefined;
	var errors = results
		.map(function (r) {
			return r.error;
		})
		.filter(Boolean);

	if (errors.length > 0) {
		return setStatus("abort").then(function () {
			throw errors[0];
		});
	}

	var disposePromise = setStatus("dispose");

	results.forEach(function (result) {
		if (result.dispose) result.dispose();
	});

	var applyPromise = setStatus("apply");

	var error;
	var reportError = function (err) {
		if (!error) error = err;
	};

	var outdatedModules = [];
	results.forEach(function (result) {
		if (result.apply) {
			var modules = result.apply(reportError);
			if (modules) {
				for (var i = 0; i < modules.length; i++) {
					outdatedModules.push(modules[i]);
				}
			}
		}
	});

	return Promise.all([disposePromise, applyPromise]).then(function () {
		if (error) {
			return setStatus("fail").then(function () {
				throw error;
			});
		}

		if (queuedInvalidatedModules) {
			return internalApply(options).then(function (list) {
				outdatedModules.forEach(function (moduleId) {
					if (list.indexOf(moduleId) < 0) list.push(moduleId);
				});
				return list;
			});
		}

		return setStatus("idle").then(function () {
			return outdatedModules;
		});
	});
}

function applyInvalidatedModules() {
	if (queuedInvalidatedModules) {
		if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
		Object.keys(__webpack_require__.hmrI).forEach(function (key) {
			queuedInvalidatedModules.forEach(function (moduleId) {
				__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
			});
		});
		queuedInvalidatedModules = undefined;
		return true;
	}
}

})();
// webpack/runtime/load_script
(() => {
var inProgress = {};

var dataWebpackPrefix = "frontend-note:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		
    script = document.createElement('script');
    
		script.charset = 'utf-8';
		script.timeout = 120;
		if (__webpack_require__.nc) {
			script.setAttribute("nonce", __webpack_require__.nc);
		}
		script.setAttribute("data-webpack", dataWebpackPrefix + key);
		
		script.src = url;
		
    
	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/node_module_decorator
(() => {
__webpack_require__.nmd = (module) => {
  module.paths = [];
  if (!module.children) module.children = [];
  return module;
};
})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = (result, chunkIds, fn, priority) => {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var [chunkIds, fn, priority] = deferred[i];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "/";
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.2.8")
})();
// webpack/runtime/css loading
(() => {
if (typeof document === "undefined") return;
var createStylesheet = function (
	chunkId, fullhref, oldTag, resolve, reject
) {
	var linkTag = document.createElement("link");
	
	linkTag.rel = "stylesheet";
	linkTag.type="text/css";
	if (__webpack_require__.nc) {
		linkTag.nonce = __webpack_require__.nc;
	}
	var onLinkComplete = function (event) {
		// avoid mem leaks.
		linkTag.onerror = linkTag.onload = null;
		if (event.type === 'load') {
			resolve();
		} else {
			var errorType = event && (event.type === 'load' ? 'missing' : event.type);
			var realHref = event && event.target && event.target.href || fullhref;
			var err = new Error("Loading CSS chunk " + chunkId + " failed.\\n(" + realHref + ")");
			err.code = "CSS_CHUNK_LOAD_FAILED";
			err.type = errorType;
			err.request = realHref;
			if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
			reject(err);
		}
	}

	linkTag.onerror = linkTag.onload = onLinkComplete;
	linkTag.href = fullhref;
	
	if (oldTag) {
  oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
} else {
  document.head.appendChild(linkTag);
}
	return linkTag;
}
var findStylesheet = function (href, fullhref) {
	var existingLinkTags = document.getElementsByTagName("link");
	for (var i = 0; i < existingLinkTags.length; i++) {
		var tag = existingLinkTags[i];
		var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
		if (tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
	}

	var existingStyleTags = document.getElementsByTagName("style");
	for (var i = 0; i < existingStyleTags.length; i++) {
		var tag = existingStyleTags[i];
		var dataHref = tag.getAttribute("data-href");
		if (dataHref === href || dataHref === fullhref) return tag;
	}
}

var loadStylesheet = function (chunkId) {
	return new Promise(function (resolve, reject) {
		var href = __webpack_require__.miniCssF(chunkId);
		var fullhref = __webpack_require__.p + href;
		if (findStylesheet(href, fullhref)) return resolve();
		createStylesheet(chunkId, fullhref, null, resolve, reject);
	})
}

// no chunk loading
var oldTags = [];
var newTags = [];
var applyHandler = function (options) {
	return {
		dispose: function () {
			for (var i = 0; i < oldTags.length; i++) {
				var oldTag = oldTags[i];
				if (oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
			}
			oldTags.length = 0;
		},
		apply: function () {
			for (var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
			newTags.length = 0;
		}
	}
}
__webpack_require__.hmrC.miniCss = function (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
	applyHandlers.push(applyHandler);
	chunkIds.forEach(function (chunkId) {
		var href = __webpack_require__.miniCssF(chunkId);
		var fullhref = __webpack_require__.p + href;
		var oldTag = findStylesheet(href, fullhref);
		if (!oldTag) return;
		promises.push(new Promise(function (resolve, reject) {
			var tag = createStylesheet(
				chunkId,
				fullhref,
				oldTag,
				function () {
					tag.as = "style";
					tag.rel = "preload";
					resolve();
				},
				reject
			);
			oldTags.push(oldTag);
			newTags.push(tag);
		}))
	});
}


})();
// webpack/runtime/jsonp_chunk_loading
(() => {

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {"index": 0,};
      
        __webpack_require__.f.j = function (chunkId, promises) {
          // JSONP chunk loading for javascript
var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
	? installedChunks[chunkId]
	: undefined;
if (installedChunkData !== 0) {
	// 0 means "already installed".

	// a Promise means "currently loading".
	if (installedChunkData) {
		promises.push(installedChunkData[2]);
	} else {
		if (true) {
			// setup Promise in chunk cache
			var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
			promises.push((installedChunkData[2] = promise));

			// start chunk loading
			var url = __webpack_require__.p + __webpack_require__.u(chunkId);
			// create error before stack unwound to get useful stacktrace later
			var error = new Error();
			var loadingEnded = function (event) {
				if (__webpack_require__.o(installedChunks, chunkId)) {
					installedChunkData = installedChunks[chunkId];
					if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
					if (installedChunkData) {
						var errorType =
							event && (event.type === 'load' ? 'missing' : event.type);
						var realSrc = event && event.target && event.target.src;
						error.message =
							'Loading chunk ' +
							chunkId +
							' failed.\n(' +
							errorType +
							': ' +
							realSrc +
							')';
						error.name = 'ChunkLoadError';
						error.type = errorType;
						error.request = realSrc;
						installedChunkData[1](error);
					}
				}
			};
			__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
		} 
	}
}

        }
        var currentUpdatedModulesList;
var waitingUpdateResolves = {};
function loadUpdateChunk(chunkId, updatedModulesList) {
	currentUpdatedModulesList = updatedModulesList;
	return new Promise((resolve, reject) => {
		waitingUpdateResolves[chunkId] = resolve;
		// start update chunk loading
		var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
		// create error before stack unwound to get useful stacktrace later
		var error = new Error();
		var loadingEnded = (event) => {
			if (waitingUpdateResolves[chunkId]) {
				waitingUpdateResolves[chunkId] = undefined;
				var errorType =
					event && (event.type === 'load' ? 'missing' : event.type);
				var realSrc = event && event.target && event.target.src;
				error.message =
					'Loading hot update chunk ' +
					chunkId +
					' failed.\n(' +
					errorType +
					': ' +
					realSrc +
					')';
				error.name = 'ChunkLoadError';
				error.type = errorType;
				error.request = realSrc;
				reject(error);
			}
		};
		__webpack_require__.l(url, loadingEnded);
	});
}

self["webpackHotUpdatefrontend_note"] = (chunkId, moreModules, runtime) => {
	for (var moduleId in moreModules) {
		if (__webpack_require__.o(moreModules, moduleId)) {
			currentUpdate[moduleId] = moreModules[moduleId];
			if (currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
		}
	}
	if (runtime) currentUpdateRuntime.push(runtime);
	if (waitingUpdateResolves[chunkId]) {
		waitingUpdateResolves[chunkId]();
		waitingUpdateResolves[chunkId] = undefined;
	}
};
var currentUpdateChunks;
var currentUpdate;
var currentUpdateRemovedChunks;
var currentUpdateRuntime;
function applyHandler(options) {
	if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
	currentUpdateChunks = undefined;
	function getAffectedModuleEffects(updateModuleId) {
		var outdatedModules = [updateModuleId];
		var outdatedDependencies = {};
		var queue = outdatedModules.map(function (id) {
			return {
				chain: [id],
				id: id
			};
		});
		while (queue.length > 0) {
			var queueItem = queue.pop();
			var moduleId = queueItem.id;
			var chain = queueItem.chain;
			var module = __webpack_require__.c[moduleId];
			if (
				!module ||
				(module.hot._selfAccepted && !module.hot._selfInvalidated)
			) {
				continue;
			}

			if (module.hot._selfDeclined) {
				return {
					type: "self-declined",
					chain: chain,
					moduleId: moduleId
				};
			}

			if (module.hot._main) {
				return {
					type: "unaccepted",
					chain: chain,
					moduleId: moduleId
				};
			}

			for (var i = 0; i < module.parents.length; i++) {
				var parentId = module.parents[i];
				var parent = __webpack_require__.c[parentId];
				if (!parent) {
					continue;
				}
				if (parent.hot._declinedDependencies[moduleId]) {
					return {
						type: "declined",
						chain: chain.concat([parentId]),
						moduleId: moduleId,
						parentId: parentId
					};
				}
				if (outdatedModules.indexOf(parentId) !== -1) {
					continue;
				}
				if (parent.hot._acceptedDependencies[moduleId]) {
					if (!outdatedDependencies[parentId]) {
						outdatedDependencies[parentId] = [];
					}
					addAllToSet(outdatedDependencies[parentId], [moduleId]);
					continue;
				}
				delete outdatedDependencies[parentId];
				outdatedModules.push(parentId);
				queue.push({
					chain: chain.concat([parentId]),
					id: parentId
				});
			}
		}

		return {
			type: "accepted",
			moduleId: updateModuleId,
			outdatedModules: outdatedModules,
			outdatedDependencies: outdatedDependencies
		};
	}

	function addAllToSet(a, b) {
		for (var i = 0; i < b.length; i++) {
			var item = b[i];
			if (a.indexOf(item) === -1) a.push(item);
		}
	}

	var outdatedDependencies = {};
	var outdatedModules = [];
	var appliedUpdate = {};

	var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
		console.warn(
			"[HMR] unexpected require(" + module.id + ") to disposed module"
		);
	};

	for (var moduleId in currentUpdate) {
		if (__webpack_require__.o(currentUpdate, moduleId)) {
			var newModuleFactory = currentUpdate[moduleId];
			var result = newModuleFactory ? getAffectedModuleEffects(moduleId) : {
				type: "disposed",
				moduleId: moduleId
			};
			var abortError = false;
			var doApply = false;
			var doDispose = false;
			var chainInfo = "";
			if (result.chain) {
				chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
			}
			switch (result.type) {
				case "self-declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of self decline: " + result.moduleId + chainInfo
						);
					break;
				case "declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of declined dependency: " +
							result.moduleId +
							" in " +
							result.parentId +
							chainInfo
						);
					break;
				case "unaccepted":
					if (options.onUnaccepted) options.onUnaccepted(result);
					if (!options.ignoreUnaccepted)
						abortError = new Error(
							"Aborted because " + moduleId + " is not accepted" + chainInfo
						);
					break;
				case "accepted":
					if (options.onAccepted) options.onAccepted(result);
					doApply = true;
					break;
				case "disposed":
					if (options.onDisposed) options.onDisposed(result);
					doDispose = true;
					break;
				default:
					throw new Error("Unexception type " + result.type);
			}
			if (abortError) {
				return {
					error: abortError
				};
			}
			if (doApply) {
				appliedUpdate[moduleId] = newModuleFactory;
				addAllToSet(outdatedModules, result.outdatedModules);
				for (moduleId in result.outdatedDependencies) {
					if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
						if (!outdatedDependencies[moduleId])
							outdatedDependencies[moduleId] = [];
						addAllToSet(
							outdatedDependencies[moduleId],
							result.outdatedDependencies[moduleId]
						);
					}
				}
			}
			if (doDispose) {
				addAllToSet(outdatedModules, [result.moduleId]);
				appliedUpdate[moduleId] = warnUnexpectedRequire;
			}
		}
	}
	currentUpdate = undefined;

	var outdatedSelfAcceptedModules = [];
	for (var j = 0; j < outdatedModules.length; j++) {
		var outdatedModuleId = outdatedModules[j];
		var module = __webpack_require__.c[outdatedModuleId];
		if (
			module &&
			(module.hot._selfAccepted || module.hot._main) &&
			// removed self-accepted modules should not be required
			appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
			// when called invalidate self-accepting is not possible
			!module.hot._selfInvalidated
		) {
			outdatedSelfAcceptedModules.push({
				module: outdatedModuleId,
				require: module.hot._requireSelf,
				errorHandler: module.hot._selfAccepted
			});
		}
	} 

	var moduleOutdatedDependencies;
	return {
		dispose: function () {
			currentUpdateRemovedChunks.forEach(function (chunkId) {
				delete installedChunks[chunkId];
			});
			currentUpdateRemovedChunks = undefined;

			var idx;
			var queue = outdatedModules.slice();
			while (queue.length > 0) {
				var moduleId = queue.pop();
				var module = __webpack_require__.c[moduleId];
				if (!module) continue;

				var data = {};

				// Call dispose handlers
				var disposeHandlers = module.hot._disposeHandlers; 
				for (j = 0; j < disposeHandlers.length; j++) {
					disposeHandlers[j].call(null, data);
				}
				__webpack_require__.hmrD[moduleId] = data;

				module.hot.active = false;

				delete __webpack_require__.c[moduleId];

				delete outdatedDependencies[moduleId];

				for (j = 0; j < module.children.length; j++) {
					var child = __webpack_require__.c[module.children[j]];
					if (!child) continue;
					idx = child.parents.indexOf(moduleId);
					if (idx >= 0) {
						child.parents.splice(idx, 1);
					}
				}
			}

			var dependency;
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						for (j = 0; j < moduleOutdatedDependencies.length; j++) {
							dependency = moduleOutdatedDependencies[j];
							idx = module.children.indexOf(dependency);
							if (idx >= 0) module.children.splice(idx, 1);
						}
					}
				}
			}
		},
		apply: function (reportError) {
			// insert new code
			for (var updateModuleId in appliedUpdate) {
				if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
					__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId]; 
				}
			}

			// run new runtime modules
			for (var i = 0; i < currentUpdateRuntime.length; i++) {
				currentUpdateRuntime[i](__webpack_require__);
			}

			// call accept handlers
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					var module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						var callbacks = [];
						var errorHandlers = [];
						var dependenciesForCallbacks = [];
						for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
							var dependency = moduleOutdatedDependencies[j];
							var acceptCallback = module.hot._acceptedDependencies[dependency];
							var errorHandler = module.hot._acceptedErrorHandlers[dependency];
							if (acceptCallback) {
								if (callbacks.indexOf(acceptCallback) !== -1) continue;
								callbacks.push(acceptCallback);
								errorHandlers.push(errorHandler); 
								dependenciesForCallbacks.push(dependency);
							}
						}
						for (var k = 0; k < callbacks.length; k++) {
							try {
								callbacks[k].call(null, moduleOutdatedDependencies);
							} catch (err) {
								if (typeof errorHandlers[k] === "function") {
									try {
										errorHandlers[k](err, {
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k]
										});
									} catch (err2) {
										if (options.onErrored) {
											options.onErrored({
												type: "accept-error-handler-errored",
												moduleId: outdatedModuleId,
												dependencyId: dependenciesForCallbacks[k],
												error: err2,
												originalError: err
											});
										}
										if (!options.ignoreErrored) {
											reportError(err2);
											reportError(err);
										}
									}
								} else {
									if (options.onErrored) {
										options.onErrored({
											type: "accept-errored",
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k],
											error: err
										});
									}
									if (!options.ignoreErrored) {
										reportError(err);
									}
								}
							}
						}
					}
				}
			}

			// Load self accepted modules
			for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
				var item = outdatedSelfAcceptedModules[o];
				var moduleId = item.module;
				try {
					item.require(moduleId);
				} catch (err) {
					if (typeof item.errorHandler === "function") {
						try {
							item.errorHandler(err, {
								moduleId: moduleId,
								module: __webpack_require__.c[moduleId]
							});
						} catch (err1) {
							if (options.onErrored) {
								options.onErrored({
									type: "self-accept-error-handler-errored",
									moduleId: moduleId,
									error: err1,
									originalError: err
								});
							}
							if (!options.ignoreErrored) {
								reportError(err1);
								reportError(err);
							}
						}
					} else {
						if (options.onErrored) {
							options.onErrored({
								type: "self-accept-errored",
								moduleId: moduleId,
								error: err
							});
						}
						if (!options.ignoreErrored) {
							reportError(err);
						}
					}
				}
			}

			return outdatedModules;
		}
	};
}

__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
	if (!currentUpdate) {
		currentUpdate = {};
		currentUpdateRuntime = [];
		currentUpdateRemovedChunks = [];
		applyHandlers.push(applyHandler);
	}
	if (!__webpack_require__.o(currentUpdate, moduleId)) {
		currentUpdate[moduleId] = __webpack_require__.m[moduleId];
	}
};

__webpack_require__.hmrC.jsonp = function (
	chunkIds,
	removedChunks,
	removedModules,
	promises,
	applyHandlers,
	updatedModulesList
) {
	applyHandlers.push(applyHandler);
	currentUpdateChunks = {};
	currentUpdateRemovedChunks = removedChunks;
	currentUpdate = removedModules.reduce(function (obj, key) {
		obj[key] = false;
		return obj;
	}, {});
	currentUpdateRuntime = [];
	chunkIds.forEach(function (chunkId) {
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId] !== undefined
		) {
			promises.push(loadUpdateChunk(chunkId, updatedModulesList));
			currentUpdateChunks[chunkId] = true;
		} else {
			currentUpdateChunks[chunkId] = false;
		}
	});
	if (__webpack_require__.f) {
		__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
			if (
				currentUpdateChunks &&
				__webpack_require__.o(currentUpdateChunks, chunkId) &&
				!currentUpdateChunks[chunkId]
			) {
				promises.push(loadUpdateChunk(chunkId));
				currentUpdateChunks[chunkId] = true;
			}
		};
	}
};
__webpack_require__.hmrM = () => {
	if (typeof fetch === "undefined")
		throw new Error("No browser support: need fetch API");
	return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(
		(response) => {
			if (response.status === 404) return; // no update available
			if (!response.ok)
				throw new Error(
					"Failed to fetch update manifest " + response.statusText
				);
			return response.json();
		}
	);
};
__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
// install a JSONP callback for chunk loading
var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
	var [chunkIds, moreModules, runtime] = data;
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	return __webpack_require__.O(result);
};

var chunkLoadingGlobal = self["webpackChunkfrontend_note"] = self["webpackChunkfrontend_note"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(
	null,
	chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
);

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.2.8";

})();
/************************************************************************/
// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports
__webpack_require__.O(undefined, ["lib-react", "lib-axios", "lib-router", "vendors-node_modules_pnpm_rspack_core_1_2_8__swc_helpers_0_5_15_node_modules_rspack_core_dist-d533e1"], function() { return __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefreshEntry.js") });
var __webpack_exports__ = __webpack_require__.O(undefined, ["lib-react", "lib-axios", "lib-router", "vendors-node_modules_pnpm_rspack_core_1_2_8__swc_helpers_0_5_15_node_modules_rspack_core_dist-d533e1"], function() { return __webpack_require__("./src/index.tsx") });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;
//# sourceMappingURL=index.js.map