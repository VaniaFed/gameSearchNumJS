import "./normalize.css";
import "./index.scss";
'use strict';

window.onload = function () {

    const randNum = function (from, to) {
        return Math.round(from + Math.random() * to);
    };

    const fillArray = function (arr, sizeTable) {
        for (let i = sizeTable.countLines * sizeTable.countColumns - 1; i >= 0; i--) {
            if (currentLevel <= 2) {
                arr[i] = randNum(10, 99);
            }
            else if (currentLevel <= 4) {
                arr[i] = randNum(100, 999);
            } else {
                arr[i] = randNum(1000, 9999);
            }
        }
    };

    const changeStyles = function (el) {
        el.forEach(function (item, i, arr) {
            console.log(currentLevel);
            if (currentLevel <= 3) {
                item.style.fontSize = '40px';
                item.style.padding = '10px 0';
            }
            else if (currentLevel === 4) {
                item.style.fontSize = '30px';
                item.style.padding = '12px 0';
            }
            else if (currentLevel === 5) {
                item.style.fontSize = '30px';
                item.style.padding = '15px 0';

            } else {
                item.style.fontSize = '26px';
                item.style.padding = '12px 0';
            }
        });
    };
    const resizeTable = function (sizeTable, level) {
        if (level < 4) {
            sizeTable.countColumns = 3;
            sizeTable.countLines = 2;
        } else if (level < 6) {
            sizeTable.countColumns = 4;
            sizeTable.countLines = 3;
        } else {
            sizeTable.countColumns = 4;
            sizeTable.countLines = 4;
        }
    };

    const createItem = function (inner, className, parent) {
        let el = document.createElement('div');
        el.classList.add(className);
        el.innerHTML = inner;
        parent.appendChild(el);
    };

    const draw = function (sizeTable, arrayNums, mainNumber) {
        const drowMainNum = function (mainNumber) {
            let mainNumberEl = document.querySelector('.current_num');

            mainNumberEl.innerHTML = mainNumber;
        };

        const clearTable = function () {
            let container = document.querySelector('.container__work__inner');
            container.innerHTML = '';
        };

        clearTable();

        drowMainNum(mainNumber);

        let currentPositionArray = 0;
        for (let i = 0; i < sizeTable.countLines; i++) {
            let container = document.getElementsByClassName('container__work__inner'),
                elementRow = document.createElement('div');

            elementRow.classList.add('item__row');
            container[0].appendChild(elementRow);

            for (let j = 0; j < sizeTable.countColumns; j++) {
                createItem(arrayNums[currentPositionArray++], 'item__num', elementRow);
            }
        }
    };

    const checkCorrectly = function () {
        let scoreEl = document.querySelector('.score');
        if (+this.textContent === mainNumber) {
            successfullyPressed(scoreEl);
        } else {
            failedPressed(scoreEl);
        }
        this.removeEventListener('click', checkCorrectly);
        followTheTable();
    };

    const increaseScore = function (scoreEl) {
        scoreVal += 100;
        scoreEl.innerHTML = 'Score: ' + scoreVal;
    };

    const reduceScore = function (scoreEl) {
        if (scoreVal >= 100) {
            scoreVal -= 100;
        } else {
            scoreVal = 0;
        }

        scoreEl.innerHTML = 'Score: ' + scoreVal;
    };

    const successfullyPressed = function (scoreEl) {
        currentLevel++;
        increaseScore(scoreEl);
        nextLevel();
    };

    const failedPressed = function (scoreEl) {
        currentLevel > 1 ? currentLevel-- : currentLevel;
        reduceScore(scoreEl);
        nextLevel();
    };

    const nextLevel = function () {
        resizeTable(sizeTable, currentLevel);
        fillArray(randomNumbers, sizeTable);


        mainNumber = randomNumbers[Math.round(Math.random() * (sizeTable.countColumns * sizeTable.countLines - 1))];

        draw(sizeTable, randomNumbers, mainNumber);

        let items = document.querySelectorAll('.item__num');
        changeStyles(items);
    };

    // функция-костыль
    const followTheTable = function () {
        let items = document.getElementsByClassName('item__num');

        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', checkCorrectly);
        }
    };

    const timer = function (start) {
        let currentIteration = typeof(start) === undefined ? 0 : start;

        return function (f) {
            let callback = f || function () {
            };

            if (currentIteration === 0) {
                callback();
                currentIteration = start;
            }
            return --currentIteration;
        };
    };

    const gameOver = function () {
        let resetNumbers = function () {
            scoreVal = 0;
            document.querySelector('.score').innerHTML = 'Score: ' + scoreVal;
            currentLevel = 1;
            sizeTable.countColumns = 0;
            sizeTable.countLines = 0;
        };

        //modalFinishShow ();
        resetNumbers();
    };

    const followTheTimer = function () {
        let counter = timer(45),
            timerEl = document.querySelector('.timer');

        setInterval(function () {
            timerEl.innerHTML = 'Timer: ' + counter(gameOver);
        }, 1000);
    };

    let randomNumbers = [],
        mainNumber,
        currentLevel = 1,
        scoreVal = 0,
        sizeTable = {
            countColumns: 0,
            countLines: 0
        };

    nextLevel();

    followTheTable();

    followTheTimer();
};
