import React from 'react'
import { withFormik, Form, Field } from "formik";

import * as Yup from 'yup'

import axios from 'axios'

//styles
import { FormContainer } from '../../styled-components/form'
import * as color from '../../../styles/color'

import states from './states'

function Register({ touched, errors, status }) {
	return (
		<FormContainer>
			<Form className="form">
				<p>{touched.email && errors.email}</p>
				<div className='ui input'>
					<Field
						placeholder="Enter your email"
						name="email"
						type="email"
					/>
				</div>
				<p>{touched.username && errors.username}</p>
				<div className='ui input'>
					<Field
						placeholder="Enter your username"
						name="username"
						type="text"
					/>
				</div>
				<p>{touched.password && errors.password}</p>
				<div className='ui input'>
					<Field
						placeholder="Password"
						name="password"
						type="password"
					/>
				</div>
				<h2>Address</h2>
				<p>{touched.street && errors.street}</p>
				<div className='ui input'>
					<Field
						placeholder="street"
						name="street"
						type="text"
					/>
				</div>
				<p>{touched.apartment && errors.apartment}</p>
				<div className='ui input'>
					<Field
						placeholder="apartment"
						name="apartment"
						type="text"
					/>
				</div>
				<p>{touched.city && errors.city}</p>
				<div className='ui input'>
					<Field
						placeholder="city"
						name="city"
						type="text"
					/>
				</div>
				<p>{touched.state && errors.state}</p>
				<div >
					<label style={{color: color.primary}}>State:  </label>
					<Field
						placeholder="state"
						name="state"
						component="select"
						style={{
							height: '30px',
							margin: '20px'
						}}
					>
						{states.map(state => {
							return <option value={state[0]}>{state[1]}</option>
						})}
					</Field>
				</div>
				<p>{touched.zip && errors.zip}</p>
				<div className='ui input'>
					<Field
						placeholder="zipcode"
						name="zip"
						type="text"
					/>
				</div>
				<br />
				<button color="black" type='submit'>Register</button>
				<br />
				{status && <h3 style={{ color: 'red' }}>Please try again, error during signup</h3>}
			</Form>
		</FormContainer>
	)
}

const FormikRegister = withFormik({
	mapPropsToValues({ email, username, password, street, apartment, city, state, zip }) {
		return {
			email: email || "",
			user_name: username || "",
			password: password || "",
			street: street || "",
			apartment: apartment || "",
			city: city || "",
			state: state || "",
			zip: zip || ""

		};
	},
	validationSchema: Yup.object().shape({
		email: Yup.string().required("Email is a required field"),
		username: Yup.string().required("Username is a required field"),
		password: Yup.string().min(6).required("Password is a required field"),
		street: Yup.string().required("Street is a required field"),
		apartment: Yup.string(),
		city: Yup.string().required("City is a required field"),
		state: Yup.string(),
		zip: Yup.string().required("Zip is a required field"),
	}),

	handleSubmit(values, props) {
		console.log(values)
		console.log(props)
		const url = "http://localhost:8888/api/user/register"
		axios
		  .post(url, values)
		  .then(res => {
				console.log(res)
		    props.props.history.push('/login')
		  })
		  .catch(error => {
		    console.log(error)
		    props.setStatus(error.res.data.message)
			})
			props.props.history.push('/login')
	}
})(Register);

export default FormikRegister