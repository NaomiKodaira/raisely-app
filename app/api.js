import axios from 'axios';
const campaignUuid = '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a';

const instance = axios.create({
  baseURL: 'https://api.raisely.com/v3',
});

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

const api = {
  postSignUp: payload =>
    instance
      .post('/signup', { campaignUuid, data: payload })
      .then(response => response.data),
  postCheckUser: payload =>
    instance
      .post('/check-user', { campaignUuid, data: payload })
      .then(response => response.data),
};

export default api;
