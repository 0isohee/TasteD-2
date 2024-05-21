import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  "Access-Control-Allow-Origin": "http://localhost:4000",
  "Access-Control-Allow-Credentials": "true",
});

// 로그인 기능 data post
async function loginUser(userData) {
  //   console.dir(userData);
  return await instance.post("/user/signin", userData, { withCredentials: true });
}

async function logoutUser() {
  return await instance.get("/user/signout", { withCredentials: true });
}

async function deleteUser(userData) {
  console.log(userData);
  return await instance.delete("/user/delete", userData, { withCredentials: true });
}

async function getMember() {
  return await instance.get("/manage/member/list/1", { withCredentials: true });
}

async function joinUser(newUser) {
  return await instance.post("/user/signup", newUser, { withCredentials: true });
}

export { loginUser, logoutUser, deleteUser, getMember, joinUser };
