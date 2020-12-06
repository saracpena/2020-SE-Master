//BUBBLE SORT is LEAST EFFICIENT BECAUSE IT IS A LINEAR ALGORITHM

let bubbleSort = (inputArr) => {
    let len = inputArr.length;//containing the arr length
    let swapped; //Keeping track of iterations
    do {
        swapped = false;//if sorted > unsorted
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {//Is sorted > unsorted
                let tmp = inputArr[i]; //temporary container 'tmp' for 'sorted'
                inputArr[i] = inputArr[i + 1];//if sorted > unsorted, swap
                inputArr[i + 1] = tmp;//shift what was sorted to unsorted 'iteration by iteration'
                swapped = true;//if true, iteration will continue to execute
            }
        }
    } while (swapped);//'as long as' this is true, loop will continue to execute. Otherwise, it will stop.
    return inputArr;
};
console.log(bubbleSort([5,7,90,25,1,56,35]));

//Reverse Bubble Sort

let revBubbleSort = (inputArr) => {
    let len = inputArr.length;//containing the arr length
    let swapped; //Keeping track of iterations
    do {
        swapped = false;//if sorted < unsorted
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i - 1]) {//Is sorted > unsorted
                let tmp = inputArr[i]; //temporary container 'tmp' for 'sorted'
                inputArr[i] = inputArr[i - 1];//if sorted > unsorted, swap
                inputArr[i - 1] = tmp;//shift what was sorted to unsorted 'iteration by iteration'
                swapped = true;//if true, iteration will continue to execute
            }
        }
    } while (swapped);//'as long as' this is true, loop will continue to execute. Otherwise, it will stop.
    return inputArr;
};
console.log(revBubbleSort([5,7,90,25,1,56,35]));

//BUBBLE SORT RECURSION
// Can bubble sort be implemented recursively?

// Yes.
// Recursive Bubble Sort has no additional performance/implementation advantages, but can be used to understand recursion and sorting concepts better.
// Base Case: If array size is 1, return.
// Do One Pass of normal Bubble Sort. This pass bubbles largest element of current subarray to correct position.
// Recur for all elements except last of current subarray.
//     recursiveBubbleSort(arr[], n){
//         // Base case
//         if (n == 1)
//         return;

//         // One pass of bubble sort. After
//         // this pass, the largest element
//         // is moved (or bubbled) to end.
//         for(i=0; i<n-1; i++){
//             if(arr[i] > arr[i+1])
//             {
//              swap(arr[i], arr[i+1]);
//             }
//         }

//         // recursion for remaining elements in array
//         recursiveBubbleSort(arr, n-1);
//     }

//PSEUDOCODE
// bubbleSort( Arr[], totat_elements)
   
//    for i = 0 to total_elements - 1 do:
//       swapped = false
		
//       for j = 0 to total_elements - i - 2 do:
      
//          /* compare the adjacent elements */   
//          if Arr[j] > Arr[j+1] then
//             /* swap them */
//             swap(Arr[j], Arr[j+1])		 
//             swapped = true
//          end if
         
//       end for
      
//       /*if no number was swapped that means 
//       array is sorted now, break the loop.*/
      
//       if(not swapped) then
//          break
//       end if
      
//    end for
   
// end

const x = 6 % 2;
const y = x ? 'One' : 'Two';
console.log(y)

