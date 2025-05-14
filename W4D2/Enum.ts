enum teststatus{
 pass, //0
 fail, //1
 absent //2  
}

console.log(teststatus.absent) //prints 2


enum testststua1{
    pass, //0
    fail=4, //1
    absent,//2
    time,
    status
}
console.log(testststua1.absent) //prints 5
console.log(testststua1.status) //prints 7

enum teststatus1{
    pass, //0
    fail=4, //1
    absent,//2
    time=-1,
    status
}
console.log(teststatus1.absent) //prints 5
console.log(teststatus1.status) //prints 0


//string enum
enum browsername{
    b1="Chrome",
    b2="edge",
    b3="firefox"
}
console.log(browsername.b1) //prints Chrome


//hetrogenous enum

enum hetro{
    name = "Kavitha",
    id="2747",
    mailid="xyz@gmail.com"
}
console.log(hetro.id)