import React from 'react'
import { withFormik, Form, Field } from "formik";

import * as Yup from 'yup'

import axios from 'axios'

//redux
import { connect } from 'react-redux'
import { loginAC} from '../store/actions'

//styles
import { Button } from 'semantic-ui-react'

function Login({ touched, errors, status }) {
    return (
        <>
        <h1>Login</h1>
        <Form className="form">
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
           <br />
           <Button color="black">Login</Button>
           <br />
           {status && <h3 style={{color: 'red'}}>Please try again, error during signup</h3>}
      </Form>
      </>
    )
}

 const FormikRegister = withFormik({
    mapPropsToValues({ username, password }) {
      return {
				username: username || "",
				password: password || "",
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is a required field"),
			password: Yup.string().min(6).required("Password is a required field"),
     
    }),

    handleSubmit(values, props ) {
      console.log(values)
      const url = '/users/user'
      axios
        .post(url, values)
        .then(res => {
          props.props.history.push('/login')
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("user_id", res.data.id);
          localStorage.setItem("token", res.data.token);
          props.props.history.push(`/dashboard/${res.data.username}`);
        })
        .catch(error => {
          console.log(error)
          props.setStatus(error.response.data.message)
        })
    }
	})(Login);
	
	export default connect(null, { loginAC })(FormikRegister)