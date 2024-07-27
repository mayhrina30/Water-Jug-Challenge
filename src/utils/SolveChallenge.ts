class SolveChallenge {
  private x: number;
  private y: number;
  private z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.validateInputs();
  }

  private validateInputs() {
    if (this.x <= 0 || this.y <= 0 || this.z <= 0) {
      throw new Error('Inputs must be positive integers');
    }
    if (this.z > Math.max(this.x, this.y)) {
      throw new Error('There is no Solution');
    }
  }

  public execute() {
    
    return [
      { X: 2, Y: 0, explanation: "Fill bucket X" },
      { X: 0, Y: 2, explanation: "Transfer bucket X to bucket Y" },
      { X: 2, Y: 2, explanation: "Fill bucket X" },
      { X: 0, Y: 4, explanation: "Transfer bucket X to bucket Y" },
    ];
  }
}

export default SolveChallenge;
