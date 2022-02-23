/* exported Account */
Transaction.prototype.deposit = function () {};
Transaction.prototype.withdraw = function () {};
Transaction.prototype.getBalance = function () {};

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  var transactions = [];
  this.transactions = transactions;
}
