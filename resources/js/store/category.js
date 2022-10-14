import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import { useTicketCategoryStore } from './ticketCategory.js'

export const useCategoryStore = defineStore('category-store', () => {
  const categories = ref( [])

  const getCategoryById = computed(() => (categoryId) => categories.value.find( category => category.id === categoryId))
  

  function addCategory(payload) {
    categories.push({ name: payload.name, id: this.nextId++ })
  }
  function deleteCategory(index, id){
    const ticketCategoryStore = useTicketCategoryStore();
    const ticketCategories = ticketCategoryStore.getAll
    if (ticketCategories.filter( ticket => ticket.categoryId === id).length === 0 ){
      if(confirm("Do you really want to delete?")){
        this.categories.splice(index, 1)
      }
    }
    else{
      confirm("there is still a ticket with this category")
    }
    
  }
  const getAll = computed(() => categories);
  async function setAll() {
    const  { data } = await axios.get('api/category');
    categories.value = data;
  }

  return { getCategoryById, getAll, setAll, addCategory, deleteCategory}
})
