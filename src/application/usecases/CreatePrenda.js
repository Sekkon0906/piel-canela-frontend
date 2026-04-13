import Prenda     from "../../domain/entities/Prenda.js";
import { v4 as uuidv4 } from "uuid";

export default class CreatePrenda {
  constructor(prendaRepository) { this.prendaRepository = prendaRepository; }

  async execute({ nombre, precio, categoria, cantidad }) {
    const prenda = new Prenda({ id: uuidv4(), nombre, precio, categoria, cantidad });
    return await this.prendaRepository.save(prenda);
  }
}
