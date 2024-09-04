export const TicTacText = () => {

    const styles = {
        backgroundText: 'absolute bottom-5 -left-6 vs:text-[200px]/[110px] text-[150px]/[90px]'
    }

    return (
        <p className={styles.backgroundText}>
            tic. <br /><span className='relative text-secondary z-50 '>tac.<br /></span>toe.
        </p>
    )
}