import { defineStore } from 'pinia';

import { router } from '../router/index.js';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/account/login');
        },
        adminCheck(){
            if (!this.user) {
                return false;
            }
            else if (this.user.admin){
                return true
            }
            else{
                return false
            }
            
        }
    }
});