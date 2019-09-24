import React from 'react'
import { withFormik, Form, Field } from "formik";

import * as Yup from 'yup'

import axios from 'axios'

//styles
import { Button } from 'semantic-ui-react'

function Register({ touched, errors, status }) {
	return (
		<>
			<h1>Register</h1>
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
						type="username"
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
					<label>State:  </label>
					<Field
						placeholder="state"
						name="state"
						component="select"
					>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="DC">District Of Columbia</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="HI">Hawaii</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">Louisiana</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">Massachusetts</option>
						<option value="MI">Michigan</option>
						<option value="MN">Minnesota</option>
						<option value="MS">Mississippi</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">New Hampshire</option>
						<option value="NJ">New Jersey</option>
						<option value="NM">New Mexico</option>
						<option value="NY">New York</option>
						<option value="NC">North Carolina</option>
						<option value="ND">North Dakota</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">Pennsylvania</option>
						<option value="RI">Rhode Island</option>
						<option value="SC">South Carolina</option>
						<option value="SD">South Dakota</option>
						<option value="TN">Tennessee</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">Washington</option>
						<option value="WV">West Virginia</option>
						<option value="WI">Wisconsin</option>
						<option value="WY">Wyoming</option>
					</Field>
				</div>
				<p>{touched.zip && errors.zip}</p>
				<div className='ui input'>
					<Field
						placeholder="zipcode"
						name="zipcode"
						type="text"
					/>
				</div>
				<br />
				<Button color="green">Register</Button>
				<br />
				{status && <h3 style={{ color: 'red' }}>Please try again, error during signup</h3>}
			</Form>
		</>
	)
}

const FormikRegister = withFormik({
	mapPropsToValues({ email, username, password, street, apartment, city, state, zip }) {
		return {
			email: email || "",
			username: username || "",
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
		zip: Yup.string().required("Zipcode is a required field"),
	}),

	handleSubmit(values, props) {
		console.log(values)
		console.log(props)
		const user = { }
		const userAddress = {}
		const url = "/users/user"
		axios
		  .post(url, values)
		  .then(results => {
		    props.props.history.push('/login')
		  })
		  .catch(error => {
		    console.log(error)
		    props.setStatus(error.response.data.message)
			})
			props.props.history.push('/login')
	}
})(Register);

export default FormikRegister