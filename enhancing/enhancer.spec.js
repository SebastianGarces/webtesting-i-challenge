const enhancer = require("./enhancer.js")
// test away!

describe("enhancer functions", () => {
	let expected = -1
	let result = -1
	let item = { name: "sword", durability: 99, enhancement: 10 }

	describe("test succeed", () => {
		it("returns enhancement + 1", () => {
			expected = { name: "sword", durability: 99, enhancement: 11 }
			result = enhancer.succeed(item)

			expect(result).toStrictEqual(expected)
		})

		it("returns enhancement at max of 20", () => {
			item = { name: "sword", durability: 99, enhancement: 20 }
			expected = { name: "sword", durability: 99, enhancement: 20 }
			result = enhancer.succeed(item)

			expect(result).toStrictEqual(expected)
		})
	})

	describe("test fail", () => {
		it("if enhancement is less than 15, durability decreases by 5", () => {
			item = { name: "sword", durability: 99, enhancement: 10 }
			expected = { name: "sword", durability: 94, enhancement: 10 }
			result = enhancer.fail(item)

			expect(result).toStrictEqual(expected)
		})

		it("if enhancement is more than 15, durability decreases by 10", () => {
			item = { name: "sword", durability: 100, enhancement: 16 }
			expected = { name: "sword", durability: 90, enhancement: 16 }
			result = enhancer.fail(item)

			expect(result).toStrictEqual(expected)
		})

		it("if enhancement is greater than 16, enhancement decreases by 1", () => {
			item = { name: "sword", durability: 100, enhancement: 17 }
			expected = { name: "sword", durability: 90, enhancement: 16 }
			result = enhancer.fail(item)

			expect(result).toStrictEqual(expected)
		})
	})

	describe("test repair", () => {
		it("item's durability is restored to 100", () => {
			item = { name: "sword", durability: 5, enhancement: 17 }
			expected = { name: "sword", durability: 100, enhancement: 17 }
			result = enhancer.repair(item)

			expect(result).toStrictEqual(expected)
		})
	})

	describe("test get", () => {
		it("if enhancement is 0, no name change", () => {
			item = { name: "sword", durability: 5, enhancement: 0 }
			expected = { name: "sword", durability: 5, enhancement: 0 }
			result = enhancer.get(item)

			expect(result).toStrictEqual(expected)
		})

		it("if enhancement is greater than 0, [+enhacement level] + name", () => {
			item = { name: "sword", durability: 5, enhancement: 5 }
			expected = { name: "[+5] sword", durability: 5, enhancement: 5 }
			result = enhancer.get(item)

			expect(result).toStrictEqual(expected)
		})
	})
})
