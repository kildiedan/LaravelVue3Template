import { defineStore } from 'pinia'

export const useResponseStore = defineStore('response-store', {
    id: 'response',
  state: () => ({
    responses: [{
      id: 1,
      content: 'test answer',
      ticketId: 1,
    },
    {
      id: 2,
      content: 'test2',
      ticketId: 1,
    },
    ]
  }),
  getters: {
    getResponseByTicketId: state => ticketId => state.responses.filter( response => response.ticketId === ticketId)
  },
  actions: {
    addTicket(payload) {
    const { user } = authStore;
    this.tickets.push({  content: payload.content, assigendTo: 0, id: this.nextId++ ,createdAt: null, updatedAt: null,})
    
  },},
  

})