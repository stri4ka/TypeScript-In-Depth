var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('This is privatefunction');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var n = Utility.maxBooksAllowed(20);
console.log(n);
var util = Utility.Fees;
var m = util.calculateLateFee(10);
console.log(m);
