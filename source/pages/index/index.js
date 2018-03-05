
import "./normalize.css";
import "./index.scss";
'use strict';

window.onload = function () {

	var fillArray = function (arr, tableInfo) {
		var randNum = function (num) {
			arr[i] = Math.round(1 + Math.random() * (9999));
		}

		for (var i = tableInfo.countLines * tableInfo.countColumns - 1; i >= 0; i--) {
			randNum(arr[i]);
		}
	};

	var sizeTable = function (tableInfo, numCalls) {
		if (numCalls < 4) {
			tableInfo.countColumns = 3;
			tableInfo.countLines = 2;
		} else if (numCalls < 6) {
			tableInfo.countColumns = 4;
			tableInfo.countLines = 3;
		} else {
			tableInfo.countColumns = 4;
			tableInfo.countLines = 4;
		}
	};

	var createItem = function (inner, className, parent) {
		var elementItem = document.createElement('div');
		elementItem.classList.add(className);
		elementItem.innerHTML = inner;
		parent.appendChild(elementItem);
	}

	var drow = function (tableInfo, arrayNums, mainNumber) {
		var drowMainNum  = function (mainNumber) {
			var mainNumberEl = document.querySelector('.current_num');

			mainNumberEl.innerHTML = mainNumber;
		}

		var clearTable = function () {
			var container = document.querySelector('.container__work__inner');
			container.innerHTML = '';
		}

		clearTable ();

		drowMainNum (mainNumber);

		var currentPositionArray = 0;
		for (var i = 0; i < tableInfo.countLines; i++) {
			var container = document.getElementsByClassName('container__work__inner'),
					elementRow = document.createElement('div');

			elementRow.classList.add('item__row');
			container[0].appendChild(elementRow);

			for (var j = 0; j < tableInfo.countColumns; j++) {
				createItem(arrayNums[currentPositionArray++], 'item__num', elementRow);
			}
		}
	};

	var checkCorrectly = function () {
		var scoreEl = document.querySelector('.score');
		if (this.textContent == mainNumber) {
			successfullyPressed ();
		} else {
			failedPressed ();
		}
		this.removeEventListener('click', checkCorrectly);
		followTheTable ();
	};

	var increaseScore = function (scoreEl) {
		scoreVal += 100;
		scoreEl.innerHTML = scoreVal;
	}

	var successfullyPressed = function () {
		numberOfCalls++;
		nextLevel ();
	};

	var failedPressed = function () {
		nextLevel ();
	};

	var nextLevel = function () {
		sizeTable (tableInfo, numberOfCalls);
		fillArray (randomNumbers, tableInfo);

		mainNumber = randomNumbers[Math.round(0 + Math.random() * (tableInfo.countColumns * tableInfo.countLines - 1))];

		drow (tableInfo, randomNumbers, mainNumber);
	};

	// функция-костыль
	var followTheTable = function () {
		var items = document.getElementsByClassName('item__num');

		for (var i = 0; i < items.length; i++) {
			items[i].addEventListener('click', checkCorrectly);
		}
	};

	var randomNumbers = [],
			mainNumber,
			numberOfCalls = 1,
			scoreVal = 0,
			tableInfo = {
				countColumns: 0,
				countLines: 0
			};

	nextLevel ();

	followTheTable ();





	// var min = function () {
	// 	var minNum = arguments[0];
	// 	for (var i = 1; i < arguments.length; i++) {
	// 		if (arguments[i] < minNum) {
	// 			minNum = arguments[i];
	// 		}
	// 	}
	// 	return minNum;
	// }
  //
	// var max = function () {
	// 	var maxNum = arguments[0];
	// 	for (var i = 1; i < arguments.length; i++) {
	// 		if (arguments[i] > maxNum) {
	// 			maxNum = arguments[i];
	// 		}
	// 	}
	// 	return maxNum;
	// }
  //
	// var isEven = function (num) {
	// 	if (num === 0) {
	// 		return true;
	// 	} else if (num === 1) {
	// 		return false;
	// 	} else if (num > 0) {
	// 		return isEven(num - 2);
	// 	} else {
	// 		return isEven(num + 2);
	// 	}
	// }
  //
	// var name = 'Hello, world';
  //
	// var countsBs = function (someStr, symbol) {
	// 	var counts = 0;
  //
	// 	for (var i = 0; i < someStr.length; i++) {
	// 		if (someStr[i].charAt(symbol) === symbol) {
	// 			counts++;
	// 		}
	// 	}
  //
	// 	return counts;
	// }
  //
	// var sum = function (arr, index) {
	// 	var currnetNum = arr[index];
  //
	// 	if (index === arr.length) {
	// 		return 0;
	// 	}
  //
	// 	return currnetNum += sum(arr, ++index);
	// }
  //
	// var range = function (num1, num2) {
	// 	var arr = [],
	// 			index = 0;
	// 	for (var i = num1; i <= num2; i++) {
	// 		arr[index++] = i;
	// 	}
	// 	return arr;
	// }
  //
	// console.log( sum( range(0, 10, 2), 0 ) );
}
