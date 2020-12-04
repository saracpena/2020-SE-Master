var toFind = 4;
var arr = [1,2,3,4,5,6,7,8,9,10];
var firstIndex = 0;
var lastIndex = arr.length-1;//length of index to match elements
var midIndex = 0;

for(var i = 0; firstIndex<=lastIndex; i++){
    midIndex = (firstIndex + lastIndex)/2;
    if(arr[midIndex]== toFind){
        console.log("Found");
    } else if(arr[midIndex] < toFind){
        firstIndex = midIndex++;//aka midIndex + 1
    } else{
        lastIndex = midIndex--//aka midIndex - 1
    }
}