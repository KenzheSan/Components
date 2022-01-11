import React, { Fragment } from 'react'
import FormLayout from '../FormLayout/FormLayout'
import ModalWindow from '../Modal/ModalWindow'

const FormModal = (props) => {
	return (
		<Fragment>
			<ModalWindow>
				<FormLayout/>
			</ModalWindow>
		</Fragment>
	)
}

export default FormModal
