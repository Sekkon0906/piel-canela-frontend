export default class DeletePrenda {
  constructor(prendaRepository) { this.prendaRepository = prendaRepository; }
  async execute(id) { return await this.prendaRepository.delete(id); }
}
