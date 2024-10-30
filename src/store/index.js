import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state: {
        message: '!',
        saveVisitUrl: '',
        user: {},
        routeStack: [] // 用于保存路由历史栈
    },
    mutations: {
        setMessage(state, payload) {
            state.message = payload;
        },
        setSaveVisitUrl(state, payload) {
            state.saveVisitUrl = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        // 添加路由到栈
        pushRoute(state, route) {
            // state.routeStack.push(route);
            //如果最后一个路由和当前路由相同，则不添加
            // if (state.routeStack.length === 0 || state.routeStack[state.routeStack.length - 1].path !== route.path) {
            //     state.routeStack.push(route);
            // }

            const lastRoute = state.routeStack[state.routeStack.length - 1];

            // 只在栈为空或者最后一个路由与当前路由不相同时，才推入新的路由
            if (!lastRoute || !isSameRoute(lastRoute, route)) {
                state.routeStack.push(route);
            }
        },
        // 从栈中移除最近的一个路由
        popRoute(state) {
            state.routeStack.pop();
            console.log(state.routeStack)
        },
        // 清空栈
        clearStack(state) {
            state.routeStack = [];
        },
    },
    plugins: [
        createPersistedState({
            storage: window.localStorage, // 或 window.sessionStorage
            // 你可以在这里指定哪些 state 被持久化
            paths: ['routeStack']
        })
    ],
    actions: {
        updateMessage({ commit }, message) {
            commit('setMessage', message);
        },
        updateSaveVisitUrl({ commit }, saveVisitUrl) {
            commit('setSaveVisitUrl', saveVisitUrl);
        },
        updateUser({ commit }, user) {
            commit('setUser', user);
        }
    },
    getters: {
        message: (state) => state.message,
        saveVisitUrl: (state) => state.saveVisitUrl,
        user: (state) => state.user,
        // 获取栈的顶部元素
        topRoute(state) {
            return state.routeStack[state.routeStack.length - 1];
        },
        // 获取整个栈
        getRouteStack(state) {
            return state.routeStack;
        }
    },
});

// 辅助函数：判断两个路由是否相同
function isSameRoute(route1, route2) {
    // 比较路径
    if (route1.path !== route2.path) {
        return false;
    }

    // 比较 query 参数的 JSON 字符串
    if (JSON.stringify(route1.query) !== JSON.stringify(route2.query)) {
        return false;
    }

    // 如果有其他需要比较的属性，可以在这里添加

    return true;
}

export default store;
