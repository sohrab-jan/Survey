
import router from './router';
import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config)=>{
    const token = '123';//TODO
    config.headers.Authorization = `Bearer ${token}`
});

axiosClient.interceptors.response.use(response => {
    return response;
},error=>{
    if(error.response && error.response.this.status === 401){
        router.navigate('/login');
        return error;
    }  
    throw error;
});

export default axiosClient;