'use strict';

window.onload = function () {

    let colors = [
        '#2196F3',
        '#009688',
        '#673AB7',
        '#333'
    ];

    const randNum = function (min, max) {
        let randNum = min - 0.5 + Math.random() * (max - min + 1);
        randNum = Math.round(randNum);
        return randNum;
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
            if (currentLevel <= 3) {
                item.style.fontSize = '40px';
                item.style.padding = '10px 0';
            }
            else if (currentLevel === 4) {
                item.style.fontSize = '30px';
                item.style.padding = '8px 0';
            }
            else if (currentLevel === 5) {
                item.style.fontSize = '30px';
                item.style.padding = '10px 0';

            } else {
                item.style.fontSize = '26px';
                item.style.padding = '10px 0';
            }
        });
    };

    const randBgContainer = function () {
        let container = document.querySelector('.container__work__inner'),
            numColor = randNum(0, 2);

        container.style.background = colors[numColor];
    };

    const randomAnimation = function () {
        const animationContent = [
            'scale_element .5s infinite alternate ease-in-out',
            'color_element_blue .5s infinite alternate ease-in-out',
            'color_element_purple .5s infinite alternate ease-in-out',
            'color_element_green .5s infinite alternate ease-in-out',
            'color_element_black .5s infinite alternate ease-in-out',
            'scale_element .5s infinite alternate ease-in-out',
            'scale_element .5s infinite alternate ease-in-out',
            'scale_element .5s infinite alternate ease-in-out',
            'scale_element .5s infinite alternate ease-in-out',
            'rotate_element .25s infinite alternate ease-in-out'
        ];

        let el = document.querySelectorAll('.item__num');
        el.forEach(function(item, i, el) {
            let currentAction = randNum(1, 7);
            switch (currentAction) {
                case 1: {
                    item.style.animation = animationContent[0];
                    break;
                }
                case 2: {
                    let numAnimation = randNum(1, 4);
                    item.style.animation = animationContent[numAnimation];
                    break;
                }
                case 3: {
                    let numAnimation = randNum(5, 8);
                    item.style.animation = animationContent[numAnimation];

                    let numColor = randNum(0, 3);
                    item.style.background = colors[numColor];
                    item.style.color = '#fff';
                    break;
                }
                case 4: {
                    item.style.animation = animationContent[9];

                    let numColor = randNum(0, 3);
                    item.style.background = colors[numColor];
                    item.style.color = '#fff';
                    break;
                }
                default: break;
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

        randBgContainer();

        randomAnimation();
    };

    // функция-костыль
    const followTheTable = function () {
        let items = document.getElementsByClassName('item__num');

        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', checkCorrectly);
        }
    };

    const timer = function (start = 0) {
        let currentIteration = start;
        return function (f) {
            return --currentIteration;
        };
    };

    const showElement = function(el) {
        el.classList.remove('hidden');
    };

    const gameOver = function () {
        const resetNumbers = function () {
            scoreVal = 0;
            document.querySelector('.score').innerHTML = 'Score: 0';
            currentLevel = 1;
            sizeTable.countColumns = 0;
            sizeTable.countLines = 0;
        };

        const reloadGame = function() {
            hideElement(container_modal);
            hideElement(container_bg);
            resetNumbers();
            nextLevel();

            // // продолжаем следить за нажатиями по элементам
            followTheTable();
            followTheTimer();
            this.removeEventListener('click', reloadGame);
        };


        let container_modal = document.querySelector('.container__modal__end'),
            container_bg = document.querySelector('.modal_bg');

        showElement(container_modal);
        showElement(container_bg);

        let modalEndBtn = document.querySelector('#restart_game'),
            modalScore = document.querySelector('#result__cont_game');

        modalScore.innerHTML = 'Ваш результат: ' + scoreVal;
        modalEndBtn.addEventListener('click', reloadGame);
    };

    const followTheTimer = function () {
        let startTime = 45,
            counter = timer(startTime),
            currentTime,
            timerEl = document.querySelector('.timer');

        timerEl.innerHTML = 'Timer: ' + startTime;

        let timeInterval = setInterval(function () {
            currentTime = counter();
            timerEl.innerHTML = 'Timer: ' + currentTime;
            if (currentTime <= 0) {
                clearInterval(timeInterval);
                counter = timer(startTime);
                gameOver();
            }
        }, 1000);
    };

    const hideElement = function(el) {
        el.classList.add('hidden');
    };
    const startGame = function() {
        let modal_container = document.querySelector('.container__modal__start'),
            modal_bg = document.querySelector('.modal_bg');

        hideElement(modal_bg);
        hideElement(modal_container);

        nextLevel();
        followTheTable();
        followTheTimer();

        this.removeEventListener('click', startGame);
    };

    let randomNumbers = [],
        mainNumber,
        currentLevel = 1,
        scoreVal = 0,
        sizeTable = {
            countColumns: 0,
            countLines: 0
        };

    let btn_start = document.querySelector('#start_game');

    nextLevel();

    btn_start.addEventListener('click', startGame);
};
