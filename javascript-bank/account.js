/* exported Account */
Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  } else return false;
};
Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var withdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawal);
    return true;
  } else return false;
};
Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var balance = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'withdrawal') {
        balance -= this.transactions[i].amount;
      } else balance += this.transactions[i].amount;
    }
    return balance;
  }
};

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  var transactions = [];
  this.transactions = transactions;
}

Account.prototype.getAccountNumber = function () {
  var accountNumber = this.number;
  return accountNumber;
};

Account.prototype.getAccountHolder = function () {
  var accountHolder = this.holder;
  return accountHolder;
};
