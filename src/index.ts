import { Sorter } from './Sorter';
import { NumbersCollection} from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const numbersCollection = new NumbersCollection([50, -1, 500, 10]);
numbersCollection.sort();
console.log(numbersCollection.data);


const characterscollection = new CharactersCollection('CliffDouglas');
console.log(`before ${characterscollection.data} `);
characterscollection.sort();
console.log(`after  ${characterscollection.data}`);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
console.log('linkedlist before sort');
linkedList.print();
linkedList.sort();
 console.log('linkedlist after sort');
 linkedList.print();