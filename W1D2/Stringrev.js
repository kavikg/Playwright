let str = "MalaYalam"

function reverse(str) {
    let rev = ""
    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i]
        
    }
    return rev
}
let revstr = reverse(str)
console .log("Reversed String is " +revstr)
if(revstr.toLowerCase()==str.toLowerCase()){
    console.log("The input string is palindrome")
}
else
{
    console.log("The input string is not palindrome")
}