function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  let str = '';
  if(a > 10){
    str += 'a is bigger than 10 ';
  }else{
    str += 'a is less than or equal to 10 ';
  }

  if(a === 5){
    str += 'an example of a special case ';
  }else{
    str += '';
  }

  if(a === 15){
    str += 'but a is not 15 ';
  }else{
    str += '';
  }

  if(a > 5){
    str += 'and a is greater than 5 ';
  }else{
    str += 'and a is less than or equal to 5 ';
  }

  if(a % 2){
    str += 'and a is odd';
  }else{
    str += 'and a is even';
  }
  return str;
    
}

console.log(manyChecks());

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()