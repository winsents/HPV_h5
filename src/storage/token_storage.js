import {ref} from "vue";
const key = 'card_effect_token';
//本地存储
export function useTokenStorage() {
    const token = ref(localStorage.getItem(key));
    const setToken = (value) => {
        token.value = value
        if (value === null) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, value);
        }
    }
    return {
        token,
        setToken
    }
}
export default useTokenStorage;
