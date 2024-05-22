import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.120.81:8080",
  timeout: 5000,
  "Access-Control-Allow-Origin": "http://localhost:4000",
  "Access-Control-Allow-Credentials": "true",
});

async function getReview() {
  return await instance.get(`/review/list`);
}

async function getReviewDetailInfo(no) {
  return await instance.get(`/review/detail/${no}`);
}

async function addUserReveiew(newReview) {
  return await instance.post(`/review/regist`, newReview, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

async function editUserReview(no, newReview) {
  console.log(no, newReview);
  return await instance.put(`/review/update/${no}`, newReview, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

async function deleteUserReview(no) {
  return await instance.delete(`/review/delete/${no}`);
}

export { getReview, getReviewDetailInfo, addUserReveiew, editUserReview, deleteUserReview };
