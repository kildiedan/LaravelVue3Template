import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user-store', () => {
  const users = ref([]);

  const getUserById = userId => computed(() => users.value.find(user => user.id === userId));
  
  const getAll = computed(() => users);

  async function setAll() {
    const  { data } = await axios.get('api/user');
    users.value = data;
  }
  async function register(payload) {

    console.log(payload);
    await axios.post('api/user/register', payload);
  }

  return { users, getAll, getUserById, setAll, register }
})
    
