import React from "react"
import next from '../../logo/next.png'
import styles from './LongBreak.module.css'
const LongBreak = props => {
    return (
        <div className={styles.longbreak}>
			<h1 className={styles.time}>05:00</h1>
			<div>
				<button className={styles.btn}>stop</button>
				<img className={styles.next} src={next} alt='/' />
			</div>
        </div>
    )
}
export default LongBreak