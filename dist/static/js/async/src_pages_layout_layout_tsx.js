"use strict";
(self["webpackChunkfrontend_note"] = self["webpackChunkfrontend_note"] || []).push([["src_pages_layout_layout_tsx"], {
"./src/components/main-skeleton/mainSkeleton.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((()=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
            className: "grid px-6 pt-24 bg-white place-items-center",
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                        className: "text-base font-semibold text-indigo-600",
                        children: "学无止尽"
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/main-skeleton/mainSkeleton.tsx",
                        lineNumber: 5,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                        className: "mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl",
                        children: "Note not found"
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/main-skeleton/mainSkeleton.tsx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                        className: "mt-6 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8",
                        children: "Sorry, we couldn’t find the Note you’re looking for."
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/main-skeleton/mainSkeleton.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center justify-center mt-10 gap-x-6",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            href: "/",
                            className: "text-sm font-semibold text-gray-900",
                            children: [
                                "View Other Note ",
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    "aria-hidden": "true",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/main-skeleton/mainSkeleton.tsx",
                                    lineNumber: 15,
                                    columnNumber: 29
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/main-skeleton/mainSkeleton.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/main-skeleton/mainSkeleton.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/main-skeleton/mainSkeleton.tsx",
                lineNumber: 4,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/main-skeleton/mainSkeleton.tsx",
            lineNumber: 3,
            columnNumber: 11
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
"./src/components/main/main.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Main)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/.pnpm/marked@15.0.7/node_modules/marked/lib/marked.esm.js");
/* ESM import */var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/hooks/index.ts");
/* ESM import */var _main_skeleton_mainSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/main-skeleton/mainSkeleton.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();




function Main() {
    _s();
    const markdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const curNote = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.selectedNote.selectedNote);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let content = ``;
        if (curNote === null || curNote === void 0 ? void 0 : curNote.content) {
            content = curNote.content;
        }
        const deContent = decodeURIComponent(content);
        markdownRef.current.innerHTML = marked__WEBPACK_IMPORTED_MODULE_2__.marked.parse(deContent);
    }, [
        curNote
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: `prose prose-slate prose-h2:mt-0 prose-h3:mt-0 prose-h4:mt-0 max-w-full prose-code:rounded-md prose-code:before:content-none  prose-code:after:content-none prose-p:before:content-none prose-p:after:content-none prose-hr:my-4`,
                ref: markdownRef
            }, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/main/main.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            !(curNote === null || curNote === void 0 ? void 0 : curNote.content) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_main_skeleton_mainSkeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/main/main.tsx",
                lineNumber: 25,
                columnNumber: 30
            }, this)
        ]
    }, void 0, true);
}
_s(Main, "INXK9Tdb5c4ESzszufbEN2f8JhM=", false, function() {
    return [
        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector
    ];
});
_c = Main;
var _c;
$RefreshReg$(_c, "Main");

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
"./src/components/sidebar-skeleton/sidebarSkeleton.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((()=>{
    const list = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: list.map((_, index)=>{
            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "mt-2",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: `truncate text-base px-4 py-2 rounded text-slate-700 font-medium bg-gray-50`,
                    children: "\xa0"
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar-skeleton/sidebarSkeleton.tsx",
                    lineNumber: 7,
                    columnNumber: 13
                }, undefined)
            }, index, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar-skeleton/sidebarSkeleton.tsx",
                lineNumber: 6,
                columnNumber: 21
            }, undefined);
        })
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
"./src/components/sidebar/sidebar.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Sidebar)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/hooks/index.ts");
/* ESM import */var _features_selected_note_selectedNoteSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/features/selected-note/selectedNoteSlice.ts");
/* ESM import */var _sidebar_skeleton_sidebarSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/sidebar-skeleton/sidebarSkeleton.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();




function Sidebar(props) {
    _s();
    const { notes } = props;
    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
    const curNote = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.selectedNote.selectedNote);
    const [keyword, setKeywrod] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const filterPosts = (notes)=>{
        if (notes === null || notes === void 0 ? void 0 : notes.length) {
            const filterPost = notes.filter((note)=>note.title.includes(keyword));
            return filterPost;
        }
        return [];
    };
    const onSelectedNote = (note)=>{
        dispatch((0,_features_selected_note_selectedNoteSlice__WEBPACK_IMPORTED_MODULE_3__.selectedNote)(note));
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
            id: "nav",
            className: "lg:text-sm lg:leading-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "sticky top-0 -ml-0.5 bg-white",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "h-6 bg-white"
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar/sidebar.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "absolute inset-y-0 left-0 flex items-center pl-3",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                                        src: "/search.svg",
                                        alt: "search Logo",
                                        width: 16,
                                        height: 16
                                    }, void 0, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar/sidebar.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar/sidebar.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                    type: "text",
                                    value: keyword,
                                    onChange: (e)=>setKeywrod(e.target.value),
                                    className: "block w-full rounded-md border-0 py-1.5 pl-9 pr-20 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-700"
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar/sidebar.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar/sidebar.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "shadow-md bg-gradient-to-b from-white"
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar/sidebar.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar/sidebar.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    children: [
                        filterPosts(notes).map((note)=>{
                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                className: "mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    onClick: ()=>onSelectedNote(note),
                                    className: `truncate text-base px-4 py-2 rounded text-slate-700 font-medium ${(curNote === null || curNote === void 0 ? void 0 : curNote.id) === note.id ? 'bg-blue-100' : 'hover:bg-blue-50'}`,
                                    children: note.title
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar/sidebar.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this)
                            }, note.id, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar/sidebar.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this);
                        }),
                        !(notes === null || notes === void 0 ? void 0 : notes.length) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sidebar_skeleton_sidebarSkeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar/sidebar.tsx",
                            lineNumber: 58,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar/sidebar.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/sidebar/sidebar.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Sidebar, "hhL+S8R+nF85OSPpalgRfp/vmOo=", false, function() {
    return [
        _hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,
        _hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector
    ];
});
_c = Sidebar;
var _c;
$RefreshReg$(_c, "Sidebar");

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
"./src/pages/layout/layout.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/.pnpm/react-router@7.3.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-router/dist/development/chunk-K6CSEXPM.mjs");
/* ESM import */var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/sidebar/sidebar.tsx");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/hooks/index.ts");
/* ESM import */var _features_selected_note_selectedNoteSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/features/selected-note/selectedNoteSlice.ts");
/* ESM import */var _components_main_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/main/main.tsx");
/* ESM import */var _lib_httpClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/lib/httpClient.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();







const Layout = ()=>{
    var _params_categoryId;
    _s();
    const params = (0,react_router__WEBPACK_IMPORTED_MODULE_7__.useParams)();
    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
    const id = (params === null || params === void 0 ? void 0 : (_params_categoryId = params.categoryId) === null || _params_categoryId === void 0 ? void 0 : _params_categoryId.slice(6)) || '1';
    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (id) {
            _lib_httpClient__WEBPACK_IMPORTED_MODULE_6__["default"].post('/note/find', {
                category: id
            }).then((res)=>{
                if (res.code === 0) {
                    dispatch((0,_features_selected_note_selectedNoteSlice__WEBPACK_IMPORTED_MODULE_4__.selectedNote)(res.data[0]));
                    setNotes(res.data);
                }
            });
        }
    }, [
        id
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "lg:block fixed w-[20.2666rem] inset-0 z-20  top-[4rem] left-[max(0px,calc(50%-48rem))] right-auto pb-10 pl-8 pr-6 overflow-y-auto border-r-1 border-gray-50",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    notes
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/layout/layout.tsx",
                    lineNumber: 32,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/layout/layout.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "lg:pl-[20.8rem]",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
                    className: "relative z-20 max-w-3xl pt-10 xl:max-w-none  h-[calc(100vh-64px)] overflow-y-auto",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_main__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/layout/layout.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, undefined)
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/layout/layout.tsx",
                    lineNumber: 35,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/layout/layout.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true);
};
_s(Layout, "hAiHDfz2uqbm2OFBH9gPIU18iJg=", false, function() {
    return [
        react_router__WEBPACK_IMPORTED_MODULE_7__.useParams,
        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch
    ];
});
_c = Layout;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
var _c;
$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=src_pages_layout_layout_tsx.js.map