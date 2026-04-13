export default class GetCompradorById {
  constructor(compradorRepository) { this.compradorRepository = compradorRepository; }
  async execute(id) {
    const comprador = await this.compradorRepository.findById(id);
    if (!comprador) throw new Error(`Comprador con id "${id}" no encontrado`);
    return comprador;
  }
}
