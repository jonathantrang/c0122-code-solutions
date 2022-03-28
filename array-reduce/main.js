const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];
const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const initialNumber = 0;
const sum = numbers.reduce((previousSum, currentSum) => previousSum + currentSum, initialNumber);
console.log('Sum of numbers array is:', sum);

const product = numbers.reduce((previousProduct, currentProduct) => previousProduct * currentProduct);
console.log('Product of numbers array is:', product);

const balance = account.reduce((balance, transaction) => {
  if (transaction.type === 'deposit') {
    return balance + transaction.amount;
  } else {
    return balance - transaction.amount;
  }
}, 0);
console.log('Total balance is:', balance);

const composite = traits.reduce((composite, trait) => Object.assign(composite, trait));
console.log('Combined traits are:', composite);
