<template>
    <p>name</p>
    <input type="string" v-model="category.title" />
    <button @click="$router.push('/category')">Annuleren</button>
    <button
        @click="
            store.addCategory(category);
            $router.push('/category');
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
    title: "",
});
</script>
