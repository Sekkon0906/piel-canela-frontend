export default class Prenda {
  constructor({ id, nombre, precio, categoria, cantidad }) {
    if (!nombre)                    throw new Error("El nombre es obligatorio");
    if (!categoria)                 throw new Error("La categoría es obligatoria");
    if (precio == null || Number(precio) < 0)
      throw new Error("El precio debe ser >= 0");
    if (cantidad == null || !Number.isInteger(Number(cantidad)) || Number(cantidad) < 0)
      throw new Error("La cantidad debe ser un entero >= 0");

    this.id        = id;
    this.nombre    = nombre;
    this.precio    = Number(precio);
    this.categoria = categoria;
    this.cantidad  = Number(cantidad);
  }
}