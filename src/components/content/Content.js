import styles from './Content.module.css'
import settingIcon from '../logo/Vector.png'
import user from '../logo/user.png'
import png from '../logo/Vector2.png'
import line from '../logo/Line.png'
const Content = (props) => {
	return (
		<div className={styles.content}>
			<div className={styles.blog}>
				<h2 className={styles.p}>Pomofocus</h2>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<button className={styles.btn}>
							<img className={styles.image} src={png} alt='icon' /> Settings
						</button>
					</li>
					<li className={styles.li}>
						<button className={styles.btn}>
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
            <img className={styles.line} src={line} alt='user' />
		</div>
	)
}
export default Content
