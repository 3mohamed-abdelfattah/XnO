import { useGame } from "@/context/GameContext";

export const ActionButtons = () => {

    const { resetScores, newGame, currentPlayer, isGameOver } = useGame();
    const currentStyle = currentPlayer === 'X' ? 'bg-[#48D2FE] text-black p-3 rounded' : 'bg-[#E2BE00] text-black p-3 rounded';

    return (
        <section className='flex flex-col mt-14 gap-3'>
            <button onClick={newGame} className={currentStyle}>
                {isGameOver ? 'New Game' : <span >{`${currentPlayer} Turn`}</span>}
            </button>
            <button onClick={resetScores} className='bg-[#664774] hover:bg-[#664774cb] text-white p-3 rounded active:scale-105'>
                Reset Score
            </button>
        </section>
    );
};