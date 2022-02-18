var books = [
  {
    isbn: "123456789",
    title: "Book of One",
    author: "The Author"
  },
  {
    isbn: "234567890",
    title: "Book of Two",
    author: "Author's Sister"
  },
  {
    isbn: "345678901",
    title: "Book of Three",
    author: "Author's Brother"
  }
];
console.log('Books array: ', books);
console.log('Books typeof is: ', typeof(books));

console.log('JSON.stringify result: ', JSON.stringify(books));
console.log('JSON.stringify typeof: ', typeof(JSON.stringify(books)));

var jsonString = '{"idNumber": 66, "stringName": "Order"}';
console.log('The JSON string: ', jsonString);
console.log('typeof JSON string: ', typeof(jsonString));

var jsonObject = JSON.parse(jsonString);
console.log('Result: ', jsonObject);
console.log('Typeof: ', typeof(jsonObject));
