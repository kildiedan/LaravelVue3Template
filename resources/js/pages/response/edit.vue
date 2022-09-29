<template>
  <h2>responses</h2>

  <h3>content</h3>
  <input type="string" v-model="response.content" />
  <button @click="{ name: 'ticketShow', params: { id: response.ticketId } }">
    Annuleren
  </button>
  <button @click="{ name: 'ticketShow', params: { id: response.ticketId } }">
    Aanpassen
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useResponseStore } from "../../store/response.js";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const responseStore = useResponseStore();
const route = useRoute();
const responseId = parseInt(route.params.id);
const response = responseStore.getResponseByTicketId(responseId);
</script>
