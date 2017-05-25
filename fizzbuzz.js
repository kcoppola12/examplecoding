let givennumber = [];



//funtion to display an array from 1 to whatever number you pass in the parameter. 
      const fizzBuzz = (number) => {

      for ( let i = 1; i <=number; i += 1) {
        givennumber.push(i); //displays 1 through number on the screen. In this case 1,2,3...20.
      }
      for (let j = 2; j < number; j +=3) {
     
      let three = givennumber.splice(j, 1, "fizz");
}
     for (let k = 4; k < number; k +=5) {
      let five = givennumber.splice(k, 1, "buzz");
     }
    for (let l = 14; l < number; l +=15) {
      givennumber.splice(l, 1, "fizzbuzz");
    }
    
 document.write(givennumber); 
    
}

fizzBuzz(60);