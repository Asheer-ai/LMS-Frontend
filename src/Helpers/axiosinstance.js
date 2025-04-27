import axios from "axios"

const Base_URL="http://https://lms-backend-r9e9.onrender.com/api/v1";

const axiosInstance=axios.create();

axiosInstance.defaults.baseURL=Base_URL;
axiosInstance.defaults.withCredentials=true;

export default axiosInstance;