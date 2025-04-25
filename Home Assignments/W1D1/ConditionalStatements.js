function launchBrowser(browserName){
if(browserName.toLowerCase()=="chrome"){
    console.log("It is Chrome Browser")
    }
    else{
        console.log("It is not Chrome browser")
    }
}
launchBrowser("safari")
launchBrowser("Chrome")


function runTests(testType){
switch (testType.toLowerCase()) {
    case "regression":
        console.log("Regression testing is being done")
        break;

     case "sanity":
        console.log("sanity testing is being done")
        break;

    default:
        console.log("smoke testing is being done")
        break;
}

}
runTests("regression")
runTests("Sanity")
runTests("Monkey")