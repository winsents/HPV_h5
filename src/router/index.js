import {createRouter, createWebHashHistory} from 'vue-router';
import Index from '../views/index.vue';

import {loadingProgress} from "@/store/loadingProgress";
import token_storage from "@/storage/token_storage";
import api from "@/services/api";
import {showToast} from "vant";
import useWxShare from "@/utils/useWxShare";
import store from "@/store";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 不需要保存的路径列表
const excludedPaths = ['/'];

router.beforeEach((to, from, next) => {

    //如果当前页面是首页，则清空路由栈
    if (to.path === "/") {
        console.log("清空路由栈")
        store.commit('clearStack')
    }

     // 重置进度
    const startTime = performance.now();

    console.log(to.query.back)

    const simulateLoading = () => {
        const now = performance.now();
        const elapsedTime = now - startTime;
        const duration = 1000; // 模拟加载时间1秒


        if (elapsedTime < duration) {
            if (to.params&&to.params.isLoading) {
            // if (to.query&&to.query.isLoading) {
                loadingProgress.value = 100;
            }else {
                loadingProgress.value = Math.min((elapsedTime / duration) * 100, 100);
            }
            requestAnimationFrame(simulateLoading);
        } else {
            loadingProgress.value = 100;
            // token_storage().setToken("15D7C2EC4013375F30FCFA53A91CD081CDEC2E460779813C54D24C1D175E9307")
            // let token = token_storage().token

            next();

            // if(!oken.value){
            //
            //     let token_code = to.query.token_code
            //     if (!token_code){
            //         showToast({
            //             message: '参数错误，请重新扫码',
            //             type: 'fail'
            //         })
            //         return
            //     }
            //
            //     api.getTokenCode(token_code).then(res=>{
            //         token_storage().setToken(res.accessToken)
            //         //重置路由
            //         useWxShare();
            //         getUserInfo(()=>{
            //             checkAuth(to);
            //         })
            //     }).catch(()=>{
            //         showToast({
            //             message: "服务器错误，请稍后再试",
            //         })
            //     })
            // }else{
            //     useWxShare();
            //     getUserInfo(()=>{
            //         // 检查是否是 replace 导航
            //         checkAuth(to);
            //     })
            // }
        }
    };

    //权限判断
    function checkAuth(to){
        let user = store.state.user
        // console.log(to)
        if (to.path === "/"){
            // if(to.query.qr&&to.query.qr == 1){
            //     next({
            //         path: '/audit_home',
            //         query: {
            //             isLoading: true,
            //             ...to.query
            //         },
            //     });
            // }else {
                next();
            // }
        }else {
            next();
        }
    }

    function getUserInfo(callback){
        api.getUserInfo().then(res=>{
            console.log(res)
            store.commit("setUser",res.user)
            if (callback)callback()
        }).catch(()=>{
            console.log("获取用户信息失败")
        })
    }

    requestAnimationFrame(simulateLoading);
});

router.afterEach(() => {
    loadingProgress.value = 100; // 确保在路由完成时设置为100%
});

export default router;
