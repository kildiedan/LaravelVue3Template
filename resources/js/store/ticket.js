import { defineStore } from 'pinia';
import { useAuthStore } from './auth.js';
import axios from "axios"
import { ref, computed } from 'vue';

export const useTicketStore = defineStore('ticket-store', () => {
  const tickets = ref([]);
  const nextId = ref(8)
  const getTicketById = computed(() => (ticketId) => tickets.value.find( ticket => ticket.id === ticketId))
  const madeByUser = computed(() => (userId) => tickets.value.filter( ticket => ticket.createdBy === userId))
  
  const getAll = computed(() => tickets);
  async function setAll() {
    const  { data } = await axios.get('api/tickets');
    tickets.value = data;
  }

  async function addTicket(payload) {
    // const authStore = useAuthStore();
    //   const { user } = authStore;
   

    await axios.post();

     //   tickets.push({ 
    //     title: payload.title, 
    //     content: payload.content, 
    //     createdBy: user.id, 
    //     assigendTo: 0, 
    //     id: nextId++ , 
    //     createdAt: new Date().toLocaleDateString(), 
    //     updatedAt: new Date().toLocaleTimeString(),
    //   })

  }

  function deleteTicket(index) {
    this.tickets.splice(index, 1)
  }

  return { tickets, nextId, getAll, getTicketById, madeByUser, addTicket, deleteTicket, setAll }
})