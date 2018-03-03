
import "./normalize.css";
import "./index.scss";
'use strict';

window.onload = function () {

	var fillArray = function (arr, tableInfo) {
		for (var i = tableInfo.countLines * tableInfo.countColumns - 1; i >= 0; i--) {
			var rand = Math.round(1 + Math.random() * (9999));
			arr[i] = rand;
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

	var drow = function (tableInfo, arrayNums, number) {
		for (var i = 0; i < tableInfo.countLines; i++) {
			var elementRow = document.createElement('div'),
					container = document.getElementsByClassName('container__work__inner');

			elementRow.classList.add('item__row');
			container[0].appendChild(elementRow);

			for (var j = 0; j < tableInfo.countColumns; j++) {
				var elementItem = document.createElement('div');
				elementItem.classList.add('item__num');
				elementItem.innerHTML = arrayNums[j];
				elementRow.appendChild(elementItem);
			}
		}
	};

	var randomNumbers = new Array,
			mainNumber,
			numberOfCalls = 1,
			tableInfo = {
				countColumns: 0,
				countLines: 0
			};


	sizeTable (tableInfo, numberOfCalls);
	fillArray (randomNumbers, tableInfo);

	mainNumber = randomNumbers[Math.round(0 + Math.random() * (tableInfo.countColumns * tableInfo.countLines - 1))];

	drow (tableInfo, randomNumbers, mainNumber);
}
