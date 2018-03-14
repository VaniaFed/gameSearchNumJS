export default function (number, range) {
	let result = 1;
	for (var i = 0; i < range; i++) {
		result *= number;
	}
	return result;
}