"use strict";
(self["webpackChunkfrontend_note"] = self["webpackChunkfrontend_note"] || []).push([["src_components_view-note_viewNote_tsx"], {
"./src/components/view-note/viewNote.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/hooks/useFetch.ts");
/* ESM import */var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/.pnpm/marked@15.0.7/node_modules/marked/lib/marked.esm.js");
/* ESM import */var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/hooks/index.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();




function ViewNote() {
    _s();
    const { data } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"])('/category/find');
    const markdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [category, setCagetory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [published, setPublished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const currentNote = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.note.currentNote);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentNote) {
            setTitle(currentNote.title);
            setCagetory(currentNote.category || '0');
            const deContent = decodeURIComponent(currentNote.content);
            markdownRef.current.innerHTML = marked__WEBPACK_IMPORTED_MODULE_3__.parse(deContent);
            setPublished(currentNote.published);
        }
    }, [
        currentNote
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "grid grid-cols-2 gap-4 m-4 text-4xl",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "h-24 p-3",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "sm:col-span-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "block text-sm font-medium leading-6 text-gray-900",
                                children: "标题"
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                    name: "title",
                                    type: "text",
                                    disabled: true,
                                    onChange: (e)=>setTitle(e.target.value),
                                    defaultValue: title,
                                    autoComplete: "given-name",
                                    className: "px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "h-24 p-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "block text-sm font-medium leading-6 text-gray-900",
                            children: "类型"
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid mt-2",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                                name: "category",
                                disabled: true,
                                value: category,
                                onChange: (e)=>setCagetory(e.target.value),
                                autoComplete: "category-name",
                                className: "px-3 appearance-none row-start-1 col-start-1 block w-full text-base max-w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600",
                                children: data && data.data.map((c)=>{
                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                        value: c.id,
                                        children: c.alias
                                    }, c.id, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                                        lineNumber: 64,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: `p-3 col-span-2`,
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "p-4 shadow-xl",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: `
                  prose
                  prose-slate
                  prose-h2:mt-0
                  prose-h3:mt-0
                  prose-h4:mt-0
                  max-w-full
                  prose-code:rounded-md
                  prose-code:before:content-none 
                  prose-code:after:content-none
                  prose-p:before:content-none 
                  prose-p:after:content-none
                  prose-hr:my-4
                `,
                            ref: markdownRef
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "col-span-2 p-3",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "mt-6 space-y-6",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "relative flex gap-x-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center h-6",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                        disabled: true,
                                        type: "checkbox",
                                        checked: !!published,
                                        onChange: (e)=>setPublished(e.target.checked ? 1 : 0),
                                        className: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                                    }, void 0, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "text-sm leading-6",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "font-medium text-gray-900",
                                        children: "是否发布"
                                    }, void 0, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/view-note/viewNote.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(ViewNote, "0ymp4j/7f1LYRy7sDQPEb+6CuoI=", false, function() {
    return [
        _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"],
        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector
    ];
});
_c = ViewNote;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewNote);
var _c;
$RefreshReg$(_c, "ViewNote");

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
//# sourceMappingURL=src_components_view-note_viewNote_tsx.js.map