"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
//Sort an array of numbers
const sortNumbers = new NumbersCollection_1.NumbersCollection([5, -2, 78, 0, 13]);
const sortingNumbers = new Sorter_1.Sorter(sortNumbers);
sortingNumbers.sort();
console.log(sortNumbers.data);
//Sort a string of characters
const sortCharacters = new CharactersCollection_1.CharactersCollection('kTYopzsQw');
const sortingCharacters = new Sorter_1.Sorter(sortCharacters);
sortingCharacters.sort();
console.log(sortCharacters.data);
