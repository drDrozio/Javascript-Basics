
// //Callbacks and Arrow Functions
// var isEven = (element) => {return element%2==0;};

// var result=[2,4,6,8].every(isEven);
// console.log(result);


// //Fill Method
// var array=[2,1,2,3,4,9,10,11]
// console.log(array.fill("EMPTY",2,5));

//Filter Method
const arr=[1,2,3,4,3,2122,3,44,45,3,2,2,211];

const result=arr.filter((num) => {return num%2===0;});
console.log(result);