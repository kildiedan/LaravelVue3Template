import { defineStore } from 'pinia';
import { useAuthStore } from './auth.js';

export const useTicketStore = defineStore('ticket-store', {
    id: 'ticket',
  state: () => ({
    tickets: [{
      id: 1,
      title: 'test title',
      content: 'some content',
      createdBy: 2,
      assigendTo: 1,
      status: 1,
      created_at: null,
      updated_at: null,
    },
    {
      id: 2,
      title: 'test answer',
      content: 'some content',
      createdBy: 1,
      assigendTo: 2,
      status: 1,
      created_at: null,
      updated_at: null,
    },
    ],
    nextId: 8,
  }),
  getters: {
    getTicketById:state => ticketId => state.tickets.find( ticket => ticket.id === ticketId),
    madeByUser: state => userId => state.tickets.filter( ticket => ticket.createdBy === userId)
  },
  actions: {
    addTicket(payload) {
      const authStore = useAuthStore();
      const { user } = authStore;
      this.tickets.push({ 
        title: payload.title, 
        content: payload.content, 
        createdBy: user.id, 
        assigendTo: 0, 
        id: this.nextId++ , 
        createdAt: new Date().toLocaleDateString(), 
        updatedAt: new Date().toLocaleTimeString(),
      })
      
    },
    deleteTicket(index){
      this.tickets.splice(index, 1)
    },
  },
  

})