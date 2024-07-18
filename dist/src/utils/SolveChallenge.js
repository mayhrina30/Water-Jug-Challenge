"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Jug_1 = __importDefault(require("../models/Jug"));
const Math_1 = __importDefault(require("./Math"));
class SolveChallenge {
    constructor(xCapacity, yCapacity, Z) {
        this.Z = Z;
        if (Z % (0, Math_1.default)(xCapacity, yCapacity) != 0)
            throw new Error("There is no Solution");
        if (Z > xCapacity && Z > yCapacity)
            throw new Error("There is no Solution");
        this.firstJug = new Jug_1.default(xCapacity, "X");
        this.secondJug = new Jug_1.default(yCapacity, "Y");
        this.currentStates = [];
    }
    execute() {
        this.solve();
        const firstAttempt = this.currentStates;
        this.swapJugs();
        this.reset();
        this.solve();
        const secondAttempt = this.currentStates;
        return firstAttempt.length < secondAttempt.length
            ? this.formatOutput(firstAttempt, ["X", "Y"])
            : this.formatOutput(secondAttempt, ["Y", "X"]);
    }
    solve() {
        this.firstJug.fullFill();
        this.recordState(`Fill bucket ${this.firstJug.name}`);
        while (!this.isSolved()) {
            const availableSpace = this.secondJug.capacity - this.secondJug.water;
            const waterToBeTransfered = Math.min(this.firstJug.water, availableSpace);
            this.transferWater(this.firstJug, this.secondJug, waterToBeTransfered);
            if (this.isSolved())
                return;
            this.fullFillFirstJugIfEmpty();
            this.emptySecondJugIfFull();
        }
    }
    recordState(explanation) {
        this.currentStates.push({ firstJug: this.firstJug.water, secondJug: this.secondJug.water, explanation });
    }
    isSolved() {
        return this.firstJug.water == this.Z || this.secondJug.water == this.Z;
    }
    transferWater(from, to, water) {
        from.dump(water);
        to.fill(water);
        this.recordState(`Transfer bucket ${from.name} to bucket ${to.name}`);
    }
    fullFillFirstJugIfEmpty() {
        if (this.firstJug.isEmpty()) {
            this.firstJug.fullFill();
            this.recordState(`Fill bucket ${this.firstJug.name}`);
        }
    }
    emptySecondJugIfFull() {
        if (this.secondJug.isFull()) {
            this.secondJug.empty();
            this.recordState(`Dump bucket ${this.secondJug.name}`);
        }
    }
    swapJugs() {
        let temp = this.firstJug;
        this.firstJug = this.secondJug;
        this.secondJug = temp;
    }
    reset() {
        this.firstJug.empty();
        this.secondJug.empty();
        this.currentStates = [];
    }
    formatOutput(states, labels) {
        return states.map((s) => ({ [labels[0]]: s.firstJug, [labels[1]]: s.secondJug, explanation: s.explanation }));
    }
}
exports.default = SolveChallenge;
//# sourceMappingURL=SolveChallenge.js.map