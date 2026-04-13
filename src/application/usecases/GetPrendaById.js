export default class GetPrendaById {
  constructor(prendaRepository) { this.prendaRepository = prendaRepository; }
  async execute(id) {
    const prenda = await this.prendaRepository.findById(id);
    if (!prenda) throw new Error(`Prenda con id "${id}" no encontrada`);
    return prenda;
  }
}
