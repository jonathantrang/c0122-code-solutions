/* exported Transaction */
function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
}

Transaction.prototype.getTransactionType = function () {
  var transactionType = this.type;
  return transactionType;
};

Transaction.prototype.getTransactionAmount = function () {
  var transactionAmount = this.amount;
  return transactionAmount;
};
