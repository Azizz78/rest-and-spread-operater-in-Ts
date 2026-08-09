//basically rest operater is collicting the values 
function sum(...number:number[]){ // here you can see the three dots and the array of the type of the parameter
  console.log(number)
}
  sum(12,23,34,23)// here you can seee i gave 4 arguments when there is only 1 parameter so here works the rest operater js put 3 dots before parameter and the type willl be array of the type of parameter
  