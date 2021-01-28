export const TIMEOUT = 5000;

const devBaseURL = "http://123.207.32.32:9001/";
const proBaseURL = "https://production.org";
console.log(process.env.NODE_ENV);
export const baseURL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;