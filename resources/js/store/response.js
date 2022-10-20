import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useResponseStore = defineStore('response-store', () => {
  const responses = ref( [])
  
  const getResponseByTicketId = ticketId => computed(() => responses.value.filter( response => response.ticketId === ticketId))

  const getAll = computed(() => responses);
  async function setAll() {
    const  { data } = await axios.get('api/response');
    responses.value = data;
  }
  

  return { responses, getResponseByTicketId, getAll, setAll}
})