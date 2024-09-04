import { useGame } from "@/context/GameContext";

export const ActionButtons = () => {

    const { resetScores, newGame, currentPlayer, isGameOver } = useGame();
    const currentPlayerStyle = currentPlayer === 'X' ? 'text-[#48D2FE]' : 'text-[#E2BE00]';

    return (
        <section className='flex flex-col mt-14 gap-3'>
            <button onClick={newGame} className='bg-[#F4F6F5] hover:bg-[#f4f6f5c2] text-black p-3 rounded active:scale-105'>
                {isGameOver ? 'New Game' : <span className={currentPlayerStyle}>{`${currentPlayer}'s Turn`}</span>}
            </button>
            <button onClick={resetScores} className='bg-[#664774] hover:bg-[#664774cb] text-white p-3 rounded active:scale-105'>
                Reset Score
            </button>
        </section>
    );
};