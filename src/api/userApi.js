import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.120.81:8080",
  timeout: 5000,
  "Access-Control-Allow-Origin": "http://localhost:4000",
  "Access-Control-Allow-Credentials": "true",
});

// 로그인 기능 data post
async function loginUser({ id, password }) {
  return await instance.post("/user/signin", { id, password }, { withCredentials: true });
}

async function logoutUser() {
  return await instance.get("/user/signout", { withCredentials: true });
}

async function deleteUser(id) {
  return await instance.delete(`/user/delete/${id}`, { withCredentials: true });
}

async function getMember() {
  return await instance.get("/manage/member/list", { withCredentials: true });
}

async function joinUser(newUser) {
  return await instance.post("/user/signup", newUser, { withCredentials: true });
}

async function findUserId(user) {
  return await instance.post("/user/findId", user, { withCredentials: true });
}

async function findUserPwd(user) {
  return await instance.post("/user/findPwd", user, { withCredentials: true });
}

export { loginUser, logoutUser, deleteUser, getMember, joinUser, findUserId, findUserPwd };
