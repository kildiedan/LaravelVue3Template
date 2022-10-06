import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import { useTicketCategoryStore } from './ticketCategory.js'

export const useCategoryStore = defineStore('category-store', () => {
  const categories = ref( [{
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

  ])
  const nextId = ref(8)
  const getCategoryById = computed((categoryId) => categories.find( category => category.id === categoryId))
  

  function addCategory(payload) {
    categories.push({ name: payload.name, id: this.nextId++ })
  }
  function deleteCategory(index, id){
    const ticketCategoryStore = useTicketCategoryStore();
    if (ticketCategoryStore.ticketCategories.filter( ticket => ticket.categoryId === id).length === 0 ){
      if(confirm("Do you really want to delete?")){
        this.categories.splice(index, 1)
      }
    }
    else{
      confirm("there is still a ticket with this category")
    }
    
  }

  return { categories, nextId, getCategoryById, addCategory, deleteCategory}
})
