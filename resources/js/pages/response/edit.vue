<template>
    <h2>responses</h2>

    <h3>content</h3>
    <input type="string" v-model="response.content" />
    <button @click="{ name: 'ticketShow', params: { id: response.ticket_id } }">
        Annuleren
    </button>
    <button
        @click="
            responseStore.updateResponse(response);
            $router.push({
                name: 'ticketShow',
                params: { id: response.ticket_id },
            });
        "
    >
        Aanpassen
    </button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useResponseStore } from "../../store/response.js";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const responseStore = useResponseStore();
const route = useRoute();

responseStore.setAll();

const response = responseStore.getResponseId(parseInt(route.params.id));
console.log(response);
</script>
