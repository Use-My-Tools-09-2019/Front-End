import axios from 'axios';


const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:8888',
    headers: {
      token: token
    }
  });
};

export default axiosWithAuth