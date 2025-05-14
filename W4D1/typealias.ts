//typealias -> Can create customtype of data
//let value:string

//syntax: type typename=definition

type username = string
let emp: username = "Kavitha"


//union typealias

type browserName = "Chrome" | "Edge" | "Webkit"

function LaunchBrowser(browservalue: browserName) {
    if (browservalue === "Chrome") {
        console.log("Launching Chrome browser")
    }
    else if (browservalue === "Edge") {
        console.log("Launching Edge browser")
    }
    else {
        console.log("No browser is launched")
    }
}

LaunchBrowser ("Chrome")
//LaunchBrowser ("Firefox") //since it is not declared it is throwing error

//intersection typealias

type admin = {
    username:string
    userid:number
}

type employee={
    name:string
    status?:boolean // declaring as optional parameter
}

//it throws error if any one parameter is missing, in that case we can overcome it by declaring the parameter is optional by using ?
type DB = admin & employee
let value1: DB= {
username:"Kavitha",
userid:2747,
name:"XYZ",
}

console.log(value1)
console.log(value1.userid)