"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greatCommonDivisor(a, b) {
    return b == 0 ? Math.abs(a) : greatCommonDivisor(b, a % b);
}
exports.default = greatCommonDivisor;
//# sourceMappingURL=Math.js.map