"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
//Sort an array of numbers
const sortNumbers = new NumbersCollection_1.NumbersCollection([5, -2, 78, 0, 13]);
sortNumbers.sort();
console.log(sortNumbers.data);
//Sort a string of characters
const sortCharacters = new CharactersCollection_1.CharactersCollection('kTYopzsQw');
sortCharacters.sort();
console.log(sortCharacters.data);
//Sort a linked list
const sortList = new LinkedList_1.LinkedList();
sortList.add(234);
sortList.add(-34);
sortList.add(66);
sortList.add(-125);
sortList.sort();
sortList.print();
