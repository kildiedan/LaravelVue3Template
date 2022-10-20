import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useTicketCategoryStore = defineStore('ticketCategory-store', () => {
  const ticketCategories = ref([])
    const getTicketCategoryByTicketId = ticketId => computed(() =>  ticketCategories.value.filter( ticketCategories => ticketCategories.ticketId === ticketId))
    const getAll = computed(() => ticketCategories);

    async function setAll() {
      const  { data } = await axios.get('api/ticketsCategory');
      ticketCategories.value = data;
    }

    return{getAll, getTicketCategoryByTicketId, setAll}
  })
  
  
  
