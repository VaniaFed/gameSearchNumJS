export default function fibbanachiNumbers (num1, num2, to) {
	let sum = num1 + num2;

	if (sum === to) {
		return sum;
	}
	console.log(sum);
	return fibbanachiNumbers (sum, num2, to);
};

/*
		 0 AND 1
	0 + (1 + 0) === 1
	1 + (1 + 0) === 2
	2 + (1 + 0) === 3
	3 + (1 + 0) === 5
	15 + (1 + 15) === 8


		 1 AND 1
	1 + (1 + 0) === 2
	2 + (1 + 0) === 3
	3 + (1 + 0) === 3
	3 + (1 + 0) === 5
	15 + (1 + 15) === 8




	1 + 1 = res
	res + 1 = res
	res + 2 = res
	res + 3 = res
	res + 5 = res

	num1 + 1 = 2
	num1 + num1 = 3
	num1 + num1 = 5
	num1 + num1 = 8
	8 + num1 = 13

*/