import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useResponseStore = defineStore('response-store', () => {
  const responses = ref( [{
    id: 1,
    content: 'test answer',
    ticketId: 1,
  },
  {
    id: 2,
    content: 'test2',
    ticketId: 1,
  },
  ])
  const nextId = ref(8)
  const getResponseByTicketId = computed((ticketId) => responses.filter( response => response.ticketId === ticketId))
  

  function addResponse(payload) {
    response.push({  content: payload.content, ticketId: payload.ticketId, id: this.nextId++ })
  }

  return { responses, getResponseByTicketId, addResponse, nextId}
})