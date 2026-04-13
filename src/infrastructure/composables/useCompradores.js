import { ref } from "vue";
import { createComprador, getAllCompradores, deleteComprador } from "../config/container.js";

export function useCompradores() {
  const items   = ref([]);
  const error   = ref(null);
  const loading = ref(false);

  async function fetchAll() {
    loading.value = true; error.value = null;
    try   { items.value = await getAllCompradores.execute(); }
    catch (err) { error.value = err.message; }
    finally { loading.value = false; }
  }
  async function create(data) {
    error.value = null;
    try   { await createComprador.execute(data); await fetchAll(); }
    catch (err) { error.value = err.message; }
  }
  async function remove(id) {
    error.value = null;
    try   { await deleteComprador.execute(id); await fetchAll(); }
    catch (err) { error.value = err.message; }
  }

  return { items, error, loading, fetchAll, create, remove };
}
