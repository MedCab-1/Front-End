import axios from 'axios';

const axiosWithAuth= () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://med-cabinet-1.herokuapp.com/',
        headers: {
            Authorization: token
        }
    });
};
export default axiosWithAuth;