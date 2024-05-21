import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  "Access-Control-Allow-Origin": "http://localhost:4000",
  "Access-Control-Allow-Credentials": "true",
});

async function getReview() {
  return await instance.get(`/review/list`);
}

export { getReview };
