import { Sorter } from "./Sorter";
import { NumbersCollection,} from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

//Sort an array of numbers
const sortNumbers = new NumbersCollection([5, -2, 78, 0, 13])
const sortingNumbers = new Sorter(sortNumbers);
sortingNumbers.sort();
console.log(sortNumbers.data)

//Sort a string of characters
const sortCharacters = new CharactersCollection('kTYopzsQw');
const sortingCharacters = new Sorter(sortCharacters);
sortingCharacters.sort();
console.log(sortCharacters.data);
