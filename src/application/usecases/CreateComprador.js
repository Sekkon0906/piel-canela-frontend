import Comprador  from "../../domain/entities/Comprador.js";
import { v4 as uuidv4 } from "uuid";

export default class CreateComprador {
  constructor(compradorRepository) { this.compradorRepository = compradorRepository; }

  async execute({ nombre, email, telefono }) {
    const comprador = new Comprador({ id: uuidv4(), nombre, email, telefono });
    return await this.compradorRepository.save(comprador);
  }
}
