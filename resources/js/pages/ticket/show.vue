<template>
    <h2>tickets</h2>

    <h3>titel</h3>
    <p>{{ ticket?.title }}</p>

    <h3>categories</h3>
    <p
        v-for="Category in ticketCategoryStore.getTicketCategoryByTicketId(
            ticket?.id
        ).value"
    >
        {{ categoryStore.getCategoryById(Category.categorie_id).value.title }}
        <br />
    </p>
    <h3>status</h3>
    <select v-if="authStore.adminCheck()" v-model="ticket.status_id">
        <option disabled value="0">empty</option>
        <option v-for="status in statuses" v-bind:value="status.id">
            {{ status?.title }}
        </option>
    </select>
    <p v-else>
        {{ statusStore.getStatusById(ticket?.status_id)?.value.title }}
    </p>

    <h3>content</h3>
    <p>{{ ticket?.content }}</p>

    <h3>created by</h3>
    <p>{{ userStore.getUserById(ticket?.created_by).value.name }}</p>

    <h3>assigend to</h3>
    <select v-if="authStore.adminCheck()" v-model="ticket.assigend_to">
        <option disabled value="0">empty</option>
        <option v-for="user in users" v-bind:value="user.id">
            {{ user.name }}
        </option>
    </select>
    <p v-else>{{ userStore.getUserById(ticket?.assigend_to).value.name }}</p>
    <h3>created at</h3>
    <p>
        {{ new Date(ticket.created_at).toLocaleDateString() }}
        {{ new Date(ticket.created_at).toLocaleTimeString() }}
    </p>
    <h3>updated at</h3>
    <p>
        {{ new Date(ticket.updated_at).toLocaleDateString() }}
        {{ new Date(ticket.updated_at).toLocaleTimeString() }}
    </p>

    <button
        @click="
            ticketStore.updateTicket(ticket);
            $router.push({
                name: 'ticketShow',
                params: { id: parseInt(route.params.id) },
            });
        "
    >
        Aanpassen
    </button>

    <h3>responses</h3>
    <template v-for="(response, index) in responses" :key="response.id">
        <div v-if="response.ticket_id === ticket.id">
            <p>
                {{ response.content }}
            </p>
            <button
                v-if="authStore.adminCheck() === false"
                @click="
                    $router.push({
                        name: 'responseEdit',
                        params: { id: response.id },
                    })
                "
            >
                edit response
            </button>
        </div>
    </template>
    <input type="string" v-model="response.content" />
    <button @click="responseStore.createResponse(response)">
        create response
    </button>
</template>
<script setup lang="ts">
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
const authStore = useAuthStore();
const userStore = useUserStore();

const route = useRoute();

const response = ref({
    content: "",
    user_id: 1,
    ticket_id: parseInt(route.params.id),
});

ticketStore.setAll();
ticketCategoryStore.setAll();
categoryStore.setAll();
statusStore.setAll();
responseStore.setAll();
userStore.setAll();

const users = userStore.getAll;
const responses = responseStore.getAll;
const statuses = statusStore.getAll;
const category = categoryStore.getAll;
const ticket = ticketStore.getTicketById(parseInt(route.params.id));
const status = statusStore.getStatusById(ticket.status_id);

const ticketCategory = ticketCategoryStore.getTicketCategoryByTicketId(
    parseInt(route.params.id)
).value;
// const root<HtmlElement | null>(null)
</script>
