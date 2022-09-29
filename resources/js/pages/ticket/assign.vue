<template>
  <h3>tickets</h3>
  <table>
    <tr>
      <th>id</th>
      <th>naam</th>
      <th>assigend to</th>
    </tr>
    <tr v-for="(ticket, index) in tickets" :key="ticket.id">
      <td>{{ ticket.id }}</td>
      <td>{{ ticket.title }}</td>
      <select v-model="ticket.assigendTo">
        <option value="0">niemand</option>
        <option v-for="user in users" :value="user.id">
          {{ user.first_name }}
        </option>
      </select>
    </tr>
  </table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTicketStore } from "../../store/ticket.js";
import { useUserStore } from "../../store/user.js";
import { storeToRefs } from "pinia";

const ticketStore = useTicketStore();
const userStore = useUserStore();
const { tickets } = storeToRefs(ticketStore);
const { users } = storeToRefs(userStore);
</script>
