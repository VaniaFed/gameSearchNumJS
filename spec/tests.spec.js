import fibonacciNumbers from '../lib/fibonacciNumbers';
import { expect, assert } from 'chai';

describe("fibbanachiNumbers", () => {
    let arrayNumbers = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946];
    for (let i = 0; i < arrayNumbers.length; i++) {
        it("fibbanachiNumbers with arguments (1, 0, ${i}) equal (===) ${i}", () => {
            expect(fibonacciNumbers(0, 1, arrayNumbers[i])).to.equal(arrayNumbers[i]);
        });
    }

    it("fibbanachiNumbers with arguments (1, 0, ${i}) equal (===) ${i}", () => {
        expect(fibonacciNumbers(0, 1, 17711)).to.equal(arrayNumbers[17711]);
    });
});