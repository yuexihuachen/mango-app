"use strict";
(self["webpackChunkfrontend_note"] = self["webpackChunkfrontend_note"] || []).push([["src_components_edit-note_editNote_tsx"], {
"./src/components/edit-note/editNote.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/hooks/useFetch.ts");
/* ESM import */var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/.pnpm/marked@15.0.7/node_modules/marked/lib/marked.esm.js");
/* ESM import */var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/.pnpm/@uiw+react-codemirror@4.23.10_@babel+runtime@7.26.10_@codemirror+autocomplete@6.18.6_@codemir_gdtqopp57t3qztwt2lw2b66sgy/node_modules/@uiw/react-codemirror/esm/index.js");
/* ESM import */var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/hooks/index.ts");
/* ESM import */var _features_global_globalSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/features/global/globalSlice.ts");
/* ESM import */var _lib_httpClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/lib/httpClient.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();







function EditNote() {
    _s();
    const { data } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"])('/category/find');
    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
    const markdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [category, setCagetory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [published, setPublished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const currentNote = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)((state)=>state.note.currentNote);
    const onChange = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((val)=>{
        if (markdownRef.current) {
            setContent(val);
            markdownRef.current.innerHTML = marked__WEBPACK_IMPORTED_MODULE_3__.parse(val);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (Object.keys(currentNote).length) {
            setTitle(currentNote.title);
            setCagetory(currentNote.category || '0');
            const deContent = decodeURIComponent(currentNote.content);
            setContent(deContent);
            markdownRef.current.innerHTML = marked__WEBPACK_IMPORTED_MODULE_3__.parse(deContent);
            setPublished(currentNote.published);
        }
    }, [
        currentNote
    ]);
    const savePost = async ()=>{
        const res = await _lib_httpClient__WEBPACK_IMPORTED_MODULE_7__["default"].post('/auth/note/update', {
            condition: {
                id: currentNote.id
            },
            fields: {
                title,
                content: encodeURIComponent(content),
                category,
                published
            }
        });
        if (res.code === 0) {
            dispatch((0,_features_global_globalSlice__WEBPACK_IMPORTED_MODULE_6__.updateStatus)({
                modal: {
                    show: true,
                    content: '修改成功'
                }
            }));
        }
    };
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
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                    name: "title",
                                    type: "text",
                                    onChange: (e)=>setTitle(e.target.value),
                                    value: title,
                                    autoComplete: "given-name",
                                    className: "px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "h-24 p-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "block text-sm font-medium leading-6 text-gray-900",
                            children: "类型"
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid mt-2",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                                name: "category",
                                value: category,
                                onChange: (e)=>setCagetory(e.target.value),
                                autoComplete: "category-name",
                                className: "px-3 appearance-none row-start-1 col-start-1 block w-full text-base max-w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600",
                                children: data && data.data.map((c)=>{
                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                        value: c.id,
                                        children: c.alias
                                    }, c.id, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                                        lineNumber: 97,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "p-3",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "relative h-[720px] overflow-y-scroll overscroll-contain text-base",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            value: content,
                            height: "auto",
                            theme: 'dark',
                            minHeight: "720px",
                            extensions: [
                                _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_4__.EditorView.lineWrapping
                            ],
                            basicSetup: {
                                foldGutter: false
                            },
                            onChange: onChange
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: `p-3`,
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "h-[720px] overflow-y-scroll overscroll-contain",
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
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                    lineNumber: 124,
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
                                        type: "checkbox",
                                        checked: !!published,
                                        onChange: (e)=>setPublished(e.target.checked ? 1 : 0),
                                        className: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                                    }, void 0, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "text-sm leading-6",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "font-medium text-gray-900",
                                        children: "是否发布"
                                    }, void 0, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "col-span-2 p-5",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        type: "button",
                        onClick: savePost,
                        className: "w-full py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                        children: "保存"
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/edit-note/editNote.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(EditNote, "hY6Ct5v7Y9yEfgjEqz+ejk59cn0=", false, function() {
    return [
        _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"],
        _hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch,
        _hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector
    ];
});
_c = EditNote;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditNote);
var _c;
$RefreshReg$(_c, "EditNote");

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
//# sourceMappingURL=src_components_edit-note_editNote_tsx.js.map