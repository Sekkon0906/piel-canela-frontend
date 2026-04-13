export default class Comprador {
  constructor({ id, nombre, email, telefono }) {
    if (!nombre) throw new Error("El nombre es obligatorio");
    if (!email)  throw new Error("El email es obligatorio");

    this.id       = id;
    this.nombre   = nombre;
    this.email    = email;
    this.telefono = telefono || "";
  }
}
