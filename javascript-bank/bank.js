/* exported Bank */
Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var account = new Account(nexAccountNumber, holder, balance);
    this.accounts.push(account);
  } else return null;
}
Bank.prototype.getAccount = function (number) {

}
Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  } else {
    return (this.accounts.length - 1);
  }
}

function Bank() {
  var nextAccountNumber = 1;
  this.nextAccountNumber = nextAccountNumber;
  var accounts = [];
  this.accounts = accounts;
}
