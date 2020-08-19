const { repair, success, fail } = require("./enhancer.js");
// test away!

let item = {
	name: "EpicLoot",
	durability: 50,
	enhancement: 13,
};

describe("enhancer", () => {
	describe("repair", () => {
		// TESTING THE REPAIR FUNCTION == WORKING
		it("should have it's item durability returned to 100", () => {
			repair(item);
			expect(item.durability).toBe(100);
			// expect(item.durability).toBe(50); // intentional failure
		});
	});
});

describe("enhancer", () => {
	describe("success", () => {
		// TESTING THE SUCCESS FUNCTION == WORKING
		it("should increase enhancement by 1 if not currently at 20", () => {
			success(item);
			expect(item.enhancement).toBe(14);

			success(item); // 15
			success(item); // 16
			success(item); // 17
			success(item); // 18
			success(item); // 19
			success(item); // 20
			expect(item.enhancement).toBe(20);
		});
	});
});

describe("enhancer", () => {
	describe("failure", () => {
		// TESTING THE FAILURE FUNCTION ==
		it("should fail and remove 1 from enhance and 10 from dura", async () => {
			await fail(item);
			expect(item.durability).toBe(90);
			expect(item.enhancement).toBe(19);
		});
	});
});
