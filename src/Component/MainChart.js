import ChartBar from './ChartBar'
import './Chart.css'
const MainChart = (props) => {
	let cash = props.onDataPoints.map((item) => item.value)
	const totalMax = Math.max(...cash)
	console.log(totalMax);

	return (
		<div className='chart'>
			{props.onDataPoints.map((dataPoint) => {
				return (
					<ChartBar
						key={dataPoint.label}
						value={parseInt(dataPoint.value)}
						maxValue={totalMax}
						label={dataPoint.label}
					/>
				)
			})}
		</div>
	)
}
export default MainChart
