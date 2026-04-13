import PrendaRepository from '../../domain/repositories/PrendaRepository.js';

const BASE_URL = 'https://TU-SERVICIO.onrender.com/api'; // cambiar al desplegar

export default class ApiPrendaRepository extends PrendaRepository {
  async save(prenda) {
    const res = await fetch(`${BASE_URL}/prendas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prenda),
    });
    if (!res.ok) { const e = await res.json(); throw new Error(e.error); }
    return await res.json();
  }
  async findAll() {
    const res = await fetch(`${BASE_URL}/prendas`);
    if (!res.ok) throw new Error('Error al obtener prendas');
    return await res.json();
  }
  async findById(id) {
    const res = await fetch(`${BASE_URL}/prendas/${id}`);
    if (!res.ok) throw new Error('Prenda no encontrada');
    return await res.json();
  }
  async delete(id) {
    const res = await fetch(`${BASE_URL}/prendas/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Error al eliminar');
  }
}