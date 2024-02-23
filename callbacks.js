//  Find the average of elements present at odd index of the following array.
// let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let ans = arr.reduce((pre,curr)=>{
  if(arr.indexOf(curr)%2!=0){
    pre=pre+curr;
    
    
  }
  return pre;
  
},0)/arr.length;
console.log(ans)




