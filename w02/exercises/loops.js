triangleLoop = () => {
    let triangle = '';
    for(let i = 0; i < 7; i++){
        triangle += '#';
        let li = document.createElement('li');
        li.textContent = triangle;

        document.getElementById('container').appendChild(li);
    }
}

fizzBuzz = () => {
    let nums = [];
    for(let i = 1; i < 101; i++){
        if(Number.isInteger(i / 3) && Number.isInteger(i / 5)){
            nums.push('FizzBuzz ');
        } else if(Number.isInteger(i / 5)) {
            nums.push('Buzz ');
        } else if(Number.isInteger(i / 3)){
            nums.push('Fizz ');
        } else {
            nums.push(i + '');
        }
    }
    document.getElementById('container2').textContent = nums;
}

chessBoard = () => {
    let size = document.getElementById('num').value;
    let board = "";
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }
    console.log(board);
}