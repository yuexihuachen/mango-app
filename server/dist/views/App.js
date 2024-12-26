"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = App;
const jsx_runtime_1 = require("react/jsx-runtime");
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { onClick: () => console.log("clicked"), children: (0, jsx_runtime_1.jsx)("button", { children: "Click it" }) }), (0, jsx_runtime_1.jsx)("p", { children: "This is a simple React app." })] }));
}
