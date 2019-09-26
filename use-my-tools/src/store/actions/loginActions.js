import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


export const loginAC = (credentials, history) => dispatch => {
    dispatch({ type: LOGIN_START })

    axios
    .post('https://jcrn-use-my-tools.herokuapp.com/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {

        headers: {
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
        console.log(res)
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem("username", credentials.username);
        history.push(`/dashboard/${ credentials.username}`);

    })
    .catch(err => { 
        dispatch({ type: LOGIN_FAILURE, payload: err})
        console.error(err)
    });
}

//  Curl Command to get user token for Matthew (I created a user account for you already)
// curl -X POST --user "lambda-client:lambda-secret" -d "grant_type=password&username=msquared88&password=password456" https://jcrn-use-my-tools.herokuapp.com/login