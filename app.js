var birthdayDate = document.querySelector("#birthday-date");
var checkPalindrome = document.querySelector("#check-button");
var showMessage = document.querySelector("#output");


function checkPalindrome(str) {
    var reverse = reverseStr(str);
    return str === reverse;
}
