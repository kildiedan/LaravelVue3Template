<template>
    <h2>tickets</h2>

    <h3>titel</h3>
    <input type="string" v-model="ticket.title" />

    <h3>content</h3>
    <input type="string" v-model="ticket.content" />

    <h3>assigend to</h3>
    <input type="number" v-model="ticket.assigendTo" />
    <button @click="{ name: 'ticketShow', params: { id: ticketId } }">
        Annuleren
    </button>
    <button @click="{ name: 'ticketShow', params: { id: ticketId } }">
        Aanpassen
    </button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTicketStore } from "../../store/ticket.js";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const ticketStore = useTicketStore();
const route = useRoute();
const ticketId = parseInt(route.params.id);
const ticket = ticketStore.getTicketById(ticketId);
</script>
