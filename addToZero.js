// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
function addToZero(arr){
    result=false;
    for (let i =0; i<arr.length; i++){
    //begin for loop for each index setting the base case
        for (let j=arr.length-1;j>i;j--){
        //begin second for loop to add to the base case
            if(arr[i]+arr[j]===0){
            //check to see if the two numbers add to zero
                result=true;
                //change result to true if they do
            }
        }
    }
    return result
}

console.log(addToZero(array))