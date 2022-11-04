import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useResponseStore = defineStore('response-store', () => {
  const responses = ref( [])
  
  const getResponseId = responseId => computed(() => responses.value.find( response => response.id === responseId))

  const getAll = computed(() => responses);
  async function setAll() {
    const  { data } = await axios.get('api/response');
    responses.value = data;
  }
  async function updateResponse(response){
    const  { data } =await axios.post('api/response/update', response);
    responses.value = data;
  }
  async function createResponse(payload){
    const  { data } =await axios.post('api/response/create', payload);
    responses.value = data;
  }
  
  

  return { responses, getResponseId, getAll, setAll, updateResponse, createResponse}
})