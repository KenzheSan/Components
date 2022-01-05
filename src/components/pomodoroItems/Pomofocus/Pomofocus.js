import React from 'react'
import next from '../../logo/next.png'
import styles from './Pomofocus.module.css'
const Pomofocus = (props) => {
	return (
		<div className={styles.pomofocus}>
			<h1 className={styles.time}>15:00</h1>
			<div>
				<button className={styles.btn}>stop</button>
				<img className={styles.next} src={next} alt='/' />
			</div>
		</div>
	)
}
export default Pomofocus
