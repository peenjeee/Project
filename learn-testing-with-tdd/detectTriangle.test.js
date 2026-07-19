/**
 * test scenarios for detectTriangle
 *
 * - detectTriangle function
 *   - should throw error when input is not a number
 *   - should throw error when input is not a positive number
 *   - should throw error when input is triangle inequality violation
 *   - should return "Segitiga Sama Sisi" when all input are equal
 *   - should return "Segitiga Sama Kaki" when two input are equal
 *   - should return "Segitiga Sembarang" when all input are different
 */

import { describe, it, expect } from 'vitest';
import detectTriangle from './detectTriangle';


describe('detectTriangle function', () => {
    it('should throw error when input is not a number', () => {
        expect(() => detectTriangle('a', 2, 3)).toThrowError('Input must be a number');
        expect(() => detectTriangle(1, 'b', 3)).toThrowError('Input must be a number');
        expect(() => detectTriangle(1, 2, 'c')).toThrowError('Input must be a number');
    });

    it('should throw error when input is not a positive number', () => {
        expect(() => detectTriangle(-1, 2, 3)).toThrowError('Input must be a positive number');
        expect(() => detectTriangle(1, -2, 3)).toThrowError('Input must be a positive number');
        expect(() => detectTriangle(1, 2, -3)).toThrowError('Input must be a positive number');
        // Zero is not a positive and negative number
        expect(() => detectTriangle(0, 2, 3)).toThrowError('Input must be a positive number');
    });

    it('should throw error when input is triangle inequality violation', () => {
        expect(() => detectTriangle(1, 2, 3)).toThrowError('Input is triangle inequality violation');
        expect(() => detectTriangle(5, 1, 3)).toThrowError('Input is triangle inequality violation');
        expect(() => detectTriangle(3, 4, 1)).toThrowError('Input is triangle inequality violation');
    });

    it('should return "Segitiga Sama Sisi" when all input are equal', () => {
        expect(detectTriangle(1, 1, 1)).toBe('Segitiga Sama Sisi');
        expect(detectTriangle(2, 2, 2)).toBe('Segitiga Sama Sisi');
        expect(detectTriangle(3, 3, 3)).toBe('Segitiga Sama Sisi');
    });

    it('should return "Segitiga Sama Kaki" when two input are equal', () => {
        expect(detectTriangle(2, 2, 3)).toBe('Segitiga Sama Kaki');
        expect(detectTriangle(5, 6, 5)).toBe('Segitiga Sama Kaki');
        expect(detectTriangle(7, 8, 8)).toBe('Segitiga Sama Kaki');
    });

    it('should return "Segitiga Sembarang" when all input are different', () => {
        expect(detectTriangle(2, 3, 4)).toBe('Segitiga Sembarang');
        expect(detectTriangle(5, 6, 7)).toBe('Segitiga Sembarang');
        expect(detectTriangle(8, 9, 10)).toBe('Segitiga Sembarang');
    });
});