import React, { Fragment } from 'react'
import ModalWindow from '../Modal/ModalWindow'
import styles from './FormModal.module.css'
import x from '../../logo/x.png'
import line from '../../logo/line0.png'

const FormModal = (props) => {
	return (
		<Fragment>
			<ModalWindow>
				<form className={styles.forma}>
					<section className={styles.navigation}>
						<div className={styles.header}>
							<h1 className={styles.h1}>Timer Settig </h1>
							<img className={styles.x} src={x} alt='/' />
						</div>
						<img className={styles.line} src={line} alt='/line' />
						<h5 className={styles.timer}>Timer (minutes)</h5>
					</section>
					<section className={styles.labels}>
						<div>
							{' '}
							<label htmlFor='pomodoro'>Pomodoro</label>
							<input id='pomodoro' type='text' />
						</div>
						<div>
							{' '}
							<label htmlFor='shortbreak'>Short Break</label>
							<input id='shortbreak' type='text' />
						</div>
						<div>
							<label htmlFor='longbreak'>Long Break</label>
							<input id='longbreak' type='text' />
						</div>
					</section>
					<img className={styles.line} src={line} alt='/line' />
					<section className={styles.checkbox}>
						<div className={styles.break}>
							<p className={styles.auto}>Auto start Breaks?</p>
							<input className={styles.radio} type='checkbox' />
						</div>
						<img className={styles.line} src={line} alt='/line' />
						<div className={styles.break}>
							<p className={styles.auto}>Auto start Pomodoros?</p>
							<input className={styles.radio} type='checkbox' />
						</div>

						<img className={styles.line} src={line} alt='/line' />
						<div className={styles.break}>
							<p className={styles.auto}>Long Break interval</p>
							<input id='longbreak' type='text' />
						</div>
					</section>
					<img className={styles.line} src={line} alt='/line' />
					<button className={styles.button}>OK</button>
				</form>
			</ModalWindow>
		</Fragment>
	)
}

export default FormModal
