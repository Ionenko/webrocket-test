const lowerCase = /[a-z]/;
const upperCase = /[A-Z]/;
const numbers = /[0-9]/;
const space = /\s/;
const anySymbol = /\S\D\W/;

const testForLowerCase = str => lowerCase.test(str);
const testForUpperCase = str => upperCase.test(str);
const testForAnySymbol = str => numbers.test(str) || space.test(str) || anySymbol.test(str);


export {
  testForAnySymbol,
  testForLowerCase,
  testForUpperCase,
};
