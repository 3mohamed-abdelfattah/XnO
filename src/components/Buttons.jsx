import React from 'react'

export default function Buttons() {
    const styles = {
        buttonShape: 'bg-[#43115B] w-24 h-24 rounded-lg hover:bg-[#551572] active:bg-[#44115bbb] active:scale-110',
    }
    return (
        <div className='flex gap-4 justify-center items-center my-4'>
            <button className={styles.buttonShape} />
            <button className={styles.buttonShape} />
            <button className={styles.buttonShape} />
        </div>
    )
}
