<template>
  <p>title</p>
  <input type="string" v-model="ticket.title" />
  <p>content</p>
  <input type="string" v-model="ticket.content" /><br />
  <button @click="$router.push('/')">Annuleren</button>
  <button
    @click="
      addTicket(ticket);
      $router.push('/');
    "
  >
    Toevoegen
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTicketStore } from "../../store/ticket.js";
import { storeToRefs } from "pinia";

const store = useTicketStore();
const ticket = ref({
  title: "",
  content: "",
});
const { addTicket } = store;
</script>
