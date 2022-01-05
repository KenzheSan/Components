import ShortBreak from '../pomodoroItems/ShortBreak/ShortBreak'
import Pomofocus from '../pomodoroItems/Pomofocus/Pomofocus'
import LongBreak from '../pomodoroItems/LongBreak/LongBreak'
import { Redirect, Route } from 'react-router-dom'
const RouterComponents = (props) => {
	
	return (
		<div>
			<Route path='/'exact>
				<Redirect to='/pomodoro'/>
			</Route>
			<Route path='/pomodoro'>
				<Pomofocus />
			</Route>
			<Route path='/ShortBreak'>
				<ShortBreak />
			</Route>
			<Route path='/LongBreak'>
				<LongBreak />
			</Route>
		</div>
	)
}
export default RouterComponents
