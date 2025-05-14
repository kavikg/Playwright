let empname:string
empname="Kavitha"

//let empnamelist:string[]=[57,"Kavitha",25] //Since it is string array - it is throwing error for number 
let empnamelist:string[]=["Drithi","Kavitha","Dharvi"] 

function add(a:number,b:number):number{    //after : we should declare the datatype of the return value 
    return a+b
    //a=10,b=10,c=20
}


//union  - We can pass multiple options, we will be able to choose any one option out of it (It is literally using | symbol)


let browser:string|null|number
browser="chrome"
browser = 567
browser=null
console.log(browser) //since we gave multiple options, it will print the last value , output: null

let responsestatus:string|number
responsestatus = "OK"
responsestatus = 201 
console.log(responsestatus)//since we gave multiple options, it will print the last value , output: 201


//Intersection

let browsername:String&number//since it is combination of string and data, we cannot declare the values, to overcome this we use type alias




