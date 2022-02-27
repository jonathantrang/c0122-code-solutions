/* exported Bank */
Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  } else return null;
};
Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    var accountAtListItem = this.accounts[i];
    if (number === accountAtListItem.number) {
      return accountAtListItem;
    }
  } return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalBalance = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    totalBalance += this.accounts[i].getBalance();
  }
  return totalBalance;
};

function Bank() {
  var nextAccountNumber = 1;
  this.nextAccountNumber = nextAccountNumber;
  var accounts = [];
  this.accounts = accounts;
}
