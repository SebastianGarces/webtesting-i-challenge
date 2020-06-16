function add(args) {
    const values = Array.isArray(args) ? args : Array.from(arguments)
    return values.reduce((acc, val) => acc + val, 0)
}

// AAA: 
// Arrange
// Act
// Assert

describe('calculator functions', () => {
    describe('test add()', () => {
        let a = 2
        let b = 2
        let expected = 4
        let result = -1

        it('returns the sum of 2 numbers', () => {
            result = add(a, b)
            expect(result).toBe(expected)
            expect(add(2,3)).toBe(5)
        })

        it('returns the value passed when only one argument is provided', () => {
            result = add(5)
            expected = 5
            expect(result).toBe(expected)
        })
        it('returns 0 with no arguments', () => {
            result = add()
            expect(result).toBe(0)
        })
        it('returns the sum of multiple numbers', () => {
            expected = 6
            result = add([2,2,2])
            expect(result).toBe(6)
        });
    })
})