import { Sorter } from "./Sorter";
import { NumbersCollection,} from "./NumbersCollection";

const sortNumbers = new NumbersCollection([5, -2, 78, 0, 13])
const sorter = new Sorter(sortNumbers);
sorter.sort();
console.log(sortNumbers.data)
