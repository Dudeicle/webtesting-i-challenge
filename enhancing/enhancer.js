module.exports = {
	success,
	fail,
	repair,
	get,
};

function success(item) {
	if (item.enhancement < 20) {
		item.enhancement = item.enhancement + 1;
	} else {
		console.log("Item cannot be enhanced any further!");
	}
	return { ...item };
} // WOKRING

function fail(item) {
	console.log("fail log start");
	// enhancement over 20
	if (item.enhancement > 16) {
		console.log("fail log above 16");
		item.enhancement = item.enhancement - 1;
		if (item.durability > 10) {
			item.durability = item.durability - 10;
			console.log("dura above 10");
		} else {
			item.durability = item.durability - item.durability;
			console.log("dura below 10");
		}
	}
	// enhancement between 15 and 16
	else if (item.enhancement === 15 || 16) {
		console.log("fail log at 15 or 16");
		if (item.durability > 10) {
			item.durability = item.durability - 10;
		} else {
			item.durability = item.durability - item.durability;
		}
	}
	// enhancement below 15
	else if (item.enhancement < 15) {
		console.log("fail log below 15");
		if (item.durability > 5) {
			item.durability = item.durability - 5;
		} else {
			item.durability = item.durability - item.durability;
		}
	}
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
