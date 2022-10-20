import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import { useTicketCategoryStore } from './ticketCategory.js'

export const useCategoryStore = defineStore('category-store', () => {
  const categories = ref([])
  const category = ref([])

  const getCategoryById = categoryId => computed(() => categories.value.find( category => category.id === categoryId))
  const getAll = computed(() => categories);
  const getCategory = computed(() => category);

  async function addCategory(payload) {
    try{
      await axios.post('api/category', payload);
    }
    catch(error) {
      alert(error)
      console.log(error)
    }
  }
  async function deleteCategory(category){
    const ticketCategoryStore = useTicketCategoryStore();
    const ticketCategories = ticketCategoryStore.getAll
    if (ticketCategories.value.filter( ticket => ticket.categoryId === category.id).length === 0 ){
      if(confirm("Do you really want to delete?")){
        const  { data } = await axios.post('api/category/delete', category);
        categories.value = data;
        
      }
    }
    else{
      confirm("there is still a ticket with this category")
    }
    
  }
  async function updateCategory(category){
    const  { data } =await axios.post('api/category/update', category);
    categories.value = data;
  }
  
  async function setAll() {
    const  { data } = await axios.get('api/category');
    categories.value = data;
  }

  return { getCategoryById, getAll, getCategory, setAll, addCategory, deleteCategory, updateCategory}
})
