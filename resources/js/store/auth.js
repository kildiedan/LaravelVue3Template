import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { router } from '../router/index.js';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;


export const useAuthStore = defineStore('auth-store', () => {
    const user = ref(JSON.parse(localStorage.getItem('user')));
    const returnUrl = ref([null]);


  async function logout() {

    user = null;
    localStorage.removeItem('user');
    router.push('/account/login');
  }
  async function login() {
    const  { data } = await axios.get('api/user/login');
  }
  async function adminCheck() {
    if (!user) {
        return false;
    }
    else if (user.is_admin){
        return true
    }
    else{
        return false
    }
  }

  return { user, returnUrl, logout, adminCheck, login }
});