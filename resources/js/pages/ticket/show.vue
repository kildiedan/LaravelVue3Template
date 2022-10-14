<script setup>
import { ref, onMounted, computed } from "vue";
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

ticketStore.setAll();
const ticket = ref(ticketStore.getTicketById(parseInt(route.params.id)));

ticketCategoryStore.setAll();
const ticketCategory = ticketCategoryStore.getTicketCategoryByTicketId(
    parseInt(route.params.id)
);

responseStore.setAll();
const responses = responseStore.getResponseByTicketId(
    parseInt(route.params.id)
);

const authStore = useAuthStore();
const userStore = useUserStore();

userStore.setAll();
const users = userStore.getAll;

statusStore.setAll();
const statuses = statusStore.getAll;

const { getUserName } = userStore;
const { adminCheck } = authStore;
</script>

<template>
    <h2>tickets</h2>

    <h3>titel</h3>
    <p>{{ ticket.title }}</p>

    <h3>categories</h3>
    <p
        v-for="(ticketCategory, index) in ticketCategory"
        :key="ticketCategory.id"
    >
        {{ categoryStore.getCategoryById(ticketCategory.categoryId).title }}
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
