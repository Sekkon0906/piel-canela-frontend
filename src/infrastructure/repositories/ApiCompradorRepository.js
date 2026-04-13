import CompradorRepository from '../../domain/repositories/CompradorRepository.js';

const BASE_URL = 'https://piel-canela-backend.onrender.com/api';

export default class ApiCompradorRepository extends CompradorRepository {
  async save(comprador) {
    const res = await fetch(`${BASE_URL}/compradores`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comprador),
    });
    if (!res.ok) { const e = await res.json(); throw new Error(e.error); }
    return await res.json();
  }
  async findAll() {
    const res = await fetch(`${BASE_URL}/compradores`);
    if (!res.ok) throw new Error('Error al obtener compradores');
    return await res.json();
  }
  async findById(id) {
    const res = await fetch(`${BASE_URL}/compradores/${id}`);
    if (!res.ok) throw new Error('Comprador no encontrado');
    return await res.json();
  }
  async delete(id) {
    const res = await fetch(`${BASE_URL}/compradores/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Error al eliminar');
  }
}