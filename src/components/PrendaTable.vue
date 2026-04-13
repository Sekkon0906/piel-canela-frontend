<template>
  <table>
    <thead>
      <tr><th>Nombre</th><th>Categoría</th><th>Precio</th><th>Cantidad</th><th></th></tr>
    </thead>
    <tbody>
      <tr v-for="p in prendas" :key="p.id">
        <td>{{ p.nombre }}</td>
        <td>{{ p.categoria }}</td>
        <td>{{ p.precio }}</td>
        <td>{{ p.cantidad }}</td>
        <td><button @click="$emit('remove', p.id)">Eliminar</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({ prendas: Array });
defineEmits(['remove']);
</script>