<template>
    <p>name</p>
    <input type="string" v-model="category.name" />
    <button @click="$router.push('/')">Annuleren</button>
    <button
        @click="
            addCategory(category);
            $router.push('/');
        "
    >
        Toevoegen
    </button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCategoryStore } from "../../store/category.js";
import { storeToRefs } from "pinia";

const store = useCategoryStore();
const category = ref({
    name: "",
});
const { addCategory } = store;
</script>
