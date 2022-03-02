"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const sortNumbers = new NumbersCollection_1.NumbersCollection([5, -2, 78, 0, 13]);
const sorter = new Sorter_1.Sorter(sortNumbers);
sorter.sort();
console.log(sortNumbers.data);
