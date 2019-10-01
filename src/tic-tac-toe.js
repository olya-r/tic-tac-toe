const WIN_REGIONS = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];

class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
        this.current = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.current;
    }

    nextTurn(row, col) {
        if (!this.matrix[row][col]) {
            this.matrix[row][col] = this.current;
            this.current = (this.current == 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
        return (this.getWinner() != null) || this.noMoreTurns();
    }

    getWinner() {
        check_regions:
        for (let region of WIN_REGIONS) {
            let [row, col] = region[0];
            const symbol = this.matrix[row][col];
            if (symbol) {
                for (let i = 1; i < 3; i++) {
                    let [row, col] = region[i];
                    if (this.matrix[row][col] != symbol) {
                        continue check_regions;
                    }
                }
                return symbol;
            }
        }
        return null;
    }

    noMoreTurns() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (!this.matrix[row][col]) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return (this.getWinner() == null) && this.noMoreTurns();
    }

    getFieldValue(row, col) {
        return this.matrix[row][col];
    }
}

module.exports = TicTacToe;
