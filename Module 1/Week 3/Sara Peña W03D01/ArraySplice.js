var arr = ['a','b','c','d'];
var str = "Welcome to Software Engineering Class";

//Splice 1
// arr.splice(0,0,4,5,6);//First parameter, splice aka add to which index/begin, 
//                       //Second parameter is the number of HOW MANY ELEMENTS WILL BE REMOVED FROM ARRAY

// arr //4,5,6 are added before 'a''b''c''d' because the first '0' (0,0,4,5,6) indicated so
//     //the second '0' (0,0,4,5,6) indicates that NO elements will be removed.

//Splice 2
// arr.splice(0,1,4,5,6);//First parameter, splice's/adds to index '0'
//                      //Second parameter, REMOVES 'a' from its '1' index
// arr
 
//Splice 3
arr.splice(1,3,4,5,6)// 'a' maintains at index '0'
arr                 //4 5 6 get placed at index '1'
                    // 'b'c'd' get replaced completely by 4 5 6
                    

//SYNTAX array.splice(start, [delete count], [item], [item2])
// console.log(arr.splice(1,2,'X','Y','W'));
// console.log(arr);

//array.slice(begin, end)
//string.slice(begin, end)
console.log(arr.slice(1,2));
console.log(str.slice(1,2));
console.log(arr);
console.log(str);