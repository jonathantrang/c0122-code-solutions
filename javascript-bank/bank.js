/* exported Bank */
Bank.prototype.openAccount = function (holder, balance) {
  if (balance < 0) {
    return null;
  } else if (balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  }
};
Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i]) {
      return Account();
    }
  }
};
Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  } else {
    return (this.accounts.length - 1);
  }
};

function Bank() {
  var nextAccountNumber = 1;
  this.nextAccountNumber = nextAccountNumber;
  var accounts = [];
  this.accounts = accounts;
}
