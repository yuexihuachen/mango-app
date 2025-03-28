"use strict";
(self["webpackChunkfrontend_note"] = self["webpackChunkfrontend_note"] || []).push([["src_components_add-note_addNote_tsx"], {
"./src/components/add-note/addNote.tsx": (function (module, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var _lib_httpClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/lib/httpClient.ts");
/* ESM import */var _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/modal/modal.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();






function AddNote() {
    _s();
    const { data, loading } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"])('/category/find');
    const markdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [category, setCagetory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [published, setPublished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onChange = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((val)=>{
        if (markdownRef.current) {
            setContent(val);
            markdownRef.current.innerHTML = marked__WEBPACK_IMPORTED_MODULE_3__.parse(val);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!loading && (data === null || data === void 0 ? void 0 : data.data)) {
            setCagetory(data.data[0].id);
        }
    }, [
        loading
    ]);
    const onOk = ()=>{
        setOpen(false);
    };
    const savePost = async ()=>{
        const res = await _lib_httpClient__WEBPACK_IMPORTED_MODULE_5__["default"].post('/auth/note/create', {
            title,
            content: encodeURIComponent(content),
            category: category,
            published
        });
        if (res.code === 0) {
            setOpen(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                    lineNumber: 52,
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
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "h-24 p-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "block text-sm font-medium leading-6 text-gray-900",
                                children: "类型"
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                lineNumber: 70,
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
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                            lineNumber: 85,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                        lineNumber: 69,
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
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                        lineNumber: 93,
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
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                        lineNumber: 112,
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
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "text-sm leading-6",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "font-medium text-gray-900",
                                            children: "是否发布"
                                        }, void 0, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                        lineNumber: 133,
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
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                            lineNumber: 155,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
                open,
                ...{
                    content: '新增成功'
                },
                onOk
            }, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/add-note/addNote.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AddNote, "aEtWoCvLS/kLVr8eBkz1LgFIsBY=", false, function() {
    return [
        _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"]
    ];
});
_c = AddNote;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddNote);
var _c;
$RefreshReg$(_c, "AddNote");

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

}]);
//# sourceMappingURL=src_components_add-note_addNote_tsx.js.map