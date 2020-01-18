"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumberCollection_1.NumbersCollection([50, -1, 500, 10]);
numbersCollection.sort();
console.log(numbersCollection.data);
var characterscollection = new CharactersCollection_1.CharactersCollection('CliffDouglas');
console.log("before " + characterscollection.data + " ");
characterscollection.sort();
console.log("after  " + characterscollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
console.log('linkedlist before sort');
linkedList.print();
linkedList.sort();
console.log('linkedlist after sort');
linkedList.print();
