import axios from 'axios';


const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://project-use-my-tools.herokuapp.com',
    headers: {
      token: token
    }
  });
};

export default axiosWithAuth