import { useGame } from "@/context/GameContext";
import Buttons from "./Buttons";

export const PlayBoard = ({ board, handleMove }) => {

    const { winningCombination } = useGame();

    return (
        <section className='mt-8 grid grid-cols-3 gap-4'>
            {board.map((cell, index) => (
                <Buttons
                    key={index}
                    onClick={() => handleMove(index)}
                    text={cell}
                    isWinningCell={winningCombination.includes(index)}
                />
            ))}
        </section>
    );
};