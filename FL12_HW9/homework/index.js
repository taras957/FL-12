function convert(...numbers) {
  const res = [];
  for (let key of numbers) {
    if (typeof key === 'string') {
      res.push(+key);
    } else {
      res.push(key + '');
    }
  }
  return res;
}

convert(1,3,'5');

function executeforEach(arr, cb) {
  for (let key of arr) {
    cb(key);
  }
}

executeforEach([1, 2, 3, 4, 5], function(el) {
    let myltBy = 2;
console.log(el * myltBy);
});

function mapArray(arr, cb) {
  const NEWARR = [];
  executeforEach(arr, f);
  function f(el) {
    typeof el === 'string' ? el = +el : el;
    NEWARR.push(cb(el));
  }
  return NEWARR;
}

  mapArray([2, '5', 8], function(el) {
      let sumN =3;
    return el + sumN;
  });


function filterArray(arr, cb) {
  const CHACHE = [];
  executeforEach(arr, f);
  function f(el) {
    cb(el) ? CHACHE.push(el) : el;
  }
  return CHACHE;
} 

  filterArray([2, 5, 8], function(el) {
      let evenNumb = 2;
    return el % evenNumb === 0;
  })


function flipOver(str) {
  let res = '';
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

flipOver('hey world')
function makeListFromRange(arr) {
  let a = arr[0];
  let b = arr[1];
  const CHACHE = [];
  for (let i = a; i <= b; i++) {
    CHACHE.push(i);
  }
  return CHACHE;
}
makeListFromRange([2, 7]);
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys(arr, objKey) {
  const CHACHE = [];

  for (let key of arr) {
    CHACHE.push(key[objKey]);
  }

  return CHACHE;
}
getArrayOfKeys(actors, 'name');

function substitute(arr) {
  return mapArray(arr, f);
  function f(n) {
      let conditionNumb = 30;
    if (n < conditionNumb) {
      n = '*';
      return n;
    }
    return n;
  }
}

substitute([58, 14, 48, 2, 31, 29]);

function getPastDay(date, dayAgo) {
  const MONTHES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];
  let initDate = new Date(date);
  let res = new Date(initDate - dayAgo * 8.64e7);
  let day = res.getDate();
  let twoDigitHour = 9;
  if (day <= twoDigitHour) {
    day = '0' + day;
  }
  return `${day} ${MONTHES[res.getMonth()]} ${res.getFullYear()}`;
}
const date = new Date();
getPastDay(date, 2);

function formatDate (date) {
    let hours = date.getHours();
    let twoDigitHour = 9;
    let minutes =
      date.getMinutes() <= twoDigitHour
        ? '0' + date.getMinutes()
        : date.getMinutes();
    if (hours <= twoDigitHour) {
      hours = '0' + hours;
    }
 return `${date.getFullYear()}/${date.getMonth() +
   1}/${date.getDate()} ${hours}:${minutes}`;
}

formatDate(new Date('6/15/2018 09:15:00'));
