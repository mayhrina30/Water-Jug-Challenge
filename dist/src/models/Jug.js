"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jug {
    constructor(capacity, name) {
        this.capacity = capacity;
        this.water = 0;
        this.name = name;
    }
    fullFill() {
        this.water = this.capacity;
    }
    empty() {
        this.water = 0;
    }
    dump(amount) {
        if (amount > this.water) {
            throw new Error("Not enough water to dump");
        }
        this.water -= amount;
    }
    fill(amount) {
        if (amount > this.capacity - this.water) {
            throw new Error("Not enough capacity");
        }
        this.water += amount;
    }
    isEmpty() {
        return this.water === 0;
    }
    isFull() {
        return this.water === this.capacity;
    }
}
exports.default = Jug;
//# sourceMappingURL=Jug.js.map