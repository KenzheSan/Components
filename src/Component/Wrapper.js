import { useState } from 'react'
import './Wrapper.css'

import Module from './Module'

function Wrapper() {
	const [value, setValue] = useState(false)
	const [text ,setText] = useState(false)

	return (
		<div className='main-wrapper'>
			<Module value={value} setValue={setValue} >
				<h1>Hello</h1>
				<button onClick={() => setValue(false)}> Закрыть</button>
				<button onClick={()=> setText(true)}> Открыть следующее окно</button>
			</Module>
			<Module value={text} setValue={setText}>
				<h1>Hi</h1>
				<button onClick={() => setValue(true)}> Закрыть</button>
				<button onClick={() => setText(false)}> Окно Hi</button>
			</Module>
			<div>
				<h1>Lorem-Impsum</h1>
				<div>
					<p>
						Why do we use it? It is a long established fact that a
						reader will be distracted by the readable content of a
						page when looking at its layout. The point of using
						Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content
						here, content here', making it look like readable
						English. Many desktop publishing packages and web page
						editors now use Lorem Ipsum as their default model text,
						and a search for 'lorem ipsum' will uncover many web
						sites still in their infancy. Various versions have
						evolved over the years, sometimes by accident, sometimes
						on purpose (injected humour and the like).
					</p>
				</div>
				<button onClick={() => setValue(true)}>
					Show module-window
				</button>
			</div>
		</div>
	)
}

export default Wrapper
