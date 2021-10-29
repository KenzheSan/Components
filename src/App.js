import React,{useState} from "react";
import MainChart from "./Component/MainChart";
import Wrapper from "./Component/Wrapper";


function App(props) {
	const chartDataPoints = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'Jul', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Dec', value: 0 },
	]

	const [memory, setMemory] = useState([])

	const dataTransfer = (data) => {
		setMemory([...memory, data])
	}
	for (const key of memory) {
		let month = key.date.getMonth()
		chartDataPoints[month].value += Number(key.cost)
	}
	

  return (
      <div>
		  <Wrapper onTransfer={dataTransfer}/>
		  <MainChart onDataPoints={chartDataPoints}/>
      </div>
  );
}

export default App;