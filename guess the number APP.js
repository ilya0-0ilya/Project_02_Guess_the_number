var secretNum = Math.ceil(Math.random() * 10);
var tries = 0;
        
function guessNum(num) {
    if (tries < 5) {
        if (num === secretNum) {
            alert('Вы угадали');
        } else {
            tries++;
            alert('Вы не угадали');
            if (tries === 5) {
                alert('Попытки кончились')
            }
        }
    } 
}
console.log(secretNum);