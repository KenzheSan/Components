import classes from './ShortBreak.module.css'
import next from '../../logo/next.png'

const ShortBreak = props => {
    return (
		<div className={classes.shortbreak}>
			<h1 className={classes.time}>03:00</h1>
			<div>
				<button className={classes.btn}>stop</button>
				<img className={classes.next} src={next} alt='/' />
			</div>
		</div>
    )
}
export default ShortBreak