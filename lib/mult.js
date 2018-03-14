export default function () {
	let mult = 1;
	for (var i = 0; i < arguments.length; i++) {
		mult*= arguments[i];
	}
	return mult;
}