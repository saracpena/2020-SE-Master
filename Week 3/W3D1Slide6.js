var toFind = 4;
var arr = [1,2,3,4,5,6,7,8,9,10];

var firstIndex = 0;
var lastIndex = arr.length-1;//length of index to match elements
var midIndex = 0;
var found = false;

while(firstIndex<=lastIndex){//index for(var i = 0; i++) are not actually being used so we don't need them
    midIndex = (firstIndex + lastIndex)/2;
    if(arr[midIndex]== toFind){
        found = true;
        console.log("Found");
        break;
    } else if(arr[midIndex] < toFind){
        firstIndex = midIndex+1;//aka midIndex + 1
    } else{
        lastIndex = midIndex-1//aka midIndex - 1
    }
    if(found == false){
        console.log("Not Found");
    }

}
