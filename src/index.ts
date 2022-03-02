import { Sorter } from "./Sorter";
import { NumbersCollection,} from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

//Sort an array of numbers
const sortNumbers = new NumbersCollection([5, -2, 78, 0, 13])

sortNumbers.sort();
console.log(sortNumbers.data)

//Sort a string of characters
const sortCharacters = new CharactersCollection('kTYopzsQw');

sortCharacters.sort();
console.log(sortCharacters.data);

//Sort a linked list
const sortList = new LinkedList();
sortList.add(234);
sortList.add(-34);
sortList.add(66);
sortList.add(-125);

sortList.sort();
sortList.print();