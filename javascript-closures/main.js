const graduate = (credential) => {
  return (fullName) => {
    return fullName + ' ' + credential;
  }
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('What my grandpa wished I was:', medicalSchool('Jonathan Trang'));
console.log('What my grandpa also wished I was:', lawSchool('Jonathan Trang'));
