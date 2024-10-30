import axios from 'axios';
import token_storage from "@/storage/token_storage";
import {showToast} from "vant";

const urlHead = 'https://online.jup360.com/omega/';
// const urlHead = 'http://localhost:29001/quiz/';

const apiClient = axios.create({
    baseURL: urlHead,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'accessToken': token_storage().token.value || ''
    }
});

apiClient.interceptors.request.use(config => {
    config.headers.accessToken = token_storage().token.value || '';
    config.url = urlHead + config.url;
    return config;
});

apiClient.interceptors.response.use(response => {
    if (response.data.errcode == -11) {
        token_storage().setToken(null);
        showToast({
            message: '登录过期，请重新扫码',
            type: 'none'
        })
        return Promise.reject(response.data);
    }

    if (response.data.errcode != 0) {
        showToast({
            message: response.data.errmsg,
            type: 'none'
        })
        return Promise.reject(response.data);
    }

    return response.data;
}, error => {
    showToast({
        message: error.errmsg,
        type: 'none'
    })
    return Promise.reject(error);
})


export default {

    //检查是否提交过
    checkSubmit(data){
        return apiClient.get('board//verify/submit', {
            params: data
        });
    },
    /**
     * 提交内容
     */
    submitContent(data) {
        return apiClient.post('board/submit', data);
    },

    //上传图片
    uploadImage(data){
        return apiClient.post('app/upload_file/4', data,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    // return apiClient.post('app/upload_file',data,{
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //     }
    // });
};
