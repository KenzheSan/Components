import Card from '../../Card/Card'
import Button from '../Button';
import classes from './Modal.module.css'
const Modal = (props) => {
    
	return (
        <div className={classes.blog} onClick={props.onConfirm} >
		<Card className={classes.modalCard}>
			<main className={classes.main}>
				<h1 className={classes.h1}>Error</h1>
				<div className={classes.errorblog}>
					<p>{props.errorType}</p>
					<p>{props.message}</p>
				</div>
                <Button  onClick={props.onConfirm}>Ok</Button>
			</main>
		</Card>
        </div>
	)
}
export default Modal