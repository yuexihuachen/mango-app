"use strict";
(self["webpackChunkfrontend_note"] = self["webpackChunkfrontend_note"] || []).push([["src_pages_note_note_tsx"], {
"./src/components/tabs/tabs.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Tabs)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/hooks/index.ts");
/* ESM import */var _features_global_globalSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/features/global/globalSlice.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();


function Tabs(props) {
    _s();
    const { items } = props;
    const itemKey = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.global.tab);
    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();
    const onSelectTab = (key)=>{
        dispatch((0,_features_global_globalSlice__WEBPACK_IMPORTED_MODULE_2__.updateStatus)({
            tab: key
        }));
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "min-h-full",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
            className: "bg-white",
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-9/12 px-4 mx-auto sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center justify-between h-16 border-b border-gray-300",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "block",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-baseline space-x-4",
                                    children: items.filter((item)=>item.label).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            onClick: ()=>onSelectTab(item.key),
                                            className: `px-3 py-5 text-sm font-medium relative  after:w-full after:h-0.5 after:absolute after:-bottom-0.5 after:left-0 ${itemKey === item.key ? 'after:bg-indigo-500 font-medium text-indigo-600' : 'hover:after:bg-indigo-500 text-gray-900'}`,
                                            children: item.label
                                        }, item.key, false, {
                                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/tabs/tabs.tsx",
                                            lineNumber: 24,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/Users/wangl577/Documents/project/mango-app/src/components/tabs/tabs.tsx",
                                    lineNumber: 22,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/tabs/tabs.tsx",
                                lineNumber: 21,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/tabs/tabs.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/tabs/tabs.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "w-full",
                        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: `mt-4 text-gray-500 ${itemKey === item.key ? 'block' : 'hidden'}`,
                                children: item.children
                            }, item.key, false, {
                                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/tabs/tabs.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this))
                    }, void 0, false, {
                        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/tabs/tabs.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/components/tabs/tabs.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/components/tabs/tabs.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/Users/wangl577/Documents/project/mango-app/src/components/tabs/tabs.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Tabs, "lcvlkq8s2VD1YMB9dbYokR9+Ppw=", false, function() {
    return [
        _hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
        _hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch
    ];
});
_c = Tabs;
var _c;
$RefreshReg$(_c, "Tabs");

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
"./src/pages/note/note.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _components_tabs_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/tabs/tabs.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");



const SearchNote = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>__webpack_require__.e(/* import() */ "src_components_search-note_searchNote_tsx").then(__webpack_require__.bind(__webpack_require__, "./src/components/search-note/searchNote.tsx")));
_c = SearchNote;
const AddNote = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>Promise.all(/* import() */ [__webpack_require__.e("lib-react"), __webpack_require__.e("vendors-node_modules_pnpm_marked_15_0_7_node_modules_marked_lib_marked_esm_js"), __webpack_require__.e("vendors-node_modules_pnpm_uiw_react-codemirror_4_23_10__babel_runtime_7_26_10__codemirror_aut-19c281"), __webpack_require__.e("src_components_add-note_addNote_tsx")]).then(__webpack_require__.bind(__webpack_require__, "./src/components/add-note/addNote.tsx")));
_c1 = AddNote;
const ViewNote = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>Promise.all(/* import() */ [__webpack_require__.e("vendors-node_modules_pnpm_marked_15_0_7_node_modules_marked_lib_marked_esm_js"), __webpack_require__.e("src_components_view-note_viewNote_tsx")]).then(__webpack_require__.bind(__webpack_require__, "./src/components/view-note/viewNote.tsx")));
_c2 = ViewNote;
const EditNote = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(()=>Promise.all(/* import() */ [__webpack_require__.e("lib-react"), __webpack_require__.e("vendors-node_modules_pnpm_marked_15_0_7_node_modules_marked_lib_marked_esm_js"), __webpack_require__.e("vendors-node_modules_pnpm_uiw_react-codemirror_4_23_10__babel_runtime_7_26_10__codemirror_aut-19c281"), __webpack_require__.e("src_components_edit-note_editNote_tsx")]).then(__webpack_require__.bind(__webpack_require__, "./src/components/edit-note/editNote.tsx")));
_c3 = EditNote;
const Note = ()=>{
    const items = [
        {
            key: '1',
            label: '搜索',
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchNote, {}, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/note/note.tsx",
                lineNumber: 14,
                columnNumber: 17
            }, undefined)
        },
        {
            key: '2',
            label: '新增',
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AddNote, {}, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/note/note.tsx",
                lineNumber: 19,
                columnNumber: 17
            }, undefined)
        },
        {
            key: '3',
            label: '',
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ViewNote, {}, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/note/note.tsx",
                lineNumber: 24,
                columnNumber: 17
            }, undefined)
        },
        {
            key: '4',
            label: '',
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EditNote, {}, void 0, false, {
                fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/note/note.tsx",
                lineNumber: 29,
                columnNumber: 17
            }, undefined)
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabs_tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
            items: items
        }, void 0, false, {
            fileName: "/Users/wangl577/Documents/project/mango-app/src/pages/note/note.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, undefined)
    }, void 0, false);
};
_c4 = Note;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Note);
var _c, _c1, _c2, _c3, _c4;
$RefreshReg$(_c, "SearchNote");
$RefreshReg$(_c1, "AddNote");
$RefreshReg$(_c2, "ViewNote");
$RefreshReg$(_c3, "EditNote");
$RefreshReg$(_c4, "Note");

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
//# sourceMappingURL=src_pages_note_note_tsx.js.map