/* exported student */
var student = {
  firstName: 'Jonathan',
  lastName: 'Trang',
  subject: 'not DOM',
  getFullName: function (firstName, lastName) {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function (getFullName, subject) {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
