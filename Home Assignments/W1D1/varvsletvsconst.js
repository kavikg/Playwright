const browserver="chrome"
function getBrowserVersion(){
if(browserver=="chrome"){
let browserver= "yes it is"
console.log("If block browserver: " +browserver)
}
console.log("Browserversion outside function: " +browserver)
}
getBrowserVersion()


const browserver1="chrome"
function getBrowserVersion1(){
if(browserver1=="chrome"){
var browserver= "yes it is"
console.log("If block browserver: " +browserver)
}
console.log("Browserversion outside function: " +browserver)
}
getBrowserVersion1()