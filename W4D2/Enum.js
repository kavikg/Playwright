var teststatus;
(function (teststatus) {
    teststatus[teststatus["pass"] = 0] = "pass";
    teststatus[teststatus["fail"] = 1] = "fail";
    teststatus[teststatus["absent"] = 2] = "absent"; //2  
})(teststatus || (teststatus = {}));
console.log(teststatus.absent); //prints 2
var testststua1;
(function (testststua1) {
    testststua1[testststua1["pass"] = 0] = "pass";
    testststua1[testststua1["fail"] = 4] = "fail";
    testststua1[testststua1["absent"] = 5] = "absent";
    testststua1[testststua1["time"] = 6] = "time";
    testststua1[testststua1["status"] = 7] = "status";
})(testststua1 || (testststua1 = {}));
console.log(testststua1.absent); //prints 5
console.log(testststua1.status); //prints 7
var teststatus1;
(function (teststatus1) {
    teststatus1[teststatus1["pass"] = 0] = "pass";
    teststatus1[teststatus1["fail"] = 4] = "fail";
    teststatus1[teststatus1["absent"] = 5] = "absent";
    teststatus1[teststatus1["time"] = -1] = "time";
    teststatus1[teststatus1["status"] = 0] = "status";
})(teststatus1 || (teststatus1 = {}));
console.log(teststatus1.absent); //prints 5
console.log(teststatus1.status); //prints 0
//string enum
var browsername;
(function (browsername) {
    browsername["b1"] = "Chrome";
    browsername["b2"] = "edge";
    browsername["b3"] = "firefox";
})(browsername || (browsername = {}));
console.log(browsername.b1); //prints Chrome
//hetrogenous enum
var hetro;
(function (hetro) {
    hetro["name"] = "Kavitha";
    hetro["id"] = "2747";
    hetro["mailid"] = "xyz@gmail.com";
})(hetro || (hetro = {}));
console.log(hetro.id);
