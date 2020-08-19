const { repair, success, fail } = require("./enhancer.js");
// test away!

let item = {
	name: "EpicLoot",
	durability: 50,
	enhancement: 10,
};

describe("enhancing", () => {
	describe("repair", () => {
		// DEFINING INFORMATION ABOUT THE ITEM == WORKING
		it("should be an item with a name of EpicLoot durability of 50", () => {
			expect(item.name).toBe("EpicLoot");
		});
		it("should be an item with durability of 50", () => {
			expect(item.durability).toBe(50);
		});
		it("should be an item with enhancment of 10", () => {
			expect(item.enhancement).toBe(10);
		});

		// TESTING THE REPAIR FUNCTION == WORKING
		it("should have it's item durability returned to 100", () => {
			repair(item);
			expect(item.durability).toBe(100);
			// expect(item.durability).toBe(50); // intentional failure
		});

		// TESTING THE SUCCESS FUNCTION == WORKING
		it("should increase durability by 1 if not currently at 20", () => {
			success(item);
			expect(item.enhancement).toBe(11);
			// expect(item.enhancement).toBe(18); // intentional failure
		});

		// TESTING THE FAILURE FUNCTION ==
		it("should fail to increase item enhancement AND apply penalties to durability", () => {
			fail(item); // where enhance = 10
			expect(item.durability).toBe(45);
		});
	});
});
