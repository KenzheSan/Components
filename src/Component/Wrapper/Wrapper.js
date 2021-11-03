import classes from './Wrapper.module.css'
import logo from '../../Component/Ui/enter.png'
import Button from '../Ui/Button'
const Wrapper = () =>{
    return (
        <main className={classes.wrapper}>
            <div>
                <Button className={classes.btn} ><img className={classes.logo} src={logo} alt='logo' /></Button>
            </div>
        </main>
    )
}

export default Wrapper