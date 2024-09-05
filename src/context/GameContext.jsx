import React, { createContext, useContext, useState, useEffect } from 'react';
import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [board, setBoard] = useState(() => {
        // Load board from localStorage
        const savedBoard = localStorage.getItem('board');
        return savedBoard ? JSON.parse(savedBoard) : Array(9).fill('');
    });
    const [currentPlayer, setCurrentPlayer] = useState(() => {
        // Load currentPlayer from localStorage
        const savedPlayer = localStorage.getItem('currentPlayer');
        return savedPlayer || 'X';
    });
    const [score, setScore] = useState(() => {
        // Load score from localStorage
        const savedScore = localStorage.getItem('score');
        return savedScore ? JSON.parse(savedScore) : { X: 0, O: 0, draw: 0 };
    });
    const [isGameOver, setIsGameOver] = useState(false);
    const [winningCombination, setWinningCombination] = useState([]);

    useEffect(() => {
        // Save to localStorage
        localStorage.setItem('board', JSON.stringify(board));
        localStorage.setItem('currentPlayer', currentPlayer);
        localStorage.setItem('score', JSON.stringify(score));
    }, [board, currentPlayer, score]);

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
                toast(`❌Player ${board[a]} wins!⭕`);
                return board[a];
            }
        }

        if (board.every(cell => cell)) {
            setIsGameOver(true);
            toast('🏳️ It\'s a draw!');
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
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="dark"
                transition={Slide}
            />
        </GameContext.Provider>
    );
};

// Hook to use the game context
export const useGame = () => {
    return useContext(GameContext);
};
