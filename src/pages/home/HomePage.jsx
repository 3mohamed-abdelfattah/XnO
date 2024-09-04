import React, { Fragment } from 'react'
import { useGame } from '@/context/GameContext'
import { ActionButtons, PlayBoard, ScoreContainer, TicTacText } from '@/components/index.js';

export const HomePage = () => {

    const { board, handleMove, score } = useGame();

    return (
        <Fragment>
            <TicTacText />
            <main className='flex relative h-screen justify-center items-center'>
                <div className='w-[30%] h-[90%] rounded-3xl bg-[#2B0040] p-16'>
                    <ScoreContainer score={score} />
                    <PlayBoard board={board} handleMove={handleMove} />
                    <ActionButtons />
                </div>
            </main>
        </Fragment>
    )
}