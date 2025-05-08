//Printing the Duplicate values in array can be done either with single forloop or 2 for loops

let num = [2,5,1,7,4,5,8,7]
//nested for loop
for(let index=0;index<num.length;index++)
{
    for(let i=index+1;i<num.length;i++){
        if(num[index]===num[i])
            console.log(`Duplicate Number is: ${num[i]}`)
    }
}

let num = [2,5,1,7,4,5,8,7]
//sort the array
let num1=console.log(num.sort()) //[1, 2, 4, 5,5, 7, 7, 8]
//Single for loop
for(let index=0;index<num.length;index++){
    if(num[index]===num[index+1])   
        console.log(`Duplicate Number is: ${num[index+1]}`)
}

