import axios from "axios";

export const API_URL = "https://localhost:5290/api";

export const $api = axios.create({
    baseURL: API_URL,
});