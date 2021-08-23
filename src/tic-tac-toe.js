class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.fields = [[null, null, null], [null, null, null], [null, null, null]];
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) === null) {
            this.fields[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        } else {
            return;
        }

        const threeInRow = this.fields[rowIndex].filter(val => val === this.getCurrentPlayerSymbol()).length === 3;
        const threeInColumn = this.fields.filter(row => row[columnIndex] === this.getCurrentPlayerSymbol()).length === 3;
        let threeInDiagonal = false;
        if (this.fields[1][1] === this.getCurrentPlayerSymbol()) {
            if ((this.fields[0][0] === this.getCurrentPlayerSymbol() &&
                this.fields[2][2] === this.getCurrentPlayerSymbol()) ||
                (this.fields[0][2] === this.getCurrentPlayerSymbol() &&
                this.fields[2][0] === this.getCurrentPlayerSymbol())) {
                    threeInDiagonal = true;
                }
        }

        if (threeInRow || threeInColumn || threeInDiagonal) {
            this.winner = this.getCurrentPlayerSymbol();
        }

        if (this.getCurrentPlayerSymbol() === 'x') {
            this.currentPlayerSymbol = 'o';
        } else {
            this.currentPlayerSymbol = 'x';
        }
    }

    isFinished() {
        return !!this.getWinner() || this.isDraw();
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.fields.filter(row => row.filter(val => val === null).length === 0).length === 3;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.fields[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
