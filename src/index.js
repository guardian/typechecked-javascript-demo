import { ok } from 'node:assert';

ok(true, 'This is fine');

/**
 * @param {number} a
 * @param {number} b
 */
function sum(a, b) {
	return a + b;
}

const five = sum(2, 3);
const greeting = sum('hello', ' world'); // this will have a type error

console.log({ five, greeting });
