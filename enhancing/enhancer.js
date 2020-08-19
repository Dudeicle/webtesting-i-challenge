module.exports = {
	success,
	fail,
	repair,
	get,
};

function success(item) {
	if (item.enhancement < 20) {
		item.enhancement = item.enhancement + 1;
		console.log("ITEM HAS BEEN ENHANCED BY 1 POINT!");
	} else {
		console.log("Item cannot be enhanced any further!");
	}
	return { ...item };
} // WOKRING

function fail(item) {
	if (item.enhancement < 15) {
		if (item.durability > 5) {
			item.durability = item.durability - 5;
		} else {
			item.durability = item.durability - item.durability;
		}
	} else if ((item.enhancement = 15)) {
		if (item.durability > 10) {
			item.durability = item.durability - 10;
		} else {
			item.durability = item.durability - item.durability;
		}
	} else if (item.enhancement >= 16) {
		if (item.durability > 10) {
			item.durability = item.durability - 10;
			item.enhancement = item.enhancement - 1;
		} else {
			item.durability = item.durability - item.durability;
			item.enhancement = item.enhancement - 1;
		}
	}
	return { ...item };
}

function repair(item) {
	if (item) {
		console.log("ITEM REPAIR SUCCESSFUL");
		item.durability = 100;
	} else {
		console.log("ITEM REPAIR FAILED!");
		item.durability = item.durability;
	}
	return { ...item };
} // WOKRING

function get(item) {
	return { ...item };
}
