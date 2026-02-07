function sumFor(sumInputs: number[]){
  let sum: number = 0;
  for( let i: number  = 0; i < sumInputs.length; i++){
    sum += sumInputs[i];
  }
  return sum;
}
function sumWhile(sumInputs: number[]){
  let sum: number = 0;
  let i: number = 0
  while(i < sumInputs.length){
    sum += sumInputs[i];
    i++;
  }
  return sum;
}
function sumRecursion(sumInputs: number[]): number{
if(sumInputs.length == 1){
  return sumInputs[0];
}
  return sumInputs[0] += sumRecursion(sumInputs.slice(1));
}
function sumFunctional(sumInputs: number[]){
  const sum: number =  sumInputs.reduce((acc, curr) => acc + curr, 0 );
  return sum; 
}
console.log(sumFor([1, 2, 3, 4])); 
console.log(sumWhile([1, 2, 3, 4])); 
console.log(sumRecursion([1, 2, 3, 4])); 
console.log(sumFunctional([1, 2, 3, 4])); 