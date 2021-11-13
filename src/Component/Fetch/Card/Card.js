import classes from './Card.module.css'


const Card = (props) => {
	return (
    <div className={classes.card}>
        <div className={classes.title}>
            <p>{props.title} <span>{props.id}</span></p>
        </div>
        <div className={classes.url}>
            <p>
                {props.url}
            </p>
        </div>
    </div>
    )
}
export default Card