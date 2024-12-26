"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APIResponse {
    success = { code: 0, message: 'success', data: {} };
    failure = { code: -1, message: 'failed', data: {} };
}
exports.default = APIResponse;
