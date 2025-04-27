import axios from "axios"

const Base_URL="https://lms-backend-suqk.onrender.com/api/v1";


const axiosInstance=axios.create();

axiosInstance.defaults.baseURL=Base_URL;
axiosInstance.defaults.withCredentials=true;

export default axiosInstance;