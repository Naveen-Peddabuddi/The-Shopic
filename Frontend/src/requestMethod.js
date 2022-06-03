import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2UxNmMyOGI1ZjQzZGY3NmMxMjk2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjUyODM3NiwiZXhwIjoxNjUyNzg3NTc2fQ.3AW9o-GxGpLP2gEOxyDpCX3qls-c21P35tXwsw96ess"


export const publicRequest = axios.create({
    baseURL : BASE_URL
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header : {token : `Bearer ${TOKEN}`}
});