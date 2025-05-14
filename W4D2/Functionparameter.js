function empdetails(name, id, maild, status) {
    if (maild === void 0) { maild = "xyz@gmail.com"; }
    //maild='xyz@gmail.com is default parameter -> overriding is possible
    //status?:boolean is optional parameter which has to be given only in end 
    return "the emp details are ".concat(name, ": ").concat(id, ": ").concat(maild, ": ").concat(status);
}
console.log(empdetails("Kavitha", 57, "xyz@gmail.com", true));
console.log(empdetails("KavithaKG", 75, "xyza@gmail.com"));
