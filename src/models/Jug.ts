export default class Jug {
  capacity: number;
  water: number;
  name: string;

  constructor(capacity: number, name: string) {
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

  dump(amount: number) {
    if (amount > this.water) {
      throw new Error("Not enough water to dump");
    }
    this.water -= amount;
  }

  fill(amount: number) {
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
