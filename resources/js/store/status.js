import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useStatusStore = defineStore('status-store', () => {
  const statuses = ref([{
    id: 1,
    title: 'In afwachting',
  },
  {
    id: 2,
    title: 'In behandeling',
  },
  {
    id: 3,
    title: 'Afgehandeld',
  }
  ])
  const getStatusById = computed((statusId) => statuses.find( status => status.id === statusId))

  const getAll = computed(() => statuses);
  async function setAll() {
    const  { data } = await axios.get('api/statuses');
    statuses.value = data;
  }

  return{statuses, getStatusById, getAll, setAll}
})
