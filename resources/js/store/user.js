import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
// import { useAuthStore } from './auth.js';

export const useUserStore = defineStore('user-store', () => {
  const users = ref([]);

  const getUserById = userId => computed(() => users.value.find(user => user.id === userId));
  
  const getAll = computed(() => users);

  async function setAll() {
    const  { data } = await axios.get('api/user');
    users.value = data;
  }

  return { users, getAll, getUserById, setAll }
})
    
