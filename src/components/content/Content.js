import styles from './Content.module.css'
import settingIcon from '../logo/Vector.png'
import user from '../logo/user.png'
import png from '../logo/Vector2.png'
import { useDispatch } from 'react-redux'
import { toggleActions } from '../store/Store'
const Content = (props) => {
	const dispatch = useDispatch()
	const toggleModalHandler = () =>{
		dispatch(toggleActions.toggle())
	}
	return (
		<div className={styles.content}>
			<div className={styles.blog}>
				<h2 className={styles.p}>Pomofocus</h2>
				<ul className={styles.ul}>
					<li className={styles.li} onClick={toggleModalHandler}>
						<button className={styles.btn}>
							<img className={styles.image} src={png} alt='icon' /> Settings
						</button>
					</li>
					<li className={styles.li} >
						<button className={styles.btn} >
							<img className={styles.image} src={settingIcon} alt='icon' /> Report
						</button>
					</li>
					<li className={styles.li}>
						<button className={styles.btn}>
							<img className={styles.user} src={user} alt='user' />
							Login
						</button>
					</li>
				</ul>
			</div>

		</div>
	)
}
export default Content
