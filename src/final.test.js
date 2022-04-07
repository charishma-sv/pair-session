import { sum } from './final';

describe('sum', () => {
  it('should return zero when user input is empty', () => {
    expect(sum()).toBe(0);
  });
  it('should return num if input is same number', () => {
    expect(sum('3')).toBe(3);
  });
  it('should return sum of numbers if input is two numbers', () => {
    expect(sum('1,2')).toBe(3);
  });
  it('should return sum of all the numbers in input', () => {
    expect(sum('1,2,3,4,4')).toBe(14);
  });
  it('5. should return sum of numbers for \n delimeter', () => {
    expect(sum('1\n2,\n3,4')).toBe(10);
  });
  it('6.should return sum of numbers by excluding multiple delimiters', () => {
    expect(sum('//;\n1;2')).toBe(3);
  });
  it('7.should throw error for negative numbers', () => {
    expect(() => sum('1,2,-3')).toThrow(new Error('negatives not allowed: -3'));
  });
  it('8.should throw error for multiple negative numbers', () => {
    expect(() => sum('1,-2,-3')).toThrow(
      new Error('negatives not allowed: -2,-3')
    );
  });
  it('9.should not count numbers greater than 1000', () => {
    expect(sum('1,2,1003')).toBe(3);
  });
  it('10.should exclude delimiters and count all numbers present', () => {
    expect(sum('//[***]\n1***2***3')).toBe(6);
  });
  it('11.should exclude delimiters and count all numbers present', () => {
    expect(sum('//[*][%]\n1*2%3')).toBe(6);
  });
});

/*
1. Given the user input is empty when calculating the sum then it should return zero.
2. Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)
3. Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)
4. Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)
5. Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)
6. Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)
7. Given the user input contains one negative number when calculating the sum then it should throw an exception "negatives not allowed: x" (where x is the negative number).
8. Given the user input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception "negatives not allowed: x, y, z" (where x, y, z are only the negative numbers). 
9. Given the user input contains numbers larger than 1000 when calculating the sum it should only sum the numbers less than 1001. (example 2 + 1001 = 2)
10. Given the user input is multiple numbers with a custom multi-character delimiter when calculating the sum then it should return the sum of all the numbers. (example: “//[***]\n1***2***3” should return 6)
11. Given the user input is multiple numbers with multiple custom delimiters when calculating the sum then it should return the sum of all the numbers. (example “//[*][%]\n1*2%3” should return 6)
*/
