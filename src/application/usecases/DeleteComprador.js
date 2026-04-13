export default class DeleteComprador {
  constructor(compradorRepository) { this.compradorRepository = compradorRepository; }
  async execute(id) { return await this.compradorRepository.delete(id); }
}
