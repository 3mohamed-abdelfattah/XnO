export default function Buttons({ onClick, text, isWinningCell }) {

    const backgroundColor = isWinningCell ? 'bg-[#f6f7fb54]' : 'bg-[#43115B]';
    const styles = {
        buttonShape: `w-24 h-24 rounded-lg hover:bg-[#551572] active:bg-[#44115bbb] active:scale-110 flex justify-center items-center text-4xl font-bold ${backgroundColor}`,
        textColor: text === 'X' ? 'text-[#48D2FE]' : text === 'O' ? 'text-[#E2BE00]' : 'text-black'
    };

    return (
        <div className='flex gap-4 justify-center items-center'>
            <button onClick={onClick} className={styles.buttonShape}>
                <span className={styles.textColor}>{text}</span>
            </button>
        </div>
    );
}