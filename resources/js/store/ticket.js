import { defineStore } from 'pinia';
import { useAuthStore } from './auth.js';
import axios from "axios"
import { ref, computed } from 'vue';

export const useTicketStore = defineStore('ticket-store', () => {
  const tickets = ref([]);
  const ticket = ref([]);
  const nextId = ref(8)
  const getTicketById = ticketId => computed(()  => tickets.value.find(ticket => ticket.id === ticketId))
  const madeByUser = userId => computed(() =>  tickets.value.filter( ticket => ticket.createdBy === userId))
  
  const getAll = computed(() => tickets);
  const getTicket = computed(() => ticket);
  async function setAll() {
    const  { data } = await axios.get('api/tickets');
    tickets.value = data;
  }

  async function setTicket(id) {
    console.log(id);
    const  { data } = await axios.get('api/tickets/show', id);
    ticket.value = data;
  }

  async function addTicket(payload) {
    try{
      await axios.post('api/tickets', payload);
    }
    catch(error) {
      alert(error)
      console.log(error)
    }
  
  }

  function deleteTicket(index) {
    this.tickets.splice(index, 1)
  }

  return { tickets, nextId, getAll, getTicket, getTicketById, madeByUser, addTicket, deleteTicket, setAll, setTicket }
})