function empdetails(name:string,id:number,maild="xyz@gmail.com",status?:boolean){
//maild='xyz@gmail.com is default parameter -> overriding is possible 
//status?:boolean is optional parameter which has to be given only in end 
return `the emp details are ${name}: ${id}: ${maild}: ${status}`   
}
console.log(empdetails("Kavitha",57,"xyz@gmail.com",true));
console.log(empdetails("KavithaKG",75,"xyza@gmail.com"));