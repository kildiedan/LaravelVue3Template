<template>
    <h3>tickets</h3>
    <li><router-link to="/ticket/create">create ticket</router-link></li>
    <table>
        <tr>
            <th>id</th>
            <th>title</th>
            <th>categorieën</th>
            <th>created by</th>
            <th>created at</th>
            <th>updated at</th>
            <th>assigend to</th>
            <th v-if="authStore.adminCheck()">edit</th>
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
                <td>
                    <template
                        v-for="Category in ticketCategoryStore.getTicketCategoryByTicketId(
                            ticket.id
                        ).value"
                    >
                        {{
                            categoryStore.getCategoryById(Category.categorie_id)
                                .value.title
                        }}
                        <br />
                    </template>
                </td>
                <td>
                    {{ userStore.getUserById(ticket.created_by).value.name }}
                </td>
                <td>
                    {{ new Date(ticket.created_at).toLocaleDateString() }}
                    {{ new Date(ticket.created_at).toLocaleTimeString() }}
                </td>
                <td>
                    {{ new Date(ticket.updated_at).toLocaleDateString() }}
                    {{ new Date(ticket.updated_at).toLocaleTimeString() }}
                </td>
                <td>
                    {{ userStore.getUserById(ticket.assigend_to).value.name }}
                </td>
                <td v-if="authStore.adminCheck()">
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
import { useUserStore } from "../../store/user.js";
import { useCategoryStore } from "../../store/Category.js";
import { useTicketCategoryStore } from "../../store/ticketcategory.js";
import { storeToRefs } from "pinia";

const ticketStore = useTicketStore();
const authStore = useAuthStore();
const userStore = useUserStore();
const ticketCategoryStore = useTicketCategoryStore();
const categoryStore = useCategoryStore();

userStore.setAll();
ticketStore.setAll();
categoryStore.setAll();
ticketCategoryStore.setAll();

const tickets = ticketStore.getAll;
</script>
