import { defineStore } from 'pinia'
import { useTicketCategoryStore } from './ticketCategory.js'

export const useCategoryStore = defineStore('category-store', {
    id: 'category',
  state: () => ({
    categories: [{
      id: 1,
      name: 'urgent',
    },
    {
      id: 2,
      name: 'basic',
    },
    {
      id: 3,
      name: 'zebra',
    },

    ],
    nextId: 8,
  }),
  getters: {
    getCategoryById:state => categoryId => state.categories.find( category => category.id === categoryId)
  },
  actions: {
    addCategory(payload) {
      this.categories.push({ name: payload.name, id: this.nextId++ })
      
    },
    deleteCategory(index, id){
      const ticketCategoryStore = useTicketCategoryStore();
      if (ticketCategoryStore.ticketCategories.filter( ticket => ticket.categoryId === id).length === 0 ){
        if(confirm("Do you really want to delete?")){
          this.categories.splice(index, 1)
        }
      }
      else{
        confirm("there is still a ticket with this category")
      }
      
    },
  },
  

})