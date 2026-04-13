import ApiPrendaRepository    from '../repositories/ApiPrendaRepository.js';
import ApiCompradorRepository from '../repositories/ApiCompradorRepository.js';
import CreatePrenda           from '../../application/usecases/CreatePrenda.js';
import GetAllPrendas          from '../../application/usecases/GetAllPrendas.js';
import GetPrendaById          from '../../application/usecases/GetPrendaById.js';
import DeletePrenda           from '../../application/usecases/DeletePrenda.js';
import CreateComprador        from '../../application/usecases/CreateComprador.js';
import GetAllCompradores      from '../../application/usecases/GetAllCompradores.js';
import DeleteComprador        from '../../application/usecases/DeleteComprador.js';

const prendaRepo    = new ApiPrendaRepository();
const compradorRepo = new ApiCompradorRepository();

export const createPrenda    = new CreatePrenda(prendaRepo);
export const getAllPrendas    = new GetAllPrendas(prendaRepo);
export const getPrendaById   = new GetPrendaById(prendaRepo);
export const deletePrenda    = new DeletePrenda(prendaRepo);
export const createComprador = new CreateComprador(compradorRepo);
export const getAllCompradores = new GetAllCompradores(compradorRepo);
export const deleteComprador = new DeleteComprador(compradorRepo);