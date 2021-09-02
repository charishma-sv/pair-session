import { sum } from './calc'

describe('Calculator', () => {
    it('should return zero on no input',()=>{
        const result = sum();
        expect(result).toBe(0);
    })

    it('should return the same number', () => {
        expect(sum('4')).toBe(4)
    })
    it('should return sum of 2 string numbers',()=>{
        expect(sum('3,5')).toBe(8)
    })

    it('should return the sum of any amount of numbers', () => {
        expect(sum('1,2,3,4')).toBe(10)
    })
    it('should return sum of numbers if any delimiters exists too',()=>{
        expect(sum('1\n2\n3')).toBe(6)
    })

    it('should return the sum when using a custom delimiter', () =>{
        expect(sum('//.\n1.2.3')).toBe(6)
        expect(sum('//;\n1;2;3')).toBe(6)
    })
    it('should not allow negative numbers',()=>{
        expect(()=>sum('1,-3,2')).toThrow('negatives not allowed: -3')
    })
    it('should throw error on more negative numbers',()=>{
        expect(()=>sum('1,-2,-3')).toThrow('negatives not allowed: -2,-3')
    })
    it('should not add numbers greater than 1000',()=>{
        expect(sum('1,2,1000,1002')).toBe(1003)
    })
    it('should return sum when using custom delimiter ***',()=>{
        expect(sum('[***]\n1***2***3')).toBe(6);
    })
    it('should retrun sum for multiple custom delimiters',()=>{
        expect(sum('//[*][%]\n1*2%3')).toBe(6)
    })
})

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