import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [score, setScore] = useState({ X: 0, O: 0, draw: 0 });
    const [isGameOver, setIsGameOver] = useState(false);
    const [winningCombination, setWinningCombination] = useState([]);

    const checkWinner = (board) => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setIsGameOver(true);
                setWinningCombination(pattern);
                return board[a];
            }
        }

        if (board.every(cell => cell)) {
            setIsGameOver(true);
            return 'draw';
        }

        return null;
    };

    const handleMove = (index) => {
        if (board[index] === '' && !isGameOver) {
            const newBoard = [...board];
            newBoard[index] = currentPlayer;
            setBoard(newBoard);
            const result = checkWinner(newBoard);
            if (result) {
                if (result === 'draw') {
                    setScore(prevScore => ({ ...prevScore, draw: prevScore.draw + 1 }));
                } else {
                    setScore(prevScore => ({ ...prevScore, [result]: prevScore[result] + 1 }));
                }
            }
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };

    const newGame = () => {
        setBoard(Array(9).fill(''));
        setIsGameOver(false);
        setCurrentPlayer('X');
        setWinningCombination([]);
    };

    const resetScores = () => {
        setScore({ X: 0, O: 0, draw: 0 });
        newGame();
    };

    return (
        <GameContext.Provider value={{ board, currentPlayer, score, handleMove, resetScores, newGame, isGameOver, winningCombination }}>
            {children}
        </GameContext.Provider>
    );
};

// Hook to use the game context
export const useGame = () => {
    return useContext(GameContext);
};
