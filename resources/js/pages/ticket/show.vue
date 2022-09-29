<template>
    <h2>tickets</h2>

    <h3>titel</h3>
    <p>{{ ticket.title }}</p>

    <h3>categories</h3>
    <p
        v-for="(ticketCategory, index) in ticketCategory"
        :key="ticketCategory.id"
    >
        {{ categoryStore.getCategoryById(ticketCategory.categoryId).name }}
    </p>
    <h3>status</h3>
    <select v-if="adminCheck()" v-model="ticket.status">
        <option disabled value="0">empty</option>
        <option v-for="status in statuses" v-bind:value="status.id">
            {{ status.title }}
        </option>
    </select>
    <p v-else>{{ statusStore.getStatusById(ticket.status).title }}</p>

    <h3>content</h3>
    <p>{{ ticket.content }}</p>

    <h3>created by</h3>
    <p>{{ ticket.createdBy }}</p>

    <h3>assigend to</h3>
    <select v-if="adminCheck()" v-model="ticket.assigendTo">
        <option disabled value="0">empty</option>
        <option v-for="user in users" v-bind:value="user.id">
            {{ user.firstName }} {{ user.lastName }}
        </option>
    </select>
    <p v-else>{{ getUserName(ticket.assigendTo) }}</p>
    <h3>created at</h3>
    <p>{{ ticket.createdAt }}</p>
    <h3>updated at</h3>
    <p>{{ ticket.updatedAt }}</p>

    <h3>responses</h3>
    <template v-for="(response, index) in responses" :key="response.id">
        <p>
            {{ response.content }}
        </p>
        <button @click="">edit response</button>
    </template>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTicketStore } from "../../store/ticket.js";
import { useResponseStore } from "../../store/response.js";
import { useTicketCategoryStore } from "../../store/ticketcategory.js";
import { useCategoryStore } from "../../store/category.js";
import { useStatusStore } from "../../store/status.js";
import { useAuthStore } from "../../store/auth.js";
import { useUserStore } from "../../store/user.js";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const ticketStore = useTicketStore();
const ticketCategoryStore = useTicketCategoryStore();
const categoryStore = useCategoryStore();
const statusStore = useStatusStore();
const responseStore = useResponseStore();
const route = useRoute();

const ticketId = parseInt(route.params.id);
const ticket = ticketStore.getTicketById(ticketId);
const ticketCategory =
    ticketCategoryStore.getTicketCategoryByTicketId(ticketId);
const responses = responseStore.getResponseByTicketId(ticketId);

const authStore = useAuthStore();
const userStore = useUserStore();
const { users } = storeToRefs(userStore);
const { statuses } = storeToRefs(statusStore);
const { getUserName } = userStore;
const { adminCheck } = authStore;
</script>
