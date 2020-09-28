import React from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup'
import axios from 'axios'


//redux
import { connect } from 'react-redux'
import { loginAC } from '../../store/actions'

//styles
import { FormContainer } from '../styled-components/form'

const errorDiv = {
  marginTop: '40px',
  height: '60px',
  fontSize: '2rem',
  color: 'red',
  background: 'pink'
}


function Login({ touched, errors, status }) {
    return (
      <>
      {status && <div style={errorDiv}>{status.message}</div>}
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
          </Form>
        </FormContainer>
      </>
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

    handleSubmit(values, props) {
      axios
      .post('http://localhost:8888/api/user/login', values)
      .then(res => {
          props.props.loginAC(values)
          console.log(res)
          localStorage.setItem('token', res.data.token);
          localStorage.setItem("username", values.user_name);
          props.props.history.push(`/marketplace/${ values.user_name}`);
      })
      .catch(err => { 
        props.setStatus({message: "Invalid Username or Password"})
        console.log('err', err)
      });
      props.resetForm()
    }
	})(Login);
	

	export default connect(null, { loginAC })(FormikRegister)