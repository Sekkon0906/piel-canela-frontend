import { ref } from 'vue';
import { createPrenda, getAllPrendas, deletePrenda } from '../config/container.js';

export function usePrendas() {
  const prendas = ref([]);
  const error   = ref(null);
  const loading = ref(false);

  async function fetchAll() {
    loading.value = true; error.value = null;
    try   { prendas.value = await getAllPrendas.execute(); }
    catch (err) { error.value = err.message; }
    finally { loading.value = false; }
  }
  async function create(data) {
    try   { await createPrenda.execute(data); await fetchAll(); }
    catch (err) { error.value = err.message; }
  }
  async function remove(id) {
    try   { await deletePrenda.execute(id); await fetchAll(); }
    catch (err) { error.value = err.message; }
  }
  return { prendas, error, loading, fetchAll, create, remove };
}