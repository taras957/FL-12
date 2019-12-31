function isLeapYear (dateString) {
  let date = new Date(dateString);
  if (isNaN(date)){
      return 'Invalid Date';
  }
  let year = date.getFullYear();
  let f29 = new Date(year, 1, 29);
  if (f29.getMonth() === 1) {
      return `${year} is a leap year `;
  } else {
    return `${year} is not a leap year `;  
  }
}

isLeapYear('2020-02-01 00:00:09');
