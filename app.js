var birthdayDate = document.querySelector("#birthday-date");
var checkPalindrome = document.querySelector("#check-button");
var showMessage = document.querySelector("#output");


function checkPalindrome(str) {
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
        if(palindrome(listOfPalindromes[i])) {
            palindrome = true;
            break;
        }
    }
    return palindrome;
}
