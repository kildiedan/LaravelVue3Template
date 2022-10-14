<template>
    <h3>tickets</h3>
    <li><router-link to="/ticket/create">create ticket</router-link></li>
    <table>
        <tr>
            <th>id</th>
            <th>naam</th>
            <th>category</th>
            <th>created by</th>
            <th>assigend to</th>
            <th v-if="adminCheck()">edit</th>
        </tr>
        <tr v-for="(ticket, index) in tickets" :key="ticket.id">
            <template v-if="!(ticket.status == 3)">
                <td>{{ ticket.id }}</td>
                <td>
                    <router-link
                        :to="{ name: 'ticketShow', params: { id: ticket.id } }"
                        >{{ ticket.title }}</router-link
                    >
                </td>
                <td></td>
                <td>{{ ticket.createdBy }}</td>
                <td>{{ ticket.assigendTo }}</td>
                <td v-if="adminCheck()">
                    <button
                        @click="
                            $router.push({
                                name: 'ticketEdit',
                                params: { id: ticket.id },
                            })
                        "
                    >
                        edit
                    </button>
                </td>
            </template>
        </tr>
    </table>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useTicketStore } from "../../store/ticket.js";
import { useAuthStore } from "../../store/auth.js";
import { useTicketCategoryStore } from "../../store/ticketcategory.js";
import { storeToRefs } from "pinia";

const ticketStore = useTicketStore();
const authStore = useAuthStore();
const { adminCheck } = authStore;

const ticketId = 2;

const tickets = ticketStore.getAll;

const ticket = ref(ticketStore.getTicketById(parseInt(ticketId)));

console.log(ticket);
console.log(tickets);

ticketStore.setAll();
</script>
