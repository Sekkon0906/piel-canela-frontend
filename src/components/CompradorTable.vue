<template>
  <div class="table-wrap">
    <p v-if="loading">Cargando...</p>
    <p v-else-if="items.length === 0">No hay compradores registrados.</p>
    <table v-else>
      <thead>
        <tr><th>Nombre</th><th>Email</th><th>Teléfono</th><th>Acción</th></tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.nombre }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.telefono || "—" }}</td>
          <td><button @click="$emit('delete', item.id)" class="btn-del">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({ items: Array, loading: Boolean });
defineEmits(["delete"]);
</script>

<style scoped>
.table-wrap { overflow-x:auto; }
table { width:100%; border-collapse:collapse; font-size:.9rem; }
th { background:#6a5acd; color:#fff; padding:.6rem 1rem; text-align:left; }
td { padding:.55rem 1rem; border-bottom:1px solid #eee; }
tr:hover td { background:#f5f3ff; }
.btn-del { background:#e74c3c; color:#fff; border:none; padding:.3rem .8rem; border-radius:5px; cursor:pointer; font-size:.85rem; }
.btn-del:hover { background:#c0392b; }
</style>
