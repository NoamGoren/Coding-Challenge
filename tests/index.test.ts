import { accountTypeChecker } from "../src/index";
const dataMock = require('../db/dbMocks');

describe('accountTypeChecker Tests', () => {
  it('Should return "A" when the balance amount changes each month', () => {
    expect(accountTypeChecker(dataMock.variableCase)).toBe("A")
  })
  it('Should return "A" when the balance amount is fixed', () => {
    expect(accountTypeChecker(dataMock.exampleCase)).toBe("B")
  })
  it('Should sort the array and return "B"', () => {
    expect(accountTypeChecker(dataMock.unorderedObjects)).toBe("B")
  })
  it('Should throw error when there is issue with type', () => {
    expect(() => accountTypeChecker('this should throw an error')).toThrow(Error)
  })
  it('Should throw error when length is less than 3', () => {
    expect(() => accountTypeChecker(dataMock.exampleCase.slice(0, 1))).toThrow(/At least three months is required/)
  })
  it("Should return A when first months fixed but last month is variable", () => {
      expect(accountTypeChecker(dataMock.lastMonthVariable)).toBe("A")
  })
  it("Should return B when there is a fixed diff into positive balance", () => {
      expect(accountTypeChecker(dataMock.fromNegativeToPositive)).toBe("B")
  })
  it("Should return B when there is a fixed diff into negative balance", () => {
      expect(accountTypeChecker(dataMock.fromPositiveToNegative)).toBe("B")
  })
  it("Should return A when there is one variable month at start and the others are fixed", () => {
      expect(accountTypeChecker(dataMock.oneVariableMonth)).toBe("A")
  })
  })