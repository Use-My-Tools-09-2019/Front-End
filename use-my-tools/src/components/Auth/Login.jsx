import React from 'react'
import { withFormik, Form, Field } from "formik";

import * as Yup from 'yup'


//redux
import { connect } from 'react-redux'
import { loginAC} from '../../store/actions'

//styles
import { FormContainer } from '../styled-components/form'


function Login({ touched, errors, status }) {
    return (
        <FormContainer>
          <Form className="form">
              <p style={{color: 'red'}}>{touched.user_name && errors.user_name}</p>
              <div className='ui input'>
                  <Field
                      placeholder="Enter your username"
                      name="user_name"
                      type="text"
                  />
              </div>
              <p style={{color: 'red'}}>{touched.password && errors.password}</p>
              <div className='ui input'>
                  <Field
                      placeholder="Password"
                      name="password"
                      type="password"
                  />
              </div>
              <br />
              <button color="black" type="sumbmit">Login</button>
              <br />
              {status && <h3 style={{color: 'red'}}>Please try again, error during login</h3>}
        </Form>
      </FormContainer>
    )
}

const FormikRegister = withFormik({
    mapPropsToValues({ user_name, password }) {
      return {
				user_name: user_name || "",
				password: password || "",
      };
    },
    validationSchema: Yup.object().shape({
      user_name: Yup.string().required("Username is a required field"),
			password: Yup.string().required("Password is a required field"),
    
    }),

    handleSubmit(values, props ) {
      props.props.loginAC(values, props.props.history)
    }
	})(Login);
	
	export default connect(null, { loginAC })(FormikRegister)