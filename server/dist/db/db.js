"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
function connectDB() {
    const url = process.env.MONGO_URI || "";
    try {
        mongoose_1.default.connect(url);
    }
    catch (err) {
        process.exit(1);
    }
    const dbConnection = mongoose_1.default.connection;
    dbConnection.once("open", (data) => {
        console.log(`Database success connected: ${url}`);
    });
    dbConnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
    });
    return;
}
