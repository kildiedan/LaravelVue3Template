<template>
  <h3>response</h3>
  <table>
    <tr>
      <th>id</th>
      <th>answer</th>
      <th>ticket id</th>
      <th>edit</th>
    </tr>
    <tr v-for="(response, index) in responses" :key="response.id">
      <td>{{ response.id }}</td>
      <td>{{ response.answer }}</td>
      <td>{{ response.ticketId }}</td>
      <td><button>edit</button></td>
    </tr>
  </table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useResponseStore } from "../../store/response.js";
import { storeToRefs } from "pinia";

const store = useResponseStore();
const { responses } = storeToRefs(store);
</script>
