import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  "Access-Control-Allow-Origin": "http://localhost:4000",
  "Access-Control-Allow-Credentials": "true",
});

async function getStore() {
  return await instance.get(`/store/list`);
}

async function getStoreDetailInfo(no) {
  return await instance.get(`/store/detail/${no}`);
}

async function registStore(newStore) {
  return await instance.post(`/store/manage/regist`, newStore);
}

async function updateStore(no, newStore) {
  return await instance.put(`/store/manage/update/${no}`, newStore);
}

async function deleteStore(no) {
  return await instance.delete(`/store/manage/delete`, no);
}
export { getStore, getStoreDetailInfo, registStore, updateStore, deleteStore };
