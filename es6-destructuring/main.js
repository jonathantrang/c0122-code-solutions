const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};
const { title, author, libraryID } = book1;

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
};
const { title2 = book2.title, author2 = book2.author, libraryID2 = book2.libraryID } = book2;

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

const [book3 = library[0], book4 = library[1], book5 = library[2]] = library;
const [, , , book6 = library[3]] = library;

console.log(`The title of the book is ${title}, the author is ${author}, and the library id is ${libraryID}`);
console.log(`The title of the book is ${title2}, the author is ${author2}, and the library id is ${libraryID2}`);
console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);
console.log('book6:', book6);
