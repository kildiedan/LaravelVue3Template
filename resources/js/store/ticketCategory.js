import { defineStore } from 'pinia'

export const useTicketCategoryStore = defineStore('ticketCategory-store', {
    id: 'ticketCategory',
  state: () => ({
    ticketCategories: [{
      id: 1,
      ticketId: 1,
      categoryId: 1,

    },
    {
      id: 2,
      ticketId: 2,
      categoryId: 1,

    },
    ]
  }),
  getters: {    
    getTicketCategoryByTicketId:state => ticketId => state.ticketCategories.filter( ticketCategories => ticketCategories.ticketId === ticketId)
  },
  actions: {},
  

})