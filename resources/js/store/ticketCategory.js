import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useTicketCategoryStore = defineStore('ticketCategory-store', () => {
  const ticketCategories = ref([{
      id: 1,
      ticketId: 1,
      categoryId: 1,

    },
    {
      id: 2,
      ticketId: 2,
      categoryId: 1,

    },
    ])
    const getTicketCategoryByTicketId = computed((ticketId) => ticketCategories.filter( ticketCategories => ticketCategories.ticketId === ticketId))
    const getAll = computed(() => ticketCategories);

    async function setAll() {
      //const  { data } = await axios.get('api/tickets');
      //ticketCategories.value = data;
    }

    return{getAll, getTicketCategoryByTicketId, setAll}
  })
  
  
  
