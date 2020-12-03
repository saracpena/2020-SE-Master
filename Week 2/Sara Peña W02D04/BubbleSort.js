let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};
console.log(bubbleSort([5,7,90,25,1,56,35]));



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