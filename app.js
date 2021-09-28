var birthdayDate = document.querySelector("#birthday-date");
var checkPalindrome = document.querySelector("#check-button");
var showMessage = document.querySelector("#output");


function isPalindrome(str) {
    var reverse = reverseStr(str);
    return str === reverse;
}

function reverseStr(str) {
    var listOfCharacters = str.split('');
    var reverseListOfCharacters = listOfCharacters.reverse();
    var reversedStr = reverseListOfCharacters.join('');
    return reversedStr;
}

function convertDateToStr(date) {
    var dateStr = {day: '', month:'', year:''};
    if(date.day<10) {
        dateStr.day = '0'+date.day;
    } 
    else {
        dateStr.day = date.day.toString();
    }
    if(date.month<10) {
        dateStr.month = '0'+date.month;
    } 
    else {
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
}

function getDateInAllFormats(date) {
    var dateStr = convertDateToStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year+dateStr.month+dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDateFormats(date) {
    var listOfDateFormats = getDateInAllFormats(date);
    var palindrome = false;
    
    for(var i=0; i<listOfDateFormats.length; i++) {
        if(isPalindrome(listOfDateFormats[i])) {
            palindrome = true;
            break;
        }
    }
    return palindrome;
}

function isLeapYear(year) {
    if(year % 400 === 0) {
        return true;
    }
    if(year % 100 === 0) {
        return false;
    }
    if(year % 4 === 0) {
        return true;
    }
    return false;
}

function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month === 2) {
        if(isLeapYear(year)) {
            if(day > 29) {
                day = 1;
                month++
            }
        }
        else {
            if(day > 28) {
                day = 1;
                month++
            }
        }
    }
    else {
        if( day > daysInMonth[month-1]) {
            day = 1;
            month++;
        }
    }
    if(month > 12) {
        month = 1;
        year++;
    }
    return {
        day: day,
        month: month,
        year: year
    }
}

function getNextPalindromeDate(date) {
    var ctr = 0;
    var nextDate = getNextDate(date);

    while(1) {
        ctr++;
        var checkPalindrome = checkPalindromeForAllDateFormats(nextDate);
        
        if(checkPalindrome) {
            break;
        }
        nextDate = getNextDate(nextDate);
    }
    return [ctr, nextDate];
}

var date = {
    day: 8,
    month: 8,
    year: 2021
}

console.log(getNextPalindromeDate(date));