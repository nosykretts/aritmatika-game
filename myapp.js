


function generateRandomNumber(min, max){
  var randomNum = Math.random() 
  randomNum = randomNum * (max - min + 1)
  randomNum = Math.floor(randomNum)
  randomNum = randomNum + min
  return randomNum
}

function generateSoalJawaban(){
  var num1 = generateRandomNumber(1,10);
  var num2 = generateRandomNumber(1,10);
  var randomOperator = generateRandomNumber(0,2);
  var jawaban;
  var soalWord;

  switch(randomOperator){
    case 0: 
      jawaban = num1 * num2;
      soalWord = num1 + ' x ' + num2;
      break;
    case 1: 
      jawaban = num1 + num2;
      soalWord = num1 + ' + ' + num2;
      break;
    default: 
      jawaban = num1 - num2;
      soalWord = num1 + ' - ' + num2;
      break;
  }
  return [soalWord, jawaban]
}

window.alert('GAME ARITMATIKA ANAK-ANAK\n- Jawab soal-soal matematika yang diberikan.\n- Nilai berdasarkan jumlah jawaban yang benar.\nTekan OK untuk memulai:')
var nilai = 0;

for (var i=1; i <= 10; i++){
  var dataItem = generateSoalJawaban();
  var soalWord = dataItem[0];
  var kunciJawaban =dataItem[1]
  var inputJawaban = prompt('Soal: '+ soalWord + ' =');
  var inputJawabanParsed = parseInt(inputJawaban);
  console.log(' ')
  console.log(soalWord + ' = ' + kunciJawaban)
  console.log('Jawaban kamu: '+ inputJawaban)
     
  if(kunciJawaban === inputJawabanParsed){
    console.log('Jawaban Benar')
    nilai++;
  }else{
    console.log('Jawaban Salah')
  }
}

console.log('')
console.log('NILAI KAMU: '+ nilai);
