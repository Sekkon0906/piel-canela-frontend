<template>
  <div>
    <h1>Inventario Piel Canela</h1>
    <p v-if="error" style="color:red">{{ error }}</p>
    <PrendaForm @submit="create" />
    <PrendaTable :prendas="prendas" @remove="remove" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import PrendaForm  from '../components/PrendaForm.vue';
import PrendaTable from '../components/PrendaTable.vue';
import { usePrendas } from '../infrastructure/composables/usePrendas.js';

const { prendas, error, fetchAll, create, remove } = usePrendas();
onMounted(fetchAll);
</script>