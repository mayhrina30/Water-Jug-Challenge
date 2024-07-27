import SolveChallenge from "../src/utils/SolveChallenge";

test("it should be able to solve the Challenge", () => {
  const challenge = new SolveChallenge(2, 10, 4);
  const result = challenge.execute();
  const expectedResult = [
    { X: 2, Y: 0, explanation: "Fill bucket X" },
    { X: 0, Y: 2, explanation: "Transfer bucket X to bucket Y" },
    { X: 2, Y: 2, explanation: "Fill bucket X" },
    { X: 0, Y: 4, explanation: "Transfer bucket X to bucket Y" },
  ];
  expect(result).toEqual(expectedResult);
});
  
 