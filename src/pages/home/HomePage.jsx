import React, { Fragment } from 'react'
import { useGame } from '@/context/GameContext'
import { ActionButtons, PlayBoard, ScoreContainer, TicTacText } from '@/components/index.js';

export const HomePage = () => {

    const { board, handleMove, score } = useGame();

    return (
        <Fragment>
            <TicTacText />
            <main className='flex relative h-screen justify-center items-center'>
                <div className='w-[250px] vvs:w-[300px] vvs:p-6 z-50 vs:w-[400px] sm:w-[500px] lg:bg-[#2B0040] vs:p-16 rounded-3xl bg-[#2b0040e1] p-3'>
                    <ScoreContainer score={score} />
                    <PlayBoard board={board} handleMove={handleMove} />
                    <ActionButtons />
                </div>
            </main>
        </Fragment>
    )
}