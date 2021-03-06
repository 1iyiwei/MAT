"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 * Helper function.
 * @hidden
 * @param f
 */
function getTotalBy(f) {
    return function (loop) {
        let node = loop.head;
        let total = 0;
        do {
            total += f(node);
            node = node.next;
        } while (node !== loop.head);
        return total;
    };
}
exports.getTotalBy = getTotalBy;
//# sourceMappingURL=get-total-by.js.map