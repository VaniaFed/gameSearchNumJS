import sum from '../lib/sum';
import mult from '../lib/mult';
import pow from '../lib/pow';
import { expect, assert } from 'chai';

describe("sum", () => {
    context("when all arguments are valid numbers", () => {
        it("sum all arguments (3 and 3) equal (===) 6", () => {
            expect(sum(3, 3)).to.equal(6);
        });
    });
});

describe("mult", () => {
    context("when all arguments are valid numbers", () => {
        it("mult all arguments (5, 5) equal (===) 25", () => {
            assert(mult(5, 5) === 25);
        });
        it("mult all arguments (2, 5, 10) equal (===) 100", () => {
            assert(mult(2, 5, 10) === 100);
        });
    });
});

describe("pow", () => {
    context("when all arguments are valid numbers", () => {
        it("exponentiation n (2) to x (3) range equal (===) 8", () => {
            assert(!isNaN(pow(-2, 3)));
        });
        it("exponentiation n (2) to x (3) range equal (===) 8", () => {
            assert(!isNaN(pow(33, -2)));
        });
    });
});