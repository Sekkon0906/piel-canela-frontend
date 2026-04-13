export default class GetAllPrendas {
  constructor(prendaRepository) { this.prendaRepository = prendaRepository; }
  async execute() { return await this.prendaRepository.findAll(); }
}
