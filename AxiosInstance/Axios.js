import axios from 'axios';

// axios.defaults.baseURL = "http://192.168.1.3:3000";  //LOCAL
axios.defaults.baseURL = "https://demogswebtech.com/medicalcare/api";  //DEV
const AXIOS_INSTANCE = axios.create();

AXIOS_INSTANCE.interceptors.request.use(
  async config => {
    let request = config;
    // request.baseURL = "http://192.168.1.3:3000";  //LOCAL
    request.baseURL = "https://demogswebtech.com/medicalcare/api";  //DEV
    request.headers = {
      Accept: 'application/json',
      "Content-Type": "application/json",
    };
    request.url = config.url;
    // console.log("kjhgfghjkl", request)
    return request;
  },
  error => console.log('res-error', error),
);

export default AXIOS_INSTANCE;

