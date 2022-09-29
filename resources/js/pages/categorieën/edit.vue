<script setup></script>
<template>
  <table>
    <tr>
      <th>category name</th>
    </tr>
    <tr>
      <td>
        <input type="string" v-model="category.name" />
      </td>
    </tr>
  </table>
  <button @click="$router.push('/category')">Annuleren</button>
  <button @click="$router.push('/category')">Aanpassen</button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCategoryStore } from "../../store/category.js";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const store = useCategoryStore();
const route = useRoute();
const categoryId = parseInt(route.params.id);
const category = store.getCategoryById(categoryId);
</script>
