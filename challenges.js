// Challenge-1: Return 3 times

function foo(a, b) {
  return function (c, d) {
    return function (e, f) {
      return a * c * e + b * d * f;
    };
  };
}

console.log(foo(1, 2)(3, 3)(5, 6));

//Challenge-2: Multiply unlimited arguments and if there is 0 add it to the result

function multiply() {
  console.log(arguments);
  const args = [...arguments];
  console.log(args);
  const result = args.reduce((total, item) => {
    return item ? item * total : item + total;
  }, 1);
  return result;
}

console.log(multiply(2, 3, 4, 5, 0, 1, 2));

//Challenge-3: How many days,between two dates

const date1 = new Date("May 27, 2021");
const date2 = new Date("May 27, 2022");

function getDays(date1, date2) {
  const time1 = date1.getTime();
  const time2 = date2.getTime();
  const day = 24 * 3600 * 1000;

  let time = Math.abs(time2 - time1);
  let res = Math.round(time / day);
  return res;
}

console.log(getDays(date1, date2));
// Alternative
const getDays2 = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 3600 * 24)));

console.log(getDays2(date1, date2));

//Challenge-4 Count sequences, three numbers, first equals to third
const first = [8, 6, 8, 6, 7, 4, 7];
const second = [4, 5, 5, 7, 5, 5, 9];
const third = [3, 3, 2, 8, 7, 6, 5];

function count(arr) {
  const sequences = arr.reduce((total, item, index) => {
    if (item == arr[index + 2] && item != arr[index + 1]) return total + 1;
    else return total;
  }, 0);
  return sequences;
}

console.log(count(first));

//Challenge-5: Even or Odd

const sum = (num) => {
  //toString() --Split a number into string
  const arr = [...num.toString()];
  const result = arr.reduce((total, item) => {
    return total + Number(item);
  }, 0);
  return result % 2 == 0 ? "Even" : "Odd";
};

console.log(sum(32));
//One Line Solution
const sum2 = (num) =>
  [...num.toString()].reduce((total, item) => total + Number(item), 0) % 2 == 0
    ? "Even"
    : "Odd";

console.log(sum2(53));
