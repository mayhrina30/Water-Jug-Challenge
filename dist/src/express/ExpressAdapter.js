"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class ExpressAdapter {
    static create() {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        return app;
    }
    static route(fn) {
        return async function (req, res) {
            try {
                const { query, body, headers, params } = req;
                const output = fn({ query, body, headers, path: params });
                res.status(200).json(output);
            }
            catch (e) {
                res.status(400).json({ message: e.message });
            }
        };
    }
}
exports.default = ExpressAdapter;
//# sourceMappingURL=ExpressAdapter.js.map