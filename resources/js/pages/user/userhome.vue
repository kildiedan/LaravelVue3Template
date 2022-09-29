<template>
  <h3>tickets</h3>
  <table>
    <tr>
      <th>id</th>
      <th>naam</th>
      <th>created by</th>
      <th>assigend to</th>
      <th>edit</th>
    </tr>
    <tr v-for="(ticket, index) in tickets" :key="ticket.id">
      <td>{{ ticket.id }}</td>
      <td>{{ ticket.title }}</td>
      <td>{{ ticket.createdBy }}</td>
      <td>{{ ticket.assigendTo }}</td>
      <td>
        <button
          @click="
            $router.push({ name: 'ticketEdit', params: { id: ticket.id } })
          "
        >
          edit
        </button>
      </td>
    </tr>
  </table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTicketStore } from "../../store/ticket.js";
import { useAuthStore } from "../../store/auth.js";
import { storeToRefs } from "pinia";

const store = useTicketStore();
const authStore = useAuthStore();
const { user } = authStore;
const { deleteTicket } = store;
const tickets = store.madeByUser(user.id);
</script>
