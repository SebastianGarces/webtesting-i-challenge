module.exports = {
	succeed,
	fail,
	repair,
	get,
}

function succeed(item) {
	if (item.enhancement >= 20) return { ...item }

	item.enhancement = item.enhancement + 1
	return { ...item }
}

function fail(item) {
	item.enhancement <= 15
		? (item.durability = item.durability - 5)
		: (item.durability = item.durability - 10)

	item.enhancement > 16
		? (item.enhancement = item.enhancement - 1)
		: item.enhancement

	return { ...item }
}

function repair(item) {
	item.durability = 100
	return { ...item }
}

function get(item) {
	item.enhancement > 0
		? (item.name = `[+${item.enhancement}] ${item.name}`)
		: item.name

	return { ...item }
}
