/*
[[0,1,2,3]
[4,5,6,7]
[8,9,10,11]
[12,13,14,15]]
*/

// start with board of all zeros
// board type is 2d array of numbers
// default board is all zeros
// player1 is 1
// player2 is 2
function checkWinner(board) {
    // coords
    // 0,0  0,1  0,2  0,3
    // 1,0  1,1  1,2  1,3
    // 2,0  2,1  2,2  2,3
    // 3,0  3,1  3,2  3,3
    // to calculate for combo = 4*i + j
    let combinations = [
        // horizontal
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        // vertical
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        // diagonal
        [0, 5, 10, 15],
        [3, 6, 9, 12],
        // 4 corners  
        [0, 3, 12, 15],
        // 2x2 box
        [0, 1, 4, 5],
        [1, 2, 5, 6],
        [2, 3, 6, 7],
        [4, 5, 8, 9],
        [5, 6, 9, 10],
        [6, 7, 10, 11],
        [8, 9, 12, 13],
        [9, 10, 13, 14],
        [10, 11, 14, 15]
    ];

    let player1Combos = []
    let player2Combos = []

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 1) {
                player1Combos.push(4 * i + j);
            }
            else if (board[i][j] === 2) {
                player2Combos.push(4 * i + j);
            }
            
        }
    }
    for(const combo of combinations) {
        if(combo.every((cell) => player1Combos.includes(cell))) {
            return "Player 1 wins!"
        }
        if(combo.every((cell) => player2Combos.includes(cell))) {
            return "Player 2 wins!"
        }
    }

    return anyMovesLeft(board) ? "No player has won yet, more moves to be played" : "Draw!"
    
}

// true means there are moves left, false means no
function anyMovesLeft(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if(board[i][j] === 0) return true
        }
    }
    return false
}

// true means game is over, false if not
function isGameOver(board) {
    return checkWinner(board) === 'Player 1 wins!' || checkWinner(board) === 'Player 1 wins!' || checkWinner(board) === 'Draw!'
}

let boardDraw = [
    [1, 1, 2, 1],
    [2, 1, 1, 2],
    [1, 2, 2, 1],
    [1, 1, 2, 2]
];

let boardWinner = [
    [1, 1, 2, 1],
    [2, 1, 1, 2],
    [1, 2, 1, 1],
    [1, 1, 2, 1]
]

let boardMoves = [
    [1, 1, 2, 1],
    [2, 1, 0, 2],
    [1, 0, 1, 1],
    [1, 1, 0, 0]
]

