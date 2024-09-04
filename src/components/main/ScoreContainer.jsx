export const ScoreContainer = ({ score }) => {

    const styles = {
        scoreContainer: 'flex flex-col justify-center items-center w-24 h-20 text-black rounded-lg',
        playerText: ' vs:text-base text-xs font-medium',
        scoreText: 'font-bold text-2xl',
    };

    return (
        <section className='flex gap-4 flex-row justify-center items-center'>
            <div className={`${styles.scoreContainer} bg-[#48D2FE] `}>
                <p className={styles.playerText}>PLAYER X</p>
                <p className={styles.scoreText}>{score.X}</p>
            </div>
            <div className={`${styles.scoreContainer} bg-[#BCDBF9] `}>
                <p className={styles.playerText}>DRAW</p>
                <p className={styles.scoreText}>{score.draw}</p>
            </div>
            <div className={`${styles.scoreContainer} bg-[#E2BE00] `}>
                <p className={styles.playerText}>PLAYER O</p>
                <p className={styles.scoreText}>{score.O}</p>
            </div>
        </section>
    );
};