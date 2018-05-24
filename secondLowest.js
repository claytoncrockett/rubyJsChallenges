function secondLowestAndHighest(arr){
  arr.sort(sortNumber)
  arr.pop()
  arr.shift()
  console.log("The second lowest number is: " + arr.shift())
  console.log("The second highest number is: " + arr.pop())
}


function sortNumber(a,b) {
    return a - b;
}

secondLowestAndHighest([3,1,5,8,2,6])