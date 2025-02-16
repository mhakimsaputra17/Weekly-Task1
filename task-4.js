let displaySquare = (num) => {
  let result='';
  for(let i=1; i<=num; i++){
    let row='';
    for(let j=1; j<=num; j++){
       row+=j;
    }
    console.log(row);
  }
}
const printSquare = 3;
displaySquare(printSquare);