// switch(lowercaseLetter) {
//     case "a":
//       console.log("A");
//       break;
//     case "b":
//       console.log("B");
//       break;
//   }
  
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
    return answer;  
  }
  
  // Change this value to test
  console.log(caseInSwitch(2));
  