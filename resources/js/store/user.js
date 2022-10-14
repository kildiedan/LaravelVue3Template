import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

import { useAuthStore } from './auth.js';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useUserStore = defineStore('user-store', () => {
  const users = ref([]);
  const getUserById = computed(() => (userId) => users.value.find( user => user.id === userId))
  
  const getAll = computed(() => users);
  async function setAll() {
    const  { data } = await axios.get('api/user');
    users.value = data;
  }
  function getUserName(id) {
    return getUserById(id).firstName + " " + getUserById(id).lastName
  }

  
  

  return { getAll, getUserById, setAll , getUserName }
})
    
