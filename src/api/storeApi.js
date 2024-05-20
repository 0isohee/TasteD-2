import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  "Access-Control-Allow-Origin": "http://localhost:4000",
  "Access-Control-Allow-Credentials": "true",
});

async function getStore(pageNo) {
  return await instance.get(`/store/list/${pageNo}`);
}

async function getStoreDatail(no) {
  return await instance.get(`/store/list/${no}`);
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
export { getStore, getStoreDatail, registStore, updateStore, deleteStore};
