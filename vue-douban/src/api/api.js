import axios from 'axios'
 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
 
// 请求拦截器
axios.interceptors.request.use(function(request) {
    return request;
  }, function(error) {
    return Promise.reject(error);
  })

// 响应拦截器
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})
 
// 封装axios的post请求
export function POST(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

// 封装axios的get请求
export function GET(url) {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(response => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    })
}
 

export default {
  postMockData(url, params) {
    console.log('post')
    return POST(url, params);
  },

  getMockData(url) {
    console.log('get')
    return GET(url);
  }

}