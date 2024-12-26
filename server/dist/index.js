"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const category_schema_1 = require("./schemas/category.schema");
const nunjucks_1 = __importDefault(require("nunjucks"));
const categories_1 = __importDefault(require("./routes/categories"));
const posts_1 = require("./routes/posts");
const users_1 = require("./routes/users");
const db_1 = __importDefault(require("./db/db"));
const auth_1 = require("./middlewares/auth");
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: [`.env.${process.env.NODE_ENV}`] });
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const nunjuckEnv = nunjucks_1.default.configure("views");
nunjuckEnv.express(app);
(0, db_1.default)();
// 解析请求体数据
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// 静态资源
app.use(express_1.default.static('.'));
app.use(express_1.default.static('static'));
app.set('views', '/views');
app.set("view engine", "html");
app.use('/auth', auth_1.authGuard);
app.use(categories_1.default);
app.use(posts_1.router);
app.use(users_1.router);
app.get(['/*'], async (req, res) => {
    const { default: manifest } = await import(path_1.default.resolve('./static/.vite/manifest.json'), {
        assert: {
            type: "json",
        },
    });
    const category = await category_schema_1.Category.find({}, {});
    res.render('index.html', {
        js: `${manifest['src/index.tsx'].file}`,
        css: `${manifest['src/index.tsx'].css}`,
        category: JSON.stringify(category)
    });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
