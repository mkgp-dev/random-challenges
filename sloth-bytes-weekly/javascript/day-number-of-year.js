/*
(December 03, 2025) Day Number of Year
You’re given a date string in the format month/day/year, based on the Gregorian calendar. Your task is to return which day of the year that date corresponds to (1–365, or 1–366 for leap years).

Output tested matched:
dayOfYear("12/13/2020")
output = 348
-
dayOfYear("11/16/2020")
output = 321
-
dayOfYear("1/9/2019")
output = 9
-
dayOfYear("3/1/2004")
output = 61
-
# leap year
dayOfYear("12/31/2000")
output = 366
-
#non leap year 
dayOfYear("12/31/2019")
output = 365
*/

const basicCalculation = (month, day, year) => {
  let days = day;
  const isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (isLeapYear) daysInMonths[1] = 29;

  for (let i = 0; i < month - 1; i++) days += daysInMonths[i];

  return days;
};

const dayOfYear = (str) => {
  let [month, day, year] = str.split("/");
  month = Number(month);
  day = Number(day);
  year = Number(year);

  return basicCalculation(month, day, year);
};
