<template>
  <form @submit.prevent="handleSubmit" class="form-card">
    <h2>➕ Registrar Comprador</h2>
    <div class="form-grid">
      <input v-model="form.nombre"   placeholder="Nombre completo" required />
      <input v-model="form.email"    type="email" placeholder="Email" required />
      <input v-model="form.telefono" placeholder="Teléfono (opcional)" />
    </div>
    <button type="submit">Registrar</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";
const emit = defineEmits(["submit"]);
const form = reactive({ nombre: "", email: "", telefono: "" });

function handleSubmit() {
  emit("submit", { ...form });
  Object.assign(form, { nombre: "", email: "", telefono: "" });
}
</script>

<style scoped>
.form-card { background:#fff; padding:1.5rem; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,.08); margin-bottom:1.5rem; }
.form-card h2 { margin-bottom:1rem; font-size:1.1rem; color:#6a5acd; }
.form-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:.75rem; margin-bottom:1rem; }
input { padding:.5rem .75rem; border:1px solid #ddd; border-radius:6px; font-size:.9rem; width:100%; box-sizing:border-box; }
button { background:#6a5acd; color:#fff; border:none; padding:.6rem 1.4rem; border-radius:6px; cursor:pointer; font-size:.95rem; }
button:hover { background:#7b68ee; }
</style>
