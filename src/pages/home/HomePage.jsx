import React, { Fragment } from 'react'
import Buttons from '@/components/Buttons'

export const HomePage = () => {

    return (
        <Fragment>
            <TicTacText />
            <main className='flex relative h-screen justify-center items-center'>
                <div className='w-[30%] h-[90%] rounded-3xl bg-[#2B0040] p-16'>
                    <ScoreContainer />
                    <PlayBoard />
                    <ActionButtons />
                </div>
            </main>
        </Fragment>
    )
}

// TicTacToe Text
const TicTacText = () => {
    const styles = {
        backgroundText: 'absolute bottom-5 -left-6 text-[200px]/[110px]'
    }
    return (
        <p className={styles.backgroundText}>
            tic. <br /><span className='relative text-secondary z-50 '>tac.<br /></span>toe.
        </p>
    )
}

// Score Container
const ScoreContainer = () => {
    const styles = {
        scoreContainer: 'flex flex-col justify-center items-center w-24 h-20 text-black rounded-lg',
        playerText: 'text-base font-medium',
        scoreText: 'font-bold text-2xl',
    }
    return (
        <section className='flex gap-4 flex-row justify-center items-center'>
            <div className={`${styles.scoreContainer} bg-[#48D2FE] `}>
                <p className={styles.playerText}>PLAYER X</p>
                <p className={styles.scoreText} style={{ fontFamily: "Inter", fontWeight: '700' }}>0</p>
            </div>
            <div className={`${styles.scoreContainer} bg-[#BCDBF9] `}>
                <p className={styles.playerText}>DRAW</p>
                <p className={styles.scoreText} style={{ fontFamily: "Inter", fontWeight: '700' }}>0</p>
            </div>
            <div className={`${styles.scoreContainer} bg-[#E2BE00] `}>
                <p className={styles.playerText}>PLAYER O</p>
                <p className={styles.scoreText} style={{ fontFamily: "Inter", fontWeight: '700' }}>0</p>
            </div>
        </section>
    )
}

// X O Play Board Button
const PlayBoard = () => {
    return (
        <section className='mt-8'>
            <Buttons />
            <Buttons />
            <Buttons />
        </section>
    )
}

// Action Buttons
const ActionButtons = () => {
    return (
        <section className='flex flex-col mt-14 gap-3'>
            <button className='bg-[#F4F6F5] hover:bg-[#f4f6f5c2] text-black p-3 rounded active:scale-105'>New Game</button>
            <button className='bg-[#664774] hover:bg-[#664774cb] text-white p-3 rounded active:scale-105'>Reset Score</button>
        </section>
    )
}