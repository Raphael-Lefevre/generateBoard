const board = [];
const row = prompt("Enter a row : ");
const column = prompt("Enter a column : ");

    for (let i = 0; i < row; i ++) {
        const rows = []            
        for (let j = 0; j < column; j ++) {
                if (i % 2 === 0 && j % 2 === 0) {
                rows.push("X");
            }   else if (i % 2 === 0 && j % 2 !== 0) {
                rows.push("0");
            }   else if (i % 2 !== 0 && j % 2 === 0) {
                rows.push("0");
            }   else if (i % 2 !== 0 && j % 2 !== 0) {
                rows.push("X");
            }
        }
        board.push(rows);
    }
console.log(board);



