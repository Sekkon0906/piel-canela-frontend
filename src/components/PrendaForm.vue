<template>
  <form @submit.prevent="submit">
    <input v-model="form.nombre"    placeholder="Nombre"    required />
    <input v-model="form.categoria" placeholder="Categoría" required />
    <input v-model.number="form.precio"   type="number" placeholder="Precio"   required />
    <input v-model.number="form.cantidad" type="number" placeholder="Cantidad" required />
    <button type="submit">Agregar prenda</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
const emit = defineEmits(['submit']);
const form = reactive({ nombre: '', categoria: '', precio: 0, cantidad: 0 });
function submit() {
  emit('submit', { ...form });
  Object.assign(form, { nombre: '', categoria: '', precio: 0, cantidad: 0 });
}
</script>