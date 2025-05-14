//typealias -> Can create customtype of data
//let value:string
var emp = "Kavitha";
function LaunchBrowser(browservalue) {
    if (browservalue === "Chrome") {
        console.log("Launching Chrome browser");
    }
    else if (browservalue === "Edge") {
        console.log("Launching Edge browser");
    }
    else {
        console.log("No browser is launched");
    }
}
LaunchBrowser("Chrome");
var value1 = {
    username: "Kavitha",
    userid: 2747,
    name: "XYZ",
};
console.log(value1);
console.log(value1.userid);
