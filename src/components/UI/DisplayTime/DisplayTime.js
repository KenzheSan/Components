import classes from './DispayTime.module.css'

export default function Progress({ percent }) {
	return (
			<div className={classes.container}>
				<div
					className={classes.progress}
					style={{ width: `${percent}%` }}
				/>
			</div>
	)
}
