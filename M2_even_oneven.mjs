import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Getal = parseFloat(await userInput.question('Geef een getal in ? '));
if (Getal % 2 == 0){
  console.log('Je getal is even');
}else{
console.log('Je getal is oneven');
}

 process.exit() 