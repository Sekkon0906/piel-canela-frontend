export default class GetAllCompradores {
  constructor(compradorRepository) { this.compradorRepository = compradorRepository; }
  async execute() { return await this.compradorRepository.findAll(); }
}
